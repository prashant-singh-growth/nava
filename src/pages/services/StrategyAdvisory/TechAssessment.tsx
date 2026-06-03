import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import TechAssessmentBg from "../../../assets/Images/banner-images/services/tech-assessment-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Technology Sprawl:",description: " Redundant or overlapping systems driving up costs."},
  { title: "Hidden Technical Debt: ",description: "Legacy systems that block innovation and agility."},
  { title: "Vendor Lock-In: ",description: "Poor contract visibility limits flexibility and negotiation power."},
  { title: "Unclear ROI: ",description: "Investments made without a measurable return framework."},
  { title: "Scalability Risks:",description: " Architectures not designed for future growth or AI adoption."}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Reduce Exposure ",description: "by proactively managing cyber, operational, and regulatory risk."},
  { title: "Build Trust ",description: " with customers, partners, and regulators."},
  { title: "Enable Growth ",description: "with governance frameworks that scale globally."},
  { title: "Accelerate Adoption ",description: "of cloud, AI, and automation with compliance-by-design."},
  { title: "Streamline Costs ",description: "by consolidating controls and avoiding fines."}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Current State Assessment",
    description: [
      { text : "Strengthen IAM, encryption, monitoring, and incident response."},
      { text: "Ensure privacy compliance across regions and industries."}]      
  },
  {
    id: "02",
    title: "Cost-Benefit & ROI Analysis",
    description: [
      { text : "Map enterprise risks across technology, data, and operations."},
      { text : "Prioritize mitigation strategies by business impact."}]
  },
  {
    id: "03",
    title: "Technology Roadmap & Recommendations",
    description: [
      { text : "Embed governance into systems, applications, and processes."},
      { text : "Leverage automation for audit readiness and continuous monitoring."}]
  },
  {
    id: "04",
    title: "Vendor & Ecosystem Advisory",
    description: [
      { text : "Strengthen IAM, encryption, monitoring, and incident response."},
      { text : "Ensure privacy compliance across regions and industries."}]
  },
  {
    id: "05",
    title: "Risk, Security & Compliance Review",
    description: [
      { text :"Gap analysis for regulatory frameworks (GDPR, HIPAA, SOC2)."},
      { text : "Recommendations for stronger governance and resilience."}]
  }
];

// Platforms data
const platforms = [
  {
    title: "Cloud & Infrastructure",
    description: "AWS (strategic partner), Microsoft Azure, Google Cloud."
  },
  {
    title: "Applications & Platforms:",
    description: "Microsoft Dynamics 365, SAP, Oracle, Salesforce."
  },
  {
    title: "Data & Analytics:",
    description: "Snowflake, Databricks, Power BI, Tableau."
  },
  {
    title: "Automation & DevOps:",
    description: "Terraform, Kubernetes, GitHub Actions, Jenkins."
  },
  {
    title: "Security & Compliance:",
    description: "AWS IAM, Azure Sentinel, Okta, Zero Trust frameworks."
  }
];

const TechAssessment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={TechAssessmentBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Strategy & Advisory", path: "/services/strategy-advisory/" },
          { name: "Technology Assessment & Advisory", path: "" }
        ]}
        overline={`Technology Assessment
          & Advisory`}
        title="Evaluate. Optimize. Future-proof your technology investments."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="A Smarter Approach to Technology Decisions"
        description="Technology is the backbone of every enterprise, but without the right assessment and strategy, it often becomes a source of cost, complexity, and technical debt. Many organizations face sprawling toolsets, legacy systems, and rising infrastructure costs without a clear plan for modernization. 
        At NAVA Software Solutions, our Technology Assessment & Advisory service gives CIOs and IT leaders the clarity they need to align IT investments with business goals. We help you understand your current landscape, evaluate risks and gaps, and make confident decisions about the technologies that will fuel your growth."
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
        overlineText="With the right technology strategy, enterprises can:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="industries-service-section-top bg-page">
        <div className="inner-page-container mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to Risk & Compliance Advisory
         </div>
      </div>
      
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceApproachGrid 
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px]"
      />
      </LazySection>

      {/* Market Direction Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServicePlatformsCard 
        title="We combine risk frameworks with modern platforms for compliance automation and monitoring:"
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="Our AWS Advantage"
        description="As an AWS Strategic Partner, we help enterprises maximize the use of AWS-native services for infrastructure optimization, licensing efficiency, and cost governance (FinOps)."
      />
      </LazySection>

      {/* Case Studies Section */}
      <div className="bg-page">
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </LazySection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default TechAssessment;
