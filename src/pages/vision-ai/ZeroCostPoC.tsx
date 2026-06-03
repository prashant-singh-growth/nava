import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

import AwsBannerBg from "../../assets/Images/banner-images/services/aws-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const pocFeatures = [
  {
    id: "01",
    title: "No upfront costs or commitments.",
    description: ""
  },
  {
    id: "02",
    title: "Real data, real results in your environment.",
    description: ""
  },
  {
    id: "03",
    title: "Clear ROI metrics and success criteria.",
    description: ""
  },
  {
    id: "04",
    title: "Fast 2-4 week delivery timeline.",
    description: ""
  }
];

const advantages = [
  {
    title: "Validate Vision AI value before investment.",
    description: ""
  },
  {
    title: "Risk-free evaluation with your actual use case.",
    description: ""
  },
  {
    title: "Seamless transition from POC to production.",
    description: ""
  }
];

const ZeroCostPoC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHero 
        backgroundImage={AwsBannerBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Vision AI", path: "/vision-ai" },
          { name: "Zero-Cost PoC" },
        ]}
        overline={
          <>
            Zero-Cost<br />Proof of Concept
          </>
        }
        title="Validate Vision AI ROI with your data before making any commitment."
        ctaText="Start Your Zero-Cost POC"
      />

      <ServiceIntro 
        title="Risk-Free Evaluation"
        description="We believe in the value of Vision AI. That's why we offer a Zero-Cost Proof of Concept—so you can validate results with your own data before investing."
      />
            
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="POC Program"
        description="What's included in your Zero-Cost POC:"
        features={pocFeatures}
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

export default ZeroCostPoC;
