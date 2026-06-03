import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import AwsPartnerLogo from "../../../assets/logos/aws-partner-logo.webp"

// Hero background image
import AwsDataBg from "../../../assets/Images/banner-images/services/aws-data-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Build GenAI Ready Data Architectures on AWS",
    description: "Create scalable, secure, and high-performance data architectures that fuel generative AI applications, improve model accuracy, and deliver AI-powered insights."
  },
  {
    id: "02",
    title: "Unify Data For Deep Insights With AWS Datalakes",
    description: "Consolidate structured and unstructured data into a governed, analytics-ready data lake with AWS Lake Formation and Glue to unlock real-time and AI-driven insights."
  },
  {
    id: "03",
    title: "Modernize Data Warehouse with Amazon Redshift",
    description: "Migrate and modernize your legacy data warehouse with Amazon Redshift to gain scalable, cost-efficient, and ML-integrated analytics at enterprise scale."
  },
  {
    id: "04",
    title: "Cost Effective BI Platform with Amazon QuickSight",
    description: "Enable self-service analytics and rich visualization with Amazon QuickSight, providing powerful BI capabilities at a fraction of traditional BI costs."
  },
  {
    id: "05",
    title: "Personalize Customer Experience with Customer 360",
    description: "Unify customer data across all touchpoints with AWS-powered Customer 360 to deliver personalized, timely, and compliant customer interactions."
  }
];

const advantages = [
  {
    title: "AWS Expertise & Proven Methodology",
    description: "As an AWS Advanced Tier Partner, NAVA brings certified expertise and proven frameworks for building secure, scalable, and future-proof data solutions."
  },
  {
    title: "End-to-End Data Modernization",
    description: "From strategy to implementation, we cover the full spectrum of data modernization—data lakes, warehouses, BI, and AI-driven analytics."
  },
  {
    title: "Faster Time-to-Value with Zero-Cost POCs",
    description: "We accelerate adoption with zero-cost proof-of-concepts, AWS-funded engagements, and rapid deployment models that deliver measurable outcomes quickly."
  }
];

const AWSData = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={AwsDataBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "AWS Solutions", path: "/services/aws-solutions" },
          { name: "AWS Data & Analytics Solutions"},          
        ]}
        overline={`AWS Data & Analytics
           Solutions`}
        title="Unlock the power of your data with NAVA’s AWS Data & Analytics Solutions. We help businesses build modern, secure, and AI-ready data platforms that drive faster insights, personalized customer experiences, and smarter decision-making."
        heroImage={AwsPartnerLogo}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Overview of AWS Data & Analytics Solution Offerings"
        description="NAVA Software Solutions delivers end-to-end Data & Analytics solutions on AWS that enable organizations to unify, modernize, and analyze their data to accelerate business outcomes. Our offerings cover every stage of the data journey—from building generative AI-ready data architectures, to unifying enterprise-wide data in secure AWS data lakes, to modernizing traditional warehouses with Amazon Redshift, to enabling cost-effective BI with Amazon QuickSight, and creating Customer 360 platforms for personalized experiences. By leveraging AWS-native services such as Amazon Redshift, Amazon S3, AWS Glue, Amazon QuickSight, Amazon Bedrock, and Lake Formation, we empower enterprises to break down silos, scale analytics, and unlock the full potential of their data."
      />
           
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="Solution Offering Details"
        features={challenges}
        gridCols="2x2"
        className="pb-[var(--size-35)]"
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Why NAVA for Data & Analytics Solutions"
        advantages={advantages}
        isdescription = {true}
        AwsWhyChooseBg="!bg-none"
        WhyChooseNava="!pb-[var(--size-60)] !bg-page bg-[url('assets/Images/aws-why-choose-bg.webp')] bg-no-repeat bg-cover bg-center md:mb-0 mb-[47px]"
        CustomClass="text-[#ffffff] mb-[var(--size-10)]"
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

export default AWSData;