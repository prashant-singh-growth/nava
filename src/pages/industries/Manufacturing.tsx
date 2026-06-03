import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesOutcomes from "@/components/industries/IndustriesOutcomes";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import { Factory, Cog, BarChart3, Shield, Zap, Wrench } from "lucide-react";
import Manufacturingbg from "../../assets/Images/banner-images/industries/manufacturing-bg.webp";
import whychoosebg from "../../assets/Images/industries-subfooter-bg.webp";
import CaseStudies from "@/components/CaseStudies";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";
import ProcessImg from "../../assets/Images/Industries/manufacturing-accordian1.webp";
import DataDrivenImg from "../../assets/Images/Industries/manufacturing-accordian2.webp";
import QualityImg from "../../assets/Images/Industries/manufacturing-accordian3.webp";
import LegacyImg from "../../assets/Images/Industries/manufacturing-accordian4.webp";

//Benefits icons
import BenefitcardImg1 from "../../assets/Icons/industries-benefit-card1.svg";
import BenefitcardImg2 from "../../assets/Icons/industries-benefit-card2.svg";
import BenefitcardImg3 from "../../assets/Icons/industries-benefit-card3.svg";
import BenefitcardImg4 from "../../assets/Icons/industries-benefit-card4.svg";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const heroData = {
  backgroundImage: Manufacturingbg,
  overline: "Manufacturing Industry",
  title: "Driving Innovation and Efficiency",
  gradientOverlay: "bg-gradient-to-r from-primary/80 to-primary/60",
  breadcrumbPath: "Manufacturing",
};

const introData = {
  title: "Streamlining Operations for Greater Efficiency",
  content: [
    "The manufacturing industry faces growing pressure to optimize production, reduce downtime, and remain competitive in a rapidly evolving market. NAVA Software Solutions partners with manufacturers to transform operations through automation, data-driven insights, and digital innovation, delivering tailored solutions that boost productivity, reduce costs, streamline workflows, and enhance quality control. From legacy modernization to predictive maintenance, our comprehensive services empower manufacturers to drive sustainable growth, meet today’s demands, and prepare for the future.",
  ],
};

const supportData = {
  title: "How NAVA Supports Manufacturing Transformation",
  description: [
    "NAVA’s expertise in the manufacturing sector enables us to deliver solutions that address both the operational and strategic needs of manufacturing organizations. Our services are designed to optimize production, enhance product quality, and create resilient, efficient systems that can adapt to changing market demands, using our Agentic AI automation and Computer Vision pre-built solutions.",
  ],
  items: [
    {
      id: "01",
      title: "Computer Vision Enabled Workflow Optimization",
      content: {
        bullets: [
          {
            heading: "Agentic AI Automation",
            text: "NAVA’s AI agents, leveraging computer vision, manage production, inventory, and material flow autonomously, while solutions like YardView AI and DockView AI ensure precise yard and dock coordination.",
          },
          {
            heading: "Predictive Maintenance and Quality",
            text: "AI-driven analytics and vision models detect equipment wear, product defects, and safety deviations early, reducing unplanned downtime and maintaining production quality.",
          },
          {
            heading: "Workflow Optimization",
            text: "Our adaptive AWS-based Industrial AI Agents orchestrate facility workflows, improving throughput, reducing idle time, and ensuring data-driven efficiency.",
          },
        ],
        image: ProcessImg,
      },
    },
    {
      id: "02",
      title: "Data-Driven Decision Making and Predictive Maintenance",
      content: {
        bullets: [
          {
            heading: "Data Analytics and Visualization",
            text: "NAVA provides advanced data analytics to help manufacturers gain actionable insights into production metrics, quality control, and operational performance.",
          },
          {
            heading: "Predictive Maintenance",
            text: "We use data analytics and IoT to predict equipment failure before it occurs, reducing unplanned downtime and extending equipment life.",
          },
          {
            heading: "Real-Time Monitoring",
            text: "With real-time data monitoring, manufacturers can track KPIs, adjust processes, and make data-driven decisions that improve output quality and efficiency.",
          },
        ],
        image: DataDrivenImg,
      },
    },
    {
      id: "03",
      title: "Quality Control and Compliance Solutions",
      content: {
        bullets: [
          {
            heading: "Automated Quality Assurance",
            text: "We implement automated testing and inspection solutions to detect defects early, ensuring consistent product quality and reducing waste.",
          },
          {
            heading: "Compliance and Traceability",
            text: "Our solutions help manufacturers track materials, production steps, and finished goods to ensure compliance with industry standards and regulations.",
          },
          {
            heading: "Data Security and Governance",
            text: "NAVA ensures secure handling of sensitive production data, maintaining compliance with data governance requirements.",
          },
        ],
        image: QualityImg,
      },
    },
    {
      id: "04",
      title: "Legacy System Modernization and Cloud Integration",
      content: {
        bullets: [
          {
            heading: "Legacy System Upgrades",
            text: "NAVA modernizes outdated systems, enabling them to integrate with new technologies and support more flexible, scalable manufacturing operations.",
          },
          {
            heading: "Cloud Integration",
            text: "We enable manufacturers to leverage cloud-based solutions for data storage, collaboration, and operational flexibility, reducing costs and increasing scalability.",
          },
          {
            heading: "Seamless ERP Integration",
            text: "NAVA integrates existing ERP systems with modern applications, ensuring a cohesive digital ecosystem for end-to-end visibility.",
          },
        ],
        image: LegacyImg,
      },
    },
  ],
  defaultOpen: "01",
};

