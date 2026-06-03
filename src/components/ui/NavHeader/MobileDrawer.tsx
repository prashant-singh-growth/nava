import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Images/logo.svg";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SubMenuItem {
  id: string;
  title: string;
  route: string;
}

interface ServiceItem {
  id: string;
  title: string;
  route: string;
  subItems?: SubMenuItem[];
}

interface IndustryItem {
  id: string;
  title: string;
  route: string;
}

interface CorporateItem {
  id: string;
  title: string;
  route: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceItems: ServiceItem[] = [
  {
    id: "aws-solutions",
    title: "AWS Solutions",
    route: "/services/aws-solutions",
    subItems: [
      {
        id: "aws-data-analytics",
        title: "AWS Data & Analytics Solutions",
        route: "/services/aws-solutions/aws-data-analytics",
      },
      { id: "aws-genai", title: "AWS GenAI Solutions", route: "/services/aws-solutions/aws-genai" },
      { id: "aws-migration", title: "AWS Migration Solutions", route: "/services/aws-solutions/aws-migration" },
      { id: "aws-machine-learning", title: "AWS Machine Learning Solutions", route: "/services/aws-solutions/aws-machine-learning" },
    ],
  },

  {
    id: "product-engineering",
    title: "AI Product Engineering",
    route: "/services/product-engineering",
    subItems: [
      {
        id: "ai-modernization",
        title: "AI-Driven Product Modernization",
        route: "/services/product-engineering/ai-modernization",
      },
      { id: "end-to-end", title: "Full-Cycle Development", route: "/services/product-engineering/end-to-end" },
      /*{
        id: "quality-engineering",
        title: "Quality Engineering & Test Automation",
        route: "/services/product-engineering/quality-engineering",
      },
      {
        id: "product-sustenance",
        title: "Product Sustenance & Support",
        route: "/services/product-engineering/product-sustenance",
      },*/
      {
        id: "dedicated-teams",
        title: "Embedded / Dedicated Teams",
        route: "/services/product-engineering/dedicated-teams",
      },
    ],
  },
  /*{
    id: "transformation-modernization",
    title: "Transformation & Modernization",
    route: "/services/transformation-modernization",
    subItems: [
      {
        id: "automation",
        title: "Agentic AI Automation",
        route: "/services/transformation-modernization/automation-process",
      },
      {
        id: "cx-transformation",
        title: "Customer Experience Transformation",
        route: "/services/transformation-modernization/customer-transformation",
      },
      {
        id: "data-modernization",
        title: "Data Modernization & Analytics",
        route: "/services/transformation-modernization/data-modernization",
      },
      {
        id: "cloud-transformation",
        title: "Cloud Transformation / Migration",
        route: "/services/transformation-modernization/cloud-transformation",
      },
      {
        id: "agile-product",
        title: "Agile Digital Product Development",
        route: "/services/transformation-modernization/agile-product",
      },
    ],
  },*/
  {
    id: "cloud-data-solutions",
    title: "Cloud & Data Solutions",
    route: "/services/cloud-data-solutions",
    subItems: [
      {
        id: "cloud-architecture",
        title: "Cloud Architecture & DevOps",
        route: "/services/cloud-data-solutions/cloud-architecture",
      },
      {
        id: "data-platforms",
        title: "Data Platforms, Lakehouse, Pipelines",
        route: "/services/cloud-data-solutions/data-platforms",
      },
      {
        id: "observability",
        title: "Observability, Security & Cost Optimization",
        route: "/services/cloud-data-solutions/observability",
      },
    ],
  },
  {
    id: "strategy-advisory",
    title: "Strategy & Advisory",
    route: "/services/strategy-advisory",
    subItems: [
      {
        id: "digital-strategy",
        title: "Digital Strategy & Roadmap",
        route: "/services/strategy-advisory/digital-strategy",
      },
      {
        id: "tech-assessment",
        title: "Technology Assessment & Advisory",
        route: "/services/strategy-advisory/tech-assessment",
      },
      {
        id: "risk-compliance",
        title: "Risk & Compliance Advisory",
        route: "/services/strategy-advisory/risk-compliance-advisory",
      },
      {
        id: "change-management",
        title: "Change Management & Training",
        route: "/services/strategy-advisory/change-management",
      },
    ],
  },
  /*{
    id: "engagement-models",
    title: "Engagement Models",
    route: "/services/engagement-models",
    subItems: [
      { id: "bot", title: "BOT (Build-Operate-Transfer)", route: "/services/engagement-models/bot" },
      { id: "pod", title: "POD (Product-Oriented Delivery)", route: "/services/engagement-models/pod" },
      { id: "hybrid", title: "Hybrid Model", route: "/services/engagement-models/hybrid-model" },
      { id: "gcc", title: "GCC-as-a-Service", route: "/services/engagement-models/gcc" },
    ],
  },*/
];

const industryItems: IndustryItem[] = [
  { id: "supply-chain-logistics", title: "Supply Chain & Logistics", route: "/industries/supply-chain-logistics" },
  { id: "manufacturing", title: "Manufacturing", route: "/industries/manufacturing" },
  { id: "oil-gas", title: "Oil & Gas", route: "/industries/oil-gas" },
  { id: "energy-utility", title: "Energy & Utility", route: "/industries/energy-utility" },
  /*{ id: "fintech", title: "FinTech", route: "/industries/fintech" },
  { id: "healthcare", title: "Healthcare", route: "/industries/healthcare" },
  { id: "bio-technology", title: "Bio Technology", route: "/industries/bio-technology" },*/
];

const corporateItems: CorporateItem[] = [
  { id: "about-us", title: "About Us", route: "/corporate/about-us" },
  { id: "meet-the-team", title: "Meet the Team", route: "/corporate/meet-the-team" },
  { id: "csr", title: "CSR", route: "/corporate/csr" },
  { id: "careers", title: "Careers", route: "/corporate/careers" },
];

interface VisionAIItem {
  id: string;
  title: string;
  route: string;
}

const visionAIItems: VisionAIItem[] = [
  { id: "vision-ai-solutions", title: "Vision AI Solutions", route: "/vision-ai" },
  { id: "edge-intelligence", title: "Edge Intelligence", route: "/vision-ai/edge-intelligence" },
  { id: "privacy-security", title: "Privacy & Security", route: "/vision-ai/privacy-security" },
  // { id: "use-cases", title: "Use Cases", route: "/vision-ai/use-cases" },
  // { id: "aws-marketplace", title: "AWS Marketplace", route: "/vision-ai/aws-marketplace" },
  // { id: "demo-center", title: "Demo Center", route: "/vision-ai/demo-center" },
  // { id: "zero-cost-poc", title: "Zero-Cost PoC", route: "/vision-ai/zero-cost-poc" },
];

type MenuLevel = "main" | "services" | "industries" | "corporate" | "visionai";

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const navigate = useNavigate();
  const [menuLevel, setMenuLevel] = useState<MenuLevel>("main");
  const isMobile = useIsMobile();

