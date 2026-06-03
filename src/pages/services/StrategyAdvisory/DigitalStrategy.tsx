import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import DigitalStrategyBg from "../../../assets/Images/banner-images/services/digital-strategy-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const commonPitfalls = [
  { title: "",description: "Fragmented initiatives that waste budget and energy. "},
  { title: "",description: "Technology-first decisions without business alignment. "},
  { title: "",description: "Short-term projects that ignore scalability."},
  { title: "",description: "KPIs that track activity, not measurable impact. "}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "",description: "Structured roadmaps deliver 30% quicker ROI on digital initiatives."},
  { title: "",description: " Business and IT move in lockstep, reducing wasted effort and conflicting priorities."},
  { title: "",description: "Phased strategies ensure today’s wins become tomorrow’s enterprise capabilities."},
  { title: "",description: "Roadmaps designed with modern cloud and data architectures unlock AI adoption."},
  { title: "",description: "Governance and KPI-driven execution reduce risk and ensure regulatory alignment."}
];


// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Regulatory Mapping & Gap Analysis",
    description: [ 
      { text : "Strengthen IAM, encryption, monitoring, and incident response."},
      { text : "Ensure privacy compliance across regions and industries."}]
  },
  {
    id: "02",
    title: "Risk Assessment & Prioritization",
    description: [ 
      { text : "Map enterprise risks across technology, data, and operations." },
      { text : "Prioritize mitigation strategies by business impact."}]
  },
  {
    id: "03",
    title: "Compliance-by-Design Frameworks",
    description: [
      { text : "Embed governance into systems, applications, and processes."},
      { text : "Leverage automation for audit readiness and continuous monitoring."}]
  },
  {
    id: "04",
    title: "Security & Data Protection",
    description: [
      { text : "Strengthen IAM, encryption, monitoring, and incident response."},
      { text : "Ensure privacy compliance across regions and industries."}]
  },
  {
    id: "05",
    title: "Governance & Continuous Assurance",
    description: [
      {text : "Establish governance councils and reporting structures."},
      { text : "Enable real-time observability with dashboards and KPIs."}]
  }
];


// Platforms data
const platforms = [
  {
    title: "Cloud Platforms",
    description: "AWS (strategic partner), Microsoft Azure, Google Cloud."
  },
  {
    title: "Data & Analytics",
    description: "AWS Lakehouse, Snowflake, Databricks, Power BI."
  },
  {
    title: "Automation & DevOps",
    description: "Terraform, Ansible, Jenkins, GitHub Actions."
  },
  {
    title: "AI & ML",
    description: "AWS SageMaker, Azure ML, TensorFlow, OpenAI integrations."
  },
  {
    title: "Security & Compliance",
    description: "IAM, AWS Shield, Azure Sentinel, GDPR/CCPA frameworks."
  },
  {
    title: "Cloud Security",
    description: "AWS Security Hub, GuardDuty, Azure Sentinel, GCP Security Command Center."
  }
];

const DigitalStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={DigitalStrategyBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Strategy & Advisory", path: "/services/strategy-advisory/" },
          { name: "Digital Strategy & Roadmap", path: "" }
        ]}
        title="Define your vision. Align your technology. Execute with confidence. "
        overline={`Digital Strategy 
        & Roadmap`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="A Roadmap for the Digital Enterprise"
        description="Digital transformation fails when strategy is an afterthought. Too often, organizations invest in technology without a clear connection to business priorities. The result? Fragmented initiatives, wasted budgets, and stalled outcomes. 
        At NAVA Software Solutions, we help CIOs, CTOs, and transformation leaders develop comprehensive digital strategies that bridge ambition with execution. Our roadmaps don’t just outline projects; they define the why, what, and how of transformation, prioritizing initiatives that maximize impact and long-term value."
      />  

       {/* Common Pitfalls Section */}

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="split" height={500} />}>
        <ServiceContentImageCard 
        title="Common Pitfalls We Solve"
        bulletPoints={commonPitfalls}
        image={manBackOffice}
        imageAlt="Professional working at office systems"
        imagePosition="right"
        bgColor="white"
      />
      </LazySection>

       {/* The Opportunity Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceOpportunityCard 
        title="The Opportunity"
        overlineText="Organizations that embed risk and compliance into digital strategy:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
        <div className="industries-service-section-top bg-page">
        <div className="inner-page-container mx-auto text-center font-semibold fs-36 leading-snug">
        Our Approach to Digital Strategy & Roadmap 
         </div>
      </div>     
      
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceApproachGrid 
        title="Our Approach to Digital Strategy & Roadmap"
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-18)] !pt-[10px]"
      />
      </LazySection>

      {/* Market Direction Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServicePlatformsCard 
        title="Your roadmap is only as strong as the platforms behind it. NAVA partners with global leaders to ensure strategies are cloud-ready, data-driven, and AI-enabled."
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="Our AWS Advantage"
        description="As an AWS Strategic Partner, NAVA brings: 

          - Proven expertise in AWS Cloud Adoption Framework. 

          - Secure cloud migration aligned with compliance requirements. 

          - Integration of AWS-native services into transformation roadmaps. 

          Accelerated timelines leveraging AWS accelerators, blueprints, and FinOps practices. "
      />
      </LazySection>      

      {/* Case Studies Section */}
      <div className="bg-page">
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies adjustTop={true} />
        </LazySection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default DigitalStrategy;
