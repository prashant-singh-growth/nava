import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import { Truck, Package, BarChart3, Globe, Zap, Shield } from "lucide-react";
import Supplychainbg from "../../assets/Images/banner-images/industries/supply-chain-bg.webp";
import whychoosebg from "../../assets/Images/industries-subfooter-bg.webp";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";
import CaseStudies from "@/components/CaseStudies";
import RouteImg from "../../assets/Images/Industries/supply-accordian1.webp";
import DemandImg from "../../assets/Images/Industries/supply-accordian2.webp";
import ProcessImg from "../../assets/Images/Industries/supply-accordian3.webp";
import DataDrivenImg from "../../assets/Images/Industries/supply-accordian4.webp";

//Benefits icons
import BenefitcardImg1 from "../../assets/Icons/industries-benefit-card1.svg";
import BenefitcardImg2 from "../../assets/Icons/industries-benefit-card2.svg";
import BenefitcardImg3 from "../../assets/Icons/industries-benefit-card3.svg";
import BenefitcardImg4 from "../../assets/Icons/industries-benefit-card4.svg";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const heroData = {
  backgroundImage: Supplychainbg,
  overline: "Supply Chain & Logistics",
  title: "Streamlined Movement, Seamless Solutions",
  gradientOverlay: "bg-gradient-to-r from-primary/80 to-primary/60",
  breadcrumbPath: "Supply Chain & Logistics",
};

const introData = {
  title: "Streamlining Operations for Greater Efficiency",
  content: [
    "In the fast-moving world of supply chain and logistics, efficiency, agility, and visibility are essential to success. NAVA Software Solutions partners with organizations to transform operations through data-driven insights, computer vision enabled real-time tracking using existing cameras, and intelligent automation, enabling optimized routes, better inventory management, enhanced demand forecasting, and faster, more accurate responses to customer needs. With expertise in supply chain management and logistics optimization, we help companies streamline workflows, reduce costs, and build resilient, flexible supply chains that can adapt to evolving market demands.",
  ],
};

const supportData = {
  title: "How NAVA Supports Supply Chain & Logistics Transformation",
  description: [
    "How NAVA Supports Supply Chain & Logistics Transformation NAVA’s solutions for the supply chain and logistics sector address the unique challenges of this dynamic industry. We provide tailored tools that improve operational efficiency, enhance visibility, and enable proactive decision-making.",
  ],
  items: [
    {
      id: "01",
      title: "Computer Vision Enabled Operations Automation",
      content: {
        bullets: [
          {
            heading: "Agentic AI Automation",
            text: "NAVA’s AI agents orchestrate end-to-end logistics workflows, handling order processing, invoicing, and real-time data validation through solutions like DockView AI, DamageView AI for greater accuracy and speed.",
          },
          {
            heading: "Streamlined Warehousing Operations:",
            text: "Using Computer Vision, our DockView AI, InventoryView AI, DamageView AI solutions automate warehouse operations, inventory tracking, and shipment coordination, driving seamless warehouse efficiency and faster turnaround.",
          },
          {
            heading: "Workflow Standardization",
            text: "Using adaptive AI Agents, NAVA standardizes and optimizes operations across facilities, reducing bottlenecks, enhancing visibility, and improving overall operations productivity.",
          },
        ],
        image: ProcessImg,
      },
    },
    {
      id: "02",
      title: "Route Optimization and Real-Time Tracking",
      content: {
        bullets: [
          {
            heading: "Dynamic Route Planning",
            text: "Using advanced algorithms, NAVA optimizes delivery routes to reduce travel time, fuel consumption, and costs, ensuring timely deliveries.",
          },
          {
            heading: "Real-Time Asset Tracking",
            text: "We provide IoT-based solutions for tracking shipments, vehicles, and assets in real-time, improving visibility and enabling proactive management.",
          },
          {
            heading: "Enhanced Customer Transparency",
            text: "Real-time tracking allows companies to provide customers with accurate delivery estimates and live tracking updates, improving customer satisfaction.",
          },
        ],
        image: RouteImg,
      },
    },
    {
      id: "03",
      title: "Demand Forecasting and Inventory Management",
      content: {
        bullets: [
          {
            heading: "Predictive Analytics for Demand Planning",
            text: "NAVA utilizes data analytics and machine learning to predict demand patterns, helping companies optimize inventory levels and reduce stockouts or excess inventory.",
          },
          {
            heading: "Automated Inventory Management",
            text: "By automating inventory management, we help reduce manual errors, streamline stock control, and ensure products are available where they’re needed.",
          },
          {
            heading: "End-to-End Supply Chain Visibility",
            text: "NAVA provides centralized solutions that offer complete visibility into inventory, suppliers, and transportation, allowing for more informed decision-making.",
          },
        ],
        image: DemandImg,
      },
    },
    {
      id: "04",
      title: "Data-Driven Decision Making and Analytics",
      content: {
        bullets: [
          {
            heading: "Advanced Data Analytics",
            text: "Our solutions provide actionable insights into every part of the supply chain, helping companies optimize operations and respond quickly to changes in demand or disruptions.",
          },
          {
            heading: "Customizable Dashboards and Reporting",
            text: "NAVA’s analytics tools offer customizable dashboards that allow teams to monitor KPIs, track progress, and make data-driven decisions in real time.",
          },
          {
            heading: "Predictive Maintenance",
            text: "By leveraging data analytics and IoT, NAVA helps companies anticipate maintenance needs for vehicles and equipment, reducing downtime and extending asset lifespan.",
          },
        ],
        image: DataDrivenImg,
      },
    },
  ],
  defaultOpen: "01",
};

