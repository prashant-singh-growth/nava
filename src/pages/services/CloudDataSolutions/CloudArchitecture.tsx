import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Images
import CloudDevopsBg from "../../../assets/Images/banner-images/services/cloud-devops-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Overworked Teams:",description: "Manual infrastructure management consumes time and energy."},
  { title: "Incorrect Data Flows: ",description: "Poor architecture causes silos and unreliable insights."},
  { title: "Heavy Workloads: ",description: "Inefficient automation keeps teams in firefighting mode."},
  { title: "Stalled Growth: ",description: "Rigid systems can’t keep pace with demand or innovation."},
  { title: "Compliance Risks: ",description: "Lack of governance creates gaps in security and oversight."}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Scalable Infrastructure:",description: "Elastic environments that grow with demand."},
  { title: "Improved Productivity:",description: "Automation reduces manual effort and burnout."},
  { title: "Cost Efficiency:",description: "Optimized cloud operations prevent overspending."},
  { title: "Data Reliability:",description: "Modern architectures ensure trusted, integrated data."},
  { title: "Faster Innovation:",description: "DevOps pipelines accelerate deployment and delivery."}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Cloud Design & Strategy",
    description: [ 
      { text : "Assess current infrastructure and workloads."},
      { text : "Architect secure, scalable multi-cloud or hybrid environments."},
      { text : "Align cloud strategy with business and regulatory requirements."}]
  },
  {
    id: "02",
    title: "Engineering & Automation ",
    description: [ 
      { text : "Implement Infrastructure as Code (IaC) for repeatable deployments." },
      { text : "Enable CI/CD pipelines for faster delivery and testing."},
      { text : "Automate provisioning, monitoring, and compliance checks."}]
  },
  {
    id: "03",
    title: "Optimization & Governance",
    description: [
      { text : "Right-size cloud resources for cost efficiency."},
      { text : "Embed governance frameworks to ensure compliance."},
      { text : "Monitor performance with real-time dashboards and alerts."}]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "Turnkey Solutions:",
    description: "From setup to operations, everything is managed by NAVA."
  },
  {
    title: "Strategic Alignment:",
    description: "GCCs are designed to support your business goals directly."
  },
  {
    title: "Scalable & Flexible:",
    description: "Adapt team size and focus as priorities shift."
  },
  {
    title: "Proven Across Industries:",
    description: "Success in finance, manufacturing, healthcare, and more."
  }
];

const advantages = [
  {
    title: "AWS CloudFormation & Terraform",
    description: "Automate infrastructure as code (IaC) for consistent, repeatable deployments that reduce human error and accelerate provisioning."
  },
  {
    title: "Amazon EC2 & EKS",
    description: "Run scalable compute environments with EC2 or manage containerized workloads with Kubernetes (EKS), ensuring performance and flexibility for any workload."
  },
  {
    title: "AWS Lambda",
    description: "Enable serverless architectures that reduce costs, improve scalability, and support event-driven automation."
  },
  {
    title: "Amazon S3 & Glacier",
    description: "Securely store, archive, and manage data with high durability and compliance-ready features."
  },
  {
    title: "AWS CloudWatch & X-Ray",
    description: "Monitor applications and infrastructure in real time, ensuring visibility, performance optimization, and rapid issue resolution."
  },
  {
    title: "AWS IAM & GuardDuty",
    description: "Enforce strong identity and access controls while detecting threats with intelligent, continuous monitoring for security at scale."
  },
  {
    title: "AWS Backup & Disaster Recovery",
    description: "Protect workloads with automated backup and recovery strategies that align with compliance and business continuity needs."
  }
];


const CloudArchitecture = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={CloudDevopsBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Cloud & Data Solutions", path: "/services/cloud-data-solutions/" },
          { name: "Cloud Architecture & DevOps" }
        ]}
        title="Design smarter. Build faster. Operate securely."
        overline={`Cloud Architecture &
         DevOps`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Cloud Architecture & Engineering Matters"
        description="Enterprises are moving to the cloud, but too often migrations stall or underdeliver. Teams are overworked managing complex infrastructure, data becomes fragmented, and workloads strain productivity and profits. Without the right cloud architecture and operational automation, costs spiral while agility declines. 
        At NAVA Software Solutions, we combine cloud architecture and engineering with modern DevOps practices to help CIOs, CTOs, and IT leaders turn failing enterprise cloud systems into high-performing platforms. Whether you’re modernizing infrastructure, scaling applications, or adopting AI, our Cloud Architecture & Engineering services create secure, scalable, and cost-optimized environments that adapt to your business needs."
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
        overlineText="Organizations that embed Cloud Architecture & Engineering into their digital strategy realize:"
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
        title="NAVA’s Cloud Advantage"
        bulletPoints={cloudAdv}
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Core AWS Services for Cloud Architecture & Engineering"
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

export default CloudArchitecture;
