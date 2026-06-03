import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import AgileBg from "../../..//assets/Images/banner-images/services/agile-development-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const commonPitfalls = [
  {
    "title": "Slow Release Cycles",
    "description": "Long development timelines that delay time-to-market."
  },
  {
    "title": "Misaligned Features",
    "description": "Products built without data-driven customer insights."
  },
  {
    "title": "Manual Testing Bottlenecks",
    "description": "Quality assurance processes that slow delivery."
  },
  {
    "title": "Rigid Processes",
    "description": "Inability to pivot when market or customer needs shift."
  },
  {
    "title": "Siloed Teams",
    "description": "Lack of collaboration across business, design, and engineering."
  }
]

// Opportunity bullet points
const opportunityPoints = [
  {
    "title": "Accelerate Time-to-Market",
    "description": "Launch faster with shorter development cycles."
  },
  {
    "title": "Increase Customer Engagement",
    "description": "Build features that match real-world demand."
  },
  {
    "title": "Enhance Quality",
    "description": "AI-driven test automation ensures reliability."
  },
  {
    "title": "Improve ROI",
    "description": "Deliver high-impact features while reducing rework."
  },
  {
    "title": "Scale Agility",
    "description": "Extend Agile practices across multiple teams and products."
  }
]


// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Collaborative, Cross-Functional Teams",
    description: [
      { text : "Integrated squads of engineers, designers, and product managers."},
      { text: "Continuous feedback loops with stakeholders and users. "}]      
  },
  {
    id: "02",
    title: "AI-Driven Insights for Feature Prioritization ",
    description: [
      { text : "Analyze customer behavior, feedback, and market trends."},
      { text : "Focus resources on features with maximum business impact."}]
  },
  {
    id: "03",
    title: "Agile Frameworks & Iterative Sprints",
    description: [
      { text : "Incremental delivery through Scrum and Kanban methodologies."},
      { text : "Flexibility to pivot based on real-time feedback. "}]
  },
  {
    id: "04",
    title: "End-to-End Test Automation",
    description: [
      { text : "AI-enabled tools for continuous integration and delivery."},
      { text : "Faster, more reliable releases with reduced QA overhead."}]
  },
  {
    id: "05",
    title: "Continuous Improvement & Scaling",
    description: [
      { text :"Adoption of DevOps practices for ongoing iteration. "},
      { text : "Scaling Agile across multiple products or business units."}]
  }
];

// Platforms data
const platforms = [
  {
    "title": "Agile & Collaboration Tools",
    "description": "Jira, Azure DevOps, Confluence, Slack, Miro."
  },
  {
    "title": "Test Automation",
    "description": "Selenium, Cypress, TestComplete, AWS Device Farm."
  },
  {
    "title": "DevOps & CI/CD",
    "description": "GitHub Actions, Jenkins, Terraform, Kubernetes."
  },
  {
    "title": "Analytics & AI",
    "description": "AWS SageMaker, Power BI, TensorFlow, Databricks."
  },
  {
    "title": "Cloud Platforms",
    "description": "AWS (strategic partner), Microsoft Azure, Google Cloud."
  }
];

const AgileProduct = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={AgileBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Transformation Modernization", path: "/services/transformation-modernization/" },
          { name: "Agile Digital Product Development", path: "" }
        ]}
        title="Accelerate innovation with Agile delivery, AI-driven insights, and automated quality. "
        overline={`Agile Digital 
        Product Development`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Agile Product Development Matters"
        description="Speed, flexibility, and customer alignment define the winners in today’s digital economy. Traditional development models often deliver too slowly and fail to adapt to evolving user needs. Agile methodologies change that by breaking work into iterative sprints, while AI-driven insights and automation optimize every stage from ideation to launch. 
        At NAVA Software Solutions, our Agile Digital Product Development services combine Agile, AI, and test automation to help enterprises release products faster, with higher quality and closer alignment to customer expectations. "
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
        overlineText="Organizations that adopt Agile and AI-driven product development can:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
         Our Approach to Agile Digital Product Development
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
        title="Our product engineering integrates Agile workflows with modern platforms and AWS-native services: "
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="Our AWS Advantage"
        description="As an AWS Strategic Partner, NAVA integrates AWS-native services into Agile workflows, from AI/ML models in SageMaker to automated testing in Device Farm, accelerating development while ensuring scalability, security, and performance."
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

export default AgileProduct;
