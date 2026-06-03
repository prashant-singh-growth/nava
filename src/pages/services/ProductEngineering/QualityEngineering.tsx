import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

// Images
import QualityEnggBg from "../../../assets/Images/banner-images/services/quality-test-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  {
    "title": "Slow Testing Cycles",
    "description": "Manual QA delays releases and creates bottlenecks."
  },
  {
    "title": "High Defect Rates",
    "description": "Bugs and errors reach production, eroding trust."
  },
  {
    "title": "Compliance Risks",
    "description": "Lack of security and regulatory testing leaves gaps."
  },
  {
    "title": "Scalability Limits",
    "description": "Systems fail under peak load without proper performance testing."
  },
  {
    "title": "Inconsistent Quality",
    "description": "Testing isn’t repeatable, leading to unpredictable results."
  }
]

// Opportunity bullet points
const opportunityPoints = [
  {
    "title": "40% Faster Releases",
    "description": "Automation accelerates regression testing and CI/CD cycles."
  },
  {
    "title": "Reduced Defects",
    "description": "Continuous testing ensures issues are caught earlier."
  },
  {
    "title": "Improved Security",
    "description": "Proactive vulnerability assessments and compliance checks."
  },
  {
    "title": "Higher User Satisfaction",
    "description": "Flawless experiences that drive adoption and retention."
  },
  {
    "title": "Scalable Confidence",
    "description": "Products that perform reliably under any demand."
  }
]


// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Comprehensive Test Strategy & Planning ",
    description: [ 
      { text : "Requirements and risk-based analysis for tailored QA."},
      { text : "Automation feasibility assessment to maximize ROI."},
      { text : "Reusable test cases covering functional, performance, and security."}]
  },
  {
    id: "02",
    title: "Automated Testing & Continuous Integration ",
    description: [ 
      { text : "Regression testing frameworks for faster release cycles." },
      { text : "CI/CD pipelines for smooth, repeatable deployments."},
      { text : "Load and performance testing to eliminate bottlenecks."}]
  },
  {
    id: "03",
    title: "Security & Compliance Testing ",
    description: [
      { text : "Vulnerability assessments to protect data and applications."},
      { text : "Automated compliance validation for regulated industries."},
      { text : "User feedback loops to refine test coverage."}]
  },
  {
    id: "04",
    title: "SPost-Launch Monitoring & Optimization ",
    description: [
      { text : "Real-time monitoring to detect and resolve issues quickly."},
      { text : "Requirements and risk-based analysis for tailored QA."},
      { text : "Continuous script and test optimization for evolving needs. "}]
  }
];

// Platforms data
const cloudAdv = [
  {
    "title": "Automation-First",
    "description": "Reduce manual testing effort while increasing coverage."
  },
  {
    "title": "Secure & Compliant",
    "description": "QA processes aligned with industry regulations."
  },
  {
    "title": "Faster Time-to-Market",
    "description": "Agile and automated pipelines accelerate releases."
  },
  {
    "title": "Proven Across Industries",
    "description": "Logistics, finance, healthcare, and more."
  }
];


const advantages = [
  {
    "title": "AWS Device Farm",
    "description": "Automated testing across real devices and browsers."
  },
  {
    "title": "AWS CodeBuild & CodePipeline",
    "description": "CI/CD pipelines with integrated testing."
  },
  {
    "title": "AWS CloudWatch & X-Ray",
    "description": "Monitoring and tracing for performance bottlenecks."
  },
  {
    "title": "AWS Config & Audit Manager",
    "description": "Compliance validation and audit-ready reporting."
  },
  {
    "title": "Amazon Inspector",
    "description": "Automated vulnerability scanning for applications."
  },
  {
    "title": "AWS Lambda",
    "description": "Event-driven automation for continuous testing workflows."
  }
];


const QualityEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={QualityEnggBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "AI Product Engineering", path: "/services/product-engineering/" },
          { name: "Quality Engineering & Test Automation", path: "" }
        ]}
        overline={`Quality Engineering &
         Test Automation`}
        title="Fewer errors. Faster releases. Flawless performance."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Quality Engineering & Test Automation Matters"
        description="In a market where speed and reliability are critical, products cannot afford downtime, bugs, or performance gaps. Manual testing slows delivery and leaves room for error, while compliance risks rise as complexity grows. Many organizations lack a structured approach to QA, causing issues to slip into production and impacting customer trust. 
        At NAVA Software Solutions, our Quality Engineering & Test Automation services ensure your products are secure, reliable, and market-ready. By combining advanced test automation, continuous integration pipelines, and rigorous quality frameworks, we help CIOs, CTOs, and product leaders accelerate delivery while maintaining confidence in every release."
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
        overlineText="Organizations that invest in quality engineering achieve:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
        Our Approach to Quality Engineering & Test Automation 
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
        title="NAVA’s QA Advantage"
        bulletPoints={cloudAdv}
      />
      </LazySection>

      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Core AWS Services for Quality Engineering & Test Automation"
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

export default QualityEngineering;
