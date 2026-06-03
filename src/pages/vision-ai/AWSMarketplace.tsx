import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

import AwsBannerBg from "../../assets/Images/banner-images/services/aws-bg.webp";
import AwsPartnerLogo from "../../assets/logos/aws-partner-logo.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const features = [
  {
    id: "01",
    title: "Pre-configured Vision AI solutions ready for deployment.",
    description: ""
  },
  {
    id: "02",
    title: "Simplified procurement through AWS billing.",
    description: ""
  },
  {
    id: "03",
    title: "AWS-validated and security reviewed.",
    description: ""
  },
  {
    id: "04",
    title: "Flexible pricing models including PAYG and subscriptions.",
    description: ""
  }
];

const advantages = [
  {
    title: "Launch Vision AI in minutes with AWS Marketplace.",
    description: ""
  },
  {
    title: "Leverage existing AWS credits and commitments.",
    description: ""
  },
  {
    title: "Seamless integration with your AWS infrastructure.",
    description: ""
  }
];

const AWSMarketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHero 
        backgroundImage={AwsBannerBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Vision AI", path: "/vision-ai" },
          { name: "AWS Marketplace" },
        ]}
        overline={
          <>
            Vision AI on<br />AWS Marketplace
          </>
        }
        title="Deploy enterprise Vision AI solutions directly from AWS Marketplace with simplified procurement."
        heroImage={AwsPartnerLogo}
        ctaText="View on AWS Marketplace"
      />

      <ServiceIntro 
        title="AWS Marketplace"
        description="Access NAVA Vision AI solutions through AWS Marketplace for streamlined deployment, billing, and support—all within your existing AWS environment."
      />
            
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="Marketplace Benefits"
        description="Why deploy through AWS Marketplace:"
        features={features}
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

export default AWSMarketplace;