  const handleNavigate = (route: string) => {
    navigate(route);
    onClose();
    setMenuLevel("main");
  };

  const handleBackToMain = () => {
    setMenuLevel("main");
  };

  // const [menuLevel, setMenuLevel] = useState("main");
  const [activeMenu, setActiveMenu] = useState("home"); // ✅ Home active by default

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={!isMobile ? onClose : undefined}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[87%] max-w-[370px] z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ background: "#001D53" }}
      >
        {/* Header */}
        <div className="flex items-center gap-5 px-4 py-5">
          <button onClick={onClose} className="text-white p-0">
            <X size={24} />
          </button>
          <img src={logo}
            alt="NAVA"
            className="h-6 cursor-pointer"
            onClick={() => {
              handleNavigate("/");
            }}
          />
          <div className="w-8" /> {/* Spacer for alignment */}
        </div>

        {/* Menu Content - Sliding Panels */}
        <div className="relative h-[calc(100%-64px)] overflow-hidden">
          {/* Main Menu */}
          {/* <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto",
              menuLevel === "main" ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="py-5 space-y-1">
              <button
                onClick={() => handleNavigate("/")}
                className="w-full text-left text-white text-lg py-3 px-5"
              >
                Home
              </button>

              <button
                onClick={() => setMenuLevel("services")}
                className="w-full flex items-center justify-between text-white text-lg py-3 px-5"
              >
                <span>Services</span>
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => setMenuLevel("industries")}
                className="w-full flex items-center justify-between text-white text-lg py-3 px-5"
              >
                <span>Industries</span>
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => handleNavigate("/insights")}
                className="w-full text-left text-white text-lg py-3 px-5"
              >
                Insights
              </button>

              <button
                onClick={() => setMenuLevel("corporate")}
                className="w-full flex items-center justify-between text-white text-lg py-3 px-5"
              >
                <span>Corporate</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div> */}

          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto",
              menuLevel === "main" ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <div className="py-5">
              {/* Home */}
              <button
                onClick={() => {
                  handleNavigate("/");
                  handleMenuClick("home");
                }}
                className={cn(
                  "w-full text-left text-lg py-3 px-5 transition-colors",
                  activeMenu === "home" ? "text-[#50CFDB] font-bold" : "text-[#ffffff]",
                )}
              >
                Home
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2"></div>

              {/* Vision AI */}
              <button
                onClick={() => {
                  setMenuLevel("visionai");
                  handleMenuClick("visionai");
                }}
                className={cn(
                  "w-full flex items-center justify-between text-lg py-3 px-5 transition-colors",
                  activeMenu === "visionai" ? "text-[#50CFDB] font-bold" : "text-[#ffffff]",
                )}
              >
                <span>Vision AI</span>
                <ChevronRight size={20} />
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2"></div>

              {/* Services */}
              <button
                onClick={() => {
                  setMenuLevel("services");
                  handleMenuClick("services");
                }}
                className={cn(
                  "w-full flex items-center justify-between text-lg py-3 px-5  transition-colors",
                  activeMenu === "services" ? "text-[#50CFDB] font-bold" : "text-[#ffffff]",
                )}
              >
                <span>Services</span>
                <ChevronRight size={20} />
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2"></div>

              {/* Industries */}
              <button
                onClick={() => {
                  setMenuLevel("industries");
                  handleMenuClick("industries");
                }}
                className={cn(
                  "w-full flex items-center justify-between text-lg py-3 px-5 transition-colors",
                  activeMenu === "industries" ? "text-[#50CFDB] font-bold" : "text-[#ffffff]",
                )}
              >
                <span>Industries</span>
                <ChevronRight size={20} />
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2"></div>

              {/* Insights */}
              <button
                onClick={() => {
                  handleNavigate("/insights");
                  handleMenuClick("insights");
                }}
                className={cn(
                  "w-full text-left text-lg py-3 px-5 transition-colors",
                  activeMenu === "insights" ? "text-[#50CFDB] font-bold" : "text-[#ffffff]",
                )}
              >
                Insights
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2"></div>

              {/* Corporate */}
              <button
                onClick={() => {
                  setMenuLevel("corporate");
                  handleMenuClick("corporate");
                }}
                className={cn(
                  "w-full flex items-center justify-between text-lg py-3 px-5 transition-colors",
                  activeMenu === "corporate" ? "text-[#50CFDB] font-bold" : "text-[#ffffff]",
                )}
              >
                <span>Corporate</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Services Submenu */}
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto",
              menuLevel === "services" ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="px-4 pr-0 pt-8">
              <button onClick={handleBackToMain} className="flex items-center text-[#4FCEDB] text-lg px-2 -ml-2">
                <ChevronLeft size={20} className="mr-1" />
                Main Menu
              </button>
            </div>

            <div className="sidebar-line border-[#70707057] border-b-2 my-5"></div>

            <div className="px-4 pr-0">
              <div className="mb-3">
                <h2 className="text-white text-start text-lg px-2">Services</h2>
              </div>

              <div className="space-y-4">
                {serviceItems.map((service) => (
                  <div key={service.id} className="space-y-1">
                    {/* Category Title */}
                    <div className="text-[#4FCEDB] text-base font-medium px-2 py-2">
                      <button
                        key={service.id}
                        onClick={() => handleNavigate(service.route)}
                        className="flex items-center w-full justify-between"
                      >
                        <span className="text-start">{service.title}</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    {/* Third-level items */}
                    {service.subItems && service.subItems.length > 0 && (
                      <div className="space-y-1">
                        {service.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavigate(subItem.route)}
                            className="w-full flex items-center justify-between text-white/90 text-sm py-3 px-2"
                          >
                            <span className="text-start text-[#D1D1D1] text-base pl-3">{subItem.title}</span>
                            <ChevronRight size={16} />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="sidebar-line border-[#70707057] border-b-2 !mt-2 -mx-4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Submenu */}
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto",
              menuLevel === "industries" ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="p-4 pr-1 pt-8">
              <button onClick={handleBackToMain} className="flex items-center text-[#4FCEDB] text-lg px-2 -ml-2">
                <ChevronLeft size={20} className="mr-1" />
                Main Menu
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2 my-4 -mx-4"></div>

              <div className="mb-3">
                <h2 className="text-white text-lg px-2">Industries</h2>
              </div>

              <div className="space-y-1">
                {industryItems.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleNavigate(industry.route)}
                    className="w-full flex items-center justify-between text-[#D1D1D1] text-base py-3 px-2"
                  >
                    <span>{industry.title}</span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vision AI Submenu */}
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto",
              menuLevel === "visionai" ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="p-4 pr-1 pt-8">
              <button onClick={handleBackToMain} className="flex items-center text-[#4FCEDB] text-lg px-2 -ml-2">
                <ChevronLeft size={20} className="mr-1" />
                Main Menu
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2 my-4 -mx-4"></div>

              <div className="mb-3">
                <h2 className="text-white text-lg px-2">Vision AI</h2>
              </div>

              <div className="space-y-1">
                {visionAIItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.route)}
                    className="w-full flex items-center justify-between text-[#D1D1D1] text-base py-3 px-2"
                  >
                    <span>{item.title}</span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Corporate Submenu */}
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto",
              menuLevel === "corporate" ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="px-4 pr-0 pt-8">
              <button onClick={handleBackToMain} className="flex items-center text-[#4FCEDB] text-lg mb-4 px-2 -ml-2">
                <ChevronLeft size={20} className="mr-1" />
                Main Menu
              </button>

              <div className="sidebar-line border-[#70707057] border-b-2 my-4 -mx-4"></div>

              <div className="mb-3">
                <h2 className="text-white text-lg px-2">Corporate</h2>
              </div>

              <div className="space-y-1">
                {corporateItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.route)}
                    className="w-full flex items-center justify-between text-base py-3 px-2 text-[#D1D1D1]"
                  >
                    <span>{item.title}</span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
