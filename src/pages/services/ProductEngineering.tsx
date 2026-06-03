import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceImageSection from "@/components/services/ServiceImageSection";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import ProductEnggBg from "../../assets/Images/banner-images/services/product-engg-bg.webp";

// Hero background image
import EndImg from "../../assets/Images/service-prod-card1.webp";
import AIDrivenImg from "../../assets/Images/service-prod-card2.webp";
import QualityImg from "../../assets/Images/service-prod-card3.webp";
import ProdImg from "../../assets/Images/service-prod-card4.webp";
import EmbeddedImg from "../../assets/Images/service-prod-card5.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Business Disruption & Uncertainty",
    description:
      "Rapid shifts in tech (AI, cloud, automation), changing regulations, increasing cyber-risks, and global supply-chain unpredictability. Many companies struggle to adapt without a coherent strategy.",
  },
  {
    id: "02",
    title: "Regulatory Pressure & Cyber Risk",
    description:
      "Entities face increasing scrutiny from compliance bodies, data protection laws (e.g., GDPR, CCPA, etc.), and rising cyber-attack surfaces. Mitigation must be built in, not patched on.",
  },
  {
    id: "03",
    title: "AI & Data Overload",
    description:
      "The promise of AI is huge, but so are the pitfalls: ethical concerns, algorithmic bias, data privacy, and model drift. If your strategy isn't aligned, AI investments can underdeliver.",
  },
  {
    id: "04",
    title: "Change Resistance & Talent Gaps",
    description:
      "New tech or process changes often fail in adoption because people, culture, and capability are underprioritized. Training and change management are not optional.",
  },
];

const solutionCards = [
  {
    title: "Full-Cycle Product Development",
    description:
      "Concept-to-launch delivery, powered by agile, design thinking, and continuous integration. Build products that are customer-focused, scalable, and market-ready.",
    hasImage: true,
    image: EndImg,
    path: "/services/product-engineering/end-to-end",
  },
  {
    title: "AI-Driven Product Modernization",
    description:
      "Enhance existing products with AI and ML, from predictive analytics and personalization to intelligent features that keep products competitive and ahead of the curve.",
    hasImage: true,
    image: AIDrivenImg,
    path: "/services/product-engineering/ai-modernization",
  },
  {
    title: "Quality Engineering & Test Automation",
    description:
      "Automated testing frameworks ensure speed, scalability, and resilience. Minimize bugs, reduce costs, and release confidently.",
    hasImage: true,
    image: QualityImg,
    path: "/services/product-engineering/quality-engineering",
  },
  {
    title: "Product Sustenance & Support",
    description:
      "Long-term reliability with proactive maintenance, feature enhancements, and ongoing technical support.",
    hasImage: true,
    image: ProdImg,
    path: "/services/product-engineering/product-sustenance",
  },
  {
    title: "Embedded / Dedicated Teams",
    description:
      "Extend your in-house capability with Agile, AI-skilled teams that integrate seamlessly into your product lifecycle.",
    hasImage: true,
    image: EmbeddedImg,
    path: "/services/product-engineering/dedicated-teams",
  },
];

const advantages = [
  {
    title: "End-to-End Lifecycle Expertise",
    description: "From ideation to post-launch support, we manage the entire product journey.",
  },
  {
    title: "AI at the Core",
    description: "Every engagement leverages AI to accelerate delivery, enable intelligence, and improve adoption.",
  },
  {
    title: "Agile & Adaptive Delivery",
    description: "Rapid, iterative cycles aligned with business priorities reduce risk and increase flexibility.",
  },
  {
    title: "Commitment to Quality & Security",
    description:
      "Robust test automation and security-first engineering ensure products meet enterprise-grade standards.",
  },
  {
    title: "Flexible Engagement Models",
    description: "From turnkey projects to embedded teams, we adapt to your pace and needs.",
  },
];

const ProductEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={ProductEnggBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "AI Product Engineering" },
        ]}
        overline={
          <>
            AI Product<br></br> Engineering
          </>
        }
        title="From concept to scale, intelligent products engineered for today and ready for tomorrow."
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Innovation at the Core of Every Product"
        description={
          <>
            Building products that win markets require more than code. It demands a blend of vision, engineering
            discipline, and AI-driven intelligence. CIOs, CTOs, and product leaders face the challenge of delivering
            customer-centric products quickly, securely, and at scale, while keeping pace with ever-evolving
            technologies.<br></br>
            <br></br> At NAVA Software Solutions, our <strong>AI Product Engineering</strong> practice encompasses the
            entire product lifecycle, including ideation, design, development, testing, modernization, and ongoing
            sustenance. By embedding AI into the engineering process, we help organizations reduce time-to-market,
            elevate product quality, and create intelligent, adaptive solutions that stand out in competitive markets.
          </>
        }
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid
        title={<>How NAVA Builds Intelligent, Market-Ready Products</>}
        description={
          <>
            <p className="fs-24 font-semibold">What Enterprises Struggle with Today</p>
          </>
        }
        features={challenges}
        gridCols="2x2"
      />
      </LazySection>
      {/* Market Direction Section */}
      <LazySection minHeight={400} fallback={<SectionSkeleton variant="split" height={400} />}>
        <ServiceImageSection
        title="Where the Market is Heading"
        bulletPoints={[
          "More organizations will embed AI/ML in core strategy, not just pilot projects.",
          "Regulatory regimes will catch up (or tighten) around AI usage, data privacy, and algorithm transparency.",
          "Hybrid work & digital experience will demand more resilient, agile, and people-centric change models.",
          "Fewer one-size-fits-all solutions: custom-tailored advisory across industry verticals will become a competitive differentiator.",
        ]}
        // image={businessPresentation}
        imageAlt="Business presentation"
        imagePosition="right"
      />
      </LazySection>

      {/* Solutions Section */}
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceSolutionCards title="Our Strategic Solutions, Your Competitive Edge" cards={solutionCards} />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards title="The NAVA Advantage" advantages={advantages} WhyChooseNava="bg-page" />
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

export default ProductEngineering;
