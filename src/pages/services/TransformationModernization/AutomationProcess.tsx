import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import AutomationBg from "../../../assets/Images/banner-images/services/automation-opt-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const commonPitfalls = [
  {
    title: "Static Automation",
    description: "Processes that can’t adjust to dynamic conditions.",
  },
  {
    title: "Data Overload",
    description: "Critical insights buried in silos and unstructured systems.",
  },
  {
    title: "Manual Decision Points",
    description: "Human bottlenecks slowing down intelligent operations.",
  },
  {
    title: "Visibility Gaps",
    description: "No unified view of performance, risk, or optimization potential.",
  },
  {
    title: "Fragmented Intelligence",
    description: "Disconnected models and automations working in isolation.",
  },
];

// Opportunity bullet points
const opportunityPoints = [
  {
    title: "Think and Act Autonomously",
    description: "Deploy AI agents that analyze data, make contextual decisions, and execute end-to-end actions.",
  },
  {
    title: "Learn Continuously",
    description: "Every decision becomes a data point for improvement through reinforcement and feedback loops.",
  },
  {
    title: "Scale Intelligence",
    description: "Agents collaborate across functions, adapting to new domains without re-engineering.",
  },
  {
    title: "Enhance Accuracy and Governance",
    description: "Every action is explainable, traceable, and secure.",
  },
  {
    title: "Unlock Predictive Insight",
    description: "Turn operational data into foresight with real-time analytics and simulation.",
  },
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Process Understanding",
    description: [
      { text: "Map workflows and decision points using AI-driven insights." },
      { text: "Identify where Gen AI and autonomy can add real-time adaptability." },
    ],
  },
  {
    id: "02",
    title: "Agent Architecture Design",
    description: [
      { text: "Define perception, reasoning, and action layers with embedded Gen AI." },
      { text: "Design human–AI collaboration loops for control and trust." },
    ],
  },
  {
    id: "03",
    title: "Cognitive Agent Development",
    description: [
      { text: "Build agents that analyze, reason, and generate contextual outputs." },
      { text: "Deploy on AWS Bedrock and SageMaker for scalable intelligence." },
    ],
  },
  {
    id: "04",
    title: "Orchestration & Collaboration",
    description: [
      { text: "Enable multi-agent coordination and adaptive task handling." },
      { text: "Integrate seamlessly with enterprise systems and cloud workflows." },
    ],
  },
  {
    id: "05",
    title: "Governance & Observability",
    description: [
      { text: "Ensure explainability, compliance, and ethical AI operations." },
      { text: "Monitor Gen AI outputs through transparent dashboards." },
    ],
  },
  {
    id: "06",
    title: "Continuous Adaptation",
    description: [
      { text: "Establish feedback loops for ongoing learning and improvement." },
      { text: "Use Gen AI to simulate and optimize evolving workflows." },
    ],
  },
];

// Platforms data
const platforms = [
  {
    title: "AI Core",
    description: "AWS Bedrock, SageMaker, Comprehend, Textract, and OpenSearch.",
  },
  {
    title: "Reasoning & Orchestration",
    description: "LangChain, LlamaIndex, custom NAVA Agent Framework.",
  },
  {
    title: "Perception Layer",
    description: "Computer Vision, NLP, and Sensor Intelligence models.",
  },
  {
    title: "Data & Cloud Infrastructure",
    description: "AWS Lambda, ECS, DynamoDB, S3, Kinesis, Step Functions.",
  },
  {
    title: "Monitoring & Governance",
    description: "SageMaker Model Monitor, CloudWatch, IAM, GuardDuty.",
  },
  {
    title: "Security & Compliance",
    description: "SOC2 / GDPR-aligned, explainable and traceable AI actions.",
  },
];

const AutomationProcess = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={AutomationBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "Transformation Modernization", path: "/services/transformation-modernization/" },
          { name: "Agentic AI Automation", path: "" },
        ]}
        title="Empower your enterprise with autonomous AI agents that analyze, decide, and act."
        overline={`Agentic AI Automation`}
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Why Agentic AI Automation Matters"
        description="Traditional automation can only follow instructions; it can’t understand changing conditions, exceptions, or intent. Agentic AI Automation changes that. By combining reasoning AI, data intelligence, and autonomous decision-making, NAVA builds systems that adapt in real time — orchestrating people, processes, and data with minimal human intervention. Our agentic frameworks are designed to think like domain experts, learn from every outcome, and continuously improve enterprise efficiency and accuracy."
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
        overlineText="With a robust AI strategy, enterprises can: "
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="industries-service-section-top bg-page">
        <div className="mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to Agentic AI Automation
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
        title="We combine agentic intelligence with AI-driven observability to ensure continuous, compliant, and auditable operations."
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection
        title="Our AWS Advantage"
        description="As an AWS Advanced Partner, NAVA builds agentic automation on a foundation of AWS-native AI and data services. From SageMaker for model training to Bedrock for generative reasoning, our solutions transform enterprise operations into intelligent, self-optimizing ecosystems. We don’t automate steps — we build agents that understand goals."
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

export default AutomationProcess;
