import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";

/**
 * Free-mail domain blocklist for the business-email guard.
 * Mirrored server-side in the edge function for defense in depth.
 */
const FREE_MAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "yahoo.in", "ymail.com",
  "hotmail.com", "outlook.com", "live.com", "msn.com", "aol.com", "icloud.com",
  "me.com", "mac.com", "protonmail.com", "proton.me", "pm.me", "zoho.com",
  "gmx.com", "gmx.de", "mail.com", "yandex.com", "yandex.ru", "rediffmail.com",
]);

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255)
    .refine((e) => {
      const domain = e.split("@")[1]?.toLowerCase() ?? "";
      return domain && !FREE_MAIL_DOMAINS.has(domain);
    }, "Please use your business email address"),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  use_case: z.string().trim().min(10, "Tell us a bit about your use case").max(2000),
  // Honeypot – must remain empty
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  landingPage: "industrial-safety" | "dock-operations";
  /** Stand-out CTA copy for this page */
  ctaLabel?: string;
}

const LandingLeadForm = ({ landingPage, ctaLabel = "Request a Demo" }: Props) => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", use_case: "", website: "" },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.website && data.website.length > 0) {
      // Silent honeypot success
      form.reset();
      toast({ title: "Thanks!", description: "We'll be in touch shortly." });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke("submit-landing-lead", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          use_case: data.use_case,
          landing_page: landingPage,
          referrer: typeof document !== "undefined" ? document.referrer || null : null,
          path: typeof window !== "undefined" ? window.location.pathname : null,
        },
      });
      if (error) throw error;

      toast({
        title: "Thanks — request received",
        description: "A NAVA Vision AI specialist will reach out within one business day.",
      });
      form.reset();
    } catch (err) {
      console.error("Landing lead submit failed", err);
      toast({
        title: "Something went wrong",
        description: err instanceof Error ? err.message : "Please try again or email AI@navasoftware.com.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="fs-18 text-[#222222] font-normal">Name *</FormLabel>
              <FormControl>
                <Input
                  autoComplete="name"
                  className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="fs-18 text-[#222222] font-normal">Business Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="fs-18 text-[#222222] font-normal">Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    autoComplete="tel"
                    className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="use_case"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="fs-18 text-[#222222] font-normal">Use Case / Challenge *</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="lg:min-h-[var(--size-125)] min-h-[120px] text-[#000000] focus:!outline-none focus:!ring-transparent"
                  placeholder={
                    landingPage === "industrial-safety"
                      ? "e.g. We have 12 facilities across the US and want to detect PPE non-compliance and forklift near-misses on existing CCTV."
                      : "e.g. We want real-time visibility into trailer dwell and dock-door utilization at our distribution centres."
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot — hidden from real users */}
        <input
          type="text"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          {...form.register("website")}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />

        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="primary-button border border-[#3A6CC9] text-[#ffffff] flex items-center justify-center gap-3 fs-18 mt-3 py-3 px-4 w-auto"
          >
            {form.formState.isSubmitting ? "Sending..." : ctaLabel}
            <img src={whitearrow} alt="" />
          </button>
        </div>
      </form>
    </Form>
  );
};

export default LandingLeadForm;
