import { Zap, Target, Shield, Clock } from "lucide-react";
// Industry page components
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesOutcomes from "@/components/industries/IndustriesOutcomes";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";

// Images
import Energyutility from "../../assets/Images/banner-images/industries/energy-utility-bg.webp";
import AssetImg from "../../assets/Images/Industries/energy-accordian1.webp";
import DataImg from "../../assets/Images/Industries/energy-accordian2.webp";
import RegulatoryImg from "../../assets/Images/Industries/energy-accordian3.webp";
import ProcessImg from "../../assets/Images/Industries/energy-accordian4.webp";
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
  backgroundImage: Energyutility,
  overline: "Energy & Utility",
  title: "Powering Sustainable Progress",
  breadcrumbPath: "Energy & Utility",
};

const introData = {
  title: "Empowering Efficiency and Sustainability",
  content: [
    "Energy and utility companies face complex challenges, from managing vast networks of assets to ensuring regulatory compliance and driving sustainability. NAVA Software Solutions partners with providers to enhance operational efficiency, optimize asset performance, and enable data-driven decision-making, helping improve reliability, meet compliance standards, and build resilient, future-ready infrastructure. With our solutions, energy and utility companies can achieve scalable growth, improve resource management, and deliver reliable services that address the evolving needs of customers and regulators.",
  ],
};

const supportData = {
  title: "How NAVA Supports Energy & Utility Transformation",
  description: [
    "NAVA’s solutions for the energy and utility sector are designed to address the unique demands of this industry. From real-time asset monitoring to intelligent automation, our tailored approach helps companies improve operational efficiency, enhance reliability, and achieve sustainable growth.",
  ],
  items: [
    {
      id: "01",
      title: "Asset Performance Management and Predictive Maintenance",
      content: {
        bullets: [
          {
            heading: "Real-Time Asset Monitoring",
            text: "NAVA’s IoT-driven solutions provide real-time data on asset performance, helping companies proactively manage equipment and avoid unexpected downtime.",
          },
          {
            heading: "Predictive Maintenance",
            text: "By using predictive analytics, we help energy providers identify potential equipment failures before they happen, extending asset life and reducing maintenance costs.",
          },
          {
            heading: "Centralized Data for Asset Health",
            text: "We provide a centralized platform for monitoring and analyzing asset health, allowing teams to make informed decisions and optimize maintenance schedules.",
          },
        ],
        image: AssetImg,
      },
    },
    {
      id: "02",
      title: "Data-Driven Resource Management and Optimization",
      content: {
        bullets: [
          {
            heading: "Demand Forecasting and Load Balancing",
            text: "NAVA utilizes data analytics to forecast demand patterns, allowing energy providers to optimize resource allocation and ensure reliable service.",
          },
          {
            heading: "Energy Efficiency and Optimization",
            text: "Our solutions help companies manage energy consumption and identify areas for efficiency improvements, reducing operational costs and environmental impact.",
          },
          {
            heading: "Resource Allocation and Planning",
            text: "NAVA’s analytics tools support effective resource planning, enabling companies to maximize asset utilization and ensure consistent service delivery.",
          },
        ],
        image: DataImg,
      },
    },
    {
      id: "03",
      title: "Regulatory Compliance and Data Security",
      content: {
        bullets: [
          {
            heading: "Compliance Management",
            text: "NAVA ensures that energy and utility solutions meet industry-specific regulatory standards, helping companies stay compliant and minimize risk.",
          },
          {
            heading: "Secure Data Management",
            text: "We implement advanced security protocols, including encryption and access controls, to protect sensitive data and ensure regulatory compliance.",
          },
          {
            heading: "Audit Trails and Reporting",
            text: "Our solutions provide detailed reporting and audit trails, supporting compliance audits and offering transparency into data handling practices.",
          },
        ],
        image: RegulatoryImg,
      },
    },
    {
      id: "04",
      title: "Process Automation and Intelligent Workflows",
      content: {
        bullets: [
          {
            heading: "Automated Billing and Invoicing",
            text: "NAVA’s AI agents handle billing, invoicing, and customer account workflows autonomously, enhancing accuracy, speeding up processes, and reducing manual workload for energy providers.",
          },
          {
            heading: "Agentic AI Automation",
            text: "We deploy intelligent AI agents that reason, decide, and act across operations, automating repetitive tasks, adapting to changing conditions, and improving overall efficiency.",
          },
          {
            heading: "Workflow Optimization",
            text: "NAVA standardizes and optimizes enterprise workflows through self-learning AI systems that streamline processes, remove bottlenecks, and drive continuous improvement.",
          },
        ],
        image: ProcessImg,
      },
    },
  ],
};

const benefitsData = {
  title: "Benefits of NAVA’s Energy & Utility Solutions",
  description:
    "NAVA’s tailored solutions for the energy and utility sector enable companies to improve asset performance, optimize operations, and meet regulatory standards. Key benefits include:",
  benefits: [
    {
      title: "Improved Asset Reliability",
      description:
        "Real-time monitoring and predictive maintenance reduce downtime, extend asset life, and enhance service reliability.",
      image: BenefitcardImg1,
    },
    {
      title: "Enhanced Operational Efficiency",
      description:
        "Automated processes and data-driven insights streamline operations, reducing costs and improving productivity.",
      image: BenefitcardImg2,
    },
    {
      title: "Regulatory Compliance",
      description:
        "NAVA’s solutions ensure compliance with industry standards, minimizing regulatory risk and supporting transparency.",
      image: BenefitcardImg3,
    },
    {
      title: "Sustainable Resource Management",
      description:
        "Optimized resource allocation and energy efficiency improvements help companies reduce environmental impact.",
      image: BenefitcardImg4,
    },
  ],
};

const whyChooseData = {
  title: "Why Energy & Utility Companies Choose NAVA?",
  subtitle:
    "NAVA Software Solutions offers a unique combination of industry knowledge and technical expertise, enabling energy and utility providers to optimize operations, enhance asset reliability, and meet regulatory requirements. Here’s why organizations in this sector choose NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Zap,
      title: "Industry-Specific Solutions",
      description:
        "Our solutions address the unique needs of biotechnology, including data integrity, compliance, and efficient R&D.",
    },
    {
      icon: Target,
      title: "End-to-End Support",
      description:
        "We provide comprehensive services that cover everything from implementation to maintenance, ensuring long-term success and operational resilience.",
    },
    {
      icon: Shield,
      title: "Focus on Sustainability",
      description:
        "Our solutions help companies reduce environmental impact through energy efficiency and optimized resource management.",
    },
    {
      icon: Clock,
      title: "Proven Track Record",
      description:
        "With a history of successful projects in the energy and utility sector, NAVA has demonstrated its ability to deliver results that align with client goals.",
    },
  ],
};

const EnergyUtility = () => {
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

export default EnergyUtility;
