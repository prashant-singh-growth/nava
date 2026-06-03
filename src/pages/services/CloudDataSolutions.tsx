import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceImageSection from "@/components/services/ServiceImageSection";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import CloudDataBg from "../../assets/Images/banner-images/services/cloud-data-bg.webp";

// Hero background image
import CloudArchImg from "../../assets/Images/cloud-card-1.webp"
import DataPipeImg from "../../assets/Images/cloud-card-2.webp"
import ObservabilityImg from "../../assets/Images/cloud-card-3.webp"
import businessPresentation from "@/assets/business-presentation.jpg";
import Observability from "./CloudDataSolutions/Observability";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Fragmented Infrastructure",
    description: "Legacy IT slows innovation, limits scalability, and increases costs."
  },
  {
    id: "02",
    title: "Siloed Data",
    description: "Disconnected data sources prevent enterprises from using AI and analytics effectively."
  },
  {
    id: "03",
    title: "Security & Compliance Risks",
    description: "Cloud adoption raises questions around data privacy, compliance, and risk."
  },
  {
    id: "04",
    title: "Rising Cloud Costs",
    description: "Without optimization, enterprises often overspend and underutilize cloud resources."
  },
  {
    id: "05",
    title: "Observability Gaps",
    description: "Limited monitoring creates blind spots that affect performance and reliability."
  }
];

const solutionCards = [
  {
    title: "DevOps",
    description: "Build scalable, secure, cloud-native environments with modern DevOps practices. Enable agility, resilience, and faster deployment cycles.",
    hasImage: true,
    image: CloudArchImg,
    path: "/services/cloud-data-solutions/cloud-architecture"
  },
  {
    title: "Data Platforms, Lakehouse & Pipelines",
    description: "Transform raw data into enterprise intelligence with modern data lakes, pipelines, and analytics platforms that power AI/ML adoption.",
    hasImage: true,
    image: DataPipeImg,
     path: "/services/cloud-data-solutions/data-platforms"
  },
  {
    title: "Observability, Security & Cost Optimization",
    description: "Ensure cloud reliability and compliance with real-time monitoring, advanced security frameworks, and FinOps strategies for cost efficiency.",
    hasImage: true,
    image: ObservabilityImg,
     path: "/services/cloud-data-solutions/observability"
  }
];

const advantages = [
  {
    title: "Cloud-First, AI-Ready Mindset",
    description: "We design architectures that anticipate tomorrow’s needs, not just today’s."
  },
  {
    title: "Security & Compliance Built In",
    description: "Risk, governance, and data protection are embedded at every stage."
  },
  {
    title: "Data as a Strategic Asset",
    description: "We help enterprises unlock the full potential of data through modern lakehouse and analytics ecosystems."
  },
  {
    title: "Proven ROI",
    description: "Our optimization and FinOps frameworks deliver cost reductions while enhancing performance."
  },
  {
    title: "Industry Expertise",
    description: "From finance and healthcare to manufacturing and logistics, we deliver cloud and data solutions tailored to industry realities."
  }
];

const CloudDataSolutions = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={CloudDataBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Cloud & Data Solutions" }
        ]}
        overline="Cloud & Data Solutions"
        title="Future-proof your enterprise with intelligent cloud architectures and data-driven innovation."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="The New Enterprise Foundation"
        description="Enterprises today don’t just run on technology; they run on cloud and data. For CIOs, CTOs, and IT leaders, the challenge is balancing agility, security, and cost while unlocking the full potential of AI, analytics, and modern architecture. At NAVA Software Solutions, our Cloud & Data Solutions practice helps organizations modernize infrastructure, optimize data ecosystems, and create secure, scalable platforms. We don’t just migrate your workloads and data; we engineer cloud-native environments and unified data platforms that deliver resilience, intelligence, and long-term ROI."
      />
      
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="The Modern Cloud & Data Challenge"
        features={challenges}
        gridCols="2x2"
        className="pt-0"
      />
      </LazySection>

      {/* Market Direction Section */}
      <LazySection minHeight={400} fallback={<SectionSkeleton variant="split" height={400} />}>
        <ServiceImageSection 
        title="Where the Market is Heading"
        bulletPoints={[
          "Most leading enterprises will shift to cloud-native architectures.",
          "Data lakehouse models will replace legacy warehouses as the standard.",
          "Cloud observability and FinOps will become critical disciplines for cost control and resilience.",
          "AI-powered automation in DevOps and data pipelines will drive faster decision-making and reduced risk."
        ]}
        // image={businessPresentation}
        imageAlt="Business presentation"
        imagePosition="right"
      />
      </LazySection>

      {/* Solutions Section */}
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceSolutionCards 
        title="Cloud Architecture"
        cards={solutionCards}
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Why Choose NAVA"
        advantages={advantages}
        WhyChooseNava="bg-page"
      />
      </LazySection>

      {/* Case Studies Section */}
      <div className="md:-mt-0 -mt-12">
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
        <CaseStudies />
      </LazySection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default CloudDataSolutions;