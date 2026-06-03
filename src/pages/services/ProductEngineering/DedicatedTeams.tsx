import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

// Images
import EmbeddedBg from "../../../assets/Images/banner-images/services/embedded-teams-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  {
    title: "Slow Hiring Processes",
    description: "Months-long recruitment cycles delay growth."
  },
  {
    title: "Skill Gaps",
    description: "Teams lack expertise in specialized technologies."
  },
  {
    title: "Siloed Outsourcing",
    description: "External partners don’t align with your processes."
  },
  {
    title: "Rigid Staffing Models",
    description: "Resources can’t scale with fluctuating demand."
  },
  {
    title: "Knowledge Loss",
    description: "Lack of continuity when external vendors rotate staff."
  }
];

// Opportunity bullet points
const opportunityPoints = [
  {
    title: "Rapid Scalability",
    description: "Add specialized expertise quickly, without hiring delays."
  },
  {
    title: "Seamless Integration",
    description: "Teams work within your workflows and tools."
  },
  {
    title: "Cost Efficiency",
    description: "Flexible staffing without long-term overheads."
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Developers, testers, and PMs aligned with your goals."
  },
  {
    title: "Sustained Knowledge Retention",
    description: "Embedded teams transfer expertise directly into your organization."
  }
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Needs Assessment & Team Selection",
    description: [
      { text: "Align with your business goals, project scope, and culture." },
      { text: "Handpick specialists with the right technical expertise." },
      { text: "Provide flexible structures—from dedicated squads to mixed-role teams." }
    ]
  },
  {
    id: "02",
    title: "Integration & Onboarding",
    description: [
      { text: "Seamless alignment with your tools, processes, and communication flows." },
      { text: "Customized onboarding to accelerate collaboration." },
      { text: "Transparent updates and reporting for continuous alignment." }
    ]
  },
  {
    id: "03",
    title: "Continuous Support & Long-Term Collaboration",
    description: [
      { text: "Dedicated account managers ensure consistent delivery." },
      { text: "Knowledge transfer reduces dependency risks." },
      { text: "Teams evolve with your needs for sustainable growth." }
    ]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "Tailored Fit",
    description: "Teams matched to your goals and culture."
  },
  {
    title: "Agile & Scalable",
    description: "Resources that adapt as priorities change."
  },
  {
    title: "Specialized Expertise",
    description: "Deep skills across product engineering and transformation."
  },
  {
    title: "Proven Across Industries",
    description: "Finance, healthcare, manufacturing, supply chain, and more."
  }
];

const advantages = [
  {
    title: "AWS CodeCommit, CodeBuild & CodePipeline",
    description: "Seamless CI/CD pipelines with integrated testing."
  },
  {
    title: "Amazon ECS & EKS",
    description: "Containerized workloads for agile product engineering."
  },
  {
    title: "AWS CloudWatch & X-Ray",
    description: "Continuous monitoring and troubleshooting."
  },
  {
    title: "AWS IAM & KMS",
    description: "Secure identity and encryption management."
  },
  {
    title: "AWS CloudFormation",
    description: "Infrastructure as Code (IaC) for scalable, repeatable deployments."
  },
  {
    title: "Amazon WorkSpaces & AppStream",
    description: "Secure remote collaboration for distributed embedded teams."
  }
];

const DedicatedTeams = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={EmbeddedBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "AI Product Engineering", path: "/services/product-engineering/" },
          { name: "Embedded Teams " }
        ]}
        overline="Embedded Teams "
        title="Integrated expertise. Scalable support. Seamless collaboration."
        HeroBannerClass="md:!bg-[center_top] bg-[85%]" 
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Embedded Teams Matter"
        description="Building the right capabilities in-house takes time—and in today’s fast-moving market, delays cost opportunity. Traditional outsourcing can lack alignment, while hiring full-time teams slows down scalability. Leaders need a model that provides specialized skills, integrates seamlessly with internal processes, and adapts to evolving priorities. 
        At NAVA Software Solutions, our Embedded Teams service bridges this gap. Acting as a natural extension of your organization, our teams bring dedicated expertise across development, testing, product engineering, and digital transformation. We help CIOs, CTOs, and product leaders expand capabilities quickly, without sacrificing alignment, quality, or control. "
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
        overlineText="Organizations that adopt embedded teams gain: "
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
        Our Approach to Embedded Teams 
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
        title="NAVA’s Embedded Advantage"
        bulletPoints={cloudAdv}
      />
      </LazySection>

      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Core AWS Services for Embedded Teams"
        advantages={advantages}
        WhyChooseNava="bg-page"
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

export default DedicatedTeams;
