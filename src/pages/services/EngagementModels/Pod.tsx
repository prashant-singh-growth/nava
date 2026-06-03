import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

// Images
import PodBg from "../../../assets/Images/banner-images/services/pod-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

const commonPitfalls = [
  { title: "Siloed Teams:", description: "Fragmented delivery leads to delays and misaligned priorities." },
  { title: "Slow Iterations: ", description: "Traditional development cycles can’t keep up with market demands." },
  { title: "Quality Issues:", description: "Products rushed to market without rigorous testing." },
  { title: "Lack of Customer Focus: ", description: "Features miss the mark when customer feedback isn’t integrated." },
  { title: "Scaling Challenges:", description: "Teams and resources that can’t flex with growth or shifting goals. " },
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Accelerated Time-to-Market:", description: "Agile, sprint-based delivery speeds product launches." },
  { title: "Customer-Centric Innovation:", description: "Features aligned with real user needs and feedback." },
  { title: "High-Quality Outcomes:", description: "Continuous testing ensures reliability and performance." },
  { title: "Scalable Delivery:", description: " Teams and processes adapt seamlessly as products evolve." },
  {
    title: "Cross-Functional Collaboration:",
    description: " Design, development, and testing work together toward shared goals.",
  },
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Product-Focused Teams",
    description: [
      { text: "Assemble cross-functional teams of developers, designers, testers, and PMs." },
      { text: "Align workflows and metrics to product-specific goals." },
      { text: "Embed customer insights into the development cycle." },
    ],
  },
  {
    id: "02",
    title: "Agile, Iterative Development",
    description: [
      { text: "Use sprint-based cycles to deliver incremental value." },
      { text: "Incorporate continuous feedback for rapid course correction." },
      { text: "Scale teams and priorities as product needs evolve." },
    ],
  },
  {
    id: "03",
    title: "Quality Assurance and Testing",
    description: [
      { text: "Integrate automated and manual testing into every stage." },
      { text: "Conduct user acceptance testing to validate customer expectations." },
      { text: "Conduct user acceptance testing to validate customer expectations." },
    ],
  },
];

// Platforms data
const cloudAdv = [
  {
    title: "Customer-Centric:",
    description: "Products built with real user insights, not assumptions.",
  },
  {
    title: "Agile Expertise:",
    description: "Proven track record delivering with flexibility and speed.",
  },
  {
    title: "End-to-End Delivery:",
    description: "Teams that span design, build, test, and manage.",
  },
  {
    title: "Proven Across Industries:",
    description: "Supply chain, Oil and Gas, and beyond. ",
  },
];

const Pod = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={PodBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "Engagement Models", path: "/services/engagement-models/" },
          { name: "Product-Oriented Delivery (POD)", path: "" },
        ]}
        title="Focused teams. Faster products. Higher impact."
        overline={`Product-Oriented Delivery 
          (POD)`}
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Why Product-Oriented Delivery Matters"
        description="In a market where speed and customer alignment define success, traditional delivery models often fall short. Siloed teams, shifting priorities, and unclear ownership slow progress and dilute outcomes. For CIOs, CTOs, and product leaders, the challenge is bringing products to market quickly without compromising quality or customer focus. 
        At NAVA Software Solutions, our Product-Oriented Delivery (POD) model creates dedicated, cross-functional teams that focus solely on your product goals. By combining agile methods with customer insights, we help organizations accelerate time-to-market, ensure quality at every step, and deliver products that truly resonate with users."
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
        overlineText="Organizations that adopt POD see:"
        bulletPoints={opportunityPoints}
      />

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
        <div className="mx-auto text-center font-semibold fs-36 leading-snug">Organizations that adopt POD see:</div>
      </div>

      <ServiceApproachGrid
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
      />

      <ServiceAdvSingleCard title="NAVA’s POD Advantage" bulletPoints={cloudAdv} />

      {/* Case Studies Section */}
      <div>
        <CaseStudies />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Pod;
