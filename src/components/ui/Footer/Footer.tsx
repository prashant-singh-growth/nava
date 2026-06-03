import { useState, useEffect } from "react";
import { Mail, Phone, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footerlogo from "./Footerlogo";
import BottomCTA from "./BottomCTA";
import footerlogo from "../../../assets/Images/footer-logo.webp";
import twitter from "../../../assets/Icons/twitter.webp";
import linkedin from "../../../assets/Icons/linkedin.webp";
import facebook from "../../../assets/Icons/facebook.webp";
import PlusIcon from "../../../assets/Icons/plus.svg";
import MinusIcon from "../../../assets/Icons/minus.svg";
import iso9001 from "../../../assets/logos/iso-9001.svg";
import iso27001 from "../../../assets/logos/iso-27001.svg";
import gdprLogo from "../../../assets/logos/gdpr.svg";
import soc2Logo from "../../../assets/logos/soc2.svg";

const Footer = () => {
  const navigate = useNavigate();

  const services = [
    { name: "AWS Solutions", path: "/services/aws-solutions" },
    { name: "AI Product Engineering", path: "/services/product-engineering" },
    { name: "Cloud & Data Solutions", path: "/services/cloud-data-solutions" },
    { name: "Strategy & Advisory", path: "/services/strategy-advisory" },
    // { name: "Engagement Models", path: "/services/engagement-models" },
  ];

  const visionAI = [
    { name: "Vision AI Solutions", path: "/vision-ai" },
    { name: "Edge Intelligence", path: "/vision-ai/edge-intelligence" },
    { name: "Privacy & Security", path: "/vision-ai/privacy-security" },
    // { name: "Use Cases", path: "/vision-ai/use-cases" },
    // { name: "AWS Marketplace", path: "/vision-ai/aws-marketplace" },
    // { name: "Demo Center", path: "/vision-ai/demo-center" },
    // { name: "Zero-Cost PoC", path: "/vision-ai/zero-cost-poc" },
  ];

  const industries = [
    { name: "Supply Chain Logistics", path: "/industries/supply-chain-logistics" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "Oil & Gas", path: "/industries/oil-gas" },
    { name: "Energy & Utility", path: "/industries/energy-utility" },
  ];

  const insights = [
    { name: "Blogs", path: "/insights?category=Blog" },
    { name: "White Paper", path: "/insights?category=White+Papers" },
    { name: "Case Studies", path: "/insights?category=Case+Studies" },
  ];

  const corporate = [
    { name: "About us", path: "/corporate/about-us" },
    { name: "Meet the Team", path: "/corporate/meet-the-team" },
    { name: "CSR", path: "/corporate/csr" },
    { name: "Careers", path: "/corporate/careers" },
  ];

  const footerSections = [
    { title: "Vision AI", items: visionAI },
    { title: "Services", items: services },
    { title: "Industries", items: industries },
    { title: "Insights", items: insights },
    { title: "Corporate", items: corporate },
  ];

  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      // Handle anchor links
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Handle route navigation
      navigate(path);
    }
  };

  // Default open: Services for mobile
  const [openSection, setOpenSection] = useState<string | null>("Services");

  // Track window width for responsive behavior
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // < md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section: string) => {
    if (!isMobile) return; // only toggle on mobile
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <footer className="bg-[#00194A] text-white">
      <Footerlogo />
      <BottomCTA />

      <div className="mx-auto pt-16 pb-10">
        {/* Main Footer Layout */}
        <div className="page-container grid grid-cols-2 md:grid-cols-10 lg:grid-cols-12 gap-10 md:gap-10 lg:gap-10 xl:gap-20 footer-content">
          {/* LEFT SECTION */}
          <div className="lg:col-span-5 md:col-span-3">
            {/* Logo */}
            <div className="mb-6 flex justify-center md:justify-start">
              <img src={footerlogo} className="footer-logo-img" alt="NAVA Software Solutions company logo" />
            </div>

            <div className="mt-auto justify-center items-center gap-4 social-icon-items flex md:hidden flex-col">
              <span className="text-[#FFFFFF] mr-2 fs-16 font-bold">Follow us on</span>
              <div className="flex gap-3">
                {/* <a
                  href="https://x.com/navasoftware?s=11&t=2SpMVaok8GuCjEk4INxjig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 w-12 h-12 items-center flex justify-center bg-[#1B1E5A] rounded-lg"
                >
                  <img src={twitter} className="footer-social-icons" alt="logo-image" />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/nava-software-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 w-12 h-12 items-center flex justify-center bg-[#1B1E5A] rounded-lg"
                >
                  <img src={linkedin} className="footer-social-icons" alt="Follow us on LinkedIn" />
                </a>
                {/*                 
                <a
                  href="https://www.facebook.com/navasoftsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 w-12 h-12 items-center flex justify-center bg-[#1B1E5A] rounded-lg"
                >
                  <img src={facebook} className="footer-social-icons" alt="logo-image" />
                </a> */}
              </div>
            </div>

            {/* Contact */}
            <div className="footer-contact-section hidden md:flex flex-col">
              <div className="mb-6">
                <p className="text-[#ffffff] font-semibold mb-2 fs-16">Contact us</p>
                <p className="text-[#C6C6C6] fs-16 flex lg:flex-row md:flex-col">
                  {/* <Mail size={14} className="inline mr-2 text-accent-blue" /> */}
                  <span>E: ai@navasoftware.com</span>
                  {/* </p>
              <p className="text-[#A8A8A8] fs-16"> */}
                  {/* <Phone size={14} className="inline mr-2 text-accent-blue" /> */}
                  <span className="lg:ml-2 lg:mt-0 md:mt-2">P: +1 860 615 9008</span>
                </p>
                <p className="text-[#C6C6C6] fs-16 mt-2">F: +1 866 678 6282</p>
              </div>

              {/* Locations */}
              <p className="text-[#ffffff] font-semibold mb-3 fs-16">Our Locations</p>
              <div className="mb-6 flex lg:gap-7 md:gap-2 lg:flex-row md:flex-col">
                <div>
                  <p className="text-[#C6C6C6] font-bold fs-16">Head office – USA:</p>
                  <p className="text-[#C6C6C6] mb-3 fs-16">
                    35 Cold Spring Road,
                    <br />
                    Suite 125, Rocky Hill,
                    <br />
                    CT 06067
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[#C6C6C6] fs-16">Other Locations:</p>
                  <p className="text-[#C6C6C6] fs-16">Hyderabad, India</p>
                  <p className="text-[#C6C6C6] fs-16">Guadalajara, Mexico</p>
                  {/* <p className="text-[#C6C6C6] fs-16">Manila, Philippines</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-7 md:col-span-7 flex flex-col">
            {/* Accordion / Grid Sections */}
            <div className="mb-10 flex justify-between footer-accordian-section gap-3">
              {footerSections.map((section) => (
                <div
                  key={section.title}
                  className="footer-delivery-section border-b border-[#70707038] mt-4 md:border-none fs-16"
                >
                  {/* Section Title */}
                  <h4
                    className="font-bold mb-2 cursor-pointer flex justify-between items-center md:cursor-auto fs-16"
                    onClick={() => toggleSection(section.title)}
                  >
                    {section.title}
                    {isMobile && (
                      <span>
                        {openSection === section.title ? (
                          <img src={MinusIcon} className="footer-accordian-icon" alt="Collapse menu section" />
                        ) : (
                          <img src={PlusIcon} className="footer-accordian-icon" alt="Expand menu section" />
                        )}
                      </span>
                    )}
                  </h4>

                  {/* Section Items */}
                  <ul
                    className={`space-y-4 mb-2 overflow-hidden transition-all duration-300 ${
                      !isMobile || openSection === section.title ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {section.items.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className="text-[#C6C6C6] hover:text-accent-blue transition-colors duration-200 text-left fs-16"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Icons aligned bottom-right */}
            <div className="mt-auto hidden md:flex justify-end items-center gap-3 social-icon-items">
              <span className="text-[#FFFFFF] mr-2 fs-16 font-bold">Follow us on</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/nava-software-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:w-8 lg:h-8 xl:w-11 xl:h-11 flex items-center bg-[#1B1E5A] justify-center rounded-xl"
                >
                  <img src={linkedin} className="footer-social-icons flex items-center" alt="Follow us on LinkedIn" />
                </a>
              </div>
            </div>

            <div className="footer-contact-section flex md:hidden flex-col">
              <div className="mb-6">
                <p className="text-[#ffffff] font-semibold mb-2 fs-16">Contact us</p>
                <p className="text-[#A8A8A8] fs-16">
                  {/* <Mail size={14} className="inline mr-2 text-accent-blue" /> */}
                  <span>E: ai@navasoftware.com</span>
                </p>
                <p className="text-[#A8A8A8] fs-16 mt-2">
                  {/* <Phone size={14} className="inline mr-2 text-accent-blue" /> */}
                  <span className="">P: +1 860 615 9008</span>
                </p>
                <p className="text-[#A8A8A8] fs-16 mt-2">F: +1 866 678 6282</p>
              </div>

              {/* Locations */}
              <p className="text-[#ffffff] font-semibold mb-3 fs-16">Our Locations</p>
              <div className="mb-6 flex gap-7">
                <div>
                  <p className="text-[#A8A8A8] font-bold fs-16">Head office – USA:</p>
                  <p className="text-[#A8A8A8] mb-3 fs-16">
                    35 Cold Spring Road,
                    <br />
                    Suite 125, Rocky Hill,
                    <br />
                    CT 06067
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[#A8A8A8] fs-16">Other Locations:</p>
                  <p className="text-[#A8A8A8] fs-16">Hyderabad, India</p>
                  <p className="text-[#A8A8A8] fs-16">Guadalajara, Mexico</p>
                  {/* <p className="text-[#A8A8A8] fs-16">Manila, Philippines</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="page-container py-8">
          <p className="text-[#8899AA] text-center text-sm font-semibold mb-5 tracking-widest uppercase">
            Certifications & Compliance
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
            {[
              { src: iso9001, label: "ISO 9001" },
              { src: iso27001, label: "ISO 27001" },
              { src: gdprLogo, label: "GDPR" },
              { src: soc2Logo, label: "SOC 2 Type II" },
            ].map((cert) => (
              <div key={cert.label} className="flex flex-col items-center gap-2">
                <img
                  src={cert.src}
                  alt={`${cert.label} certification badge`}
                  className="h-12 md:h-14 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
                <span className="text-[#8899AA] text-xs">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border border-[#70707038] my-9 md:flex hidden"></div>
        <div className="border-t border-[#70707038] my-9 flex md:hidden page-container pb-9"></div>

        {/* Legal Bottom Row */}
        <div className="page-container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <span className="text-[#6C6C6C] text-center font-[300] fs-16">
              © {currentYear} NAVA Software Solutions. All rights reserved
            </span>
            <div className="flex gap-4 text-[#6C6C6C] fs-16 font-[300]">
              <button
                onClick={() => handleNavigation("/privacy-policy")}
                className="hover:text-accent-blue transition-colors duration-200 font-poppins"
              >
                Privacy
              </button>
              <span>|</span>
              <button
                onClick={() => handleNavigation("/disclaimer")}
                className="hover:text-accent-blue transition-colors duration-200 font-poppins"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
