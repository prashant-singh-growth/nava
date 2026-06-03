import { Target, Zap, Shield, Clock } from "lucide-react";
// Industry page components
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesOutcomes from "@/components/industries/IndustriesOutcomes";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";

// Images
import oilGasBg from "../../assets/Images/banner-images/industries/oil-gas-bg.webp";
import AssetImg from "../../assets/Images/Industries/oil-gas-accordian1.webp";
import OperationalImg from "../../assets/Images/Industries/oil-gas-accordian2.webp";
import SafetyMngmntImg from "../../assets/Images/Industries/oil-gas-accordian3.webp";
import DataImg from "../../assets/Images/Industries/oil-gas-accordian4.webp";
import CaseStudies from "@/components/CaseStudies";
import whychoosebg from "../../assets/Images/industries-subfooter-bg.webp";

//Benefits icons
import BenefitcardImg1 from "../../assets/Icons/industries-benefit-card1.svg";
import BenefitcardImg2 from "../../assets/Icons/industries-benefit-card2.svg";
import BenefitcardImg3 from "../../assets/Icons/industries-benefit-card3.svg";
import BenefitcardImg4 from "../../assets/Icons/industries-benefit-card4.svg";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Page content data
const heroData = {
  backgroundImage: oilGasBg,
  overline: "Oil & Gas",
  title: "Fueling Industries Evolution",
  breadcrumbPath: "Oil & Gas",
};

const introData = {
  title: "Driving Efficiency and Safety in a Dynamic Industry",
  content: [
    "The oil and gas industry operates in a complex, high-stakes environment where safety, efficiency, and compliance are critical. NAVA Software Solutions partners with oil and gas companies to enhance asset performance, improve operational efficiency, and drive sustainable growth through data analytics, predictive maintenance, and regulatory compliance.",
    "Our industry-specific solutions empower organizations to make data-driven decisions, mitigate risks, streamline operations, and optimize resource allocation, helping them reduce downtime, maintain safety standards, and stay resilient in a dynamic market.",
  ],
};

const supportData = {
  title: "How NAVA Supports Oil & Gas Transformation",
  description: [
    "NAVA's solutions for the oil and gas sector are designed to address industry-specific challenges, from managing vast infrastructure networks to ensuring compliance with strict safety standards.",
    "Our tailored approach, using Computer Vision and Agentic AI, enhances operational resilience, supports safety, and optimizes asset performance.",
  ],
  items: [
    {
      id: "01",
      title: "Asset Intelligence and Predictive Maintenance",
      content: {
        bullets: [
          {
            heading: "Real-Time Asset Monitoring",
            text: "NAVA’s AI and computer vision systems deliver live visibility into field assets, yards, and distribution points, enabling proactive maintenance, equipment tracking, and real-time operational awareness across refineries and terminals, using your existing cameras.",
          },
          {
            heading: "Predictive Maintenance",
            text: "By combining agentic AI with predictive analytics, NAVA helps operators anticipate failures, detect anomalies through visual data, and schedule maintenance before downtime occurs, extending asset life and performance.",
          },
          {
            heading: "Centralized Asset Tracking",
            text: "Our integrated solution connects IoT sensors, video feeds, and AI agents for unified asset visibility, allowing smarter maintenance decisions, improved uptime, and optimized resource allocation across sites.",
          },
        ],
        image: AssetImg,
      },
    },
    {
      id: "02",
      title: "Computer Vision Enabled AI Automation and Operational Efficiency",
      content: {
        bullets: [
          {
            heading: "Agentic AI Automation",
            text: "NAVA’s autonomous AI agents streamline billing, compliance, and asset workflows while applying computer vision for yard visibility and equipment tracking, reducing manual effort and improving accuracy across operations.",
          },
          {
            heading: "Workflow Optimization",
            text: "Our intelligent agents coordinate across exploration, distribution, and logistics yards to minimize downtime, eliminate process gaps, and deliver real-time operational intelligence.",
          },
          {
            heading: "Energy and Safety Optimization",
            text: "NAVA’s AI systems analyze consumption and site video data to predict anomalies, detect safety risks, and optimize energy efficiency across terminals and field operations.",
          },
        ],
        image: OperationalImg,
      },
    },
    {
      id: "03",
      title: "Safety Management and Regulatory Compliance",
      content: {
        bullets: [
          {
            heading: "Compliance with Industry Standards",
            text: "NAVA ensures that solutions meet industry-specific standards, including OSHA and EPA regulations, helping companies maintain compliance and minimize regulatory risks.",
          },
          {
            heading: "Health and Safety Monitoring",
            text: "We provide real-time safety monitoring for field workers, using data analytics and IoT sensors to ensure a safe work environment.",
          },
          {
            heading: "Audit and Reporting Tools",
            text: "Our compliance solutions include automated audit trails and reporting capabilities, simplifying regulatory audits and ensuring transparency.",
          },
        ],
        image: SafetyMngmntImg,
      },
    },
    {
      id: "04",
      title: "Data-Driven Decision Making and Analytics",
      content: {
        bullets: [
          {
            heading: "Advanced Analytics for Operational Insights",
            text: "NAVA’s data analytics solutions provide insights into every aspect of operations, helping companies optimize performance and make data-driven decisions.",
          },
          {
            heading: "Production Optimization",
            text: "We use data analytics to analyze production data, helping companies identify opportunities for efficiency and reduce resource waste.",
          },
          {
            heading: "Customizable Dashboards and Reporting",
            text: "Our dashboards provide real-time visibility into key performance indicators (KPIs), allowing for agile decision-making and quick response to market changes.",
          },
        ],
        image: DataImg,
      },
    },
  ],
};

