import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import AwsPartnerLogo from "../../../assets/logos/aws-partner-logo.webp";

// Hero background image
import AwsMLBg from "../../../assets/Images/banner-images/services/aws-ml-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const solutionOfferings = [
  {
    id: "01",
    title: "ML Model Development with Amazon SageMaker",
    description:
      "Build, train, and tune high-performance machine learning models using SageMaker's fully managed infrastructure, including distributed training, AutoML, and feature engineering workflows.",
  },
  {
    id: "02",
    title: "Predictive Analytics & Forecasting on AWS",
    description:
      "Deliver accurate predictions for demand forecasting, anomaly detection, pricing optimization, and risk scoring using AWS ML services and custom algorithms.",
  },
  {
    id: "03",
    title: "End-to-End MLOps Pipelines",
    description:
      "Establish automated CI/CD pipelines for ML models using SageMaker Pipelines, Lambda, and Step Functions, ensuring seamless deployment, monitoring, and continuous improvement.",
  },
  {
    id: "04",
    title: "Real-Time Inference & Low-Latency ML",
    description:
      "Deploy ML models for real-time decision-making via SageMaker Endpoints, Kubernetes, or edge deployment using AWS IoT and Snowball Edge.",
  },
  {
    id: "05",
    title: "Feature Store & Data Preparation Workflows",
    description:
      "Create centralized, reusable feature repositories using SageMaker Feature Store to improve accuracy, reduce drift, and standardize ML experimentation.",
  },
  {
    id: "06",
    title: "Responsible AI, Monitoring & Model Governance",
    description:
      "Implement enterprise-grade ML governance, bias detection, explainability tools, and performance monitoring using SageMaker Clarify and Model Monitor.",
  },
];

const advantages = [
  {
    title: "AWS ML Expertise & Proven Engineering",
    description:
      "As an AWS Advanced Tier Partner, NAVA brings deep experience in SageMaker, MLOps, forecasting, anomaly detection, and enterprise ML deployments.",
  },
  {
    title: "Full-Lifecycle ML Enablement",
    description:
      "We support the entire ML journey data engineering, experimentation, deployment, drift detection, and ongoing optimization.",
  },
  {
    title: "Faster Experimentation & Time-to-Value",
    description:
      "Using automation, AutoML, and zero-cost POCs (where eligible), we help enterprises test, validate, and scale ML use cases rapidly.",
  },
];

const AWSMachineLearning = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={AwsMLBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "AWS Solutions", path: "/services/aws-solutions" },
          { name: "AWS Machine Learning Solutions" },
        ]}
        overline={`AWS Machine Learning
           Solutions`}
        title="Unlock predictive intelligence with secure, scalable ML solutions built on AWS. NAVA helps enterprises operationalize machine learning from data preparation and model development to deployment, monitoring, and optimization."
        heroImage={AwsPartnerLogo}
      />

      {/* Intro Section */}
      <ServiceIntro
        title="Overview of AWS Machine Learning Solution Offering"
        description="NAVA Software Solutions enables organizations to accelerate their AI journey with AWS Machine Learning services that deliver accurate predictions, optimized operations, and data-driven decision-making. Using Amazon SageMaker, AWS Lambda, Step Functions, and fully managed MLOps pipelines, we help businesses build production-grade ML systems that scale reliably and cost-effectively. Our ML solutions span end-to-end workflows—from feature engineering and model training to deployment, drift detection, and continuous monitoring, ensuring your machine learning models stay accurate, secure, and business-ready."
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid
        title="Solution Offering Details"
        features={solutionOfferings}
        gridCols="2x2"
        className="pb-[var(--size-35)]"
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards
        title="Why NAVA for AWS Machine Learning Solutions"
        advantages={advantages}
        isdescription={true}
        AwsWhyChooseBg="!bg-none"
        WhyChooseNava="!pb-[var(--size-60)] !bg-page bg-[url('assets/Images/aws-why-choose-bg.webp')] bg-no-repeat bg-cover bg-center md:mb-0 mb-[47px]"
        CustomClass="text-[#ffffff] mb-[var(--size-10)]"
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

export default AWSMachineLearning;
