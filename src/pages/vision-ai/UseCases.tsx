import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

import AwsBannerBg from "../../assets/Images/banner-images/services/aws-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const useCases = [
  {
    id: "01",
    title: "Quality Inspection & Defect Detection",
    description: "",
  },
  {
    id: "02",
    title: "Inventory & Asset Tracking",
    description: "",
  },
  {
    id: "03",
    title: "Safety & Compliance Monitoring",
    description: "",
  },
  {
    id: "04",
    title: "Predictive Maintenance",
    description: "",
  },
];

const advantages = [
  {
    title: "Industry-specific solutions tailored to your operational needs.",
    description: "",
  },
  {
    title: "Rapid deployment with minimal disruption to existing workflows.",
    description: "",
  },
  {
    title: "Measurable ROI with clear performance metrics.",
    description: "",
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        backgroundImage={AwsBannerBg}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Vision AI", path: "/vision-ai" }, { name: "Use Cases" }]}
        overline={
          <>
            Vision AI Use Cases
            <br />
            Across Industries
          </>
        }
        title="Discover how Vision AI transforms operations from manufacturing floors to logistics hubs."
        ctaText="Explore Your Use Case"
      />

      <ServiceIntro
        title="Industry Applications"
        description="Vision AI delivers measurable value across diverse industries and operational scenarios. Our solutions are designed to address your specific challenges."
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid
        title="Key Use Cases"
        description="Our Vision AI solution addresses critical operational needs across industries:"
        features={useCases}
        gridCols="2x2"
        className="pt-0"
        isdescription={false}
        isTitleSemiBold={true}
      />
      </LazySection>

      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards
        title="Why Choose NAVA"
        advantages={advantages}
        isdescription={false}
        WhyChooseNava="bg-page md:mb-0 mb-[47px]"
        isTitleSemiBold={true}
      />
      </LazySection>

      <div className="md:-mt-0 -mt-12">
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </LazySection>
      </div>

    </div>
  );
};

export default UseCases;