const benefitsData = {
  title: "Benefits of NAVA’s Supply Chain & Logistics Solutions",
  description:
    "NAVA’s solutions for supply chain and logistics are designed to create efficient, responsive, and cost-effective operations. Key benefits include:",
  benefits: [
    {
      title: "Improved Efficiency",
      image: BenefitcardImg1,
      description:
        "Route optimization, workflow automation, and inventory management streamline operations and reduce costs.",
    },
    {
      title: "Enhanced Visibility",
      image: BenefitcardImg2,
      description:
        "Computer Vision enabled Real-time tracking and end-to-end visibility enable companies to monitor the movement of goods and respond quickly to delays or issues.",
    },
    {
      title: "Better Demand Forecasting",
      image: BenefitcardImg3,
      description:
        "Data analytics and predictive insights allow companies to manage inventory effectively and anticipate customer demand.",
    },
    {
      title: "Higher Customer Satisfaction",
      image: BenefitcardImg4,
      description:
        "Transparent tracking and faster delivery improve the customer experience, building loyalty and trust.",
    },
  ],
};

const whyChooseData = {
  title: "Why Supply Chain & Logistics Companies Choose NAVA ?",
  subtitle:
    "NAVA Software Solutions combines technical expertise with a deep understanding of the logistics sector, delivering solutions that create resilient, efficient, and customer-focused supply chains. Here’s why organizations choose NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Truck,
      title: "Industry-Specific Solutions",
      description:
        "Our solutions are tailored to the unique demands of supply chain and logistics, ensuring relevance and value.",
    },
    {
      icon: Package,
      title: "Full-Service Expertise",
      description:
        "NAVA provides comprehensive services, from route optimization and inventory management to workflow automation and data analytics.",
    },
    {
      icon: BarChart3,
      title: "Proven Results Across Logistics",
      description:
        "With a track record of success, NAVA has helped logistics providers streamline operations and drive measurable improvements.",
    },
    {
      icon: Globe,
      title: "Focus on Innovation",
      description:
        "Our approach leverages cutting-edge technologies, including IoT, predictive analytics, and AI Agents, empowering clients to remain agile and competitive.",
    },
  ],
};

const SupplyChainLogistics = () => {
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

export default SupplyChainLogistics;
