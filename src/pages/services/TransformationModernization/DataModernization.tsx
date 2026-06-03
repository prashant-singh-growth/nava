import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import DataAnalyticsBg from "../../../assets/Images/banner-images/services/data-modern-analytics-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const commonPitfalls = [
  {
    "title": "Data Silos",
    "description": "Disconnected sources that prevent a single version of truth."
  },
  {
    "title": "Legacy Platforms",
    "description": "Expensive, slow, and non-scalable data warehouses."
  },
  {
    "title": "Limited Analytics",
    "description": "Reliance on manual reporting instead of predictive insights."
  },
  {
    "title": "Security & Compliance Risks",
    "description": "Poor governance of sensitive or regulated data."
  },
  {
    "title": "Low Data Literacy",
    "description": "Teams are unable to leverage modern tools effectively."
  }
];

// Opportunity bullet points
const opportunityPoints = [
  {
    "title": "Faster Decisions",
    "description": "Real-time analytics replace static reporting."
  },
  {
    "title": "Scalable Growth",
    "description": "Cloud-native data platforms handle expanding workloads."
  },
  {
    "title": "AI Enablement",
    "description": "Modern data fuels machine learning and predictive insights."
  },
  {
    "title": "Regulatory Compliance",
    "description": "Secure, governed platforms reduce risk."
  },
  {
    "title": "Competitive Advantage",
    "description": "Unlock innovation through customer and operational insights."
  }
];

// Our Approach features
const approachFeatures = [
  {
    "id": "01",
    "title": "Data Landscape Assessment",
    "description": [
      { "text": "Audit existing platforms, pipelines, and reporting processes." },
      { "text": "Identify performance gaps, risks, and modernization opportunities." }
    ]
  },
  {
    "id": "02",
    "title": "Architecture & Platform Design",
    "description": [
      { "text": "Build scalable cloud-native data platforms." },
      { "text": "Design lakehouse, warehouse, or hybrid architectures." }
    ]
  },
  {
    "id": "03",
    "title": "Migration & Modernization",
    "description": [
      { "text": "Move from legacy warehouses to modern platforms like Snowflake or Databricks." },
      { "text": "Deploy serverless and streaming capabilities." }
    ]
  },
  {
    "id": "04",
    "title": "Analytics & AI Integration",
    "description": [
      { "text": "Enable BI, predictive analytics, and machine learning." },
      { "text": "Embed dashboards and insights into workflows." }
    ]
  },
  {
    "id": "05",
    "title": "Governance & Security",
    "description": [
      { "text": "Implement master data management, lineage, and access controls." },
      { "text": "Ensure compliance with GDPR, HIPAA, and industry standards." }
    ]
  },
  {
    "id": "06",
    "title": "Adoption & Training",
    "description": [
      { "text": "Upskill teams on new tools." },
      { "text": "Foster a culture of data-driven decision-making." }
    ]
  }
];

// Platforms data
const platforms = [
  {
    "title": "Cloud Data Platforms",
    "description": "AWS (strategic partner), Azure Synapse, Google BigQuery."
  },
  {
    "title": "Lakehouse & Warehousing",
    "description": "Snowflake, Databricks, Redshift."
  },
  {
    "title": "ETL/ELT & Pipelines",
    "description": "AWS Glue, Apache Spark, Talend, Informatica."
  },
  {
    "title": "Analytics & BI",
    "description": "Power BI, Tableau, Looker."
  },
  {
    "title": "AI/ML",
    "description": "AWS SageMaker, Azure ML, TensorFlow."
  },
  {
    "title": "Governance & Security",
    "description": "Collibra, Alation, OneTrust, AWS Lake Formation."
  }
];

const DataModernization = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={DataAnalyticsBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Transformation Modernization", path: "/services/transformation-modernization/" },
          { name: "Data Modernization & Analytics", path: "" }
        ]}
        title="Unlock the power of your data with modern platforms and intelligent insights."
        overline={`Data Modernization &
         Analytics`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Data Modernization Matters"
        description="Data is the lifeblood of digital enterprises, but too often it’s trapped in legacy systems, disconnected silos, and outdated architectures. The result: slow decisions, compliance risks, and missed opportunities for innovation. 
        NAVA Software Solutions helps enterprises modernize their data ecosystems to be cloud-native, AI-ready, and analytics-driven. Our Data Modernization & Analytics services deliver platforms that unify data, democratize access, and enable leaders to make real-time, data-driven decisions. "
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
        overlineText="Enterprises that modernize data realize transformative benefits: "
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
        Our Approach to Data Modernization & Analytics
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
        title="We bring partnerships and expertise in modern data ecosystems:"
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="Our AWS Advantage"
        description="As an AWS Strategic Partner, NAVA helps clients build secure, scalable lakehouses and analytics platforms using AWS-native services such as Redshift, Glue, and SageMaker, accelerating modernization with best practices and FinOps efficiency."
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

export default DataModernization;
