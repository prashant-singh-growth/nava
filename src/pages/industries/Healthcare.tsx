import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesIntro from "@/components/industries/IndustriesIntro";
import IndustriesSupport from "@/components/industries/IndustriesSupport";
import IndustriesBenefits from "@/components/industries/IndustriesBenefits";
import IndustriesWhyChoose from "@/components/industries/IndustriesWhyChoose";
import { Heart, Shield, Database, Users, Zap, Activity } from "lucide-react";
import Healthcarebg from "../../assets/Images/banner-images/industries/healthcare-bg.webp";
// import handShake from "@/assets/hand-shake.png";
import whychoosebg from "../../assets/Images/industries-subfooter-bg.webp";
import whychoosebgMobile from "../../assets/Images/mobile-industries-subfooter.webp";
import CaseStudies from "@/components/CaseStudies";
import PatientImg from "../../assets/Images/Industries/health-accordian1.webp";
import DataImg from "../../assets/Images/Industries/health-accordian2.webp";
import WorkflowImg from "../../assets/Images/Industries/health-accordian3.webp";
import DataDrivenImg from "../../assets/Images/Industries/health-accordian4.webp";

//Benefits icons
import BenefitcardImg1 from "../../assets/Icons/industries-benefit-card1.svg";
import BenefitcardImg2 from "../../assets/Icons/industries-benefit-card2.svg";
import BenefitcardImg3 from "../../assets/Icons/industries-benefit-card3.svg";
import BenefitcardImg4 from "../../assets/Icons/industries-benefit-card4.svg";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
const heroData = {
  backgroundImage: Healthcarebg,
  overline: "Healthcare",
  title: "Empowering Health, Enriching Lives",
  gradientOverlay: "bg-gradient-to-r from-primary/80 to-primary/60",
  breadcrumbPath: "Healthcare"
};

const introData = {
  title: "Enhancing Patient Care and Operational Efficiency",
  content: [
    "In the healthcare industry, delivering high-quality patient care requires secure, efficient, and compliant solutions that ensure seamless operations. NAVA Software Solutions partners with healthcare providers to transform patient experiences, improve operational efficiency, and strengthen data security while meeting regulatory requirements. Our solutions optimize workflows and empower providers with data-driven insights to enhance outcomes, streamline processes, and enable secure patient data management—driving innovation that meets the complex needs of both healthcare providers and patients."
  ]
};

const supportData = {
  title: "How NAVA Supports Healthcare Transformation",
  description: [
    "NAVA’s healthcare solutions address the sector’s unique needs, from ensuring data security and regulatory compliance to enhancing patient engagement and operational efficiency. Our tailored approach enables healthcare providers to deliver quality care while maintaining compliance and cost-effectiveness."
  ],
  items: [
    {
      id: "01",
      title: "Patient Experience Transformation",
      content: {
        bullets: [
          { heading: "Omnichannel Patient Engagement", text: "NAVA provides solutions for seamless patient engagement across multiple channels, from mobile apps to web portals, enabling patients to access information, schedule appointments, and communicate with providers effortlessly." },
          { heading: "Personalized Patient Portals", text: "We design patient portals that centralize access to medical records, test results, and treatment plans, making it easy for patients to manage their healthcare." },
          { heading: "Telemedicine Integration", text: "Our telemedicine solutions enable virtual consultations, providing convenient access to care while reducing in-person visits." },
        ],
        image: PatientImg
      }
    },
    {
      id: "02",
      title: "Data Security and Compliance",
      content: {
        bullets: [
          { heading: "HIPAA and GDPR Compliance", text: "NAVA ensures that healthcare solutions meet regulatory standards, such as HIPAA and GDPR, protecting patient data and maintaining compliance with strict industry regulations." },
          { heading: "Secure Data Management", text: "We implement encryption, multi-factor authentication, and data access controls to safeguard sensitive patient information and prevent unauthorized access." },
          { heading: "Audit Trails and Reporting", text: "NAVA’s solutions include detailed audit trails and reporting features, providing transparency and supporting compliance audits." },
        ],
        image: DataImg
      }
    },
    {
      id: "03",
      title: "Workflow Automation and Process Optimization",
      content: {
        bullets: [
          { heading: "Automated Scheduling and Billing", text: "By automating administrative tasks like scheduling, billing, and patient onboarding, NAVA helps reduce manual workload, improve accuracy, and free up staff for higher-value activities." },
          { heading: "Efficient Claims Processing", text: "We streamline claims processing and reimbursement workflows, reducing time delays and errors to ensure faster payments and improve revenue cycle management." },
          { heading: "Enhanced Resource Allocation", text: "Our solutions support efficient resource allocation, helping providers optimize staffing, scheduling, and inventory management to meet patient demands." },
        ],
        image: WorkflowImg
      }
    },
    {
      id: "04",
      title: "Data-Driven Decision Making and Analytics",
      content: {
        bullets: [
          { heading: "Advanced Data Analytics", text: "NAVA’s analytics solutions provide actionable insights into patient demographics, treatment outcomes, and operational metrics, supporting data-driven decisions." },
          { heading: "Predictive Analytics for Patient Care", text: "Using predictive analytics, we help healthcare providers identify high-risk patients, forecast care needs, and personalize treatment plans for improved outcomes." },
          { heading: "Population Health Management", text: "Our tools support population health management, enabling providers to analyze trends, improve preventive care, and promote wellness across patient groups." },
        ],
        image: DataDrivenImg
      }
    }
  ],
  defaultOpen: "01"
};