const benefitsData = {
  title: "Benefits of NAVA's Oil & Gas Solutions",
  description:
    "NAVA’s solutions for the oil and gas sector enable companies to improve safety, streamline operations, and ensure compliance. Key benefits include:",
  benefits: [
    {
      title: "Enhanced Asset Reliability",
      image: BenefitcardImg1,
      description:
        "Real-time monitoring and predictive maintenance reduce downtime and extend asset life, improving operational continuity.",
    },
    {
      title: "Enhanced Data Security and Compliance",
      image: BenefitcardImg2,
      description:
        "Secure data management protocols and automated compliance tracking ensure regulatory adherence and protect sensitive information.",
    },
    {
      title: "Operational Efficiency",
      image: BenefitcardImg3,
      description:
        "Workflow automation and optimization streamline operations, reducing costs and improving productivity.",
    },
    {
      title: "Informed Decision-Making",
      image: BenefitcardImg4,
      description:
        "Data-driven insights empower companies to make proactive, strategic decisions, supporting long-term resilience.",
    },
  ],
};

const whyChooseData = {
  title: "Why Oil & Gas Companies Choose NAVA ?",
  subtitle:
    "NAVA Software Solutions brings industry-specific expertise and advanced technology solutions to help oil and gas companies enhance operational resilience, improve safety, and maintain compliance. Here’s why companies in this sector choose NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Target,
      title: "Customized Solutions for Industry Challenges",
      description:
        "Our solutions are tailored to address the unique demands of the oil and gas sector, from asset management to compliance.",
    },
    {
      icon: Zap,
      title: "Comprehensive, End-to-End Support",
      description:
        "NAVA provides full-service support, from implementation to ongoing maintenance, ensuring long-term success.",
    },
    {
      icon: Shield,
      title: "Focus on Safety and Compliance",
      description:
        "We prioritize safety and regulatory compliance, providing peace of mind and protecting your brand’s reputation.",
    },
    {
      icon: Clock,
      title: "Data-Driven Insights for Informed Decisions",
      description:
        "NAVA’s analytics solutions offer actionable insights that empower companies to make proactive, strategic decisions.",
    },
  ],
};

const OilGas = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <IndustriesHero {...heroData} />

      {/* Intro Section */}
      <IndustriesIntro {...introData} />

      {/* How NAVA Supports Section */}
      <LazySection minHeight={400} fallback={<SectionSkeleton variant="split" height={400} />}>
        <IndustriesSupport {...supportData} />
      </LazySection>

      {/* Benefits Section */}
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <IndustriesBenefits {...benefitsData} />
      </LazySection>

      {/* Case Studies Section */}
      {/* <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
  <IndustriesOutcomes {...outcomesData} />
</LazySection> */}
      <div>
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </LazySection>
      </div>

      {/* Why Choose NAVA Section */}
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <IndustriesWhyChoose {...whyChooseData} />
      </LazySection>

      {/* Footer */}
    </div>
  );
};

export default OilGas;
