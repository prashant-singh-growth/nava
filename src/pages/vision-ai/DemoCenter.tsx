import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

import AwsBannerBg from "../../assets/Images/banner-images/services/aws-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const demos = [
  {
    id: "01",
    title: "Live quality inspection demonstrations.",
    description: ""
  },
  {
    id: "02",
    title: "Real-time object detection and tracking.",
    description: ""
  },
  {
    id: "03",
    title: "Edge deployment showcase.",
    description: ""
  },
  {
    id: "04",
    title: "Custom use case exploration.",
    description: ""
  }
];

const advantages = [
  {
    title: "See Vision AI in action before you commit.",
    description: ""
  },
  {
    title: "Interactive demos tailored to your industry.",
    description: ""
  },
  {
    title: "Expert guidance throughout the demo experience.",
    description: ""
  }
];

const DemoCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHero 
        backgroundImage={AwsBannerBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Vision AI", path: "/vision-ai" },
          { name: "Demo Center" },
        ]}
        overline={
          <>
            Vision AI<br />Demo Center
          </>
        }
        title="Experience the power of Vision AI through interactive demonstrations and live showcases."
        ctaText="Schedule a Demo"
      />

      <ServiceIntro 
        title="See It In Action"
        description="Our Demo Center provides hands-on experience with Vision AI capabilities. Explore real-world applications and see how Vision AI can transform your operations."
      />
            
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="Demo Experiences"
        description="Explore our interactive demonstrations:"
        features={demos}
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

export default DemoCenter;
