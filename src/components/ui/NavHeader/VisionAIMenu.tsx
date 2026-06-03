import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import patharrowicon from "../../../assets/Icons/path-arrow-icon.webp";
import { prefetchRoute } from "@/lib/prefetch";

interface VisionAIItem {
  id: string;
  title: string;
  route: string;
}

interface VisionAIMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
}

const visionAIItems: VisionAIItem[] = [
  {
    id: "vision-ai-solutions",
    title: "Vision AI Solutions",
    route: "/vision-ai",
  },
  {
    id: "edge-intelligence",
    title: "Edge Intelligence",
    route: "/vision-ai/edge-intelligence",
  },
  {
    id: "privacy-security",
    title: "Privacy & Security",
    route: "/vision-ai/privacy-security",
  },
  // {
  //   id: "use-cases",
  //   title: "Use Cases",
  //   route: "/vision-ai/use-cases",
  // },
  // {
  //   id: "aws-marketplace",
  //   title: "AWS Marketplace",
  //   route: "/vision-ai/aws-marketplace",
  // },
  // {
  //   id: "demo-center",
  //   title: "Demo Center",
  //   route: "/vision-ai/demo-center",
  // },
  // {
  //   id: "zero-cost-poc",
  //   title: "Zero-Cost PoC",
  //   route: "/vision-ai/zero-cost-poc",
  // },
];

export const VisionAIMenu = ({ isOpen, onClose, onToggle, isMobile = false, onMobileMenuClose }: VisionAIMenuProps) => {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

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
          setFocusedIndex((prev) => (prev + 1) % visionAIItems.length);
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + visionAIItems.length) % visionAIItems.length);
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(visionAIItems.length - 1);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0) {
            handleItemClick(visionAIItems[focusedIndex].route);
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

  if (isMobile) {
    return (
      <div className="md:hidden">
        <button
          onClick={onToggle}
          className="w-full text-left text-xl text-white hover:text-accent-blue transition-colors duration-200 font-medium font-poppins flex items-center justify-between"
          aria-expanded={isOpen}
          aria-controls="mobile-vision-ai-menu"
        >
          Vision AI
          <ChevronRight className={cn("h-7 w-7 transition-transform duration-200", isOpen && "rotate-90")} />
        </button>

        {isOpen && (
          <div
            id="mobile-vision-ai-menu"
            className="bg-white rounded-sm shadow-[0px_3px_12px_#00000029] mx-4 mb-4 overflow-hidden"
            style={{ background: "#FFFFFF 0% 0% no-repeat padding-box" }}
          >
            <div className="p-2">
              <div className="space-y-0">
                {visionAIItems.map((item, index) => (
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
                    {index < visionAIItems.length - 1 && <div className="h-px bg-[#EFEFF5] mx-4"></div>}
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
      className="absolute top-full -left-[100%] transform -translate-x-[25%] z-50 transition-transform duration-300"
    >
      <div
        className={cn(
          "bg-white lg:w-[var(--size-425)] w-[300px] transition-all duration-200 rounded-3xl",
          "animate-in fade-in-0 slide-in-from-top-1 duration-[180ms] ease-out",
        )}
        role="menu"
        aria-labelledby="vision-ai-menu-button"
        style={{ background: "#FFFFFF 0% 0% no-repeat padding-box", opacity: 1 }}
      >
        <div className="p-[1px]">
          <div className="space-y-0">
            {visionAIItems.map((item, index) => {
              const isFocused = focusedIndex === index;

              return (
                <div key={item.id} className="group relative">
                  <button
                    onClick={() => handleItemClick(item.route)} onMouseEnter={() => prefetchRoute(item.route)} onFocus={() => prefetchRoute(item.route)}
                    className={cn(
                      "w-full flex items-center pl-7 pr-3 xl:py-4 lg:py-2 py-2 transition-all duration-200 text-left group hover:bg-[#f5f5f5]",
                      index === 0 && "rounded-t-3xl",
                      index === visionAIItems.length - 1 && "rounded-b-3xl"
                    )}
                    role="menuitem"
                    tabIndex={isFocused ? 0 : -1}
                  >
                    <span className="fs-18 text-[#000000] leading-[27px] tracking-[0] flex-1 text-left">
                      {item.title}
                    </span>
                  </button>

                  {index < visionAIItems.length - 1 && <div className="h-px bg-[#EFEFF5] mx-4"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
