import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Images
import BotBg from "../../../assets/Images/banner-images/services/bot-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

// Common Pitfalls data
const commonPitfalls = [
  { title: "High Upfront Costs:",description: "Heavy investment in infrastructure before proving ROI."},
  { title: "Talent Challenges:",description: " Difficulty sourcing and retaining skilled professionals."},
  { title: "Operational Burden:",description: "Overstretched leadership managing new markets and functions."},
  { title: "Slow Market Entry:",description: "Delays caused by setting up teams, systems, and processes from scratch."},
  { title: "Unclear Path to Ownership:",description: "Outsourcing without a roadmap to independence."}
];
 
// Opportunity bullet points
const opportunityPoints = [
  { title: "Faster Market Entry:",description: "Scale into new regions or capabilities without delays."},
  { title: "Lower Risk:",description: "Minimize upfront costs while gaining access to skilled teams."},
  { title: "Seamless Transition:",description: "Move from outsourced to in-house smoothly."},
  { title: "Sustained Control: ",description: "Retain long-term ownership and operational independence."},
  { title: "Scalable Growth: ",description: "Expand with flexible infrastructure and talent models."}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Build Phase",
    description: [ 
      { text : "Recruit and train a team aligned to your business needs."},
      { text : "Set up infrastructure, tools, and compliance-ready systems."},
      { text : "Align processes with your workflows for immediate productivity."}]
  },
  {
    id: "02",
    title: "Operate Phase",
    description: [ 
      { text : "Manage daily operations, performance, and project delivery" },
      { text : "Provide continuous training, coaching, and process optimization."},
      { text : "Deliver transparent reporting and performance insights."}]
  },
  {
    id: "03",
    title: "Transfer Phase",
    description: [
      { text : "Execute structured knowledge transfer to your organization."},
      { text : "Ensure a smooth, low-risk transition to full ownership."},
      { text : "Offer optional post-transfer support to sustain success. "}]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "End-to-End Expertise:",
    description: "Recruitment, operations, and transition all under one roof."
  },
  {
    title: "Proven Across Industries:",
    description: "From finance to healthcare, manufacturing to technology."
  },
  {
    title: "Scalable Expansion:",
    description: "Build lean today, expand tomorrow—at your pace."
  },
  {
    title: "Seamless Knowledge Transfer:",
    description: "Ensure continuity when you assume ownership."
  }
];

const Bot = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={BotBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Engagement Models", path: "/services/engagement-models/" },
          { name: "Build-Operate-Transfer (BOT)", path: "" }
        ]}
        title="Empowering growth with a clear path to ownership."
        overline={`Build-Operate-Transfer
           (BOT)`}
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why is BOT the Growth Model for Today"
        description="Expanding into new markets or scaling operations often comes with risk—high setup costs, talent shortages, or uncertain ROI. For CIOs, COOs, and business leaders, the challenge is building teams and infrastructure quickly without sacrificing control or long-term strategy. 
        At NAVA Software Solutions, our BOT model enables organizations to scale with flexibility and confidence. We build your team, manage operations, and seamlessly transfer ownership once you’re ready—ensuring you gain capacity and capability without unnecessary risk."
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
        overlineText="Organizations using BOT achieve:"
        bulletPoints={opportunityPoints}
      />

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
        Our Approach to BOT
         </div>
      </div>
      
      <ServiceApproachGrid 
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
      />

      <ServiceAdvSingleCard 
        title="NAVA’s BOT Advantage"
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

export default Bot;
