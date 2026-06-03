import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import CloudTransformBg from "../../../assets/Images/banner-images/services/cloud-migration-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const commonPitfalls =[
  {
    title: "Unplanned Cloud Sprawl",
    description: "Overlapping services and unmanaged costs."
  },
  {
    title: "Security & Compliance Risks",
    description: "Inconsistent governance across environments."
  },
  {
    title: "Lift-and-Shift Only Thinking",
    description: "Migration without modernization or optimization."
  },
  {
    title: "Downtime Disruptions",
    description: "Poor planning leading to business interruptions."
  },
  {
    title: "Vendor Lock-In",
    description: "Limited flexibility in multi-cloud or hybrid strategies."
  }
]


// Opportunity bullet points
const opportunityPoints = [
  {
    title: "Reduce Infrastructure Costs",
    description: "Reduce Infrastructure Costs by up to 40% with optimized architectures."
  },
  {
    title: "Accelerate Innovation",
    description: "Accelerate Innovation by adopting serverless, AI, and analytics capabilities."
  },
  {
    title: "Enhance Resilience",
    description: "Enhance Resilience with high availability and disaster recovery by design."
  },
  {
    title: "Strengthen Compliance",
    description: "Strengthen Compliance with cloud-native governance frameworks."
  },
  {
    title: "Scale Globally",
    description: "Scale Globally with agile, cloud-native architectures built for growth."
  }
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Cloud Readiness Assessment",
    description: [
      { text: "Evaluate current infrastructure, applications, and workloads." },
      { text: "Identify migration complexity, risks, and compliance requirements." }
    ]
  },
  {
    id: "02",
    title: "Cloud Strategy & Roadmap",
    description: [
      { text: "Define cloud adoption goals aligned to business outcomes." },
      { text: "Choose the right model (public, private, hybrid, multi-cloud)." }
    ]
  },
  {
    id: "03",
    title: "Migration Planning & Execution",
    description: [
      { text: "Select migration method (rehost, refactor, replatform, replace)." },
      { text: "Minimize downtime with phased or hybrid approaches." }
    ]
  },
  {
    id: "04",
    title: "Cloud-Native Modernization",
    description: [
      { text: "Redesign applications to leverage serverless, containers, and microservices." },
      { text: "Integrate automation and DevOps pipelines for faster delivery." }
    ]
  },
  {
    id: "05",
    title: "Security, Compliance & Governance",
    description: [
      { text: "Implement IAM, encryption, and monitoring." },
      { text: "Align with frameworks like SOC2, HIPAA, GDPR, and FedRAMP." }
    ]
  },
  {
    id: "06",
    title: "Optimization & FinOps",
    description: [
      { text: "Monitor workloads, scale resources on demand." },
      { text: "Manage costs with FinOps governance and analytics." }
    ]
  }
];

// Platforms data
const platforms =[
  {
    title: "Cloud Platforms",
    description: "AWS (strategic partner), Microsoft Azure, Google Cloud."
  },
  {
    title: "Containers & Orchestration",
    description: "Kubernetes, Docker, OpenShift."
  },
  {
    title: "DevOps & Automation",
    description: "Terraform, Ansible, Jenkins, GitHub Actions."
  },
  {
    title: "Data Migration",
    description: "AWS DMS, Snowflake, Databricks."
  },
  {
    title: "Monitoring & Optimization",
    description: "AWS CloudWatch, Datadog, Splunk."
  }
];

const CloudTransformation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={CloudTransformBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Transformation Modernization", path: "/services/transformation-modernization/" },
          { name : "Cloud Transformation & Migration" }
        ]}
        title="Modernize your enterprise with secure, scalable, and cloud-native solutions"
        overline={`Cloud Transformation &
           Migration`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Cloud Transformation Matters"
        description="Cloud is no longer optional! It’s the foundation of agility, scalability, and innovation. Yet, many enterprises still struggle with outdated infrastructure, escalating costs, and security concerns when migrating at scale. Without a structured approach, cloud projects risk becoming expensive, disruptive, and misaligned with business goals. 
        At NAVA Software Solutions, our Cloud Transformation & Migration services help organizations adopt the cloud with confidence. We design strategies that align with enterprise objectives, minimize risk, and deliver measurable outcomes. Whether you're moving a single workload or transforming your entire IT ecosystem, NAVA ensures your journey is secure, efficient, and future-ready."
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
        overlineText="Organizations that embrace cloud transformation strategically can: "
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
       Our Approach to Cloud Transformation
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
        title="We partner with industry-leading platforms to deliver secure, scalable migrations:"
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="Our AWS Advantage"
        description="As an AWS Strategic Partner, NAVA ensures migrations leverage AWS-native services and best practices, including: 

          - AWS Cloud Adoption Framework (CAF). 

          - Migration Hub and Application Migration Service. 

          - AWS Well-Architected Framework for optimization. 

          - FinOps practices to maximize cost efficiency. "
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

export default CloudTransformation;
