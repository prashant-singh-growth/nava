import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

// Images
import AiDrivenBg from "../../../assets/Images/banner-images/services/ai-driven-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Static Products:",description: "Features that fail to evolve with user needs."},
  { title: "Generic Experiences:",description: "Lack of personalization reduces engagement and loyalty."},
  { title: "Manual Workflows:",description: "Time wasted on repetitive, non-value tasks."},
  { title: "Performance Bottlenecks:",description: " Products that lag or fail under higher demand. "},
  { title: "Limited Insight:",description: " Decisions made without predictive analytics or customer foresight. "}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Predictive Insights:",description: "Products that anticipate needs and optimize outcomes."},
  { title: "Personalized Journeys:",description: " User behavior informs tailored recommendations."},
  { title: "Automation at Scale:",description: "Workflows streamlined, reducing time and cost."},
  { title: "Improved Performance:",description: "o Reliable, adaptive products built for resilience."},
  { title: "Future-Readiness:",description: " AI foundations that support continuous innovation"}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Product Assessment & Strategy",
    description: [ 
      { text : "Evaluate current capabilities and gaps."},
      { text : "Define AI integration goals aligned with business impact."},
      { text : "Develop phased AI roadmap to minimize disruption."}]
  },
  {
    id: "02",
    title: "AI-Powered Feature Enhancements ",
    description: [ 
      { text : "Predictive analytics for smarter decision-making." },
      { text : "Machine learning models for tailored user experiences."},
      { text : "Automated workflows to improve efficiency and reduce error."}]
  },
  {
    id: "03",
    title: "Data Integration & Model Training",
    description: [
      { text : "Collect and process quality data for model accuracy."},
      { text : "Train and validate models to ensure reliability"},
      { text : "Design scalable AI solutions that grow with demand. "}]
  },
  {
    id: "04",
    title: "Continuous Optimization & Support",
    description: [
      { text : "Design scalable AI solutions that grow with demand. "},
      { text : "Retrain and update models with new data."},
      { text : "Provide ongoing support to evolve features as markets change. "}]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "Customized AI Solutions:",
    description: "Tailored to your product and user base."
  },
  {
    title: "Data-Driven Evolution:",
    description: "Insights Drive Smarter, Faster Improvements."
  },
  {
    title: "Secure & Compliant: ",
    description: "AI designed for reliability in regulated industries."
  },
  {
    title: "Proven Results Across Sectors:",
    description: "Finance, logistics, healthcare, and more."
  }
];

const AIModernization = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={AiDrivenBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "AI Product Engineering", path: "/services/product-engineering/" },
          { name: "AI-Driven Product Modernization", path: "" },
        ]}
        title="Smarter features. Personalized experiences. Competitive advantage."
        overline={`AI-Driven Product
           Modernization`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why AI-Driven Product Modernization Matters"
        description="Markets evolve fast, and products that don’t adapt quickly fall behind. Outdated features, generic user experiences, and manual processes limit growth and customer satisfaction. Businesses often rely on patch fixes that add complexity instead of lasting value. 
        At NAVA Software Solutions, our AI-Driven Product Modernization services transform existing products into intelligent, data-driven platforms. By integrating machine learning and automation, we empower CIOs, CTOs, and product leaders to create smarter, more responsive solutions that meet today’s user expectations while preparing for tomorrow’s market demands."
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
        overlineText="Organizations that modernize with AI achieve:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
          Organizations that modernize with AI achieve: 
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
        title="NAVA’s Modernization Advantage"
        bulletPoints={cloudAdv}
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

export default AIModernization;
