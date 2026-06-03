import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceImageSection from "@/components/services/ServiceImageSection";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import StrategyBg from "../../assets/Images/banner-images/services/strategy-bg.webp";

// Hero background image
import DigitalImg from "../../assets/Images/strategy&advisory-card1.webp";
import RiskCollabImg from "../../assets/Images/strategy&advisory-card2.webp";
import TechnologyImg from "../../assets/Images/strategy&advisory-card3.webp";
import ChangeManagementImg from "../../assets/Images/strategy&advisory-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Business Disruption & Uncertainty",
    description: "Rapid shifts in tech (AI, cloud, automation), changing regulations, increasing cyber-risks, and global supply-chain unpredictability. Many companies struggle to adapt without a coherent strategy."
  },
  {
    id: "02",
    title: "Regulatory Pressure & Cyber Risk",
    description: "Entities face increasing scrutiny from compliance bodies, data protection laws (e.g., GDPR, CCPA, etc.), and rising cyber-attack surfaces. Mitigation must be built in, not patched on."
  },
  {
    id: "03",
    title: "AI & Data Overload",
    description: "The promise of AI is huge, but so are the pitfalls: ethical concerns, algorithmic bias, data privacy, and model drift. If your strategy isn't aligned, AI investments can underdeliver."
  },
  {
    id: "04",
    title: "Change Resistance & Talent Gaps",
    description: "New tech or process changes often fail in adoption because people, culture, and capability are underprioritized. Training and change management are not optional."
  }
];

const solutionCards = [
  {
    title: "Digital Strategy & Roadmap",
    description: "Vision alignment, goal setting, phased AI-driven transformation, KPIs and tracking.",
    hasImage: true,
    image: DigitalImg,
    path: "/services/strategy-advisory/digital-strategy"
  },
  {
    title: "Risk & Compliance Advisory",
    description: "Regulatory mapping & gap analysis, data governance & privacy, security frameworks, mitigation planning.",
    hasImage: true,
    image: RiskCollabImg,
    path: "/services/strategy-advisory/risk-compliance-advisory"
  },
  {
    title: "Technology Assessment & Advisory",
    description: "Current stack evaluation, future-ready solutions, cost-benefit analysis, scalability & technical debt reduction.",
    hasImage: true,
    image: TechnologyImg,
    path: "/services/strategy-advisory/tech-assessment"
  },
  {
    title: "Change Management & Training",
    description: "Change readiness diagnostics, culture and stakeholder alignment, upskilling, continuous support.",
    hasImage: true,
    image: ChangeManagementImg,
    path: "/services/strategy-advisory/change-management"
  }
];

const advantages = [
  {
    title: "AI-First, Future-Ready Approach",
    description: "We don’t treat AI as an add-on. It’s part of our planning, risk, automation, and measurement process, ensuring your strategy remains continuously relevant."
  },
  {
    title: "End-to-End Expertise",
    description: "From high-level vision & roadmap to implementation support (people, process, tech). One partner who can guide through every step."
  },
  {
    title: "Industry & GCC Relevance",
    description: "Strong experience with GCCs, enterprises, and organizations operating across regulated sectors. We understand regional, cultural, and regulatory nuance."
  },
  {
    title: "Risk & Compliance Built In",
    description: "Instead of retrofitting risk, we bake it in (privacy, ethics, performance, governance)."
  },
  {
    title: "Change-Centric Execution",
    description: "We believe strategies succeed or fail by how well people adopt them. Our change management & training ensures adoption, minimal friction, maximum impact."
  }
];

const StrategyAdvisory = () => {

  return (
    <div>
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={StrategyBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Strategy & Advisory"},
        ]}
        overline="Strategy & Advisory"
        title="Empowering your enterprise with AI-led strategy, risk-smart governance, and transformative change."
      />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Strategy Matters More Than Ever"
        description={<>Technology no longer just supports the business; it defines it. For CIOs and business leaders, the challenge is clear: how to harness AI, cloud, and digital innovation to create measurable impact while managing risk, compliance, and organizational change. At NAVA Software Solutions, our <strong>Strategy & Advisory services</strong> help executives cut through complexity with data-driven insights, future-ready roadmaps, and people-first change strategies. We don’t just design transformation; we align technology with enterprise goals, enabling resilient growth, operational agility, and competitive advantage.</>}
      />

      {/* Challenges Section */}
      <section>
        <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
          <ServiceFeatureGrid 
          title="The New Reality: Challenges Every Enterprise Faces"
          description="Businesses face unique challenges that require tailored solutions. NAVA's Consulting & Advisory Services provide organizations with the insights and expertise needed to address these challenges strategically. Key benefits of our consulting services include."
          features={challenges}
          gridCols="2x2"
        />
        </LazySection>
      </section>

      {/* Market Direction Section */}
      <LazySection minHeight={400} fallback={<SectionSkeleton variant="split" height={400} />}>
        <ServiceImageSection 
        title="Where the Market is Heading"
        bulletPoints={[
          "More organizations will embed AI/ML in core strategy, not just pilot projects.",
          "Regulatory regimes will catch up (or tighten) around AI usage, data privacy, and algorithm transparency.",
          "Hybrid work & digital experience will demand more resilient, agile, and people-centric change models.",
          "Fewer one-size-fits-all solutions: custom-tailored advisory across industry verticals will become a competitive differentiator."
        ]}
        // image={businessPresentation}
        imageAlt="Business presentation"
        imagePosition="right"
      />
      </LazySection>

      {/* Solutions Section */}
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceSolutionCards 
        title="Our Strategic Solutions, Your Competitive Edge"
        cards={solutionCards}
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="The NAVA Advantage"
        advantages={advantages}
        WhyChooseNava="md:mb-0 mb-[47px]"
      />
      </LazySection>

      {/* Case Studies Section */}
      <div className="md:-mt-0 -mt-12">
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
        <CaseStudies />
      </LazySection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default StrategyAdvisory;