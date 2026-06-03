import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatureGrid from "@/components/services/ServiceFeatureGrid";
import ServiceSolutionCards from "@/components/services/ServiceSolutionCards";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Camera, Cpu, BarChart3, TrendingUp, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Banner and Solution images
import VisionAIBannerBg from "../../assets/Images/banner-images/vision-ai/vision-ai-solutions-bg.webp";
import ANPRImg from "../../assets/Images/ANPR-2.webp";
import DockViewImg from "../../assets/Images/DockView-2.webp";
import DamageViewImg from "../../assets/Images/DamageView-2.webp";
import SafetyViewImg from "../../assets/Images/SafetyView-2.webp";
import CollisionViewImg from "../../assets/Images/CollisionView-2.webp";
import InventoryViewImg from "../../assets/Images/InventoryView-2.webp";
import TheftProtectionViewImg from "../../assets/Images/TheftProtectionView-2.webp";

// Industry images
import PortsMarineImg from "../../assets/Images/industries/ports-marine.webp";
import SupplyChainImg from "../../assets/Images/industries/supply-chain.webp";
import WarehouseImg from "../../assets/Images/Industries/warehouse.webp";
import ManufacturingImg from "../../assets/Images/industries/manufacturing.webp";
import IndustrialYardImg from "../../assets/Images/industries/industrial-yard.webp";
import EnergyUtilitiesImg from "../../assets/Images/industries/energy-utilities.webp";
import RetailGroceryImg from "../../assets/Images/industries/retail-grocery.webp";
import AwsPartnerLogo from "../../assets/logos/aws-partner-new-logo.webp";

import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
// Data structures
const challenges = [
  {
    id: "01 — Connect Cameras",
    title: "Use your existing CCTV feeds; we calibrate and onboard them into the Vision AI solution.",
    description: "",
    icon: Camera,
  },
  {
    id: "02 — Deploy AI Models",
    title: "Edge/cloud models activate for real-time detection: OCR, safety, damage, dock activity, collisions, etc.",
    description: "",
    icon: Cpu,
  },
  {
    id: "03 — Automate Insights",
    title: "Events, alerts, and analytics flow into dashboards and integrate with WMS/YMS/TMS/TOS.",
    description: "",
    icon: BarChart3,
  },
  {
    id: "04 — Track ROI",
    title:
      "Measure impact: reduced dwell time, gate throughput, fewer incidents, improved safety, and lower operational cost.",
    description: "",
    icon: TrendingUp,
  },
];

const solutionCards = [
  {
    title: "ANPR AI — Automatic Number Plate Recognition",
    description: (
      <>
        Delivers fast, high-accuracy license plate recognition for vehicles entering and exiting your site. Using your existing CCTV cameras, it automates vehicle identification, streamlines check-ins, strengthens{" "}
        <Link to="/vision-ai/privacy-security" className="text-inherit no-underline hover:underline">perimeter control</Link>
        , and provides reliable OCR even in challenging visibility conditions.
      </>
    ),
    hasImage: true,
    image: ANPRImg,
  },
  {
    title: "DockView AI — Dock Door Throughput Optimization",
    description:
      "Monitors dock doors, trailer positioning, loading/unloading activity, pallet movement, and dwell time. It provides real-time alerts for delays, inactivity, or extended cycles while generating throughput analytics that help optimize scheduling, labor planning, and dock utilization.",
    hasImage: true,
    image: DockViewImg,
  },
  {
    title: "DamageView AI — Automated Damage Detection",
    description:
      "Identifies exterior trailer, container, freight, and pallet damages the moment they arrive or leave your facility. Image-based detection establishes indisputable visual records, reduces claim disputes, and ensures accountability across operations with fully automated audit trails.",
    hasImage: true,
    image: DamageViewImg,
  },
  {
    title: "SafetyView AI — Worker Safety & Behavioral Monitoring",
    description:
      "Continuously monitors safety practices across your site, including PPE usage, pedestrian behavior, restricted-zone adherence, unsafe actions, and proximity to heavy equipment. It enables proactive intervention through real-time alerts and automated compliance insights.",
    hasImage: true,
    image: SafetyViewImg,
  },
  {
    title: "CollisionView AI — Forklift & Equipment Collision Prevention",
    description:
      "Analyzes forklift movements, worker proximity, high-risk intersections, and congestion points to detect potential collisions before they happen. It identifies near-misses, unsafe driving patterns, blind-spot hazards, and risky interactions to improve warehouse and yard safety using your existing cameras.",
    hasImage: true,
    image: CollisionViewImg,
  },
  {
    title: "InventoryView AI — Smart Inventory Monitoring",
    description: (
      <>
        Monitors shelves in real-time, pallet movement, carton flow, staging areas, and putaway activity. It provides visibility into misplaced items, slow-moving SKUs, and congestion in warehouse zones using{" "}
        <Link to="/vision-ai/edge-intelligence" className="text-inherit no-underline hover:underline">camera intelligence</Link>{" "}
        alone.
      </>
    ),
    hasImage: true,
    image: InventoryViewImg,
  },
  {
    title: "TheftProtectionView AI — Unauthorized Activity Detection",
    description:
      "Continuously monitors high-value zones, inventory areas, loading docks, parking lots, and secured perimeters to detect unauthorized access, suspicious behavior, and potential theft events in real time and receive instant alerts for suspicious activity.",
    hasImage: true,
    image: TheftProtectionViewImg,
  },
];

