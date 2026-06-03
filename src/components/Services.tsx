import serviceicon1 from "../assets/Icons/service-logo1.webp";
import serviceicon1Hover from "../assets/Icons/service-logo1-hover.svg";

import serviceicon2 from "../assets/Icons/service-logo2.webp";
import serviceicon2Hover from "../assets/Icons/service-logo2-hover.svg";

import serviceicon3 from "../assets/Icons/service-logo3.webp";
import serviceicon3Hover from "../assets/Icons/service-logo3-hover.svg";

import serviceicon4 from "../assets/Icons/service-logo4.svg";
import serviceicon4Hover from "../assets/Icons/service-logo4-hover.svg";

import serviceicon5 from "../assets/Icons/service-logo5.webp";
import serviceicon5Hover from "../assets/Icons/service-logo5-hover.svg";

import serviceicon6 from "../assets/Icons/aws-logo.webp";
import serviceicon6Hover from "../assets/Icons/aws-logo.webp";

import bluearrow from "../assets/Icons/blue-right-arrow.svg";
import hoverArrow from "../assets/Icons/hover-blue-right-arrow.svg";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: { normal: serviceicon5, hover: serviceicon5Hover },
      title: "Vision AI",
      path: "/vision-ai",
      description: "Using existing cameras, transform industrial and logistics operations with computer vision.",
    },
    {
      icon: { normal: serviceicon6, hover: serviceicon6Hover },
      title: "AWS Solutions",
      path: "/services/aws-solutions",
      description: "Accelerate transformation with AWS GenAI, Machine Learning, Data, and migration solutions.",
    },
    {
      icon: { normal: serviceicon3, hover: serviceicon3Hover },
      title: "AI Product Engineering",
      path: "/services/product-engineering",
      description: "Innovative product development and AI-driven modernization for faster growth.",
    },
    /*{
      icon: { normal: serviceicon2, hover: serviceicon2Hover },
      title: "Transformation & Modernization",
      path: "/services/transformation-modernization",
      description: "Reimagine work with agile, automated solutions.",
    },*/
    {
      icon: { normal: serviceicon4, hover: serviceicon4Hover },
      title: "Cloud & Data Solutions",
      path: "/services/cloud-data-solutions",
      description: "Secure, scalable cloud and data platforms optimized for performance.",
    },
    {
      icon: { normal: serviceicon1, hover: serviceicon1Hover },
      title: "Strategy & Advisory",
      path: "/services/strategy-advisory",
      description: "Expert guidance to shape your digital vision and manage risk with confidence.",
    },
    /*{
      icon: { normal: serviceicon2, hover: serviceicon2Hover },
      title: "Engagement Models",
      path: "/services/engagement-models",
      description: "Flexible delivery models—BOT, POD, hybrid, or GCC-as-a-Service.",
    },*/
  ];

  return (
    <section id="services" className="section-top service-section">
      <div className="page-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-3 service-section-header">
          <p className="text-gray fs-24 font-medium">What We Deliver</p>
          <h2 className="font-semibold fs-36">
            Vision AI, GenAI, Cloud, and Data solutions
            <br />
            built for real operational impact.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 service-grid relative">
          {services.map((service, index) => (
            <Link key={index} to={service.path}>
              <div
                key={index}
                className="service-card-hover group bg-white rounded-3xl relative p-6 md:p-0 overflow-hidden cursor-pointer"
              >
                {/* Icon with hover swap */}
                <div className="relative h-auto">
                  <img src={service.icon.normal}
                    alt={`${service.title} icon`}
                    className={`${index === 1 ? "aws-home-services-icon" : "services-icon"} absolute inset-0 
                                               group-hover:opacity-0 group-hover:scale-75 object-contain`} />
                  <img src={service.icon.hover}
                    alt={`${service.title} icon hover`}
                    className={`${index === 1 ? "aws-home-services-icon" : "services-icon"} absolute inset-0 opacity-0
                                               group-hover:opacity-100 group-hover:scale-100 object-contain`} />
                </div>

                {/* Title + Description */}
                <h3 className="fs-24 lg:pt-[var(--size-75)] pt-[65px] mb-[var(--size-12)] transition-colors duration-300 group-hover:text-[#0089FF]">
                  {service.title}
                </h3>
                <p className="lg:mb-[var(--size-45)] mb-[25px] fs-18 lg:max-h-[var(--size-55)] h-[40px]">
                  {service.description}
                </p>

                {/* Arrow Button */}
                <button className="relative w-1/2 h-5 overflow-hidden">
                  <img src={bluearrow} alt=""
                    className="absolute inset-0 transition-all duration-300 ease-in-out 
                                               group-hover:translate-x-full group-hover:opacity-0" />
                  <img src={hoverArrow} alt=""
                    className="absolute inset-0 -translate-x-full opacity-0 
                                               transition-all duration-300 ease-in-out 
                                               group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
