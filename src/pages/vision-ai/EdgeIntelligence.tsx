import { Link } from "react-router-dom";
import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

// Images
import EdgeIntelligenceBg from "../../assets/Images/banner-images/vision-ai/edge-intelligence-bg.webp";
import EdgePitfallsCard from "../../assets/Images/edge-pitfalls-card.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  {
    title: "High Latency Issues",
    description: "Cloud-only processing delays detection, causing missed events and operational slowdowns.",
  },
  {
    title: "Bandwidth Limitations",
    description: "Continuous video streaming is costly and impractical for distributed or remote facilities.",
  },
  {
    title: "Privacy & Compliance Risks",
    description: "Some industries cannot send raw video offsite due to regulatory or data-governance constraints.",
  },
  {
    title: "Inconsistent AI Accuracy",
    description: "Low-quality streams, unstable connectivity, and noisy data reduce detection precision.",
  },
  {
    title: "Cost Inefficiency",
    description: "Cloud compute pricing escalates rapidly when processing large volumes of video.",
  },
  {
    title: "Poor Scalability",
    description: "Legacy systems cannot scale across multiple sites or camera feeds.",
  },
];

// Opportunity bullet points
const opportunityPoints = [
  {
    title: "Lightning-Fast Insights",
    description: "Real-time processing enables immediate actions and alerts.",
  },
  {
    title: "Reduced Operating Costs",
    description: "Only metadata moves to the cloud—dramatically lowering compute and bandwidth costs.",
  },
  {
    title: "Stronger Security & Privacy",
    description: "Local processing keeps sensitive video on-premise.",
  },
  {
    title: "Higher AI Accuracy",
    description: "Optimized edge models generate more reliable detections and fewer false positives.",
  },
  {
    title: "Scalable Deployments",
    description: "Deploy across 1–1000+ sites with centralized cloud control.",
  },
  {
    title: "Improved Operational Efficiency",
    description: "Gates move faster, docks load smarter, yards become easier to manage, workers stay safer.",
  },
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Edge Model Deployment & Optimization",
    description: [
      { text: "Model selection and training tailored to your environment." },
      { text: "Hardware optimization for NVIDIA Jetson, AMD, Raspberry, or custom edge devices." },
      { text: "Onsite inference tuned for accuracy and speed." },
    ],
  },
  {
    id: "02",
    title: "Real-Time Processing & Event Detection",
    description: [
      { text: "Millisecond-level detection for critical events." },
      { text: "Intelligent buffering for network fluctuations." },
      { text: "Context-aware AI that adapts to lighting, weather, and operational patterns." },
    ],
  },
  {
    id: "03",
    title: "Hybrid Edge–Cloud Architecture",
    description: [
      { text: "Only relevant metadata is sent to Cloud/AWS." },
      { text: "Seamless integration with ERP, YMS, WMS, TMS, and alerting systems." },
      { text: "Centralized dashboards with distributed processing nodes." },
    ],
  },
  {
    id: "04",
    title: "Deployment, Monitoring & Continuous Improvement",
    description: [
      { text: "Remote model updates and health monitoring." },
      { text: "Automated scaling across facilities." },
      { text: "Performance analytics and feedback-driven optimization." },
    ],
  },
];

// NAVA's Edge Intelligence Advantage
const edgeAdvantage = [
  {
    title: "Purpose-Built for Real Operations",
    description: "Designed for logistics, ports, warehouses, manufacturing, and industrial sites.",
  },
  {
    title: "Secure by Design",
    description: "Privacy first processing with enterprise-grade safeguards.",
  },
  {
    title: "Real-World Readiness",
    description: "Optimized for challenging conditions low light, weather changes, dynamic workflows.",
  },
  {
    title: "Proven at Scale",
    description: "Deployments across distributed environments with high operational demands.",
  },
];

const EdgeIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={EdgeIntelligenceBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Vision AI", path: "" },
          { name: "Edge Intelligence", path: "" },
        ]}
        overline={`Edge 
          Intelligence`}
        title="Real-time AI at the edge, built for speed, security, and operational impact. From cameras to instant decisions — without relying on cloud latency."
        ctaText="Schedule a Zero-Cost PoC"
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Why Edge Intelligence Matters"
        description={
          <>
            In high-velocity environments like logistics yards, manufacturing floors, ports, warehouses, and energy sites, milliseconds matter. Traditional cloud-only vision systems struggle with latency, bandwidth limits, high costs, and compliance restrictions. Edge Intelligence solves this by running{" "}
            <Link to="/vision-ai" className="text-inherit no-underline hover:underline">Vision AI</Link>{" "}
            models directly onsite—fast, secure, and cost-efficient.
            <br /><br />
            At NAVA, our Edge Intelligence service helps organizations detect events in real time, maintain strict privacy controls, reduce cloud costs, and improve operational responsiveness. Whether it's gate automation, dock operations, collision prevention, safety compliance, or damage detection, edge processing ensures AI decisions happen instantly and reliably.
          </>
        }
      />

      {/* Common Pitfalls Section */}
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="split" height={500} />}>
        <ServiceContentImageCard
        title="Common Pitfalls We Solve"
        bulletPoints={commonPitfalls}
        image={EdgePitfallsCard}
        imageAlt="Industrial camera monitoring logistics yard with AI detection overlay"
        imagePosition="right"
        bgColor="white"
      />
      </LazySection>

      {/* The Opportunity Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceOpportunityCard
        title="The Opportunity"
        overlineText="Organizations that adopt Edge Intelligence unlock:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
        <div className="mx-auto text-center font-semibold fs-36 leading-snug">Our Approach to Edge Intelligence</div>
      </div>

      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceApproachGrid
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
      />
      </LazySection>

      <LazySection minHeight={400} fallback={<SectionSkeleton variant="cards" height={400} />}>
        <ServiceAdvSingleCard title="NAVA's Edge Intelligence Advantage" bulletPoints={edgeAdvantage} />
      </LazySection>

      {/* Case Studies Section */}

      {/* Footer */}
    </div>
  );
};

export default EdgeIntelligence;
