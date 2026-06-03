import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Images
import GccBg from "../../../assets/Images/banner-images/services/gcc-service-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

// Common Pitfalls data
const commonPitfalls = [
  {
    title: "Slow Setup",
    description: "Traditional GCC launches take months or years, delaying impact."
  },
  {
    title: "Talent Challenges",
    description: "Recruiting and retaining the right skills at scale is difficult."
  },
  {
    title: "Compliance Complexity",
    description: "Navigating local regulations creates risk and slows progress."
  },
  {
    title: "Operational Overload",
    description: "Daily management and oversight drain leadership bandwidth."
  },
  {
    title: "Rigid Growth Models",
    description: "Scaling up or down isn’t seamless, leaving organizations stuck."
  }
];

// Opportunity bullet points
const opportunityPoints = [
  {
    title: "Rapid Market Entry",
    description: "Launch a fully functional GCC quickly with minimal overhead."
  },
  {
    title: "Cost Efficiency",
    description: "Optimize budgets with centralized infrastructure and resources."
  },
  {
    title: "Scalable Operations",
    description: "Expand seamlessly as business needs evolve."
  },
  {
    title: "Operational Control",
    description: "Gain a dedicated team aligned with your goals."
  },
  {
    title: "Strategic Focus",
    description: "Free leadership to drive growth while NAVA manages operations."
  }
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Full-Service Setup",
    description: [
      { text: "Recruit and onboard skilled professionals aligned with your culture." },
      { text: "Deliver training programs for faster productivity and quality." },
      { text: "Establish secure infrastructure, technology, and compliance frameworks." }
    ]
  },
  {
    id: "02",
    title: "Daily Operations & Performance Management",
    description: [
      { text: "Manage day-to-day performance, operations, and process optimization." },
      { text: "Track KPIs and productivity with transparent reporting." },
      { text: "Provide ongoing training and support to maintain high standards." }
    ]
  },
  {
    id: "03",
    title: "Seamless Integration with Core Operations",
    description: [
      { text: "Align GCC operations directly with your business objectives." },
      { text: "Scale resources flexibly based on demand or new initiatives." },
      { text: "Provide regular feedback loops for continuous alignment and planning." }
    ]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "Turnkey Solutions",
    description: "From setup to operations, everything managed by NAVA."
  },
  {
    title: "Strategic Alignment",
    description: "GCCs designed to directly support your business goals."
  },
  {
    title: "Scalable & Flexible",
    description: "Adapt team size and focus as priorities shift."
  },
  {
    title: "Proven Across Industries",
    description: "Success in finance, manufacturing, healthcare, and more."
  }
];

const GCC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={GccBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Engagement Models", path: "/services/engagement-models/" },
          { name: "GCC as a Service"}
        ]}
        title="Global Talent. Local Control. Scalable Growth."
        overline="GCC as a Service "
        HeroBannerClass="bg-[90%]"
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why GCC as a Service Matters"
        description="Enterprises are under constant pressure to scale faster, innovate smarter, and manage costs without losing control. Building Global Capability Centers (GCCs) offers access to worldwide talent and efficiencies, but the complexity of recruitment, compliance, and daily operations often slows success. 
        At NAVA Software Solutions, our GCC as a Service model delivers a turnkey solution for establishing and managing GCCs. From hiring and training to infrastructure and compliance, we provide full-service support—allowing you to expand globally while keeping focus on your core strategy."
      />      

       {/* Common Pitfalls Section */}

      <ServiceContentImageCard 
        title="Common Pitfalls We Solve"
        bulletPoints={commonPitfalls}
        image={manBackOffice}
        imageAlt="Professional working at office systems"
        imagePosition="right"
        bgColor="white"
      />

      {/* The Opportunity Section */}
      <ServiceOpportunityCard 
        title="The Opportunity"
        overlineText="Organizations that embrace GCC as a Service realize: "
        bulletPoints={opportunityPoints}
      />

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to GCC as a Service 
         </div>
      </div>
      
      <ServiceApproachGrid 
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
      />

      <ServiceAdvSingleCard 
        title="NAVA’s GCC Advantage"
        bulletPoints={cloudAdv}
      />

      {/* Case Studies Section */}
      <div>
      <CaseStudies />
      </div>

      {/* Footer */}
    </div>
  );
};

export default GCC;
