import { lazy, Suspense, useEffect } from "react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";

// Below-the-fold: chunk-split + viewport-gated, with idle prefetch.
const contentImageCardImport = () => import("@/components/services/ServiceContentImageCard");
const opportunityCardImport = () => import("@/components/services/ServiceOpportunityCard");
const approachGridImport = () => import("@/components/services/ServiceApproachGrid");
const advSingleCardImport = () => import("@/components/services/ServiceAdvSingleCard");
const caseStudiesImport = () => import("@/components/CaseStudies");

const ServiceContentImageCard = lazy(contentImageCardImport);
const ServiceOpportunityCard = lazy(opportunityCardImport);
const ServiceApproachGrid = lazy(approachGridImport);
const ServiceAdvSingleCard = lazy(advSingleCardImport);
const CaseStudies = lazy(caseStudiesImport);

type IdleCb = (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void;
type WindowWithIdle = Window & {
  requestIdleCallback?: (cb: IdleCb, opts?: { timeout: number }) => number;
};

function prefetchSectionChunks() {
  [
    contentImageCardImport,
    opportunityCardImport,
    approachGridImport,
    advSingleCardImport,
    caseStudiesImport,
  ].forEach((t) => {
    t().catch(() => {});
  });
}

// Images
import EndDevBg from "../../../assets/Images/banner-images/services/end-end-development-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

// Common Pitfalls data
const commonPitfalls = [
  {
    title: "Unclear Product Vision",
    description: "Lack of research and prioritization leads to unfocused features."
  },
  {
    title: "Slow Iterations",
    description: "Traditional models delay releases and miss market windows."
  },
  {
    title: "Quality Gaps",
    description: "Weak QA processes cause downtime, errors, and customer churn."
  },
  {
    title: "Limited Scalability",
    description: "Rigid architectures can’t support future growth."
  },
  {
    title: "Post-Launch Gaps",
    description: "Products stall without ongoing support and feedback loops."
  }
];

// Opportunity bullet points
const opportunityPoints = [
  {
    title: "Faster Time-to-Market",
    description: "Agile sprints and test automation accelerate delivery."
  },
  {
    title: "User-Centric Products",
    description: "Customer insights guide design and iteration."
  },
  {
    title: "High-Quality Outcomes",
    description: "Continuous QA ensures performance and reliability."
  },
  {
    title: "Scalable Platforms",
    description: "Flexible architectures that evolve with your business."
  },
  {
    title: "Sustained Success",
    description: "Post-launch support drives adoption and engagement."
  }
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Product Ideation & Concept Validation",
    description: [
      { text: "Market research and user insights to define the right product fit." },
      { text: "Feature prioritization and roadmap design aligned with strategy." },
      { text: "Interactive prototypes for early validation with users and stakeholders." }
    ]
  },
  {
    id: "02",
    title: "Agile Development & AI Optimization",
    description: [
      { text: "Iterative sprints for faster feedback and continuous improvement." },
      { text: "AI-driven insights to optimize features based on user behavior." },
      { text: "Flexible architectures that support scalability and future innovation." }
    ]
  },
  {
    id: "03",
    title: "Quality Assurance & Test Automation",
    description: [
      { text: "Automated and manual testing built into every sprint." },
      { text: "CI/CD pipelines to ensure smooth, reliable deployments." },
      { text: "Security and performance testing for resilience at scale." }
    ]
  },
  {
    id: "04",
    title: "Product Launch & Beyond",
    description: [
      { text: "Go-to-market planning for adoption and visibility." },
      { text: "Ongoing maintenance and feature enhancements." },
      { text: "Feedback-driven iteration to evolve the product post-launch." }
    ]
  }
];

// Platforms data
const cloudAdv = [
  {
    title: "Comprehensive Lifecycle",
    description: "From ideation to launch and beyond."
  },
  {
    title: "Agile + AI",
    description: "Faster delivery powered by customer insights."
  },
  {
    title: "Security & Compliance",
    description: "Built-in safeguards for regulated industries."
  },
  {
    title: "Proven Across Industries",
    description: "Healthcare, finance, logistics, and more."
  }
];

const EndToEnd = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as WindowWithIdle;
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(prefetchSectionChunks, { timeout: 3000 });
    } else {
      setTimeout(prefetchSectionChunks, 1500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={EndDevBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "AI Product Engineering", path: "/services/product-engineering/" },
          { name: "End-to-End Product Development", path: "" }
        ]}
        overline={`End-to-End 
          Product Development`}
        title="From concept to launch. With speed, quality, and customer focus."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why End-to-End Product Development Matters"
        description="In today’s competitive landscape, building a product is more than just writing code—it’s about solving real customer problems, aligning with business goals, and delivering at speed. Yet, many organizations face stalled launches, misaligned features, or products that fail to engage users. 
        At NAVA Software Solutions, our End-to-End Product Development service guides you through every stage of the lifecycle. From ideation and prototyping to agile development, testing, and post-launch optimization, we help CIOs, CTOs, and product leaders deliver high-quality solutions that resonate with customers and scale with demand."
      />      

       {/* Common Pitfalls Section */}
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="split" height={500} />}>
        <Suspense fallback={<SectionSkeleton variant="split" height={500} />}>
          <ServiceContentImageCard
            title="Common Pitfalls We Solve"
            bulletPoints={commonPitfalls}
            image={manBackOffice}
            imageAlt="Professional working at office systems"
            imagePosition="right"
            bgColor="white"
          />
        </Suspense>
      </LazySection>

      {/* The Opportunity Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <Suspense fallback={<SectionSkeleton variant="cards" height={450} />}>
          <ServiceOpportunityCard
            title="The Opportunity"
            overlineText="Organizations that embrace End-to-End Product Development achieve: "
            bulletPoints={opportunityPoints}
          />
        </Suspense>
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
        <div className="mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to Product Development
        </div>
      </div>

      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <Suspense fallback={<SectionSkeleton variant="cards" height={600} />}>
          <ServiceApproachGrid
            title=""
            features={approachFeatures}
            gridCols="2x2"
            className="lg:!pt-[var(--size-10)] !pt-[10px] !pb-0"
          />
        </Suspense>
      </LazySection>

      <LazySection minHeight={400} fallback={<SectionSkeleton variant="cards" height={400} />}>
        <Suspense fallback={<SectionSkeleton variant="cards" height={400} />}>
          <ServiceAdvSingleCard
            title="NAVA’s Product Development Advantage"
            bulletPoints={cloudAdv}
          />
        </Suspense>
      </LazySection>

      {/* Case Studies Section */}
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
        <Suspense fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </Suspense>
      </LazySection>

      {/* Footer */}
    </div>
  );
};

export default EndToEnd;
