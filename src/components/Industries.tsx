import { FC, useState } from "react";
import whitearrow from "../assets/Icons/white-right-arrow.svg";
import industrylogo1 from "../assets/Icons/industrylogo1.svg";
import industrylogo1Active from "../assets/Icons/industrylogo1-active.svg";
import industrylogo2 from "../assets/Icons/industrylogo2.svg";
import industrylogo2Active from "../assets/Icons/industrylogo2-active.svg";
import industrylogo3 from "../assets/Icons/industrylogo3.svg";
import industrylogo3Active from "../assets/Icons/industrylogo3-active.svg";
import industrylogo4 from "../assets/Icons/industrylogo4.svg";
import industrylogo4Active from "../assets/Icons/industrylogo4-active.svg";
import industrylogo5 from "../assets/Icons/industrylogo5.svg";
import industrylogo5Active from "../assets/Icons/industrylogo5-active.svg";
import industrylogo6 from "../assets/Icons/industrylogo6.svg";
import industrylogo6Active from "../assets/Icons/industrylogo6-active.svg";
import industrylogo7 from "../assets/Icons/industrylogo7.svg";
import industrylogo7Active from "../assets/Icons/industrylogo7-active.svg";

import industrycard1 from "../assets/Images/industries-card1.webp";
import industrycard2 from "../assets/Images/industries-card2.webp";
import industrycard3 from "../assets/Images/industries-card3.webp";
import industrycard4 from "../assets/Images/industries-card4.webp";
import industrycard5 from "../assets/Images/industries-card5.webp";
import industrycard6 from "../assets/Images/industries-card6.webp";
import industrycard7 from "../assets/Images/industries-card7.webp";

import industrycardMobile1 from "../assets/Images/industries-mobile-card1.webp";
import industrycardMobile2 from "../assets/Images/industries-mobile-card2.webp";
import industrycardMobile3 from "../assets/Images/industries-mobile-card3.webp";
import industrycardMobile4 from "../assets/Images/industries-mobile-card4.webp";
import industrycardMobile5 from "../assets/Images/industries-mobile-card5.webp";
import industrycardMobile6 from "../assets/Images/industries-mobile-card6.webp";
import industrycardMobile7 from "../assets/Images/industries-mobile-card7.webp";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    name: "Supply Chain & Logistics",
    icon: { inactive: industrylogo7, active: industrylogo7Active },
    description:
      "Streamlining supply chain operations with advanced logistics management, real-time tracking, and optimization algorithms.",
    image: industrycard7,
    mobileImage: industrycardMobile7,
    path: "/industries/supply-chain-logistics",
  },
  {
    name: "Manufacturing",
    icon: { inactive: industrylogo6, active: industrylogo6Active },
    description:
      "Optimizing manufacturing processes with Industry 4.0 solutions, IoT integration, and predictive analytics for enhanced productivity.",
    image: industrycard6,
    mobileImage: industrycardMobile6,
    path: "/industries/manufacturing",
  },
  {
    name: "Oil and Gas",
    icon: { inactive: industrylogo2, active: industrylogo2Active },
    description:
      "Transforming oil and gas operations with advanced digital solutions for exploration, production, and distribution while ensuring safety and environmental compliance.",
    image: industrycard2,
    mobileImage: industrycardMobile2,
    path: "/industries/oil-gas",
  },
  {
    name: "Energy and Utility",
    icon: { inactive: industrylogo3, active: industrylogo3Active },
    description:
      "Empowering energy companies with smart grid solutions, renewable energy management, and predictive maintenance systems for optimal efficiency.",
    image: industrycard3,
    mobileImage: industrycardMobile3,
    path: "/industries/energy-utility",
  } /*,
  {
    name: "FinTech",
    icon: { inactive: industrylogo4, active: industrylogo4Active },
    description:
      "Revolutionizing financial services with secure, scalable, and compliant fintech solutions that enhance customer experience and operational efficiency.",
    image: industrycard4,
    mobileImage: industrycardMobile4,
    path: "/industries/fintech",
  },
  {
    name: "Healthcare",
    icon: { inactive: industrylogo5, active: industrylogo5Active },
    description:
      "Improving patient outcomes through innovative healthcare technology solutions, electronic health records, and telemedicine platforms.",
    image: industrycard5,
    mobileImage: industrycardMobile5,
    path: "/industries/healthcare",
  },
  {
    name: "Bio Technology",
    icon: { inactive: industrylogo1, active: industrylogo1Active },
    description:
      "Advancing biotechnology through innovative software solutions, data analytics, and laboratory management systems that accelerate research and development processes.",
    image: industrycard1,
    mobileImage: industrycardMobile1,
    path: "/industries/bio-technology",
  },*/,
];

