import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import AwsBannerBg from "../../assets/Images/banner-images/services/aws-bg.webp";
import AwsPartnerLogo from "../../assets/logos/aws-partner-logo.webp";

// Card images
import GenAiImg from "../../assets/Images/service-aws-card1.webp";
import DataImg from "../../assets/Images/service-aws-card2.webp";
import MigrationImg from "../../assets/Images/service-aws-card3.webp";
import MLImg from "../../assets/Images/banner-images/services/aws-ml-bg.webp";


import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Migrate legacy workloads with confidence.",
    description: ""
  },
  {
    id: "02",
    title: "Modernize applications for scalability and agility.",
    description: ""
  },
  {
    id: "03",
    title: "Unlock data insights with analytics and AI.",
    description: ""
  },
  {
    id: "04",
    title: "Secure and govern your cloud with best practices.",
    description: ""
  }
];

const solutionCards = [
  {
    title: "Generative AI on AWS Bedrock",
    description: "Automate document processing, content generation, and customer engagement.",
    hasImage: true,
    image: GenAiImg,
    path: "/services/aws-solutions/aws-genai"
  },
  {
    title: "Data & Analytics",
    description: "Build AI-ready data platforms with Redshift, Glue, and Lake Formation.",
    hasImage: true,
    image: DataImg,
    path: "/services/aws-solutions/aws-data-analytics"
  },
  {
    title: "Migration & Modernization",
    description: "Move databases, VMware, and SAP systems seamlessly.",
    hasImage: true,
    image: MigrationImg,
    path: "/services/aws-solutions/aws-migration"
  },
  {
    title: "Machine Learning Solutions",
    description: "Build, train, and deploy ML models with SageMaker and MLOps pipelines.",
    hasImage: true,
    image: MLImg,
    path: "/services/aws-solutions/aws-machine-learning"
  }
];

const advantages = [
  {
    title: "AWS Advanced Tier Partner with proven success across multiple industries.",
    description: ""
  },
  {
    title: "Faster ROI through Zero-Cost Proof of Concepts and AWS funding programs.",
    description: ""
  },
  {
    title: "Comprehensive support from strategy through managed operations.",
    description: ""
  }
];

const AWSSolutions = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={AwsBannerBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "AWS Solutions"},
        ]}
        overline={
          <>
           Transform, Innovate, and Scale<br></br>with AWS Solutions By NAVA
          </>
        }
        title="From data to AI, from migration to modernization—NAVA helps businesses harness the full potential of AWS."
        heroImage={AwsPartnerLogo}
        ctaText="Schedule a Zero-Cost POC"
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="The Challenge"
        description="Your business is generating more data, operating across hybrid environments, and competing in an AI-driven world. How can you modernize fast, stay secure, and innovate without disruption?"
      />
            
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="Our Approach"
        description="At NAVA, we combine AWS-native services with proven methodologies to deliver fast, secure, and cost-effective transformations. We work across four core pillars:"
        features={challenges}
        gridCols="2x2"
        className="pt-0"
        isdescription = {false}
        isTitleSemiBold = {true}
      />
      </LazySection>

      {/* Solutions Section */}
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceSolutionCards 
        title="Our AWS Solution Offerings"
        cards={solutionCards}
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Why Choose NAVA"
        advantages={advantages}
        isdescription={false}
        WhyChooseNava="bg-page md:mb-0 mb-[47px]"
        isTitleSemiBold = {true}
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

export default AWSSolutions;