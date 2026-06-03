import { Target, Zap, Shield, Clock } from "lucide-react";
// Industry page components
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";;
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";

// Hero background image
import biotechScientist from "../../assets/Images/banner-images/industries/bio-tech-bg.webp";

// Accordion images
import ProductImg from "../../assets/Images/Industries/bio-tech-accordian1.webp";
import DataIntegrityImg from "../../assets/Images/Industries/bio-tech-accordian2.webp";
import RandDImg from "../../assets/Images/Industries/bio-tech-accordian3.webp";
import DataDrivenImg from "../../assets/Images/Industries/bio-tech-accordian4.webp";
import whychoosebg from "../../assets/Images/industries-subfooter-bg.webp";

//Benefits icons
import BenefitcardImg1 from "../../assets/Icons/industries-benefit-card1.svg";
import BenefitcardImg2 from "../../assets/Icons/industries-benefit-card2.svg";
import BenefitcardImg3 from "../../assets/Icons/industries-benefit-card3.svg";
import BenefitcardImg4 from "../../assets/Icons/industries-benefit-card4.svg";

// Case study images
import CaseStudies from "@/components/CaseStudies";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Page content data
const heroData = {
  backgroundImage: biotechScientist,
  overline: "Bio Technology",
  title: "Pioneering Tomorrow's Life Sciences",
  breadcrumbPath: "Bio Technology",
  gradientOverlay: "rgba(10, 25, 49, 0.85)"
};

const introData = {
  title: "Driving Innovation and Ensuring Compliance",
  content: [
    "In the biotechnology industry, innovation, data integrity, and regulatory compliance are essential for advancing research and bringing new products to market. NAVA Software Solutions partners with biotechnology firms to streamline R&D processes, enhance data management, and ensure rigorous compliance with industry standards. Our biotechnology solutions are designed to optimize workflows, support data-driven insights, and maintain the high level of quality required in life sciences and healthcare research."
  ]
};

const supportData = {
  title: "How NAVA Supports Biotechnology Transformation",
  description: [
    "NAVA’s biotechnology solutions address the unique needs of the sector, from ensuring data integrity and compliance to enhancing R&D efficiency and collaboration. Our approach enables biotech companies to advance research, manage complex data requirements, and meet regulatory standards effectively."
  ],
  items: [
    {
      id: "01",
      title: "Product Lifecycle Management (PLM) Optimization",
      content: {
        bullets: [
          { heading: "Efficient Data Tracking", text: "NAVA optimizes PLM systems for easy tracking and management of research data, helping biotech companies maintain accurate records throughout the product lifecycle." },
          { heading: "Regulatory Compliance Management", text: "Ensure seamless adherence to FDA, EMA, and other regulatory requirements through automated documentation and validation processes." },
          { heading: "Automated Documentation", text: "We implement automated documentation systems that simplify data entry, improve accuracy, and support seamless regulatory reporting." }
        ],
        image: ProductImg
      }
    },
    {
      id: "02",
      title: "Data Integrity and Security",
      content: {
        bullets: [
          { heading: "Secure Data Management", text: "We implement advanced encryption, multi-factor authentication, and access controls to protect sensitive research data from unauthorized access." },
          { heading: "Data Quality and Traceability", text: "NAVA’s data solutions ensure the accuracy and traceability of research data, enabling researchers to maintain consistent data quality across studies." },
          { heading: "Audit Trails and Reporting", text: "Our solutions include detailed audit trails, supporting regulatory compliance and providing transparency for audits and reviews." }
        ],
        image:DataIntegrityImg
      }
    },
    {
      id: "03",
      title: "R&D Process Optimization and Automation",
      content: {
        bullets: [
          { heading: "Automated Lab Processes", text: "NAVA implements automation in lab processes to reduce manual tasks, improve precision, and increase research productivity." },
          { heading: "Efficient Resource Allocation", text: "Our solutions help biotech companies optimize resource allocation, enabling efficient use of lab equipment, staffing, and inventory." },
          { heading: "Streamlined Collaboration", text: "We provide collaboration tools that enable secure data sharing across teams and locations, facilitating faster decision-making and coordination." }
        ],
        image: RandDImg
      }
    },
    {
      id: "04",
      title: "Data-Driven Insights and Analytics",
      content: {
        bullets: [
          { heading: "Predictive Analytics for R&D", text: "Using predictive analytics, NAVA helps biotech firms anticipate research needs, forecast results, and make data-informed decisions for improved outcomes." },
          { heading: "Advanced Data Visualization", text: "Our analytics tools provide intuitive data visualizations, helping researchers interpret data and identify trends quickly and accurately." },
          { heading: "Integrated Research Dashboards", text: "NAVA develops custom dashboards that provide a real-time view of project progress, key metrics, and data insights, supporting data-driven R&D." }
        ],
        image: DataDrivenImg
      }
    }
  ]
};

const benefitsData = {
  title: "Benefits of NAVA's Biotechnology Solutions",
  description: "NAVA’s biotechnology solutions help organizations improve research efficiency, secure data, and maintain compliance. Key benefits include:",
  benefits: [
    {
      title: "Improved Collaboration and Productivity",
      description: "Workflow automation and collaboration tools increase team productivity, allowing researchers to focus on critical tasks.",
      image : BenefitcardImg1
    },
    {
      title: "Enhanced Data Security and Compliance",
      description: "Secure data management protocols and automated compliance tracking ensure regulatory adherence and protect sensitive information.",
      image : BenefitcardImg2
    },
    {
      title: "Informed Decision-Making",
      description: "Data analytics empower biotech firms to make data-driven decisions, improving research outcomes and resource allocation.",
      image : BenefitcardImg3
    },
    {
      title: "Accelerated Research Timelines",
      description: "Our solutions optimize R&D workflows, enabling faster data processing and reducing time-to-market.",
      image : BenefitcardImg4
    }
  ]
};

const whyChooseData = {
  title: "Why Bio Tech Companies Choose NAVA?",
  subtitle: "NAVA Software Solutions combines biotechnology expertise with advanced technology solutions to help research organizations achieve operational excellence and regulatory compliance. Here’s why biotechnology companies partner with NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Target,
      title: "Industry-Specific Solutions",
      description: "Our solutions address the unique needs of biotechnology, including data integrity, compliance, and efficient R&D."
    },
    {
      icon: Zap,
      title: "Commitment to Security and Compliance",
      description: "We prioritize data security and regulatory adherence, helping clients protect sensitive information and maintain compliance."
    },
    {
      icon: Shield,
      title: "Comprehensive Service Offerings",
      description: "From PLM optimization to data management, NAVA provides full-service support tailored to biotechnology needs."
    },
    {
      icon: Clock,
      title: "Proven Success in Biotechnology",
      description: "With a track record of success, NAVA has helped biotechnology firms enhance R&D efficiency, data security, and regulatory compliance."
    }
  ]
};

const BioTechnology = () => {
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

export default BioTechnology;