const benefitsData = {
  title: "Benefits of NAVA’s Manufacturing Solutions",
  description:
    "NAVA’s solutions for manufacturing are designed to provide manufacturers with the flexibility, efficiency, and insight needed to compete in a global market. Key benefits include:",
  benefits: [
    {
      title: "Increased Productivity",
      image: BenefitcardImg1,
      description:
        "Automation and data-driven insights reduce manual processes, optimize production, and improve resource utilization.",
    },
    {
      title: "Enhanced Product Quality",
      image: BenefitcardImg2,
      description:
        "Quality control automation detects defects early, ensuring consistent quality and reducing production waste.",
    },
    {
      title: "Reduced Downtime",
      image: BenefitcardImg3,
      description:
        "Predictive maintenance strategies minimize equipment failures, extending asset life and reducing operational disruptions.",
    },
    {
      title: "Cost Savings",
      image: BenefitcardImg4,
      description:
        "By streamlining workflows and reducing inefficiencies, NAVA helps manufacturers lower operational costs while improving performance.",
    },
  ],
};

const whyChooseData = {
  title: "Why Manufacturers Choose NAVA?",
  subtitle:
    "NAVA Software Solutions is committed to helping manufacturers achieve operational excellence and innovate effectively. Here’s why manufacturing companies partner with NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Factory,
      title: "Industry-Focused Expertise",
      description:
        "Our team understands the complexities of manufacturing and tailors solutions to address sector-specific challenges.",
    },
    {
      icon: Cog,
      title: "End-to-End Support",
      description:
        "From consulting to implementation and ongoing support, NAVA provides comprehensive services that support every stage of transformation.",
    },
    {
      icon: BarChart3,
      title: "Proven Success Across Manufacturing",
      description:
        "With a track record of successful projects, NAVA has helped manufacturers improve efficiency, reduce costs, and enhance product quality.",
    },
    {
      icon: Shield,
      title: "Commitment to Innovation",
      description:
        "NAVA integrates the latest technologies—like IoT, automation, and predictive analytics—empowering manufacturers to stay competitive and agile.",
    },
  ],
};

const Manufacturing = () => {
  return (
    <div className="min-h-screen">
      <IndustriesHero {...heroData} />
      <IndustriesIntro {...introData} />
      <LazySection minHeight={400} fallback={<SectionSkeleton variant="split" height={400} />}>
        <IndustriesSupport {...supportData} />
      </LazySection>
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <IndustriesBenefits {...benefitsData} />
      </LazySection>
      {/* <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
  <IndustriesOutcomes {...outcomesData} />
</LazySection> */}
      <div>
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </LazySection>
      </div>
      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <IndustriesWhyChoose {...whyChooseData} />
      </LazySection>
    </div>
  );
};

export default Manufacturing;
