import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceImageSection from "@/components/services/ServiceImageSection";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import EngagementBg from "../../assets/Images/banner-images/services/engagement-details.webp";

// Hero background image
import BoTImg from "../../assets/Images/service-engage-card1.webp";
import PoDImg from "../../assets/Images/service-engage-card2.webp";
import HybridImg from "../../assets/Images/service-engage-card3.webp";
import GCCImg from "../../assets/Images/service-engage-card4.webp";
// import businessPresentation from "@/assets/business-presentation.jpg";

// Data structures
const challenges = [
  {
    id: "01",
    title: "Control vs. Speed",
    description: "Some organizations want ownership over operations, while others prioritize rapid outcomes."
  },
  {
    id: "02",
    title: "Scaling Talent",
    description: "Accessing skilled resources quickly without long-term overhead."
  },
  {
    id: "03",
    title: "Risk & Compliance",
    description: "Balancing governance, security, and regulatory needs while innovating."
  },
  {
    id: "04",
    title: "Strategic Fit",
    description: "Ensuring delivery models support both immediate execution and long-term growth."
  }
];

const solutionCards = [
  {
    title: "BOT (Build-Operate-Transfer)",
    description: "NAVA builds and operates a dedicated delivery unit for you, managing talent, processes, and performance, then transfers ownership once it’s fully mature.",
    hasImage: true,
    image: BoTImg,
    path: "/services/engagement-models/bot"
  },
  {
    title: "POD (Product-Oriented Delivery)",
    description: "Small, Agile teams aligned to specific products or outcomes. Accelerates delivery cycles, reduces overhead, and ensures accountability for results.",
    hasImage: true,
    image: PoDImg,
    path: "/services/engagement-models/pod"
  },
  {
    title: "Hybrid Model",
    description: "Combines the strengths of BOT and POD, offering both dedicated capacity and outcome-driven delivery. Flexible, scalable, and cost-effective.",
    hasImage: true,
    image: HybridImg,
    path: "/services/engagement-models/hybrid-model"
  },
  {
    title: "GCC-as-a-Service",
    description: "NAVA establishes and manages your Global Capability Center as a service. Provides enterprise-grade infrastructure, governance, and talent without upfront setup costs.",
    hasImage: true,
    image: GCCImg,
    path: "/services/engagement-models/gcc"
  }
];

const advantages = [
  {
    title: "Flexibility & Scale",
    description: "Tailored models that grow with your business."
  },
  {
    title: "Operational Expertise",
    description: "Proven success in building and managing GCCs, PODs, and hybrid setups."
  },
  {
    title: "AI-Enabled Delivery",
    description: "Use of automation, analytics, and AI to maximize productivity and transparency."
  },
  {
    title: "Risk Mitigation",
    description: "Governance frameworks that ensure compliance and security from day one."
  },
  {
    title: "Global Reach, Local Relevance",
    description: "Expertise in setting up and scaling global delivery centers aligned with client needs."
  }
];

const EngagementModels = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={EngagementBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Engagement Models" }
        ]}
        overline="Engagement Models"
        title="Flexible partnership models designed to scale your business goals."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Partnering for Success, Your Way"
        description={
          <>
            Every enterprise has unique objectives, constraints, and timelines. A one-size-fits-all delivery model doesn’t work. At NAVA Software Solutions, our <strong>Engagement Models</strong> are designed to give clients the flexibility they need to innovate faster, scale efficiently, and manage risk effectively.
            <br></br><br></br>Whether you want to set up a GCC, scale product development, or adopt a hybrid structure, NAVA offers adaptive models that align talent, processes, and technology with your business vision.
          </>
        }
      />

      <ServiceFeatureGrid 
        title="Why Engagement Models Matter"
        features={challenges}
        gridCols="2x2"
        className="pt-0"
      />

      {/* Market Direction Section */}
      <ServiceImageSection 
        title="Where the Market is Heading"
        bulletPoints={[
          "BOT models will rise in popularity as enterprises establish new GCCs without heavy upfront risk.",
          "POD delivery models will dominate product engineering, aligning teams to business outcomes rather than tasks.",
          "Hybrid models will remain the preferred option for organizations balancing flexibility with cost.",
          "GCC-as-a-Service will become a strategic choice for global companies expanding operations without building from scratch."
        ]}
        // image={businessPresentation}
        imageAlt="Business presentation"
        imagePosition="right"
      />

      {/* Solutions Section */}
      <ServiceSolutionCards 
        title="Our Engagement Models"
        cards={solutionCards}
      />

      {/* Advantage Section */}
      <ServiceAdvantageCards 
        title="Why Choose NAVA"
        advantages={advantages}
        WhyChooseNava="bg-page"
      />

      {/* Case Studies Section */}
      <div>
      <CaseStudies />
      </div>

      {/* Footer */}
    </div>
  );
};

export default EngagementModels;