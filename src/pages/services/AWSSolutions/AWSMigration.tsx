import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceAdvantageCards from "@/components/services/ServiceAdvantageCards";
import AwsPartnerLogo from "../../../assets/logos/aws-partner-logo.webp"

// Hero background image
import AwsMigrationBg from "../../../assets/Images/banner-images/services/aws-migrate-solution-bg.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01",
    title: "Migrate VMware Virtual Machines with Amazon EVS ",
    description: "Seamlessly migrate VMware-based VMs to AWS with Amazon EVS, preserving VMware tooling and policies while enabling integration with native AWS services. "
  },
  {
    id: "02",
    title: "UAWS Elastic Disaster Recovery for VMware Migrations ",
    description: "Replace costly legacy DR with AWS Elastic Disaster Recovery to achieve scalable, automated failover, faster recovery times, and significant cost savings. "
  },
  {
    id: "03",
    title: "Modernize VMware Workloads with AWS Transform for VMware",
    description: "Leverage AI-powered planning and orchestration to accelerate large-scale VMware migrations, optimize resources, and modernize workloads to AWS-native services."
  },
  {
    id: "04",
    title: "Migrate VMware Database Workloads to AWS with DMS",
    description: "Use AWS Database Migration Service (DMS) to efficiently migrate VMware-hosted databases to AWS-managed databases, reducing licensing costs and improving scalability. "
  }
];

const advantages = [
  {
    title: "Certified VMware & AWS Expertise ",
    description: "Our team brings deep VMware knowledge and AWS Advanced Tier Partner expertise to ensure seamless and secure VMware-to-AWS migrations. "
  },
  {
    title: "End-to-End Migration Services",
    description: "From assessment to modernization, NAVA covers the full VMware migration lifecycle—VMs, workloads, databases, and disaster recovery. "
  },
  {
    title: "Cost-Effective, Future-Ready Solutions",
    description: "We combine AWS MAP (Migration Acceleration Program) funding, AWS proven frameworks, and AI-powered tools to deliver faster migrations with optimized costs and long-term flexibility."
  }
];

const AWSMigration = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={AwsMigrationBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "" },
          { name: "AWS Solutions", path: "/services/aws-solutions" },
          { name: "AWS VMware Migration Solutions"},          
        ]}
        overline={`AWS VMware Migration 
          Solutions`}
        title="Accelerate your VMware-to-AWS journey with NAVA’s specialized migration solutions. 
        We help organizations seamlessly transition workloads, modernize VMware environments, and achieve operational resilience with the power of AWS.
        Migrate, modernize, and future-proof your VMware workloads—schedule a free consultation with our AWS experts today."
        heroImage={AwsPartnerLogo}
      />

      

      {/* Intro Section */}
      <ServiceIntro 
        title="Overview of AWS VMware Migration Solution Offerings"
        description="NAVA Software Solutions delivers a comprehensive portfolio of VMware migration services on AWS, helping enterprises migrate virtual machines, modernize workloads, and strengthen disaster recovery strategies.  

          - Our offerings span four core areas:  

          - lift-and-shift migrations with Amazon EVS,  

          - cloud-native disaster recovery with AWS Elastic Disaster Recovery,  

          - AI-powered workload modernization with AWS Transform for VMware,  

          - database workload migrations with AWS Database Migration Service (DMS).            

          These solutions enable businesses to maintain VMware consistency while leveraging AWS scalability, cost optimization, and modernization capabilities. "
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid 
        title="Solution Offering Details"
        features={challenges}
        gridCols="2x2"
        className="pb-[var(--size-35)]"
      />
      </LazySection>

      {/* Advantage Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards 
        title="Why NAVA for VMware Migration Solutions"
        advantages={advantages}
        isdescription = {true}
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

export default AWSMigration;