const aiAgents = [
  /*{
    name: "Gate Operations Agent",
    description: "Automates vehicle check-in/out, credential verification, and gate flow management.",
  },*/
  {
    name: "Site Orchestration Agent",
    description: "Optimizes vehicle, trailer entry/exit, positioning, slot allocation, and yard inventory tracking.",
  },
  {
    name: "Dock Flow Agent",
    description: "Manages dock scheduling, monitors loading progress, and reduces turnaround time.",
  },
  {
    name: "Damage Assessment Agent",
    description: "Captures and categorizes damage events, generates audit trails automatically.",
  },
  {
    name: "Safety Compliance Agent",
    description: "Monitors PPE usage, zone violations, and generates compliance reports.",
  },
  {
    name: "Inventory Intelligence Agent",
    description: "Tracks stock levels, identifies misplacements, and triggers reorder alerts.",
  },
];

const industries = [
  /*{
    name: "Ports & Marine Terminals",
    description: "Gate automation, seal capture, damage detection, container OCR, reefer checks.",
    image: PortsMarineImg,
  },
  {
    name: "Supply Chain & Logistics",
    description: "Yard visibility, dock throughput, gate check-in automation, detention reduction.",
    image: SupplyChainImg,
  },*/
  {
    name: "Industrial Operations & Equipment Yards",
    description: "Asset tracking, heavy equipment safety, site compliance.",
    image: IndustrialYardImg,
  },

  {
    name: "Warehousing & Distribution Centers",
    description: "Forklift safety, pallet counting, dock monitoring, inventory validation.",
    image: WarehouseImg,
  },
  {
    name: "Manufacturing",
    description: "Worker safety, machine zone monitoring, PPE compliance, material movement visibility.",
    image: ManufacturingImg,
  },
  {
    name: "Energy & Utilities",
    description: "Perimeter monitoring, safety compliance, vehicle entry automation.",
    image: EnergyUtilitiesImg,
  },
  {
    name: "Retail & Grocery Distribution",
    description: "Dock activity, pallet damage, cold chain compliance.",
    image: RetailGroceryImg,
  },
];

const marketplaceSolutions = [
  { name: "ANPR AI", link: "https://aws.amazon.com/marketplace/pp/prodview-o7tmdao45vcoq" },
  { name: "DockView AI", link: "https://aws.amazon.com/marketplace/pp/prodview-tew5h4pm2yv4u" },
  { name: "DamageView AI", link: "https://aws.amazon.com/marketplace/pp/prodview-nb3apeanhtufo" },
  { name: "SafetyView AI", link: "https://aws.amazon.com/marketplace/pp/prodview-ey3mihhmrwm5q" },
  { name: "CollisionView AI", link: "https://aws.amazon.com/marketplace/pp/prodview-k5x4du6di3qm2" },
  { name: "InventoryView AI", link: "https://aws.amazon.com/marketplace/pp/prodview-mpjchfvch5umg" },
  { name: "TheftProtectionView AI", link: "https://aws.amazon.com/marketplace/pp/prodview-tew5h4pm2yv4u" },
];

const VisionAISolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage={VisionAIBannerBg}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Vision AI Solutions" }]}
        overline={
          <>
            <span className="text-[#FF9900]">AWS-Powered</span>
            <br />
            Vision AI by NAVA
          </>
        }
        title="Turn your existing cameras into real-time intelligence that automates operations, enhances safety, and reduces costs across industrial, manufacturing, logistics, retail, and energy environments."
        ctaText="Schedule a Zero-Cost POC"
      />

      {/* Intro Section */}
      <ServiceIntro
        title="The Challenge We Solve"
        description="Modern operations rely on camera systems, yet 99% of video data goes unused.
