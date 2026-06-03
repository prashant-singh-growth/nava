import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ServicesMenu } from "./ServicesMenu";
import { IndustriesMenu } from "./IndustriesMenu";
import { CorporateMenu } from "./CorporateMenu";
import { InsightsMenu } from "./InsightsMenu";
import { VisionAIMenu } from "./VisionAIMenu";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  linkClass?: string;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Vision AI", href: "" },
  { name: "Services", href: "" },
  { name: "Industries", href: "" },
  { name: "Insights", href: "/insights" },
  { name: "Corporate", href: "" },
];

const NavMenu = ({ isMenuOpen, setIsMenuOpen, linkClass = "" }: NavMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isVisionAIOpen, setIsVisionAIOpen] = useState(false);
  const isMobile = useIsMobile();

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsInsightsOpen(false);
    setIsCorporateOpen(false);
    setIsVisionAIOpen(false);
  };

  const scrollToSection = (href: string) => {
    if (href === "/") {
      navigate(href);
      setIsMenuOpen(false);
      closeAllMenus();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    closeAllMenus();
  };

  const handleVisionAIClick = () => {
    setIsVisionAIOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
        setIsInsightsOpen(false);
        setIsCorporateOpen(false);
      }
      return next;
    });
  };

  const handleServicesClick = () => {
    setIsServicesOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsIndustriesOpen(false);
        setIsInsightsOpen(false);
        setIsCorporateOpen(false);
        setIsVisionAIOpen(false);
      }
      return next;
    });
  };
  const handleIndustriesClick = () => {
    setIsIndustriesOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsServicesOpen(false);
        setIsInsightsOpen(false);
        setIsCorporateOpen(false);
        setIsVisionAIOpen(false);
      }
      return next;
    });
  };
  const handleInsightsClick = () => {
    setIsInsightsOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
        setIsCorporateOpen(false);
        setIsVisionAIOpen(false);
      }
      return next;
    });
  };
  const handleCorporateClick = () => {
    setIsCorporateOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
        setIsInsightsOpen(false);
        setIsVisionAIOpen(false);
      }
      return next;
    });
  };

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 md:gap-6 lg:gap-10 xl:gap-12">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            {item.name === "Vision AI" ? (
              <button
                id="vision-ai-menu-button"
                onClick={handleVisionAIClick}
                className={`
                  ${linkClass}
                  relative
                  fs-18
                  transition-colors duration-200
                  hover:text-[#4FCEDB]
                  ${isVisionAIOpen
                    ? "!text-[#4FCEDB] lg:h-[var(--size-50)] h-[40px] after:rounded-xl after:content-[''] after:absolute xl:after:left-2 lg:after:left-1 md:after:left-1 after:bottom-0 after:w-[85%] after:h-[var(--size-5)] after:[background-color:#4FCEDB]"
                    : ""}
                `}
                aria-expanded={isVisionAIOpen}
              >
                {item.name}
              </button>
            ) : item.name === "Services" ? (
              <button
                id="services-menu-button"
                onClick={handleServicesClick}
                className={`
                  ${linkClass}
                  relative
                  fs-18
                  transition-colors duration-200
                  hover:text-[#4FCEDB]
                  ${isServicesOpen
                    ? "!text-[#4FCEDB] lg:h-[var(--size-50)] h-[40px] after:rounded-xl after:content-[''] after:absolute xl:after:left-2 lg:after:left-1 md:after:left-1 after:bottom-0 after:w-[85%] after:h-[var(--size-5)] after:[background-color:#4FCEDB]"
                    : ""}
                `}
                aria-expanded={isServicesOpen}
              >
                {item.name}
              </button>
            ) : item.name === "Industries" ? (
              <button
                id="industries-menu-button"
                onClick={handleIndustriesClick}
                className={`
                  ${linkClass}
                  relative
                  fs-18
                  transition-colors duration-200
                  hover:text-[#4FCEDB]
                  ${isIndustriesOpen
                    ? "!text-[#4FCEDB] lg:h-[var(--size-50)] h-[40px] after:rounded-xl after:content-[''] after:absolute xl:after:left-2 lg:after:left-1 md:after:left-1 after:bottom-0 after:w-[85%] after:h-[var(--size-5)] after:[background-color:#4FCEDB]"
                    : ""}
                `}
                aria-expanded={isIndustriesOpen}
              >
                {item.name}
              </button>
            ) : item.name === "Insights" ? (
              <button
                id="insights-menu-button"
                onClick={handleInsightsClick}
                className={`
                  ${linkClass}
                  relative
                  fs-18
                  transition-colors duration-200
                  hover:text-[#4FCEDB]
                  ${isInsightsOpen
                    ? "!text-[#4FCEDB] after:rounded-xl after:content-[''] after:absolute after:left-2 after:bottom-[calc(var(--size-16)*-1)] after:w-[85%] after:h-[5px] after:[background-color:#4FCEDB]"
                    : ""}
                `}
                aria-expanded={isInsightsOpen}
              >
                {item.name}
              </button>
            ) : item.name === "Corporate" ? (
              <button
                id="corporate-menu-button"
                onClick={handleCorporateClick}
                className={`
                  ${linkClass}
                  relative
                  fs-18
                  transition-colors duration-200
                  hover:text-[#4FCEDB]
                  ${isCorporateOpen
                    ? "!text-[#4FCEDB] lg:h-[var(--size-50)] h-[40px] after:rounded-xl after:content-[''] after:absolute xl:after:left-2 lg:after:left-1 md:after:left-1 after:bottom-0 after:w-[85%] after:h-[var(--size-5)] after:[background-color:#4FCEDB]"
                    : ""}
                `}
                aria-expanded={isCorporateOpen}
              >
                {item.name}
              </button>
            ) : (
              <button
                onClick={() => scrollToSection(item.href)}
                className={`${linkClass} hover:text-[#4FCEDB] transition-colors duration-200 fs-18`}
              >
                {item.name}
              </button>
            )}

            {item.name === "Vision AI" && (
              <VisionAIMenu
                isOpen={isVisionAIOpen}
                onClose={() => setIsVisionAIOpen(false)}
                onToggle={handleVisionAIClick}
                isMobile={false}
              />
            )}
            {item.name === "Services" && (
              <ServicesMenu
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
                onToggle={handleServicesClick}
                isMobile={false}
              />
            )}
            {item.name === "Industries" && (
              <IndustriesMenu
                isOpen={isIndustriesOpen}
                onClose={() => setIsIndustriesOpen(false)}
                onToggle={handleIndustriesClick}
                isMobile={false}
              />
            )}
            {item.name === "Insights" && (
              <InsightsMenu
                isOpen={isInsightsOpen}
                onClose={() => setIsInsightsOpen(false)}
                onToggle={handleInsightsClick}
                isMobile={false}
              />
            )}
            {item.name === "Corporate" && (
              <CorporateMenu
                isOpen={isCorporateOpen}
                onClose={() => setIsCorporateOpen(false)}
                onToggle={handleCorporateClick}
                isMobile={false}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Sidebar Navigation */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={undefined}
      ></div>

      {/* Sidebar */}
      <nav
        className={`fixed h-full w-full z-50 left-0 transform transition-transform duration-300 ease-in-out md:hidden"
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col pt-28">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href || // for routes
              location.hash === item.href; // for #sections

            return (
              <div
                key={item.name}
                className="border-b-2 border-[#70707044] last:border-b-0 p-4 hidden"
              >
                {item.name === "Services" ? (
                  <ServicesMenu
                    isOpen={isServicesOpen}
                    onClose={() => setIsServicesOpen(false)}
                    onToggle={handleServicesClick}
                    isMobile={true}
                    onMobileMenuClose={() => setIsMenuOpen(false)}
                  />
                ) : item.name === "Industries" ? (
                  <IndustriesMenu
                    isOpen={isIndustriesOpen}
                    onClose={() => setIsIndustriesOpen(false)}
                    onToggle={handleIndustriesClick}
                    isMobile={true}
                    onMobileMenuClose={() => setIsMenuOpen(false)}
                  />
                ) : item.name === "Insights" ? (
                  <InsightsMenu
                    isOpen={isInsightsOpen}
                    onClose={() => setIsInsightsOpen(false)}
                    onToggle={handleInsightsClick}
                    isMobile={true}
                    onMobileMenuClose={() => setIsMenuOpen(false)}
                  />
                ) : item.name === "Corporate" ? (
                  <CorporateMenu
                    isOpen={isCorporateOpen}
                    onClose={() => setIsCorporateOpen(false)}
                    onToggle={handleCorporateClick}
                    isMobile={true}
                    onMobileMenuClose={() => setIsMenuOpen(false)}
                  />
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left text-xl font-poppins transition-colors duration-200 
                      ${
                        isActive
                          ? "text-accent-blue font-bold"
                          : "text-white hover:text-accent-blue"
                      }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </nav>


    </>
  );
};

export default NavMenu;