const Industries = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <section id="industries" className="industries-service-section-top">
      <div className="page-container">
        {/* Section Heading */}
        <div className="text-center mb-3">
          <p className="text-gray fs-24 font-medium">Industries We Serve</p>
          <h2 className="font-semibold fs-36">Innovation Without Boundaries</h2>
        </div>

        {/* Desktop View */}
        <div className="lg:grid grid-cols-12 md:grid relative industry-desktop">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 md:col-span-4 innovation-left p-8 relative">
            <div className="absolute top-0 right-0 w-px h-full bg-white/20"></div>

            <div className="relative flex flex-col justify-between h-full">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`relative flex items-center gap-3 w-full rounded-md transition ${
                    selectedIndustry === index ? "text-[#50D0DB]" : "text-[#717f93]"
                  }`}
                >
                  {selectedIndustry === index && (
                    <div className="absolute right-[-33px] h-[var(--size-64)] w-[var(--size-4)] bg-[#50D0DB] rounded-full z-10"></div>
                  )}

                  <img loading="lazy" decoding="async" src={selectedIndustry === index ? industry.icon.active : industry.icon.inactive}
                    alt={`${industry.name} icon`}
                    className={`${
                      selectedIndustry === index
                        ? "xl:w-[var(--size-37)] xl:h-[var(--size-37)] w-7 h-7 opacity-100" // Active size + full opacity
                        : "xl:w-[var(--size-37)] xl:h-[var(--size-37)] w-7 h-7 opacity-50" // Inactive size + reduced opacity
                    } transition-all duration-100`} />
                  <span className="fs-20 text-start flex items-center">{industry.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-9 md:col-span-8 innovation-right relative flex items-center justify-start p-10">
            <img loading="lazy" decoding="async" src={industries[selectedIndustry].image}
              alt={industries[selectedIndustry].name}
              className="absolute inset-0 object-cover object-right w-full h-full innovation-right-bg-img" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001b41] via-[#05193700] to-transparent"></div>

            <div className="relative z-10 max-w-xl text-white right-card-content">
              <div className="flex gap-5 mb-4 flex-col">
                {/* 🔥 Always show active icon here */}
                <img loading="lazy" decoding="async" src={industries[selectedIndustry].icon.inactive}
                  alt={`${industries[selectedIndustry].name} icon`}
                  className="xl:w-[var(--size-37)] xl:h-[var(--size-37)] w-7 h-7 opacity-100" />
                <h3 className="text-2xl font-bold font-poppins">{industries[selectedIndustry].name}</h3>
              </div>

              <p className="mb-8 fs-18 h-[var(--size-85)]">{industries[selectedIndustry].description}</p>
              <button
                onClick={() => navigate(`${industries[selectedIndustry].path}`)}
                className="primary-button text-[#ffffff] px-6 py-3 rounded-lg flex items-center gap-4 shadow-[0px_3px_6px_#00000062]"
              >
                Know More
                <img loading="lazy" decoding="async" src={whitearrow} alt="Navigate to industry page" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="grid grid-cols-1 industry-mobile gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative overflow-hidden text-white p-6 industries-mobile-card"
              style={{ backgroundImage: `url(${industry.mobileImage})` }}
            >
              <div className="absolute inset-0 industries-card-gradient-overlay"></div>

              <div className="relative z-10">
                <span className="block mb-3">
                  {/* 🔥 Mobile always shows inactive icon */}
                  <img loading="lazy" decoding="async" src={industry.icon.inactive} alt={`${industry.name} icon`} className="w-12 h-12" />
                </span>

                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-sm leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
