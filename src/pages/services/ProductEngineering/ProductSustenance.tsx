import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServiceAdvSingleCard from "@/components/services/ServiceAdvSingleCard";

// Images
import ProdSustenanceBg from "../../../assets/Images/banner-images/services/product-support-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  {
    "title": "Reactive Maintenance",
    "description": "Issues are addressed only after they disrupt users."
  },
  {
    "title": "Feature Stagnation",
    "description": "Products fail to evolve with user expectations."
  },
  {
    "title": "Security Gaps",
    "description": "Unchecked vulnerabilities lead to compliance risks."
  },
  {
    "title": "Scalability Issues",
    "description": "Systems that struggle to grow with demand."
  },
  {
    "title": "High Support Costs",
    "description": "Frequent reactive fixes lead to increased long-term expenses."
  }
]


// Opportunity bullet points
const opportunityPoints =[
  {
    "title": "Higher Reliability",
    "description": "Products optimized for stability and uptime."
  },
  {
    "title": "Improved Security",
    "description": "Regular audits and patches close compliance gaps."
  },
  {
    "title": "Extended Lifecycle",
    "description": "Updates and enhancements keep products competitive and relevant."
  },
  {
    "title": "Lower Support Costs",
    "description": "Proactive fixes reduce the burden of reactive issues."
  },
  {
    "title": "Stronger User Retention",
    "description": "Continuous improvements maintain engagement."
  }
]

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Proactive Maintenance & Updates",
    description: [ 
      { text : "Continuous monitoring to identify performance gaps."},
      { text : "Scheduled patches and upgrades to improve stability."},
      { text : "Feature refinement based on evolving standards."}]
  },
  {
    id: "02",
    title: "Risk Assessment & Prioritization",
    description: [ 
      { text : "Structured collection and analysis of user feedback." },
      { text : "Iterative enhancements guided by real-world usage."},
      { text : "A/B testing to validate feature impact."}]
  },
  {
    id: "03",
    title: "Performance Optimization & Security",
    description: [
      { text : "Load and performance tuning for smooth operation."},
      { text : "Regular security audits and compliance validation."},
      { text : "Scalability improvements to support business growth."}]
  },
  {
    id: "04",
    title: "Long-Term Roadmap & Support",
    description: [
      { text : "Future-proofing strategies aligned with business goals."},
      { text : "Feature evolution planning for sustained competitiveness."},
      { text : "Dedicated technical support for uninterrupted service."}]
  }
];

// Platforms data
const cloudAdv = [
    {
      "title": "Proactive Care",
      "description": "Prevent issues before they impact users."
    },
    {
      "title": "User-Centered Evolution",
      "description": "Features guided by feedback and data."
    },
    {
      "title": "Secure & Scalable",
      "description": "Ongoing updates built with compliance in mind."
    },
    {
      "title": "Proven Across Industries",
      "description": "Finance, manufacturing, healthcare, and more."
    }
  ];

  const advantages = [
    
      {
        "title": "AWS CloudWatch & X-Ray",
        "description": "Continuous monitoring and performance tuning."
      },
      {
        "title": "AWS Systems Manager",
        "description": "Automated patching and operational insights."
      },
      {
        "title": "AWS Inspector",
        "description": "Regular vulnerability assessments for stronger security."
      },
      {
        "title": "AWS Config & Audit Manager",
        "description": "Compliance enforcement and reporting."
      },
      {
        "title": "AWS Auto Scaling",
        "description": "Ensure applications grow seamlessly with demand."
      },
      {
        "title": "AWS Backup & Disaster Recovery",
        "description": "Automated protection for long-term resilience."
      }
        
  ]

const ProductSustenance = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={ProdSustenanceBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "AI Product Engineering", path: "/services/product-engineering/" },
          { name: "Product Sustenance & Support", path: "" }
        ]}
        overline={`Product Sustenance &
         Support`}
        title="Longer lifecycle. Smarter updates. Ongoing success."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Product Sustenance & Support Matters"
        description="Launching a product is only the beginning. Without regular updates, performance tuning, and feature evolution, even strong products lose relevance. Security gaps emerge, user expectations shift, and competitors innovate faster. Too often, businesses rely on reactive fixes that drive up costs and shorten product lifespan. 
        At NAVA Software Solutions, our Product Sustenance & Support services keep your product competitive, secure, and aligned with changing market needs. By blending proactive maintenance, performance optimization, and continuous feedback integration, we help CIOs, CTOs, and product leaders deliver consistent value while extending the life and success of their products."
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
        overlineText="Organizations that embed risk and compliance into digital strategy:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="bg-page industries-service-section-top">
      <div className="mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to Cloud Architecture & Engineering
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
        title="NAVA’s Support Advantage"
        bulletPoints={cloudAdv}
      />
      </LazySection>

      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Core AWS Services for Product Sustenance & Support "
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

export default ProductSustenance;
