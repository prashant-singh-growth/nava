import { Helmet } from "react-helmet-async";
import {
  DollarSign, FileWarning, Building2, Truck, Activity, ClipboardCheck, MessageSquareWarning,
  Gauge, Hourglass, Clock, Workflow, Boxes, BellRing, Cpu,
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
  DockStepCameras, DockStepIntegrate, DockStepDetect, DockStepPush, DockStepDashboard, DockStepClose,
} from "@/components/landing/DockStepPreviews";
import heroImg from "@/assets/Images/landing/dock-operations-hero.jpg";
import dockUtilImg from "@/assets/Images/landing/dock-utilization-overlay.jpg";

const CANONICAL = "https://navasoftware.com/vision-ai-dock-operations/";
const OG_IMAGE = "https://navasoftware.com/assets/vision-ai-dock-operations-og.jpg";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NAVA Vision AI — Dock & Operational Flow",
  brand: { "@type": "Brand", name: "NAVA Software" },
  description:
    "Vision AI for dock and operational flow visibility: trailer dwell, dock utilization, delay and bottleneck detection — on existing cameras. Integrates with WMS, YMS, TMS, and ERP.",
  category: "Warehouse Operations Software",
  image: OG_IMAGE,
  url: CANONICAL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does NAVA Vision AI work with our existing dock cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We connect to standard RTSP/IP camera feeds from your existing dock and yard cameras. No new hardware, no rip-and-replace.",
      },
    },
    {
      "@type": "Question",
      name: "Which WMS, YMS, TMS, and ERP systems does it integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Out-of-the-box integrations include SAP EWM/TM, Oracle WMS, Manhattan Active, Blue Yonder, Körber, HighJump, and Microsoft Dynamics — plus custom REST/webhook integrations for any in-house platform.",
      },
    },
    {
      "@type": "Question",
      name: "Will this help with OTIF penalties and detention fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Detection of trailer dwell, dock idle time, and bottlenecks gives operations the data needed to reduce detention and demurrage charges and protect OTIF performance with retailers like Walmart, Target, and Kroger.",
      },
    },
    {
      "@type": "Question",
      name: "What dock and operational metrics can we track?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Dock utilization, trailer dwell and turnaround time, delay and bottleneck detection, workflow monitoring, idle-time visibility, and end-to-end event tracking from arrival to departure — with timestamped video evidence behind every metric.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we go live?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A pilot dock is typically up in days: add RTSP feeds for each dock door, auto-calibrate the door zones, connect your WMS/YMS, and dashboards plus event push-back start within hours.",
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
    { "@type": "ListItem", position: 3, name: "Dock & Operational Flow", item: CANONICAL },
  ],
};

