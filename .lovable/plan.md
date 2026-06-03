
## Approved scope

### Part 1 — LinkedIn / WhatsApp / Slack link preview fix (Option 2: static per-route OG injection)

Good news: the project **already has the infrastructure for this**. `scripts/prerenderSeo.ts` runs as a Vite build plugin and emits per-route static HTML files (`dist/<route>/index.html` and `dist/<route>.html`) with the correct title / description / canonical / OG / Twitter tags baked into the raw HTML. It reads from `src/seo/seoConfig.ts`.

The two landing pages are not yet in that config — that is the entire reason the LinkedIn preview falls back to the generic site card.

**What I will do:**
- Add two entries to `src/seo/seoConfig.ts`:
  - `/vision-ai-industrial-safety` — title, description, canonical, og:image, breadcrumbs
  - `/vision-ai-dock-operations` — same shape
- Reuse the existing `og-image.png` (or the page-specific hero if one already exists in `src/assets`) so the social card has a real image, not a placeholder.
- Remove the duplicate `<Helmet>` tags inside the two landing page components for the fields that the prerendered HTML now owns (title / description / canonical / og:* / twitter:*) to avoid double tags, but keep page-level JSON-LD if any.
- Next production build will write `dist/vision-ai-industrial-safety/index.html` and `dist/vision-ai-dock-operations/index.html` with the right tags baked in. After the next publish, LinkedIn / Slack / WhatsApp / Twitter will see the correct preview on `View Source`.

No new dependency, no Prerender.io account, no hosting change.

---

### Part 2 — Landing-page acknowledgement email on Lovable Cloud transactional email

**Scope locked in:**
- Move ONLY the two landing-page acknowledgement emails (Industrial Safety, Dock Operations) onto Lovable transactional email.
- Leave the existing WordPress `/send-email` flow untouched for the rest of the site (contact form, careers, etc.).
- Internal lead-notification email still goes through WordPress as today — BUT change the recipient routing in our edge function from `info@navasoftware.com` to **`AI@navasoftware.com`** so landing-page leads land in the right inbox.

**Email content — final (no em dashes, no hyphenated phrases, AWS de-emphasised):**

#### Email A — Industrial Safety
- From: `NAVA Vision AI <AI@navasoftware.com>`
- Subject: `Thank you for your inquiry — NAVA Vision AI` *(em dash removed; will use a vertical bar instead → `Thank you for your inquiry | NAVA Vision AI`)*

Body:
> Hi {{first_name}},
>
> Thank you for contacting NAVA Vision AI. We have received your message about Industrial Safety and Operational Risk Visibility, and our Vision AI team is already reviewing your request. One of our specialists will get back to you within 24 to 48 hours with the right next steps.
>
> At NAVA Vision AI, we help manufacturing, energy, and heavy industry operators turn their existing CCTV into a 24/7 safety co pilot that detects PPE non compliance, unsafe behaviours, forklift and pedestrian near misses, restricted zone entries, and other operational risks in real time, without ripping out cameras or adding new hardware. The platform is cloud agnostic and acts as the intelligence layer between your existing CCTV and the EHS, ERP, incident management, or workflow tools you already use, so findings flow into the systems your teams already trust and EHS leaders can move from after the fact incident reports to proactive prevention across every shift and every plant.
>
> We look forward to speaking with you soon and helping you move forward with confidence.
>
> Best regards,
> The NAVA Vision AI Team
> AI@navasoftware.com

*(I will also remove the literal hyphens from compound words above in the final HTML so it does not read as AI generated. The final copy will use "co pilot", "near misses", "after the fact", etc., as shown.)*

#### Email B — Dock Operations
- From: `NAVA Vision AI <AI@navasoftware.com>`
- Subject: `Thank you for your inquiry | NAVA Vision AI`

Body:
> Hi {{first_name}},
>
> Thank you for contacting NAVA Vision AI. We have received your message about Dock and Operational Flow Visibility, and our Vision AI team is already reviewing your request. One of our specialists will get back to you within 24 to 48 hours with the right next steps.
>
> At NAVA Vision AI, we help logistics, 3PL, and distribution operators turn their existing yard and dock CCTV into real time operational intelligence covering trailer arrivals and departures, dock door utilisation, dwell and detention timers, loading and unloading exceptions, and OTIF evidence. The platform is cloud agnostic and plugs into the systems you already run, including WMS, YMS, TMS, and ERP, so operations leaders get one timestamped source of truth that ends he said she said disputes with carriers and customers, without adding new hardware to your yard.
>
> We look forward to speaking with you soon and helping you move forward with confidence.
>
> Best regards,
> The NAVA Vision AI Team
> AI@navasoftware.com

#### Shared email chrome (both emails identical)
- **Header band:** NAVA full color logo from `src/assets/Images/logo.svg`, on a white band.
- **Body background:** white (#ffffff).
- **Top footer band (light):** `E: AI@navasoftware.com    P: +1 860 615 9008`
- **Bottom footer band (dark navy):**
  - Centered label: `Trusted partner of`
  - Logos: **AWS Advanced Partner** and **Salesforce** ONLY (Google Cloud / Microsoft / Databricks / Snowflake removed).
  - Divider
  - `Head office, USA: 35 Cold Spring Road, Suite 125, Rocky Hill, CT 06067`
  - `Other locations: Hyderabad, India  |  Guadalajara, Mexico` *(Manila removed)*
  - `© 2026 NAVA Software Solutions` on the left.
  - Single **LinkedIn icon** on the right linking to `https://www.linkedin.com/company/nava-software-solutions/` (X and Facebook removed).

---

## Implementation steps

1. **SEO**
   - Add `/vision-ai-industrial-safety` and `/vision-ai-dock-operations` entries to `src/seo/seoConfig.ts`.
   - Clean up the duplicate Helmet tags inside `IndustrialSafety.tsx` and `DockOperations.tsx` for the now-prerendered tags.

2. **Transactional email infrastructure (Lovable Cloud)**
   - Set up the shared email infrastructure (queues, send log, suppression, dispatcher cron).
   - Scaffold the transactional email Edge Function and the unsubscribe page.
   - Confirm AWS Advanced Partner and Salesforce logos exist in `src/assets/logos/` — upload if missing (will ask if not found).
   - Upload the NAVA logo and the two partner logos to a public Cloud storage bucket so the email HTML can reference them by URL (email clients cannot read Vite imports).

3. **Two React Email templates**
   - `landing-industrial-safety-ack.tsx`
   - `landing-dock-operations-ack.tsx`
   - Both share the same header / footer layout. Only the second paragraph differs.

4. **Wire the form**
   - Update `supabase/functions/submit-landing-lead/index.ts`:
     - After the DB insert, also invoke `send-transactional-email` with the right template based on `landing_page`, recipient = lead's email, `idempotencyKey = landing-ack-${landingPage}-${lead.id}`.
     - Change the WordPress lead notification recipient routing to `AI@navasoftware.com` (currently routed via WP defaults to `info@navasoftware.com`). The team-facing email body already includes `Notification routed to:` text — that string and any explicit `to` will be updated.
   - Deploy the edge function.

5. **Email domain prerequisite**
   - Lovable transactional email requires a verified sender domain. The agent will trigger the domain setup dialog if one is not already configured for this project. You will need to add the DNS records the dialog shows you so emails can send from your domain.

---

## Out of scope (per your instructions)
- The WP `/send-email` plugin template (the one that produced the screenshot 2 email) stays unchanged.
- All other site forms (Contact Us, Careers, etc.) keep using the WP flow.

Ready to switch to build mode and implement.
