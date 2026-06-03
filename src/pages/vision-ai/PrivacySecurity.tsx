import { Link } from "react-router-dom";
import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

import PrivacySecurityBg from "../../assets/Images/banner-images/vision-ai/privacy-security-bg.webp";
import PrivacyPitfallsCard from "../../assets/Images/privacy-pitfalls-card.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const pitfalls = [
  {
    title: "Lack of Data Governance",
    description: "Unclear ownership, siloed systems, and unsecured datasets increase risk.",
  },
  {
    title: "Unsafe Camera & Video Pipelines",
    description: "Unencrypted feeds and cloud uploads expose sensitive operational data.",
  },
  {
    title: "Compliance Gaps",
    description: "Inability to meet GDPR, SOC 2, ISO 9001, ISO 27001, HIPAA, PCI, and industry mandates.",
  },
  {
    title: "Weak Identity & Access Controls",
    description: "Unrestricted or inconsistent access to dashboards, APIs, and analytics tools.",
  },
  {
    title: "Insecure AI Model Handling",
    description: "Models trained on unverified or exposed data lead to vulnerabilities.",
  },
  {
    title: "Shadow AI & Unmonitored Tools",
    description: "Teams using unapproved AI systems without governance or guardrails.",
  },
  {
    title: "Third-Party Risk",
    description: "Vendors, contractors, and integrations adding hidden exposure points.",
  },
];

const opportunityPoints = [
  {
    title: "Trusted AI Systems",
    description: "Users, regulators, and customers gain confidence in automated decision-making.",
  },
  {
    title: "Safer Vision AI Deployments",
    description: "Edge processing reduces exposure of raw video data.",
  },
  {
    title: "Compliance Readiness",
    description: "Built-in controls for GDPR, SOC 2, ISO 9001, ISO 27001, CCPA, and sector regulations.",
  },
  {
    title: "Lower Operational Risk",
    description: "Fewer incidents, breaches, alerts, and downtime.",
  },
  {
    title: "Better Data Quality",
    description: "Clean, governed, well-managed datasets for AI training and analytics.",
  },
  {
    title: "Scalable Guardrails",
    description: "Policies and controls that scale across multiple sites, cameras, and cloud environments.",
  },
];

const approachFeatures = [
  {
    id: "01",
    title: "Data Privacy & Governance Foundations",
    description: [
      { text: "Data classification, retention, and ownership policies." },
      { text: "Secure handling of PII, PHI, operational video, and metadata." },
      { text: "Privacy-by-design frameworks for all Vision AI workflows." },
    ],
  },
  {
    id: "02",
    title: "Security Architecture & Access Control",
    description: [
      { text: "Zero-trust access models across cloud, edge, and on-prem systems." },
      { text: "SSO, MFA, RBAC, and least-privilege enforcement." },
      { text: "Network segmentation and encrypted video pipelines." },
    ],
  },
  {
    id: "03",
    title: "Compliance, Auditing & Risk Management",
    description: [
      { text: "Mappings for GDPR, ISO 27001, SOC 2, HIPAA, and industry standards." },
      { text: "Secure logging, monitoring, and continuous compliance validation." },
      { text: "Vendor risk assessments and supply-chain security controls." },
    ],
  },
  {
    id: "04",
    title: "Secure Deployment, Monitoring & Response",
    description: [
      { text: "Encrypted data paths from cameras → edge → cloud." },
      { text: "Vulnerability scanning and automated patching." },
      { text: "Incident response playbooks and forensic readiness." },
    ],
  },
];

const advantages = [
  {
    title: "Privacy-by-Design Vision AI",
    description: "Raw video stays on-site with secure edge processing and encrypted metadata.",
  },
  {
    title: "Enterprise-Grade Governance",
    description: "Frameworks built on best practices from regulated industries.",
  },
  {
    title: "Secure AI Model Lifecycle",
    description: "Protected datasets, training pipelines, model storage, and inference controls.",
  },
  {
    title: "Proven Across Industries",
    description: "Trusted by logistics, manufacturing, ports, healthcare, finance, energy, and public sector.",
  },
];

const certifications = [
  { name: "ISO 9001", label: "ISO 9001" },
  { name: "ISO 27001", label: "ISO 27001" },
  { name: "SOC 2", label: "SOC 2" },
  { name: "GDPR", label: "GDPR" },
];

const PrivacySecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        backgroundImage={PrivacySecurityBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Vision AI", path: "/vision-ai" },
          { name: "Privacy & Security" },
        ]}
        overline={<>Protecting Your Data. Securing Your Operations.</>}
        title="Ensure every Vision AI, cloud, and data workflow meets the highest standards of security, compliance, and privacy-by-design—without slowing down innovation."
        ctaText="Get in Touch"
      />

      <ServiceIntro
        title="Why Privacy & Security Matter"
        description={
          <>
            As enterprises{" "}
            <Link to="/vision-ai" className="text-inherit no-underline hover:underline">adopt Vision AI</Link>
            , automation, GenAI, and cloud-native systems, the volume of sensitive data they generate grows exponentially. Video streams, operational telemetry, identity logs, analytics pipelines, and training datasets often contain personally identifiable information (PII), operational intelligence, and business-critical insights. Without a robust privacy and security strategy, organizations face compliance violations, data exposure risks, unauthorized access, inconsistent governance, and AI model drift or misuse. NAVA's Privacy & Security practice ensures your AI and data systems remain protected, compliant, and trustworthy — across edge devices, cloud environments, and enterprise data platforms.
          </>
        }
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="split" height={500} />}>
        <ServiceContentImageCard
        title="Common Pitfalls We Solve"
        bulletPoints={pitfalls}
        image={PrivacyPitfallsCard}
        imageAlt="Privacy and security challenges visualization showing data protection risks"
        imagePosition="right"
        bgColor="gray"
      />
      </LazySection>

      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceOpportunityCard
        title="The Opportunity"
        overlineText="Organizations that adopt strong privacy and security practices achieve:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceApproachGrid title="Our Approach to Privacy & Security" features={approachFeatures} gridCols="2x2" />
      </LazySection>

      <LazySection minHeight={400} fallback={<SectionSkeleton variant="cards" height={400} />}>
        <ServiceAdvSingleCard title="NAVA's Privacy & Security Advantage" bulletPoints={advantages} />
      </LazySection>

    </div>
  );
};

export default PrivacySecurity;
