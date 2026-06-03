import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import patharrowicon from "../../../assets/Icons/path-arrow-icon.webp";
import { prefetchRoute } from "@/lib/prefetch";


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

interface ServicesMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
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
      // { id: "aws-marketplace", title: "AWS Marketplace Offers", route: "/services/aws-solutions/aws-marketplace" },
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

export const ServicesMenu = ({ isOpen, onClose, onToggle, isMobile = false, onMobileMenuClose }: ServicesMenuProps) => {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const handleItemClick = (route: string) => {
    navigate(route);

    onClose();
    if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  useEffect(() => {
    if (!isOpen || isMobile) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside as EventListener);
    document.addEventListener("touchstart", handleClickOutside as EventListener);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside as EventListener);
      document.removeEventListener("touchstart", handleClickOutside as EventListener);
    };
  }, [isOpen, isMobile, onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % serviceItems.length);
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + serviceItems.length) % serviceItems.length);
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(serviceItems.length - 1);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0) {
            handleItemClick(serviceItems[focusedIndex].route);
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, focusedIndex, onClose]);

  // Disable hover-based show/hide; controlled by click and outside click
  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  if (isMobile) {
    return (
      <div className="md:hidden">
        <button
          onClick={onToggle}
          className="w-full text-left text-xl text-white hover:text-accent-blue transition-colors duration-200 font-medium font-poppins flex items-center justify-between"
          aria-expanded={isOpen}
          aria-controls="mobile-services-menu"
        >
          Services
          <ChevronRight className={cn("h-7 w-7 transition-transform duration-200", isOpen && "rotate-90")} />
        </button>

        {isOpen && (
          <div
            id="mobile-services-menu"
            className="bg-white rounded-sm shadow-[0px_3px_12px_#00000029] mx-4 mb-4 overflow-hidden"
            style={{ background: "#FFFFFF 0% 0% no-repeat padding-box" }}
          >
            <div className="p-2">
              <div className="space-y-0">
                {serviceItems.map((item, index) => (
                  <div key={item.id}>
                    <button
                      onClick={() => handleItemClick(item.route)} onMouseEnter={() => prefetchRoute(item.route)} onFocus={() => prefetchRoute(item.route)}
                      className="w-full flex items-center px-3 py-2 hover:bg-[#F7FAFF] transition-all duration-200 text-left group"
                      role="menuitem"
                    >
                      <span className="text-black opacity-100 font-poppins font-normal text-[18px] leading-[27px] tracking-[0] flex-1 text-left">
                        {item.title}
                      </span>
                      <span className="text-black opacity-100">&gt;</span>
                    </button>
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="ml-4 border-l-2 border-[#EFEFF5]">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={(e) => {
                              handleItemClick(subItem.route);
                            }}
                            onMouseEnter={() => prefetchRoute(subItem.route)}
                            onFocus={() => prefetchRoute(subItem.route)}
                            className="w-full flex items-center px-3 py-1.5 hover:bg-[#F7FAFF] transition-all duration-200 text-left"
                            role="menuitem"
                          >
                            <span className="text-black/70 font-poppins font-normal text-[16px] leading-[24px]">
                              {subItem.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                    {index < serviceItems.length - 1 && <div className="h-px bg-[#EFEFF5] mx-4"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full -left-[100%] transform -translate-x-[25%] z-50 transition-transform duration-300 lg:hover:-translate-x-[70%] hover:-translate-x-[40%]"
    >
      <div
        className={cn(
          "bg-white lg:w-[var(--size-425)] w-[300px] transition-all duration-200 rounded-[var(--size-24)_0_0_var(--size-24)] hover:bg-[#f5f5f5]",
          // hoveredItemId ? "rounded-[24px_0_0_24px]" : "rounded-3xl",
          "animate-in fade-in-0 slide-in-from-top-1 duration-[180ms] ease-out",
        )}
        role="menu"
        aria-labelledby="services-menu-button"
        style={{ background: "#FFFFFF 0% 0% no-repeat padding-box", opacity: 1 }}
      >
        <div className="p-[1px]">
          <div className="space-y-0">
            {serviceItems.map((item, index) => {
              const isFocused = focusedIndex === index;
              const isHovered = hoveredItemId === item.id;

              return (
                <div
                  key={item.id}
                  className="group relative service-tab-button"
                  onMouseEnter={(e) => {
                    setFocusedIndex(index);
                    setHoveredItemId(item.id);
                  }}
                  onMouseLeave={() => setHoveredItemId(null)}
                >
                  <button
                    onClick={() => handleItemClick(item.route)} onMouseEnter={() => prefetchRoute(item.route)} onFocus={() => prefetchRoute(item.route)}
                    className={cn(
                      "w-full flex items-center pl-7 pr-3 xl:py-4 lg:py-2 py-2 transition-all duration-200 text-left group",
                      // "first:rounded-t-2xl last:rounded-b-0 rounded-none"
                    )}
                    role="menuitem"
                    tabIndex={isFocused ? 0 : -1}
                  >
                    <span className="fs-18 text-[#000000] leading-[27px] tracking-[0] flex-1 text-left">
                      {item.title}
                    </span>
                    {item.subItems && item.subItems.length > 0 && (
                      <img src={patharrowicon} className="w-5 h-5" alt="Navigate to submenu arrow icon" />
                    )}
                  </button>

                  {/* 3rd Level Submenu */}
                  {item.subItems && item.subItems.length > 0 && hoveredItemId === item.id && (
                    <div
                      className="absolute left-full bg-white rounded-[0_var(--size-24)_var(--size-24)_0] lg:w-[var(--size-425)] w-[300px] h-auto animate-in fade-in-0 slide-in-from-left-1 duration-150 z-50"
                      style={{
                        background: "#F5F5F5",
                        top: "0", // default
                        // transform: `translateY(${index * 100}%)`,
                      }}
                    >
                      <div className="p-0">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subItem.id}>
                            <button
                              onClick={() => handleItemClick(subItem.route)} onMouseEnter={() => prefetchRoute(subItem.route)} onFocus={() => prefetchRoute(subItem.route)}
                              className="w-full flex items-center justify-between hover:text-[#0089FF] transition-all duration-100 text-left pl-7 pr-3 xl:py-4 lg:py-2 py-2"
                              role="menuitem"
                            >
                              <span className="fs-18 w-full flex items-center transition-all duration-200 text-left group flex-1">
                                {subItem.title}
                              </span>
                            </button>
                            {subIndex < item.subItems.length - 1 && <div className="h-px bg-[#EFEFF5] mx-6"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {index < serviceItems.length - 1 && <div className="h-px bg-[#EFEFF5] mx-4"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
