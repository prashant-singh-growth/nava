import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import CustomerBg from "../../../assets/Images/banner-images/services/customer-transformation-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  {
    "title": "Siloed Interactions",
    "description": "Customers receive inconsistent service across channels."
  },
  {
    "title": "Generic Journeys",
    "description": "A lack of personalization erodes trust and loyalty."
  },
  {
    "title": "Slow Responses",
    "description": "Manual processes delay resolutions and frustrate customers."
  },
  {
    "title": "Fragmented Data",
    "description": "Insights locked in disconnected systems."
  },
  {
    "title": "Reactive Approach",
    "description": "CX seen as customer service, not a strategic differentiator."
  }
];


// Opportunity bullet points
const opportunityPoints = [
  {
    "title": "Boost Satisfaction & Loyalty",
    "description": "Tailored, relevant interactions build trust."
  },
  {
    "title": "Increase Retention & Revenue",
    "description": "Seamless CX improves repeat business."
  },
  {
    "title": "Drive Efficiency",
    "description": "Intelligent automation reduces response times and costs."
  },
  {
    "title": "Strengthen Omnichannel Presence",
    "description": "Consistent experiences across digital and physical touchpoints."
  },
  {
    "title": "Unlock Innovation",
    "description": "Data-driven insights inform new services and offerings."
  }
];

// Our Approach features
const approachFeatures = [
  {
    "id": "01",
    "title": "Customer Journey Mapping",
    "description": [
      { "text": "Identify friction points across digital and physical touchpoints." },
      { "text": "Redesign journeys for convenience, speed, and personalization." }
    ]
  },
  {
    "id": "02",
    "title": "Data-Driven Personalization",
    "description": [
      { "text": "Harness analytics and AI to predict needs and tailor offers." },
      { "text": "Enable contextual, one-to-one interactions." }
    ]
  },
  {
    "id": "03",
    "title": "Omnichannel Integration",
    "description": [
      { "text": "Build seamless experiences across web, mobile, social, and in-person." },
      { "text": "Ensure continuity as customers move between channels." }
    ]
  },
  {
    "id": "04",
    "title": "Intelligent Automation",
    "description": [
      { "text": "Deploy AI chatbots, self-service portals, and automated workflows." },
      { "text": "Free human agents to focus on high-value interactions." }
    ]
  },
  {
    "id": "05",
    "title": "Governance & Measurement",
    "description": [
      { "text": "Define KPIs for satisfaction, retention, and engagement." },
      { "text": "Establish governance for continuous CX improvement." }
    ]
  }
];

// Platforms data
const platforms = [
  {
    "title": "CX & CRM Platforms",
    "description": "Salesforce, Microsoft Dynamics 365, Zendesk, ServiceNow."
  },
  {
    "title": "Cloud Platforms",
    "description": "AWS (strategic partner), Azure, Google Cloud."
  },
  {
    "title": "AI & Personalization",
    "description": "AWS Personalize, SageMaker, Microsoft Cognitive Services."
  },
  {
    "title": "Analytics & Insights",
    "description": "Tableau, Power BI, Google Analytics."
  },
  {
    "title": "Automation Tools",
    "description": "UiPath, AWS Lex, Automation Anywhere."
  }
]


const CustomerTransformation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={CustomerBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Transformation Modernization", path: "/services/transformation-modernization/" },
          { name: "Customer Experience Transformation ", path: "" }
        ]}
        title="Create seamless, personalized, and digital-first experiences that build loyalty."
        overline={`Customer Experience 
          Transformation`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why CX Transformation Matters "
        description="Customer experience (CX) is now the ultimate differentiator. In a world where digital channels are the primary point of interaction, customers expect personalized, frictionless, and responsive engagement at every touchpoint. Enterprises that fail to meet these expectations risk losing loyalty and revenue. 
        NAVA Software Solutions helps organizations transform customer journeys with data-driven personalization, omnichannel delivery, and intelligent automation. We combine strategy, design, and technology to create experiences that delight customers, deepen relationships, and deliver measurable business outcomes. "
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
        overlineText="When customer experience is transformed, enterprises can: "
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
       Our Approach to CX Transformation
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
        title="We integrate modern CX platforms with AI and cloud to create scalable, adaptive customer journeys: "
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="Our AWS Advantage"
        description="As an AWS Strategic Partner, NAVA leverages AWS-native services, including Personalize, Connect, and Lex, to power personalization, omnichannel engagement, and AI-driven self-service at scale."
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

export default CustomerTransformation;
