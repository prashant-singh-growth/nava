import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Images
import ObservabilityBg from "../../../assets/Images/banner-images/services/observability-cost-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Blind Spots in Monitoring:",description: "Lack of end-to-end visibility hides performance bottlenecks."},
  { title: "Escalating Cloud Bills:",description: "Inefficient provisioning and poor governance drive cost overruns."},
  { title: "Security Gaps: ",description: "Weak IAM, logging, or incident response exposes workloads to threats."},
  { title: "Compliance Risks: ",description: "Fragmented controls make it hard to meet industry regulations."},
  { title: "Reactive Troubleshooting:",description: "Teams spend time firefighting instead of innovating."}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Unified Visibility: ",description: "Monitor applications, infrastructure, and user activity in real time."},
  { title: "Cost Control: ",description: "Reduce waste with automated right-sizing, scaling, and chargeback models"},
  { title: "Resilient Security: ",description: "Continuous monitoring and intelligent threat defense."},
  { title: "Compliance at Scale: ",description: "Governance frameworks aligned with regulatory standards."},
  { title: "Operational Efficiency: ",description: "Teams focus on growth instead of reactive fixes."}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Cloud Observability",
    description: [ 
      { text : "End-to-end monitoring with dashboards and automated alerts."},
      { text : "Distributed tracing and log analytics to resolve issues faster."},
      { text : "Performance metrics aligned with business KPIs. "}]
  },
  {
    id: "02",
    title: "Security & Compliance ",
    description: [ 
      { text : "Identity & access management (IAM) hardening." },
      { text : "Automated compliance checks (HIPAA, SOC2, GDPR, PCI-DSS)."},
      { text : "Threat detection with real-time anomaly detection and incident response."}]
  },
  {
    id: "03",
    title: "Cost Optimization (FinOps)",
    description: [
      { text : "Right-sizing resources to eliminate waste."},
      { text : "Reserved instance and savings plan strategies."},
      { text : "Automated reporting for chargeback, forecasting, and governance."}]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "Full-Stack Coverage:",
    description: "Observability, security, and FinOps under one framework."
  },
  {
    title: "Cloud-Native Expertise: ",
    description: "Proven across AWS, Azure, and GCP"
  },
  {
    title: "Compliance Ready: ",
    description: "Aligned with regulated industries."
  },
  {
    title: "Proven Impact:",
    description: "Lower costs, stronger defenses, faster problem resolution."
  }
];

const advantages = [
  {
    title: "Amazon CloudWatch & X-Ray",
    description: "Application monitoring, distributed tracing, and performance optimization."
  },
  {
    title: "AWS GuardDuty & Security Hub",
    description: "Continuous threat detection and centralized compliance dashboards."
  },
  {
    title: "AWS IAM & KMS",
    description: "Secure identity, access, and encryption management."
  },
  {
    title: "AWS Trusted Advisor & Cost Explorer",
    description: "Cost visibility, optimization recommendations, and governance. "
  },
  {
    title: "AWS Config & Control Tower",
    description: "Policy enforcement and compliance monitoring across multi-account setups."
  },
  {
    title: "AWS Backup & Disaster Recovery",
    description: "Automated backup, failover, and resilience strategies."
  }
];


const Observability = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={ObservabilityBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Cloud & Data Solutions", path: "/services/cloud-data-solutions/" },
          { name: "Observability, Security & Cost Optimization"}
        ]}
        title="See everything. Secure everything. Spend wisely."
        overline={`Observability, Security &
         Cost Optimization`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Observability & Optimization Matter"
        description="Cloud adoption accelerates innovation, but without visibility, costs, risks, and inefficiencies spiral. Teams struggle with blind spots in performance, escalating bills, and security gaps that expose sensitive data. Without proactive monitoring, enterprises find themselves reacting to outages, compliance failures, or runaway expenses. 
        At NAVA Software Solutions, we help CIOs, CISOs, and cloud leaders establish end-to-end observability, strong security frameworks, and cost governance practices that scale. With integrated monitoring, automated threat detection, and FinOps-aligned optimization, we enable organizations to achieve reliability, resilience, and efficiency in the cloud."
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
        overlineText="Organizations that invest in observability, security, and cost optimization gain:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to Cloud Architecture & Engineering
         </div>
      </div>
      
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceApproachGrid 
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
      />
      </LazySection>

      <LazySection minHeight={400} fallback={<SectionSkeleton variant="cards" height={400} />}>
        <ServiceAdvSingleCard 
        title="NAVA’s Data Advantage"
        bulletPoints={cloudAdv}
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Core AWS Services for Observability & Optimization "
        advantages={advantages}
        WhyChooseNava="bg-page"
      />
      </LazySection>

      {/* Case Studies Section */}
      <div>
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
        <CaseStudies />
      </LazySection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Observability;
