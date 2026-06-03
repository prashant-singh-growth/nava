import CaseStudies from "@/components/CaseStudies";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceContentImageCard from "@/components/services/ServiceContentImageCard";
import ServiceOpportunityCard from "@/components/services/ServiceOpportunityCard";
import ServiceApproachGrid from "@/components/services/ServiceApproachGrid";
import ServicePlatformsCard from "@/components/services/ServicePlatformsCard";
import ServiceCTASection from "@/components/services/ServiceCTASection";

// Images
import ChangeMngmntBg from "../../../assets/Images/banner-images/services/change-training-bg.webp";
import manBackOffice from "../../../assets/Images/service-prod-card4.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Common Pitfalls data
const commonPitfalls = [
  { title: "Low Adoption Rates:",description: "New technologies rolled out, but underutilized. "},
  { title: "Resistance to Change:",description: "Cultural pushback is slowing down the transformation."},
  { title: "Skill Gaps:",description: "Teams not equipped to use modern tools effectively."},
  { title: "Unclear Communication:",description: "Employees are unsure of why the change is happening or what’s expected."},
  { title: "One-Time Training:",description: "Knowledge that fades without reinforcement."}
];

// Opportunity bullet points
const opportunityPoints = [
  { title: "Reduce Exposure ",description: "by proactively managing cyber, operational, and regulatory risk."},
  { title: "Build Trust ",description: " with customers, partners, and regulators."},
  { title: "Enable Growth ",description: "with governance frameworks that scale globally."},
  { title: "Accelerate Adoption ",description: "of cloud, AI, and automation with compliance-by-design."},
  { title: "Streamline Costs ",description: "by consolidating controls and avoiding fines."}
];

// Our Approach features
const approachFeatures = [
  {
    id: "01",
    title: "Change Readiness Assessment",
    description: [
      { text: "Evaluate organizational culture and readiness." },
      { text: "Identify adoption barriers and stakeholder sentiment." }
    ]
  },
  {
    id: "02",
    title: "Stakeholder & Communication Strategy",
    description: [
      { text : "Map stakeholders across the enterprise."},
      { text : "Build tailored communication plans to drive awareness and alignment."}
    ]
  },
  {
    id: "03",
    title: "Customized Training Programs",
    description: [ 
      { text : "Role-based learning modules and hands-on workshops."},
      { text : "Blended formats: in-person, virtual, and self-paced."}
    ]
  },
  {
    id: "04",
    title: "Adoption Acceleration ",
    description: [ 
      {text : "Change champions and super-user networks."},
      {text : "Engagement dashboards to track adoption metrics."}]
  },
  {
    id: "05",
    title: "Post-Implementation Support ",
    description: [ 
      { text: "Ongoing reinforcement through coaching and refreshers."},
      { text: "Continuous measurement of adoption KPIs."}]
  }
];

// Platforms data
const platforms = [
  {
    title: "Change Frameworks",
    description: "Prosci ADKAR, Kotter, ITIL."
  },
  {
    title: "Learning Management",
    description: "Microsoft Viva Learning, Moodle, Docebo."
  },
  {
    title: "Collaboration Tools",
    description: "Microsoft Teams, Slack, Zoom."
  },
  {
    title: "Analytics",
    description: "Power BI, Tableau for adoption dashboards."
  },
  {
    title: "AI Training Support",
    description: "Chatbots, adaptive learning platforms, knowledge assistants."
  }
];

const ChangeManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        backgroundImage={ChangeMngmntBg}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services" , path: "" },
          { name: "Strategy & Advisory", path: "/services/strategy-advisory/" },
          { name: "Change Management & Training", path: "" }
        ]}
        overline={`Change Management & 
          Training`}
        title="Empowering people to embrace change and unlock lasting transformation."
        />

      {/* Intro Section */}
      <ServiceIntro 
        title="Why Change Management is the need of the hour "
        description="Even the best digital strategies fail without adoption. Research indicates that nearly 70% of transformation initiatives fail due to resistance from people and culture, rather than technology. For CIOs, CHROs, and transformation leaders, success depends on preparing teams, managing resistance, and building a culture that thrives in change. 
        At NAVA Software Solutions, our Change Management & Training services ensure your workforce is engaged, capable, and confident throughout the transformation journey. We combine structured change frameworks with tailored training programs to maximize adoption and minimize disruption. "
      />      

       {/* Common Pitfalls Section */}

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="split" height={500} />}>
        <ServiceContentImageCard 
        title="Common Pitfalls We Solve"
        bulletPoints={commonPitfalls}
        image={manBackOffice}
        imageAlt="Professional working at office systems"
        imagePosition="right"
        bgColor="white"
      />
      </LazySection>

      {/* The Opportunity Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceOpportunityCard 
        title="The Opportunity"
        overlineText="Organizations that embed change management realize:"
        bulletPoints={opportunityPoints}
      />
      </LazySection>

      {/* Our Approach Section */}
      <div className="industries-service-section-top bg-page">
      <div className="inner-page-container mx-auto text-center font-semibold fs-36 leading-snug">
          Our Approach to Risk & Compliance Advisory
         </div>
      </div>
      
      <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
        <ServiceApproachGrid 
        title=""
        features={approachFeatures}
        gridCols="2x2"
        className="lg:!pt-[var(--size-10)] !pt-[10px]"
      />
      </LazySection>

      {/* Market Direction Section */}
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServicePlatformsCard 
        title="NAVA blends people strategy with leading platforms for training and adoption:"
        bulletPoints={platforms}
      />
      </LazySection>

      {/* AWS Advantage Section */}
      <LazySection minHeight={300} fallback={<SectionSkeleton variant="split" height={300} />}>
        <ServiceCTASection 
        title="AWS & Cloud Training Expertise"
        description="As an AWS Strategic Partner, we deliver adoption programs tied to cloud and AI transformations, bringing teams to the highest level of operational excellence and fluency with the AWS environment."
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

export default ChangeManagement;