Manual site operations, gate processing, yard blind spots, dock delays, unreported damages, collisions, and safety incidents continue to cost millions every year."
      />

      <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
        <ServiceFeatureGrid
        title="How NAVA Vision AI Works"
        description="A four-step process that transforms your existing cameras into automated, real-time intelligence, delivering measurable ROI across your operations."
        features={challenges}
        gridCols="2x2"
        className="pt-0"
        isdescription={false}
        isTitleSemiBold={true}
      />
      </LazySection>

      {/* Solutions Section */}
      <style>{`
        .vision-ai-solutions-cards .solution-card > div {
          display: flex;
          align-items: stretch;
        }
        .vision-ai-solutions-cards .solution-card > div > div:first-child,
        .vision-ai-solutions-cards .solution-card > div > div:last-child {
          flex: 1;
          height: auto !important;
        }
        .vision-ai-solutions-cards .solution-card img {
          width: 100%;
          height: 100% !important;
          object-fit: cover;
          min-height: 280px;
        }
        @media (min-width: 768px) {
          .vision-ai-solutions-cards .solution-card > div > div {
            width: 50%;
            flex: none;
          }
        }
      `}</style>
      <div className="vision-ai-solutions-cards">
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="cards" height={600} />}>
          <ServiceSolutionCards
          title="Our Vision AI Solutions Suite"
          description="NAVA’s Vision AI can detect and automate hundreds of real-world events across logistics, manufacturing, energy, and industrial operations using your existing cameras."
          cards={solutionCards}
          imageSize="lg"
        />
        </LazySection>
        <br />
      </div>

      {/* Agentic Intelligence Section */}
      <section className="bg-page py-10 md:py-14">
        <div className="mx-auto inner-page-container">
          <h2 className="fs-36 font-semibold mb-4 text-[#000000]">Agentic Intelligence for Operations</h2>
          <p className="fs-18 text-[#222222] mb-8 max-w-3xl">
            AI agents built on AWS Bedrock automate repetitive tasks, enabling autonomous decision-making across your
            operations.
          </p>
          <Accordion type="single" collapsible defaultValue="agent-0" className="w-full space-y-3">
            {aiAgents.map((agent, index) => (
              <AccordionItem
                key={index}
                value={`agent-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#019dfe]/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-[#019dfe]" />
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-[#000000] text-left">{agent.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-14">
                  <p className="text-sm md:text-base text-[#222222]">{agent.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-[#f8f9fa] py-10 md:py-14">
        <div className="mx-auto inner-page-container">
          <h2 className="fs-36 font-semibold mb-4 text-[#000000]">Industries We Serve</h2>
          <p className="fs-18 text-[#222222] mb-8 max-w-3xl">
            Our Vision AI Solutions support a wide range of industries, aligned with your AWS Marketplace offerings.
          </p>
          <div className="space-y-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Column */}
                <div
                  className={`bg-white p-8 md:p-10 flex flex-col justify-center ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-3">{industry.name}</h3>
                  <p className="text-base md:text-lg text-[#444444] leading-relaxed">{industry.description}</p>
                </div>
                {/* Image Column */}
                <div
                  className={`relative h-48 md:h-64 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Marketplace Section */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#232f3e] via-[#1a2332] to-[#0d1117]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="relative mx-auto inner-page-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="fs-36 font-semibold mb-3 text-white">Available on AWS Marketplace</h2>
              <p className="fs-18 text-white/70 max-w-2xl">
                All our Vision AI solutions are available on AWS Marketplace for seamless procurement and deployment.
              </p>
            </div>
            <img src={AwsPartnerLogo} alt="AWS Partner" className="h-16 md:h-20 object-contain" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {marketplaceSolutions.map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-[#ff9900]/50 transition-all duration-300"
              >
                <span className="fs-16 font-medium text-white group-hover:text-[#ff9900] transition-colors">
                  {solution.name}
                </span>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-[#ff9900] transition-colors" />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://aws.amazon.com/marketplace/seller-profile?id=seller-wfmpajmm6xuoi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff9900] hover:bg-[#ec7211] text-[#232f3e] font-semibold rounded-lg transition-colors"
            >
              Browse All on AWS Marketplace
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose NAVA - COMMENTED OUT
      <LazySection minHeight={450} fallback={<SectionSkeleton variant="cards" height={450} />}>
        <ServiceAdvantageCards
        title="Why Choose NAVA"
        advantages={advantages}
        isdescription={false}
        WhyChooseNava="bg-page md:mb-0 mb-[47px]"
        isTitleSemiBold={true}
      />
      </LazySection>
      */}

      {/* Case Studies Section - COMMENTED OUT
      <div className="md:-mt-0 -mt-12">
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <CaseStudies />
        </LazySection>
      </div>
      */}

      {/* Footer */}
    </div>
  );
};

export default VisionAISolutions;
