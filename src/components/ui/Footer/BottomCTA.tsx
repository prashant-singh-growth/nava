import React, { useState, useEffect } from "react";
import whitearrow from "../../../assets/Icons/white-right-arrow.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { serviceCTAs } from "../../../config/serviceCTAConfig";

// Responsive description component
const ResponsiveDescription = ({ text }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formattedText = isDesktop
    ? text.replace(/\n/g, "<br/>")
    : text.replace(/\n/g, " ");

  return (
    <p
      className="md:my-6 my-4 md:text-start text-center max-w-lg w-full text-white"
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
};

const scrollToForm = () => {
  const formSection = document.getElementById("form-client");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}

const BottomCTA = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Split pathname for service/corporate detection
  const pathParts = location.pathname.split("/").filter(Boolean);

  if (pathParts) {
    if ((pathParts[0] !== "services" && pathParts[0] !== "corporate") || !pathParts[1]) {
      pathParts[1] = `default`;
    }
  }

  // Get CTA config dynamically
  const ctaConfig = serviceCTAs[pathParts[2]]
    ? serviceCTAs[pathParts[2]]
    : serviceCTAs[pathParts[1]] ? serviceCTAs[pathParts[1]] : serviceCTAs['default'];

  const path = "/contact-us"; // Update if needed

  // Variant class mapping
  // const Home = "pt-80 md:pt-4 lg:pt-4 xl:pt-2 md:pl-64 lg:pl-[30rem] xl:pl-[41rem]";
  const ServiceStrategy = "pt-64 md:pt-0 md:pl-56 lg:pl-[30rem] xl:pl-[41rem]";
  const ServiceAwsClass = "pt-96 md:pt-0 md:pl-56 lg:pl-[30rem] xl:pl-[41rem]";
  const ServiceDigitalStrategy = "pt-80 md:pt-0 md:pl-56 lg:pl-[30rem] xl:pl-[41rem]";
  const contactClass = "pt-12 md:pt-8 lg:pl-[25rem]";
  const ServiceEndtoEnd = "pt-60 md:pt-0 md:pl-56 lg:pl-[30rem] xl:pl-[41rem]"
  const CommanClass = "pt-72 md:pt-0 md:pl-56 lg:pl-[30rem] xl:pl-[41rem]";

  const variantMapping = [
    // {
    //   paths: ["/"],
    //   classes: Home,
    // },
    {
      paths: ["/services/strategy-advisory"],
      classes: ServiceStrategy,
    },
    {
      paths: [
        "/services/transformation-modernization",
        "/services/product-engineering",
        "/services/cloud-data-solutions",
        "/services/engagement-models",
        "/services/strategy-advisory/tech-assessment",
        "/services/strategy-advisory/risk-compliance-advisory",
        "/services/strategy-advisory/change-management",
        "/services/transformation-modernization/automation-process",
        "/services/transformation-modernization/customer-transformation",
        "/services/transformation-modernization/data-modernization",
        "/services/transformation-modernization/cloud-transformation",
        "/services/transformation-modernization/agile-product",
        "/services/aws-solutions/aws-data-analytics",
        "/corporate/carrers",
      ],
      classes: CommanClass,
    },
    
    {
      paths: ["/services/aws-solutions", "/services/aws-solutions/aws-genai", "/services/aws-solutions/aws-migration"],
      classes: ServiceAwsClass,
    },
    {
      paths: ["/services/strategy-advisory/digital-strategy"],
      classes: ServiceDigitalStrategy,
    },
    {
      paths: [
        "/services/product-engineering/end-to-end",
        "/services/product-engineering/ai-modernization",
        "/services/product-engineering/quality-engineering",
        "/services/product-engineering/product-sustenance",
        "/services/product-engineering/dedicated-teams",
        "/services/cloud-data-solutions/cloud-architecture",
        "/services/cloud-data-solutions/data-platforms",
        "/services/cloud-data-solutions/observability",
        "/services/engagement-models/bot",
        "/services/engagement-models/pod",
        "/services/engagement-models/hybrid-model",
        "/services/engagement-models/gcc",
      ],
      classes: ServiceEndtoEnd,
    },
    {
      paths: ["/contact"],
      classes: contactClass,
    },
  ];

  // Helper function to get current class based on pathname
  const getCurrentClass = (pathname) => {
    const item = variantMapping.find((v) => v.paths.includes(pathname));
    return item ? item.classes : "pt-80 md:pt-4 lg:pt-4 xl:pt-2 md:pl-64 lg:pl-[30rem] xl:pl-[41rem]"; // default
  };

  const currentClass = getCurrentClass(location.pathname);

  return (
    <section className="py-2 md:py-10 lg:py-16 xl:py-20 bg-primary relative overflow-hidden footer-bootom-cta-section">
      <div className="px-4 flex justify-center relative z-10">
        <div className={`flex flex-col items-start footer-cta-details ${currentClass}`}>
          {/* Main Heading */}
          <h2 className="fs-36 leading-normal md:leading-9 lg:leading-10 xl:leading-[var(--size-50)] font-semibold text-white md:text-start text-center whitespace-pre-line">
            {ctaConfig.title}
          </h2>

          {/* Responsive Description */}
          <ResponsiveDescription text={ctaConfig.description} />

          {/* CTA Button */}
          <button
            onClick={() => {
              if (pathParts && pathParts[0] === 'contact-us') {
                scrollToForm(); //call the function
              } else {
                navigate(path); //navigate to other pages
              }
            }}
            className="primary-button font-regular border border-[#3A6CC9] text-lg gap-4 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-6 flex items-center"
          >
            {ctaConfig.buttonLabel}
            <img src={whitearrow} alt="service-arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
