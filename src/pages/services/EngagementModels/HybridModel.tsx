import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

// Images
import HybridBg from "../../../assets/Images/banner-images/services/hybrid-model-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

// Common Pitfalls data
const commonPitfalls = [
  { title: "Rigid Delivery Models:", description: "Traditional structures fail to adapt when business needs change." },
  { title: "Overstaffing or Understaffing: ", description: "Resources locked into fixed models lead to inefficiency." },
  { title: "Disconnected Teams:", description: "Siloed roles hinder collaboration and innovation." },
  {
    title: "Missed Opportunities: ",
    description: "Lack of flexibility delays responses to new priorities or markets.",
  },
  {
    title: "Scaling Challenges:",
    description: "Inability to expand or contract resources quickly creates bottlenecks. ",
  },
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Scalable Agility:", description: "Adjust team size and focus as project demands evolve. " },
  { title: "Cost Efficiency:", description: " Pay for resources when you need them, without overcommitting. " },
  { title: "Operational Stability:", description: "Maintain continuity with a dedicated core team. " },
  {
    title: "Cross-Functional Collaboration:",
    description: "Blend diverse skills for faster, more innovative outcomes.",
  },
  { title: "Responsive Growth:", description: "Expand into new markets or scale products with reduced risk. " },
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Flexible, Blended Team Structure",
    description: [
      { text: "Combine BOT’s dedicated team stability with POD’s product-driven agility." },
      { text: "Allocate resources dynamically based on immediate and long-term needs." },
      { text: "Tailor team composition to project priorities for maximum impact. " },
    ],
  },
  {
    id: "02",
    title: "Adaptive Project Management & Scalability",
    description: [
      { text: "Enable real-time pivots as requirements shift." },
      { text: "Scale resources up or down for efficiency without losing continuity." },
      { text: "Balance stable long-term goals with agile responsiveness." },
    ],
  },
  {
    id: "03",
    title: "Continuous Support & Optimization",
    description: [
      { text: "Monitor team and project performance to ensure alignment." },
      { text: "Apply process improvements to enhance efficiency and quality." },
      { text: "Provide post-project support for sustained operational success, " },
    ],
  },
];

// Platforms data
const cloudAdv = [
  {
    title: "Tailored Flexibility:",
    description: "Delivery model customized to your business’s evolving needs.",
  },
  {
    title: "Balanced Stability & Agility:",
    description: "Core team continuity with scalable flexibility.",
  },
  {
    title: "Cross-Functional Expertise:",
    description: "Teams covering development, testing, operations, and more.",
  },
  {
    title: "Proven Across Industries:",
    description: "Success in supply chain, manufacturing, and beyond. ",
  },
];

const HybridModel = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={HybridBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "Engagement Models", path: "/services/engagement-models/" },
          { name: "Hybrid Delivery Model", path: "" },
        ]}
        title="Flexibility. Stability. Scalability."
        overline="Hybrid Delivery Model"
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Why the Hybrid Delivery Model Matters"
        description="Today’s business environment demands both consistency and adaptability. Projects rarely follow a straight path, and organizations need delivery models that can pivot without losing control. Traditional models can either feel too rigid or too fragmented, leaving leaders caught between stability and agility. 
        At NAVA Software Solutions, our Hybrid Delivery Model merges the strengths of Build-Operate-Transfer (BOT) and Product-Oriented Delivery (POD). This approach offers a stable core team for continuity, alongside flexible resources that scale with evolving priorities. The result: organizations achieve both resilience and responsiveness while keeping efficiency and quality intact. "
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
        overlineText="Organizations that embrace Hybrid Delivery unlock:"
        bulletPoints={opportunityPoints}
      />

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
        <div className="mx-auto text-center font-semibold fs-36 leading-snug">Our Approach to Hybrid Delivery</div>
      </div>

      <ServiceApproachGrid
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
      />

      <ServiceAdvSingleCard title="NAVA’s Hybrid Advantage" bulletPoints={cloudAdv} />

      {/* Case Studies Section */}
      <div>
        <CaseStudies />
      </div>

      {/* Footer */}
    </div>
  );
};

export default HybridModel;
