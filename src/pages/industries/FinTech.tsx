import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesOutcomes from "@/components/industries/IndustriesOutcomes";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import { Shield, Zap, Users, TrendingUp, Lock, Database } from "lucide-react";
import Fintechbg from "../../assets/Images/banner-images/industries/fin-tech-bg.webp";
import whychoosebg from "../../assets/Images/industries-subfooter-bg.webp";
import CaseStudies from "@/components/CaseStudies";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";
import AgileImg from "../../assets/Images/Industries/agile-accordian1.webp";
import SecureImg from "../../assets/Images/Industries/agile-accordian2.webp";
import EnhancedImg from "../../assets/Images/Industries/agile-accordian3.webp";
import DataImg from "../../assets/Images/Industries/agile-accordian4.webp";

//Benefits icons
import BenefitcardImg1 from "../../assets/Icons/industries-benefit-card1.svg";
import BenefitcardImg2 from "../../assets/Icons/industries-benefit-card2.svg";
import BenefitcardImg3 from "../../assets/Icons/industries-benefit-card3.svg";
import BenefitcardImg4 from "../../assets/Icons/industries-benefit-card4.svg"; 

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const heroData = {
  backgroundImage: Fintechbg,
  overline: "FinTech",
  title: "Innovating Finance at Scale",
  gradientOverlay: "bg-gradient-to-r from-primary/80 to-primary/60",
  breadcrumbPath: "FinTech"
};

const introData = {
  title: "Driving Innovation and Agility in Financial Technology",
  content: [
    "The FinTech industry is one of the most dynamic and rapidly evolving sectors, where speed, security, and seamless user experiences are critical. NAVA Software Solutions partners with FinTech companies to build innovative, agile, and secure solutions that support rapid product development, strengthen compliance, and deliver data-driven insights for smarter decision-making. With our expertise, companies can accelerate time-to-market, improve regulatory readiness, and provide exceptional customer experiences that drive engagement, loyalty, and long-term growth."
  ]
};

const supportData = {
  title: "How NAVA Supports FinTech Transformation",
  description: [
    "NAVA’s solutions for the FinTech sector address the unique needs of financial technology companies, including secure infrastructure, rapid product iteration, and data analytics. We help FinTech clients deliver cutting-edge financial services while maintaining high standards of security and regulatory compliance."
  ],
  items: [
    {
      id: "01",
      title: "Agile Product Development and Rapid Deployment",
      content: {
        bullets: [
          { heading: "Agile Delivery Models", text: "NAVA uses Agile methodologies to deliver products and features rapidly, enabling FinTech companies to adapt quickly to market changes and customer feedback." },
          { heading: "MVP Development", text: "We help FinTech clients launch minimum viable products (MVPs) to test new ideas quickly, gather user feedback, and refine products based on real-world insights." },
          { heading: "Continuous Integration and Continuous Deployment (CI/CD)", text: "Our CI/CD pipelines ensure that product updates and new features are deployed efficiently and with minimal disruption, keeping clients competitive." },
        ],
        image: AgileImg
      }
    },   
    {
      id: "02",
      title: "Secure Infrastructure and Compliance",
      content: {
        bullets: [
          { heading: "Data Security and Encryption", text: "NAVA provides end-to-end data security solutions, including encryption, secure data storage, and multi-factor authentication, ensuring that sensitive customer data is protected." },
          { heading: "Compliance with Financial Regulations", text: "We ensure that solutions meet regulatory standards, such as PCI-DSS and GDPR, helping FinTech companies stay compliant and reduce risk." },
          { heading: "Risk Management and Fraud Detection", text: "Our fraud detection tools and risk management strategies help identify and mitigate potential threats, providing a secure environment for financial transactions." },
        ],
        image: SecureImg
      }
    },
    {
      id: "03",
      title: "Enhanced User Experience and Customer Engagement",
      content: {
        bullets: [
          { heading: "Omnichannel Experience", text: "NAVA creates seamless experiences across mobile apps, web platforms, and other digital channels, ensuring that customers can interact with financial services effortlessly." },
          { heading: "Personalization through Data Analytics", text: "By leveraging data analytics and machine learning, we provide personalized insights and recommendations, enhancing customer satisfaction and engagement." },
          { heading: "User-Centric Design", text: "Our design approach focuses on creating intuitive, easy-to-navigate interfaces, ensuring that users can access the information they need quickly and effortlessly." },
        ],
        image: EnhancedImg
      }
    },
    {
      id: "04",
      title: "Data-Driven Decision Making and Analytics",
      content: {
        bullets: [
          { heading: "Advanced Analytics and Business Intelligence", text: "NAVA’s analytics solutions provide actionable insights into customer behavior, transaction patterns, and operational metrics, supporting data-driven decision-making." },
          { heading: "Predictive Analytics for Customer Insights", text: "We use predictive analytics to identify trends, forecast demand, and personalize financial services, enabling FinTech companies to stay relevant and responsive." },
          { heading: "Real-Time Reporting and Dashboards", text: "Customizable dashboards offer real-time visibility into KPIs and performance metrics, allowing for agile decision-making and fast response to changing conditions." },
        ],
        image: DataImg
      }
    }
  ],
  defaultOpen: "01"
};

const benefitsData = {
  title: "Benefits of NAVA’s FinTech Solutions",
  description: "NAVA’s solutions for the FinTech sector are designed to help companies innovate, maintain security, and deliver customer-centric experiences. Key benefits include:",
  benefits: [
    {
      title: "Accelerated Time-to-Market",
      image : BenefitcardImg1,
      description: "Agile development and rapid deployment help FinTech companies release products and features faster, providing a competitive advantage."
    },
    {
      title: "Enhanced Security and Compliance",
      image : BenefitcardImg2,
      description: "Robust security measures and compliance support protect sensitive data and ensure regulatory adherence."
    },
    {
      title: "Improved Customer Engagement",
      image : BenefitcardImg3,
      description: "User-centric design and personalized experiences drive customer satisfaction and loyalty"
    },
    {
      title: "Data-Driven Insights",
      image : BenefitcardImg4,
      description: "Advanced analytics enable FinTech companies to make informed, proactive decisions that improve services and profitability."
    }
  ]
};

const whyChooseData = {
  title: "Why FinTech Companies Choose NAVA?",
  subtitle: "NAVA Software Solutions offers a unique combination of industry knowledge and technical expertise, enabling energy and utility providers to optimize operations, enhance asset reliability, and meet regulatory requirements. Here’s why organizations in this sector choose NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Shield,
      title: "Agility and Speed",
      description: "Our Agile methodologies and CI/CD practices accelerate time-to-market, ensuring you can adapt quickly to market needs."
    },
    {
      icon: Zap,
      title: "Focus on Security and Compliance",
      description: "We prioritize data security and compliance, providing peace of mind and protecting your brand’s reputation."
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "From design to deployment, we create solutions that prioritize the user experience, enhancing engagement and loyalty."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "NAVA’s analytics and business intelligence tools provide actionable insights, empowering FinTech companies to make informed decisions."
    },
  ]
};

const FinTech = () => {
  return (
    <div className="min-h-screen">
      <IndustriesHero HeroBannerClass="" {...heroData} />
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

export default FinTech;