import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceImageSection from "@/components/services/ServiceImageSection";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Hero background image
import AutomationImg from "../../assets/Images/service-transform-card1.webp";
import DataImg from "../../assets/Images/service-transform-card2.webp";
import CloudImg from "../../assets/Images/service-transform-card3.webp";
import AgileImg from "../../assets/Images/service-transform-card4.webp";
import CustomerImg from "../../assets/Images/service-transform-card5.webp";
import TransformationBg from "../../assets/Images/banner-images/services/transformation-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Legacy Burden",
    description: "Outdated platforms slow innovation and increase operating costs.",
  },
  {
    id: "02",
    title: "Process Inefficiency",
    description: "Manual workflows drain productivity and limit scalability.",
  },
  {
    id: "03",
    title: "Customer Expectations",
    description: "Digital-first consumers demand personalized, frictionless experiences.",
  },
  {
    id: "04",
    title: "Data Blind Spots",
    description: "Fragmented data ecosystems prevent real-time insights and AI adoption.",
  },
  {
    id: "05",
    title: "Cloud Uncertainty",
    description: "Security, cost, and compliance concerns stall migrations.",
  },
  {
    id: "06",
    title: "Rigid Product Development",
    description: "Traditional methods can't keep pace with market demands.",
  },
];

const solutionCards = [
  {
    title: "Agentic AI Automation",
    description:
      "Empower your enterprise with AI agents that think, decide, and act autonomously to drive accuracy and intelligent scalability.",
    hasImage: true,
    image: AutomationImg,
    path: "/services/transformation-modernization/automation-process",
  },
  {
    title: "Data Modernization & Analytics",
    description:
      "Build secure, scalable data ecosystems that unlock real-time insights, enable AI/ML adoption, and empower faster decision-making.",
    hasImage: true,
    image: DataImg,
    path: "/services/transformation-modernization/data-modernization",
  },
  {
    title: "Cloud Transformation & Migration",
    description:
      "Accelerate cloud adoption with secure migration strategies, cost optimization, and architectures built for resilience, scalability, and compliance.",
    hasImage: true,
    image: CloudImg,
    path: "/services/transformation-modernization/cloud-transformation",
  },
  {
    title: "Agile Digital Product Development",
    description:
      "Rapidly design, test, and deliver digital products using Agile methods, ensuring flexibility, user-centric design, and faster time-to-market.",
    hasImage: true,
    image: AgileImg,
    path: "/services/transformation-modernization/agile-product",
  },
  {
    title: "Customer Experience Transformation",
    description:
      "Redesign customer journeys with personalization, omnichannel integration, and AI-powered engagement to boost satisfaction, retention, and loyalty.",
    hasImage: true,
    image: CustomerImg,
    path: "/services/transformation-modernization/customer-transformation",
  },
];

const advantages = [
  {
    title: "AI-First, Future-Ready Approach",
    description: "We embed AI into every modernization effort, from automation to analytics.",
  },
  {
    title: "End-to-End Expertise",
    description: "From strategy to execution, we manage the entire transformation lifecycle.",
  },
  {
    title: "Security & Compliance by Design",
    description: "Regulatory, risk, and security frameworks are built into every solution.",
  },
  {
    title: "Proven Industry Impact",
    description:
      "Experience across healthcare, financial services, manufacturing, and energy enables tailored solutions.",
  },
  {
    title: "People-Centered Transformation",
    description: "Our change management approach ensures adoption, culture alignment, and long-term success.",
  },
];

const TransformationModernization = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <ServiceHero
        backgroundImage={TransformationBg}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services" }, { name: "Transformation & Modernization" }]}
        overline={
          <>
            Transformation <br /> & Modernization
          </>
        }
        title="Re-architect your enterprise for agility, intelligence, and customer-centric growth."
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Redefining Enterprise Agility in the AI Era"
        description="Legacy systems, siloed data, and fragmented processes are no longer sustainable in a digital-first world. CIOs and CTOs are under pressure to modernize their infrastructure, automate intelligently, and deliver products that meet customer expectations while maintaining security and compliance. At NAVA Software Solutions, our Transformation & Modernization practice helps organizations shift from outdated models to AI-powered, cloud-enabled, agile enterprises. We blend battle-tested automation, data modernization, cloud migration, and agile product development into a unified modernization strategy that accelerates performance and drives innovation. We don't just deploy technology; we redesign the way your business works, scales, and delivers value."
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid
        title="The New Reality: Barriers to Digital Modernization"
        description="What Enterprises Struggle with Today"
        isBold={true}
        features={challenges}
        gridCols="3x2"
      />
      </LazySection>

      {/* Market Direction Section */}
      <LazySection minHeight={400} fallback={<SectionSkeleton variant="split" height={400} />}>
        <ServiceImageSection
        title="Where the Market is Heading"
        bulletPoints={[
          "Most global enterprises will adopt intelligent automation to streamline operations.",
          "Cloud-native and serverless architectures will replace legacy IT as the default standard.",
          "Data-driven enterprises will consistently outperform peers with faster, AI-powered decision-making.",
          "Customer experience will remain the ultimate competitive differentiator, powered by personalization and omnichannel design.",
        ]}
        // image={businessPresentation}
        imageAlt="Business presentation"
        imagePosition="right"
      />
      </LazySection>

      {/* Solutions Section */}
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceSolutionCards title="Five Pillars: How NAVA Delivers Transformation" cards={solutionCards} />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards title="The NAVA Advantage" advantages={advantages} WhyChooseNava="bg-page" />
      </LazySection>

      {/* Case Studies Section */}
      <div>
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </LazySection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default TransformationModernization;
