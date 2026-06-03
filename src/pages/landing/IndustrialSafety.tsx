import { Helmet } from "react-helmet-async";
import {
  ShieldAlert, FileWarning, DollarSign, Activity, Pause, Megaphone, ClipboardCheck,
  HardHat, ShieldOff, AlertTriangle, EyeOff, Footprints, PersonStanding, Layers,
  Camera, Plug, Eye, ArrowRightLeft, BarChart3, CheckCircle2,
} from "lucide-react";
import LandingHero from "@/components/landing/LandingHero";
import ProblemSection from "@/components/landing/ProblemSection";
import CapabilitySection from "@/components/landing/CapabilitySection";
import HowItWorksSteps from "@/components/landing/HowItWorksSteps";
import EhsPlatformGrid from "@/components/landing/EhsPlatformGrid";
import IndustryFit from "@/components/landing/IndustryFit";
import LeadCaptureSection from "@/components/landing/LeadCaptureSection";
import {
  StepCameras, StepIntegrate, StepDetect, StepPush, StepDashboard, StepClose,
} from "@/components/landing/SafetyStepPreviews";
import heroImg from "@/assets/Images/landing/industrial-safety-hero.jpg";
import ppeImg from "@/assets/Images/landing/ppe-compliance-detection.jpg";
import forkliftImg from "@/assets/Images/landing/forklift-pedestrian-detection.jpg";
import cctvImg from "@/assets/Images/landing/cctv-bounding-boxes.png";

const CANONICAL = "https://navasoftware.com/vision-ai-industrial-safety/";
const OG_IMAGE = "https://navasoftware.com/assets/vision-ai-industrial-safety-og.jpg";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NAVA Vision AI — Industrial Safety",
  brand: { "@type": "Brand", name: "NAVA Software" },
  description:
    "Vision AI for industrial safety: PPE compliance, forklift-pedestrian near-miss detection, restricted-zone monitoring, and audit-ready evidence — using existing CCTV. Integrates with EHS, compliance, and ERP platforms.",
  category: "Industrial Safety Software",
  image: OG_IMAGE,
  url: CANONICAL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does NAVA Vision AI work with our existing CCTV cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. NAVA Vision AI connects to standard RTSP/IP camera feeds from your existing CCTV infrastructure. No rip-and-replace, no new hardware required.",
      },
    },
    {
      "@type": "Question",
      name: "Which EHS, compliance, and ERP platforms does it integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Out-of-the-box integrations include SafetyCulture, Intelex, VelocityEHS, Cority, EHS Insight, Enablon, Sphera, Evotix, SAP EHS, Origami Risk, KPA EHS, and Benchmark Gensuite. Incidents, evidence, and corrective actions are pushed directly into your platform.",
      },
    },
    {
      "@type": "Question",
      name: "What safety use cases are covered?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "PPE compliance, restricted-zone monitoring, forklift-pedestrian and equipment-pedestrian near-misses, blind-spot and path-obstruction visibility, ergonomics monitoring, unsafe behaviour detection (running, climbing, bypassed LOTO), and site-wide operational risk visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Can it help reduce OSHA exposure and insurance premiums?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Continuous, auditable PPE and zone-compliance evidence plus systematic near-miss capture directly support OSHA defensibility, ISO 45001 audits, customer (Walmart/Costco/Nestlé/PepsiCo) safety audits, and the leading indicators tied to EMR and workers' comp premiums.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we go live?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A typical pilot is configured in days: add RTSP cameras in the admin console, connect your EHS/ERP platform with an API key, and detections start flowing — along with evidence clips and corrective actions in your existing tools.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://navasoftware.com/" },
    { "@type": "ListItem", position: 2, name: "Vision AI", item: "https://navasoftware.com/vision-ai/" },
    { "@type": "ListItem", position: 3, name: "Industrial Safety", item: CANONICAL },
  ],
};

