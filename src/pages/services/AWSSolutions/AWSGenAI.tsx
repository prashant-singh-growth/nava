import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import AwsPartnerLogo from "../../../assets/logos/aws-partner-logo.webp"

// Hero background image
import AwsGenAiBg from "../../../assets/Images/banner-images/services//aws-genai-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Automatic Document Processing with Amazon Bedrock Data Automation ",
    description: "Leverage Amazon Bedrock and Textract to streamline document ingestion, extraction, and classification—reducing manual work, cutting costs, and unlocking insights from invoices, claims, and forms. "
  },
  {
    id: "02",
    title: "Automate Business Operations With Amazon Bedrock Agents ",
    description: "Deploy intelligent AI agents that automate multi-step workflows across business systems, enhancing efficiency, compliance, and customer engagement at scale. "
  },
  {
    id: "03",
    title: "Generative AI Assessment ",
    description: "Evaluate your organization’s readiness for GenAI adoption with a structured AWS assessment that identifies use cases, data requirements, risks, and opportunities to accelerate AI transformation. "
  }
];

const advantages = [
  {
    title: "Proven AWS Expertise ",
    description: "As an AWS Advanced Tier Partner, NAVA combines deep technical expertise in Bedrock and AWS AI services with practical industry experience to deliver high-value GenAI solutions. "
  },
  {
    title: "End-to-End AI Journey Support",
    description: "From assessments to production-grade implementations, we guide organizations through every step of their Generative AI journey, ensuring speed, scalability, and security."
  },
  {
    title: "Rapid Value Realization ",
    description: "Our zero-cost POCs, AWS-funded programs, and agile deployment models help businesses realize tangible benefits from Generative AI quickly, with reduced risk and investment."
  }
];

const AWSGenAI = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={AwsGenAiBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "AWS Solutions", path: "/services/aws-solutions" },
          { name: "AWS GenAI Solutions"},          
        ]}
        overline="AWS GenAI Solutions"
        title="Transform the way your business operates with NAVA’s AWS Generative AI Solutions. We help organizations harness the power of Amazon Bedrock and AWS AI services to automate workflows, personalize experiences, and unlock new levels of productivity."
        heroImage={AwsPartnerLogo}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Overview of AWS Generative AI Solution Offering"
        description="NAVA Software Solutions enables enterprises to unlock the true potential of Generative AI on AWS by building secure, scalable, and domain-specific AI solutions.  
        Our offerings span intelligent document processing, business process automation with Bedrock Agents, and comprehensive Generative AI assessments.  
        With our expertise, organizations can rapidly adopt AI-driven automation, enhance decision-making, and personalize customer interactions—all while maintaining enterprise-grade governance and compliance.  "
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
        title="Why NAVA for Generative AI Solutions"
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

export default AWSGenAI;