const DockOperations = () => {
  return (
    <>
      <Helmet>
        <title>Dock Operations Vision AI for Warehousing | NAVA Software</title>
        <meta
          name="description"
          content="Cut detention fees, OTIF penalties & trailer dwell with Vision AI on existing dock cameras. Real-time utilization, delays, bottlenecks — into your WMS/YMS/TMS."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="NAVA Software Solutions" />
        <meta property="og:title" content="Dock Operations Vision AI for Warehousing | NAVA Software" />
        <meta
          property="og:description"
          content="Real-time dock utilization, trailer dwell, delay and bottleneck detection — on existing CCTV, into your WMS/YMS/TMS."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dock Operations Vision AI for Warehousing | NAVA Software" />
        <meta name="twitter:description" content="Vision AI for dock utilization, trailer dwell, delay detection — on your existing CCTV. Integrates with SAP EWM, Manhattan, Blue Yonder." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <main>
        <LandingHero
          heroImage={heroImg}
          eyebrow="NAVA Vision AI for Dock & Operational Flow"
          headline="Improve Dock Utilization & Operational Flow Visibility Using Vision AI"
          sub="Cut detention fees, protect OTIF performance, and free dock capacity — using the cameras you already own. NAVA Vision AI turns every dock door into a measurable, audit-ready operations feed and pushes events directly into your WMS, YMS, TMS, and ERP."
          primaryCta="Request a Demo"
          primaryHref="#request-demo"
          secondaryCta="Discuss Your Use Case"
          secondaryHref="#request-demo"
        />

        <ProblemSection
          eyebrow="The hidden cost of dock blindness"
          title="The dock problems quietly costing F&B, FMCG and 3PL operators millions"
          description="These are the financial, operational, and contractual issues that decide whether your distribution operation hits its targets — not feature wishlists."
          groups={[
            {
              label: "A · Financial leakage",
              heading: "Money lost to dwell, penalties, and unused capacity",
              cards: [
                {
                  icon: DollarSign,
                  title: "Detention & demurrage fees",
                  description:
                    "Carriers charge $50–$100/hour after the free window; uncontrolled dwell can run six figures per facility per year.",
                  payoff: "Real-time trailer dwell tracking with the video evidence to dispute or prevent every charge.",
                },
                {
                  icon: FileWarning,
                  title: "OTIF penalties & chargebacks",
                  description:
                    "Walmart, Target, Kroger, and other retailers fine suppliers for late shipments. Dock delays at origin cascade into OTIF misses.",
                  payoff: "Earlier visibility into bottlenecks means corrective action before a load slips its appointment window.",
                },
                {
                  icon: Building2,
                  title: "Underutilized dock capacity = deferred capex",
                  description:
                    "Doors sit idle while ops asks for more docks; without utilization data, capital projects are guesswork.",
                  payoff: "Per-door utilization analytics turns capex conversations from anecdote into evidence.",
                },
              ],
            },
            {
              label: "B · Operational reality",
              heading: "Visibility lives in clipboards and WhatsApp",
              cards: [
                {
                  icon: Truck,
                  title: "Trailer dwell & yard congestion",
                  description:
                    "No visibility into when a trailer arrived, docked, loaded, and departed — events live in paper logs and chat.",
                  payoff: "Arrival → dock → load → depart, automatically timestamped per trailer, per door.",
                },
                {
                  icon: Workflow,
                  title: "Loading/unloading bottlenecks",
                  description:
                    "Crews and forklifts pile up at the wrong doors; nobody knows where the actual constraint is.",
                  payoff: "Bottleneck detection identifies the door, the shift, and the activity dragging throughput down.",
                },
                {
                  icon: Activity,
                  title: "Manual dock-door tracking",
                  description:
                    "Supervisors walk the dock with clipboards or watch camera tiles; reporting is retrospective and incomplete.",
                  payoff: "Continuous, automated tracking on every door — supervisors get alerted, not asked.",
                },
              ],
            },
            {
              label: "C · Customer & contractual risk",
              heading: "When disputes happen, evidence is missing",
              cards: [
                {
                  icon: MessageSquareWarning,
                  title: "No evidence trail for disputes",
                  description:
                    "When a carrier claims 4 hours of wait time or a shipment is short, there's no timestamped video to settle the dispute.",
                  payoff: "Every event linked to the exact video clip — disputes resolved in minutes, not weeks.",
                },
                {
                  icon: FileWarning,
                  title: "OTIF chargebacks without root cause",
                  description:
                    "Retailer penalties hit the invoice, but there's no upstream evidence of where the appointment window was actually lost — yard, dock, or load.",
                  payoff: "Per-trailer event timeline pinpoints exactly where time was lost — defendable to the customer and to internal ops.",
                },
                {
                  icon: Truck,
                  title: "Carrier relationship friction",
                  description:
                    "Detention disputes get personal when both sides have anecdotes instead of data — carriers push back, schedulers waste hours, and rates creep up.",
                  payoff: "Shared, timestamped dwell evidence depersonalises every dispute and rebuilds carrier trust.",
                },
              ],
            },

          ]}
        />

        <CapabilitySection
          eyebrow="How Vision AI solves the above"
          title="Operational intelligence on the cameras you already own"
          description="Each capability is production-grade detection with timestamped video evidence — pushed directly into the WMS, YMS, TMS, or ERP your operations team already uses."
          items={[
            {
              icon: Gauge,
              title: "Dock Utilization",
              description:
                "Per-door, per-shift, per-site utilization with the trend data needed to defer capex and rebalance schedules.",
              image: dockUtilImg,
              imageAlt: "Top-down dock view with utilization overlays per door — green, amber, and idle indicators",
            },
            {
              icon: BellRing,
              title: "Delay & Bottleneck Detection",
              description:
                "Auto-flags doors and shifts where loads consistently overrun targets — with the underlying video clips one click away.",
            },
            {
              icon: Hourglass,
              title: "Trailer Dwell & Turnaround",
              description:
                "Continuous tracking of dwell time, turnaround, and detention risk — per trailer, per carrier, per door.",
            },
            {
              icon: Workflow,
              title: "Workflow Monitoring",
              description:
                "Pallet flow, forklift activity, and loading sequencing — visibility into what's actually happening on the floor.",
            },
            {
              icon: Clock,
              title: "Idle-Time Visibility",
              description:
                "Detects idle doors, idle forklifts, and gap time between trailers so ops can act before throughput slips.",
            },
            {
              icon: Boxes,
              title: "Event Monitoring",
              description:
                "Arrival → dock → load → depart, automatically timestamped with the matching video frame — full event timeline per trailer.",
            },
            {
              icon: Cpu,
              title: "Camera-Based Operational Intelligence",
              description:
                "Heatmaps, anomaly alerts, and trend analytics across all facilities — one console, audit-ready evidence behind every chart.",
            },
          ]}
        />

        <section className="industries-service-section-top pb-16 md:pb-24 bg-[#F7FAFE]">
          <div className="inner-page-container mx-auto">
            <div className="md:text-center mb-10">
              <div className="fs-16 font-semibold text-[#3A6CC9] mb-3 uppercase tracking-wider">How it works</div>
              <h2 className="fs-36 font-semibold mb-4 text-[#000000]">Up and running in days — across every dock door</h2>
              <p className="fs-18 text-[#222222] md:max-w-3xl md:mx-auto">
                Add RTSP cameras, connect your WMS / YMS / TMS / ERP with an API key, and let Vision AI run. Dock events,
                trailer dwell, and bottleneck alerts flow into the systems your team already uses.
              </p>
            </div>

            <HowItWorksSteps
              footerNote="RTSP in. Events + evidence out — into SAP EWM, Manhattan Active, Blue Yonder, Oracle WMS, and the rest of your stack."
              steps={[
                { icon: Camera,         title: "Add dock cameras",                 description: "Point existing CCTV at each dock door. We auto-calibrate the door zones.", Preview: DockStepCameras },
                { icon: Plug,           title: "Connect your WMS / YMS / ERP",     description: "SAP EWM, Manhattan, Blue Yonder, Oracle WMS, Körber, or custom — API-key simple.", Preview: DockStepIntegrate },
                { icon: Eye,            title: "Detect events in real time",       description: "Arrival, dock, load, depart — timestamped per trailer with evidence clips.", Preview: DockStepDetect },
                { icon: ArrowRightLeft, title: "Push events to your platform",      description: "Each event auto-creates or updates the matching record in your WMS/YMS/TMS.", Preview: DockStepPush },
                { icon: BarChart3,      title: "Operations dashboards in NAVA",     description: "Utilization, dwell, bottlenecks — with the clip behind every metric.", Preview: DockStepDashboard },
                { icon: CheckCircle2,   title: "Resolve disputes & optimise",       description: "Timestamped video settles carrier disputes; insights drive scheduling changes.", Preview: DockStepClose },
              ]}
            />
          </div>
        </section>

        <EhsPlatformGrid
          variant="wms"
          title="Connect the WMS, YMS, TMS & ERP systems you already use"
          subtitle="Dock and trailer events flow directly into your platform — your operations team keeps working in the tools they already trust."
        />

        <IndustryFit
          title="Built for operations-driven industries"
          industries={["Food & Beverage", "FMCG", "Warehousing", "Distribution", "Supply Chain & 3PL"]}
        />

        <LeadCaptureSection
          landingPage="dock-operations"
          title="See dock visibility on your own footage"
          description="Tell us about your operation and we'll walk you through a tailored demo — including how events will flow into your existing WMS, YMS, TMS, or ERP."
          ctaLabel="Request a Demo"
        />
      </main>
    </>
  );
};

export default DockOperations;
