import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Images
import DataPlatformsBg from "../../../assets/Images/banner-images/services/data-pipelines-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";


import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Siloed Data Sources:",description: "Disconnected systems block enterprise-wide visibility."},
  { title: "Slow & Fragile Pipelines: ",description: " Manual ETL processes delay insights and break under load."},
  { title: "Poor Data Quality: ",description: "Inconsistent or duplicate records erode trust and decisions."},
  { title: "Limited Scalability: ",description: " Legacy warehouses can’t handle streaming or unstructured data."},
  { title: "Weak Governance:",description: " Lack of lineage and access control increases compliance risk. "}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Unified Lakehouse Architecture:",description: "One platform for structured and unstructured data."},
  { title: "Faster Insights:",description: " Automated pipelines deliver near real-time data to users."},
  { title: "Trusted Analytics: ",description: "Strong governance ensures reliable, auditable data."},
  { title: "AI Readiness: ",description: "Data foundation built for ML, predictive models, and automation."},
  { title: "Scalable Growth: ",description: "Cloud-native platforms expand seamlessly with demand."}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Platform Design & Strategy ",
    description: [ 
      { text : "Architect modern lakehouses with AWS, Azure, or GCP."},
      { text : "Define governance, security, and compliance frameworks."},
      { text : "Align platform capabilities to business analytics goals."}] 
  },
  {
    id: "02",
    title: "Pipeline Engineering",
    description: [ 
      { text : "Build automated ETL/ELT pipelines with support for both streaming and batch processing" },
      { text : "Integrate data from ERP, CRM, IoT, and cloud-native systems."},
      { text : "Ensure data quality with cleansing, validation, and enrichment steps."}]
  },
  {
    id: "03",
    title: "Analytics & Enablement",
    description: [
      { text : "Power BI, Tableau, and AWS QuickSight dashboards"},
      { text : "Democratize data with role-based access and self-service."},
      { text : "Enable AI/ML adoption by preparing data for advanced models."}]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "End-to-End Expertise:",
    description: "From ingestion to insights, we cover the full data lifecycle."
  },
  {
    title: "Cloud-Native Design:",
    description: "Platforms optimized for AWS, Azure, and GCP."
  },
  {
    title: "Governance First:",
    description: "Compliance-ready frameworks for regulated industries."
  },
  {
    title: "Proven Outcomes:",
    description: "Faster analytics delivery, reduced costs, and trusted insights."
  }
];

const advantages = [
  {
    title: "Amazon Redshift & Athena",
    description: "Scalable data warehousing and serverless queries."
  },
  {
    title: "AWS Lake Formation",
    description: "Secure, governed data lakes in days, not months."
  },
  {
    title: "AWS Glue & Step Functions",
    description: "Automated ETL/ELT pipelines with orchestration."
  },
  {
    title: "Amazon Kinesis",
    description: "Real-time streaming for IoT and event-driven workloads."
  },
  {
    title: "AWS S3 + Glacier",
    description: "Durable, compliant storage for structured/unstructured data."
  },
  {
    title: "AWS SageMaker",
    description: "ML model training and deployment on top of trusted data"
  },
  {
    title: "AWS Quicksight",
    description: "Scalable BI dashboards with embedded analytics."
  }
];


const DataPlatforms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={DataPlatformsBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Cloud & Data Solutions", path: "/services/cloud-data-solutions/" },          
          { name: "Data Platforms, Lakehouse & Pipelines" }
        ]}
        overline={`Data Platforms, 
          Lakehouse & Pipelines`}
        title="Unify your data. Accelerate insights. Scale with trust."
        HeroBannerClass="bg-[85%]"
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Data Platforms Matter"
        description="Data is the fuel of digital transformation, but many enterprises struggle to unlock its value. Legacy warehouses can’t handle real-time streams, silos block cross-team insights, and poor governance undermines trust. Without a modern data foundation, analytics stall and AI adoption remains out of reach. 
        At NAVA Software Solutions, we design cloud-native data platforms, integrating lakehouse architectures and automated pipelines that connect, clean, and prepare data for analytics and AI. We help CIOs, CDOs, and business leaders replace fragmented systems with governed, scalable platforms that turn raw data into reliable insights."
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
        overlineText="Organizations that modernize with data platforms and pipelines achieve:"
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
        title="Core AWS Services for Data Platforms"
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

export default DataPlatforms;
