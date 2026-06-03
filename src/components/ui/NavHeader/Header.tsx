import { Menu, X } from "lucide-react";
import whitearrow from "../../../assets/Icons/white-right-arrow.svg";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import { MobileDrawer } from "./MobileDrawer";
import logo from "../../../assets/Images/logo.svg";
import logoDark from "../../../assets/Images/logo-dark.webp";
import HomeToggle from "../../../assets/Icons/home-toggle.svg";
import DarkToggle from "../../../assets/Icons/dark-toggle.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is home
  const isHome = location.pathname === "/";
  const isContactUs = location.pathname === "/contact-us";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header style={{
      background: isHome ? "#002467" : isContactUs ? "#f4f7fc"  : "#ffffff",
    }}
    className="relative flex flex-col z-9">
      <div className="page-container mx-auto py-6 relative">
        <div className="flex items-center gap-3 md:gap-0">
          {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setIsMenuOpen(true)}
            >
              <img src={isHome ? HomeToggle : DarkToggle} alt="Open navigation menu" />
            </button>
            <div className="flex justify-between w-full">
                {/* Logo (same for desktop & mobile) */}
                <button
                  onClick={() => navigate("/")}
                  className="text-white font-bold text-2xl hover:text-accent-blue transition-colors duration-200 fs-18"
                  aria-label="NAVA - Go to homepage"
                >
                  <img src={isHome ? logo : logoDark} className="logo-img" alt="NAVA Software Solutions logo" />
                </button>

                {/* Desktop Navigation */}
                <div className="flex">
                <NavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} linkClass={isHome ? "text-white" : "text-[#000000]"}/>
                </div>

                {/* CTA Button (Desktop only) */}
                  <button 
                  onClick={() => navigate('/contact-us')}      
                  className="primary-button border border-[#3A6CC9] text-[#ffffff] flex items-center gap-3 xl:gap-6 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4">
                    Get In Touch
                    <img src={whitearrow} alt="service-arrow-icon" />
                  </button>
            </div>
        </div>
      </div>

      {/* Mobile Drawer - New Design */}
      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;