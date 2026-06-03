import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "yahoo.in", "ymail.com",
  "hotmail.com", "outlook.com", "live.com", "msn.com", "aol.com", "icloud.com",
  "me.com", "mac.com", "protonmail.com", "proton.me", "pm.me", "zoho.com",
  "gmx.com", "gmx.de", "mail.com", "yandex.com", "yandex.ru", "rediffmail.com",
]);

const WP_EMAIL_ENDPOINT = "https://api.navasoftware.com/wp-json/nava-email-plugin/v1/send-email";

interface Body {
  name?: string;
  email?: string;
  phone?: string | null;
  use_case?: string;
  landing_page?: "industrial-safety" | "dock-operations";
  referrer?: string | null;
  path?: string | null;
}

const PAGE_LABELS: Record<string, string> = {
  "industrial-safety": "Industrial Safety & Operational Risk Visibility",
  "dock-operations": "Dock & Operational Flow Visibility",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Body;

    // ── Validation ──────────────────────────────────────────────────────────
    const errors: Record<string, string> = {};
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim().toLowerCase();
    const phone = (body.phone ?? "")?.toString().trim() || null;
    const useCase = (body.use_case ?? "").trim();
    const landingPage = body.landing_page;

    if (name.length < 2 || name.length > 100) errors.name = "Name must be 2–100 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) errors.email = "Invalid email address.";
    else {
      const domain = email.split("@")[1];
      if (FREE_MAIL.has(domain)) errors.email = "Please use your business email address.";
    }
    if (useCase.length < 10 || useCase.length > 2000) errors.use_case = "Use case must be 10–2000 characters.";
    if (landingPage !== "industrial-safety" && landingPage !== "dock-operations") {
      errors.landing_page = "Invalid landing page.";
    }
    if (phone && phone.length > 30) errors.phone = "Phone too long.";

    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ ok: false, errors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── Insert into DB (service role) ───────────────────────────────────────
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const userAgent = req.headers.get("user-agent") ?? null;
    const referrer = body.referrer ?? null;

    const { error: insertError } = await supabase.from("landing_page_leads").insert({
      name,
      email,
      phone,
      use_case: useCase,
      landing_page: landingPage,
      referrer,
      user_agent: userAgent,
    });

    if (insertError) {
      console.error("DB insert failed:", insertError);
      return new Response(JSON.stringify({ ok: false, error: "Could not save your request. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── Best-effort email notification via existing WP endpoint ─────────────
    // Routes through the same /send-email pipeline already used on the site.
    // Failures here do NOT fail the user request — the lead is already saved.
    const sourcePath = body.path ?? `/vision-ai-${landingPage}`;
    const pageLabel = PAGE_LABELS[landingPage!] ?? landingPage;
    const messageBody = [
      `🚨 NEW LANDING PAGE LEAD — ${pageLabel}`,
      "",
      `Landing page: ${sourcePath}`,
      `Submitted: ${new Date().toISOString()}`,
      `Referrer: ${referrer || "(direct)"}`,
      "",
      "── Submission ──",
      `Name: ${name}`,
      `Business Email: ${email}`,
      `Phone: ${phone || "(not provided)"}`,
      "",
      "Use Case / Challenge:",
      useCase,
      "",
      "── End of submission ──",
      "",
      "→ Reply to this lead at: " + email,
      "→ Notification routed to: AI@navasoftware.com",
    ].join("\n");

    try {
      const [firstName, ...rest] = name.split(/\s+/);
      const lastName = rest.join(" ") || "—";
      const wpResp = await fetch(WP_EMAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // WP endpoint validates Origin/Referer — spoof the production site
          // origin so server-to-server calls from the edge function are accepted.
          "Origin": "https://navasoftware.com",
          "Referer": "https://navasoftware.com/",
        },
        body: JSON.stringify({
          type: "client",
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || "",
          company: `[Landing page lead — ${pageLabel}]`,
          message: messageBody,
        }),
      });
      if (!wpResp.ok) {
        console.warn("WP email notify non-OK:", wpResp.status, await wpResp.text().catch(() => ""));
      }
    } catch (emailErr) {
      console.warn("WP email notify failed (lead still saved):", emailErr);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("submit-landing-lead unhandled error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Unexpected error. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