const benefitsData = {
  title: "Benefits of Our Healthcare Solutions",
  description: "Transform your healthcare organization with technology solutions that prioritize patient care and operational excellence.",
  benefits: [
    {
      title: "Improved Patient Outcomes",
      image: BenefitcardImg1,
      description: "Advanced analytics and clinical decision support tools that enhance diagnosis accuracy and treatment effectiveness."
    },
    {
      title: "Enhanced Operational Efficiency",
      image:BenefitcardImg2,
      description: "Streamlined workflows and automated processes that reduce administrative burden and improve resource utilization."
    },
    {
      title: "Regulatory Compliance",
      image: BenefitcardImg3,
      description: "Built-in compliance features ensuring adherence to HIPAA, FDA, and other healthcare regulations and standards."
    },
    {
      title: "Better Patient Engagement",
      image: BenefitcardImg4,
      description: "Patient-centric solutions that improve communication, accessibility, and overall healthcare experience."
    }
  ]
};

const outcomesData = {
  title: "Healthcare Transformation Success Stories",
  description: "Discover how we've helped healthcare organizations achieve breakthrough results through innovative technology solutions.",
  caseStudies: [
    {
      // image: handShake,
      title: "Hospital Management System",
      description: "Implemented comprehensive EHR system for a 500-bed hospital, improving patient care coordination and reducing administrative costs.",
      metrics: [
        "30% reduction in patient wait times",
        "25% decrease in medical errors",
        "40% improvement in staff productivity"
      ],
      link: "#"
    },
    {
      // image: handShake,
      title: "Telemedicine Platform",
      description: "Developed HIPAA-compliant telemedicine platform serving 100,000+ patients with remote consultation capabilities.",
      metrics: [
        "100K+ patients served",
        "95% patient satisfaction rate",
        "50% increase in care accessibility"
      ],
      link: "#"
    },
    {
      // image: handShake,
      title: "AI Diagnostic Tool",
      description: "Created AI-powered medical imaging analysis tool improving diagnostic accuracy for radiological examinations.",
      metrics: [
        "20% improvement in diagnostic accuracy",
        "60% faster image analysis",
        "85% physician adoption rate"
      ],
      link: "#"
    }
  ]
};

const whyChooseData = {
  title: "Why Choose NAVA for Healthcare Technology",
  subtitle: "NAVA Software Solutions combines biotechnology expertise with advanced technology solutions to help research organizations achieve operational excellence and regulatory compliance. Here’s why biotechnology companies partner with NAVA:",
  backgroundImage: {
    desktop: whychoosebg,
    mobile: whychoosebgMobile,
  },
  features: [
    {
      icon: Heart,
      title: "Patient-Centric Focus",
      description: "Solutions designed with patient care and experience at the center of every technology decision."
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Robust security frameworks ensuring the highest levels of patient data protection and regulatory compliance."
    },
    {
      icon: Database,
      title: "Interoperability",
      description: "Standards-compliant solutions enabling seamless data exchange across healthcare systems and providers."
    },
    {
      icon: Users,
      title: "Healthcare Expertise",
      description: "Deep understanding of healthcare workflows, regulations, and industry-specific challenges."
    },
  ]
};

const Healthcare = () => {
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

export default Healthcare;