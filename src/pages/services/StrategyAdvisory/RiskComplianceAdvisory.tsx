import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";
import RiskAdvisoryBg from "../../../assets/Images/banner-images/services/risk-advisory-bg.webp";

// Images
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Reactive Compliance:",description: "Waiting until audits or breaches to act."},
  { title: "Regulatory Complexity: ",description: "Confusion around GDPR, HIPAA, PCI-DSS, SOX, CCPA, and industry-specific rules."},
  { title: "Security Gaps: ",description: "Inconsistent IAM, access control, and monitoring."},
  { title: "Cloud & Data Risks: ",description: "Poor governance in multi-cloud and hybrid environments."},
  { title: "Reputation Risk: ",description: "Compliance failures that erode customer trust."}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Reduce Exposure ",description: "by proactively managing cyber, operational, and regulatory risk."},
  { title: "Accelerate Adoption ",description: "of cloud, AI, and automation with compliance-by-design."},
  { title: "Build Trust ",description: " with customers, partners, and regulators."},
  { title: "Streamline Costs ",description: "by consolidating controls and avoiding fines."},
  { title: "Enable Growth ",description: "with governance frameworks that scale globally."}
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
    title: "Cloud Security",
    description: "AWS Security Hub, GuardDuty, Azure Sentinel, GCP Security Command Center."
  },
  {
    title: "Identity & Access",
    description: "Okta, Azure AD, AWS IAM, Zero Trust frameworks."
  },
  {
    title: "Data Privacy",
    description: "OneTrust, BigID, GDPR/CCPA compliance solutions."
  },
  {
    title: "Audit & Monitoring",
    description: "Splunk, Datadog, AWS CloudTrail."
  },
  {
    title: "Regulatory Standards",
    description: "NIST, ISO 27001, SOC2, HIPAA, PCI-DSS, FedRAMP."
  }
];

const RiskComplianceAdvisory = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={RiskAdvisoryBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Strategy & Advisory", path: "/services/strategy-advisory/" },
          { name: "Risk & Compliance Advisory", path: "" }
        ]}
        overline={`Risk & Compliance 
          Advisory`}
        title="Protect your business. Stay compliant. Build trust at scale."
        HeroBannerClass="bg-[80%]"           
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Risk & Compliance Advisory Matters"
        description={
          <>
            In today's digital-first environment, risk and compliance are board-level priorities. Regulations are tightening, cyber threats are multiplying, and stakeholders demand transparency. Yet many organizations still treat compliance as a checkbox exercise — reacting to audits instead of embedding governance into strategy.<br /><br />
            At NAVA Software Solutions, we help CIOs, CISOs, and risk leaders move beyond compliance as a burden to see it as a business enabler. Our Risk & Compliance Advisory services safeguard operations, build resilience, and ensure your technology roadmap stays secure, ethical, and audit-ready.
          </>
        }
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
        description="As an AWS Strategic Partner, NAVA ensures cloud adoption meets strict security and compliance standards. We design risk frameworks that are aligned with AWS-native tools to provide resilience, audit readiness, and cost-efficient governance."
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

export default RiskComplianceAdvisory;
