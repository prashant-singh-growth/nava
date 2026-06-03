import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import patharrowicon from "../../../assets/Icons/path-arrow-icon.webp";
import { prefetchRoute } from "@/lib/prefetch";

interface InsightsItem {
  id: string;
  title: string;
  route: string;
}

interface InsightsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
}

const insightsItems: InsightsItem[] = [
    { id: "blogs", title: "Blogs", route: "/blog" },
    { id: "white-papers", title: "White Paper", route: "/insights?category=White+Papers" },
    { id: "case-studies", title: "Case Studies", route: "/insights?category=Case+Studies" },
];

export const InsightsMenu = ({ isOpen, onClose, onToggle, isMobile = false, onMobileMenuClose }: InsightsMenuProps) => {
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
          setFocusedIndex((prev) => (prev + 1) % insightsItems.length);
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + insightsItems.length) % insightsItems.length);
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(insightsItems.length - 1);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0) {
            handleItemClick(insightsItems[focusedIndex].route);
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

  // Mobile accordion version
  if (isMobile) {
    return (
      <div className="md:hidden">
        <button
          onClick={onToggle}
          className="w-full text-left text-xl text-white hover:text-accent-blue transition-colors duration-200 font-medium font-poppins flex items-center justify-between"
          aria-expanded={isOpen}
          aria-controls="mobile-insights-menu"
        >
          Insights
          <ChevronRight className={cn("h-7 w-7 transition-transform duration-200", isOpen && "rotate-90")} />
        </button>
        {isOpen && (
          <div id="mobile-insights-menu" className="bg-white rounded-sm shadow-[0px_3px_12px_#00000029] mx-4 mb-4 overflow-hidden" style={{ background: "#FFFFFF 0% 0% no-repeat padding-box" }}>
            <div className="p-2">
              <div className="space-y-0">
                {insightsItems.map((item, index) => (
                  <div key={item.id}>
                    <button onClick={() => handleItemClick(item.route)} onMouseEnter={() => prefetchRoute(item.route)} onFocus={() => prefetchRoute(item.route)} className="w-full flex items-center px-4 py-3 hover:bg-[#F7FAFF] transition-all duration-200 text-left group" role="menuitem">
                      <span className="text-black opacity-100 font-poppins font-normal text-[12px] leading-[27px] tracking-[0] flex-1 text-left">{item.title}</span>
                      <span className="text-black opacity-100">&gt;</span>
                    </button>
                    {index < insightsItems.length - 1 && <div className="h-px bg-[#000000] mx-4"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop dropdown version
  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50">
      <div className={cn("bg-white rounded-3xl min-w-[300px]", "animate-in fade-in-0 slide-in-from-top-1 duration-[180ms] ease-out shadow-[0_3px_12px_#00000029]")} role="menu" aria-labelledby="insights-menu-button" style={{ background: "#FFFFFF 0% 0% no-repeat padding-box", opacity: 1 }}>
        <div className="p-0">
          <div className="space-y-0">
            {insightsItems.map((item, index) => {
              const isFocused = focusedIndex === index;
              return (
                <div key={item.id}>
                  <button onClick={() => handleItemClick(item.route)} onMouseEnter={() => { prefetchRoute(item.route); setFocusedIndex(index); }} onFocus={() => prefetchRoute(item.route)} className={cn("w-full flex items-center pl-7 pr-3 py-4 transition-all duration-200 text-left group")} role="menuitem" tabIndex={isFocused ? 0 : -1}>
                    <span className="fs-18 text-[#000000] leading-[27px] tracking-[0] flex-1 text-left">{item.title}</span>
                  </button>
                  {index < insightsItems.length - 1 && <div className="h-px bg-[#EFEFF5] mx-4"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};