const IndustrialSafety = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Safety Vision AI for Manufacturing | NAVA Software</title>
        <meta
          name="description"
          content="Reduce OSHA exposure, insurance claims, and downtime with Vision AI on existing CCTV. PPE compliance, forklift near-miss detection, EHS & ERP integration."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="NAVA Software Solutions" />
        <meta property="og:title" content="Industrial Safety Vision AI for Manufacturing | NAVA Software" />
        <meta
          property="og:description"
          content="Reduce OSHA exposure, insurance claims, and downtime with Vision AI on existing CCTV. PPE, forklift near-miss, restricted-zone — pushed into your EHS/ERP."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Safety Vision AI for Manufacturing | NAVA Software" />
        <meta name="twitter:description" content="Vision AI for PPE, near-miss & zone risk — on your existing CCTV. Integrates with Intelex, SAP EHS, SafetyCulture, VelocityEHS." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <main>
        <LandingHero
          heroImage={heroImg}
          eyebrow="NAVA Vision AI for Industrial Safety"
          headline="Improve Industrial Safety & Operational Risk Visibility Using Vision AI"
          sub="Reduce OSHA exposure, insurance claims, and downtime — using the cameras you already own. NAVA Vision AI detects unsafe acts in real time and pushes evidence + corrective actions straight into your EHS, compliance, and ERP systems."
          primaryCta="Request a Demo"
          primaryHref="#request-demo"
          secondaryCta="Discuss Your Use Case"
          secondaryHref="#request-demo"
        />

        <ProblemSection
          eyebrow="The real cost of limited safety visibility"
          title="The problems EHS, Operations, and Plant leaders are actually paying for"
          description="These are the bottom-line and regulatory issues driving Vision AI adoption across F&B, FMCG and industrial manufacturing — not feature wishlists."
          groups={[
            {
              label: "A · Regulatory & Compliance",
              heading: "Audit and OSHA pressure keeps growing",
              cards: [
                {
                  icon: FileWarning,
                  title: "OSHA citations & rising fines",
                  description:
                    "Serious violations now run $16K+ per instance; willful or repeat can exceed $160K. Manual observation programs can't prove continuous compliance.",
                  payoff: "Continuous, auditable PPE and zone-compliance evidence on every camera, every shift.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Audit & certification exposure",
                  description:
                    "ISO 45001, customer (Walmart/Costco/Nestlé/PepsiCo) safety audits, and FSMA inspections demand evidence trails paper checklists can't produce.",
                  payoff: "Timestamped video evidence library for every observation, near-miss, and corrective action.",
                },
                {
                  icon: ShieldAlert,
                  title: "Insurance & EMR pressure",
                  description:
                    "Workers' comp premiums and EMR scores are driven by recordables and near-miss gaps that traditional reporting underestimates.",
                  payoff: "Systematic near-miss capture turns the leading indicators insurers reward into a measurable trend.",
                },
              ],
            },
            {
              label: "B · Financial & business",
              heading: "Incidents and downtime hit P&L hard",
              cards: [
                {
                  icon: DollarSign,
                  title: "Recordable & lost-time injuries",
                  description:
                    "Average lost-time injury is $40K+ direct and 4× that in indirect cost. One struck-by event can wipe out a quarter.",
                  payoff: "Detect the precursors (PPE gaps, near-misses, blind-spot conflicts) before they become a recordable.",
                },
                {
                  icon: Pause,
                  title: "Unplanned downtime from safety events",
                  description:
                    "A single forklift-pedestrian incident shuts a line or zone for hours of investigation and remediation.",
                  payoff: "Heatmaps and trend data target the root causes — fewer events, less downtime.",
                },
                {
                  icon: Megaphone,
                  title: "Litigation & brand risk",
                  description:
                    "F&B and FMCG brands cannot afford a viral incident video or a wrongful-injury suit traced back to known unsafe conditions.",
                  payoff: "Documented evidence that hazards were detected and acted on — the strongest defensibility posture available.",
                },
              ],
            },
            {
              label: "C · Operational reality",
              heading: "Manual observation just doesn't scale",
              cards: [
                {
                  icon: Activity,
                  title: "Manual safety observations miss the floor",
                  description:
                    "BBS rounds, toolbox talks, and supervisor walks cover a fraction of actual floor activity; near-misses go unreported and root causes stay invisible — so the same incidents repeat.",
                  payoff: "Vision AI watches every camera, every minute — and routes findings to the right system automatically.",
                },
                {
                  icon: EyeOff,
                  title: "Inconsistent enforcement across shifts",
                  description:
                    "PPE and zone compliance erodes on night shifts, weekends, and remote areas where supervision is thin — but incidents don't care what time it is.",
                  payoff: "24/7 detection equalises enforcement across every shift, zone, and plant — no blind spots, no favouritism.",
                },
                {
                  icon: Layers,
                  title: "Knowledge silos across plants",
                  description:
                    "A corrective action that worked at Plant A rarely propagates to Plants B, C, and D; the same near-miss pattern repeats site after site.",
                  payoff: "One console aggregates findings and heatmaps across every site, so systemic risk gets fixed once — not relearned.",
                },
              ],
            },

          ]}
        />

        <CapabilitySection
          eyebrow="How Vision AI solves the above"
          title="A complete capability set, on the cameras you already own"
          description="Each capability is delivered as production-grade detection with timestamped evidence — and pushed directly into your EHS, compliance, or ERP platform."
          items={[
            {
              icon: HardHat,
              title: "PPE Compliance Detection",
              description:
                "Continuous, auditable detection of helmets, hi-vis vests, gloves, safety glasses, and harnesses — by zone and shift.",
              image: ppeImg,
              imageAlt: "AI computer vision bounding box highlighting a worker without a hard hat for PPE compliance detection",
            },
            {
              icon: ShieldOff,
              title: "Restricted-Zone Monitoring",
              description:
                "Detects unauthorized entry into robot cells, forklift lanes, chemical or electrical zones — with instant alerts.",
              image: cctvImg,
              imageAlt: "CCTV view with computer vision bounding boxes detecting workers inside a restricted operational zone",
            },
            {
              icon: AlertTriangle,
              title: "Forklift & Equipment Near-Miss",
              description:
                "Forklift-pedestrian, equipment-pedestrian, and vehicle-vehicle near-miss detection with proximity overlays — the precursors most programs never capture.",
              image: forkliftImg,
              imageAlt: "Forklift and pedestrian near-miss detected by AI with proximity warning bounding boxes in a warehouse aisle",
            },
            {
              icon: EyeOff,
              title: "Blind-Spot & Path-Obstruction Visibility",
              description:
                "Identifies corners, dock approaches, and racking blind spots where conflicts repeat — backed by hotspot heatmaps.",
            },
            {
              icon: PersonStanding,
              title: "Ergonomics Monitoring",
              description:
                "Flags repetitive lifting, awkward postures, and prolonged static positions that drive sprain/strain claims.",
            },
            {
              icon: Footprints,
              title: "Unsafe Behavior Detection",
              description:
                "Detects running, climbing on racks, and bypassed lockout-tagout sequences — behaviours that precede serious incidents.",
            },
            {
              icon: Layers,
              title: "Operational Risk Visibility",
              description:
                "Site-wide heatmaps, severity scoring, shift-level patterns, and a full audit-ready evidence library — one console across all plants.",
            },
          ]}
        />

        <section className="industries-service-section-top pb-16 md:pb-24 bg-[#F7FAFE]">
          <div className="inner-page-container mx-auto">
            <div className="md:text-center mb-10">
              <div className="fs-16 font-semibold text-[#3A6CC9] mb-3 uppercase tracking-wider">How it works</div>
              <h2 className="fs-36 font-semibold mb-4 text-[#000000]">Configured in minutes — from cameras to corrective actions</h2>
              <p className="fs-18 text-[#222222] md:max-w-3xl md:mx-auto">
                Add RTSP cameras, connect your EHS / compliance / ERP platform with an API key, and let Vision AI run. Evidence,
                incidents, and corrective actions flow into the tools your team already uses.
              </p>
            </div>

            <HowItWorksSteps
              footerNote="RTSP in. Evidence + actions out — into Intelex, SAP EHS, SafetyCulture, VelocityEHS, and the rest of your stack."
              steps={[
                { icon: Camera,           title: "Add your cameras",                 description: "Point existing CCTV / RTSP feeds at the admin portal. No new hardware.", Preview: StepCameras },
                { icon: Plug,             title: "Connect your EHS / ERP system",     description: "SafetyCulture, Intelex, VelocityEHS, Cority, SAP EHS, Sphera, and more — API-key simple.", Preview: StepIntegrate },
                { icon: Eye,              title: "Vision AI runs in the background", description: "Edge or cloud inference detects PPE, near-miss, zone, ergonomics — with timestamped clips.", Preview: StepDetect },
                { icon: ArrowRightLeft,   title: "Push incidents + evidence",         description: "Auto-creates observations, near-miss reports, and corrective actions in your EHS/ERP platform.", Preview: StepPush },
                { icon: BarChart3,        title: "Dashboards appear in NAVA",         description: "Risk hotspots, PPE %, near-miss trends, zone events, evidence library — audit ready.", Preview: StepDashboard },
                { icon: CheckCircle2,     title: "Close the loop",                    description: "Corrective-action status syncs back from your EHS platform so trends update in real time.", Preview: StepClose },
              ]}
            />
          </div>
        </section>

        <EhsPlatformGrid />

        <IndustryFit
          title="Built for safety-driven industries"
          industries={["Food & Beverage", "FMCG", "Packaging", "Industrial Manufacturing", "Distribution & Warehousing"]}
        />

        <LeadCaptureSection
          landingPage="industrial-safety"
          title="See Vision AI on your own footage"
          description="Tell us about your environment and we'll walk you through a tailored demo — including how incidents and corrective actions will flow into your existing EHS, compliance, and ERP systems."
          ctaLabel="Request a Demo"
        />
      </main>
    </>
  );
};

export default IndustrialSafety;
