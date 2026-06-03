import { ArrowRight } from "lucide-react";
import aboutHeroBg from "../../assets/Images/about-us-bg.webp";
import Visionmissionbg from "../../assets/Images/mission-vision.webp";
import Futurevision from "../../assets/Images/about-us-global.webp";
import aboutCubicBoxes from "../../assets/about-cubic-boxes.jpg";
import { Button } from "@/components/ui/button";
import whiteArrow from "../../assets/Icons/white-right-arrow.svg";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";
import AboutuswhychooseIcon1 from "../../assets/Icons/about-why-icon1.webp";
import AboutuswhychooseIcon2 from "../../assets/Icons/about-why-icon2.webp";
import AboutuswhychooseIcon3 from "../../assets/Icons/about-why-icon3.webp";
import AboutuswhychooseIcon4 from "../../assets/Icons/about-why-icon4.webp";
import Corevalue1 from "../../assets/Icons/core-value1.svg";
import Corevalue2 from "../../assets/Icons/core-value2.webp";
import Corevalue3 from "../../assets/Icons/core-value3.webp";
import Corevalue4 from "../../assets/Icons/core-value4.webp";
import Aboutsubfooterbg from "../../assets/Images/about-us-subfooter-bg.webp";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover md:bg-center bg-[70%] bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        >
        </div>
        
        <div className="relative page-container pt-10 md:pt-0">
              {/* Breadcrumb */}
              <div className="mx-auto py-3 hidden md:flex">
                <nav className="flex items-center text-sm">
                  <button
                    onClick={() => navigate("/")}
                    className="text-[#969696] hover:text-white"
                  >
                    Home
                  </button>
                  <ChevronRight className="w-4 h-4 mx-0 text-[#969696]" />
                  <span className="text-[#969696] font-medium">Corporate</span>
                  <ChevronRight className="w-4 h-4 mx-0 text-[#969696]" />
                  <span className="text-[#ffffff] font-medium">About Us</span>
                </nav>
              </div>
              
              {/* Overline */}
              <div className="mx-auto py-10">
                <p className="relative fs-18 mb-4 inline-block text-[#ffffff]">
                    About Us
                    <span className="absolute left-0 bottom-[-20px] md:w-24 md:h-1.5 w-16 h-1 bg-[#0059FF] rounded-full"></span>
                </p>
              </div>
              
              {/* Title */}
              <div>
                <h1 className="fs-65 font-semibold text-[#ffffff] mb-10 leading-10 md:leading-[1.2]">
                Driven by Innovation,<br></br>Defined by Values
                </h1>
              </div>
              
               {/* CTA Button */}
            <button onClick={() => navigate('/contact-us')}
                  className="primary-button mb-16 border border-[#3A6CC9] text-[#ffffff] items-center gap-3 xl:gap-8 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4 hidden md:flex"
                >
                  Get in touch
                  <img src={whitearrow} alt="service-arrow-icon" />
            </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-top pb-0 lg:-mb-[var(--size-50)] md:-mb-[75px] sm:-mb-[60px] -mb-[90px]">
        {/* <div className="mx-auto"> */}
          <div className="inner-page-container mx-auto mb-[var(--size-30)]">
            <h2 className="fs-34 font-semibold mb-[var(--size-10)] text-[#222222]">
              Who We Are
            </h2>
            <p className="fs-18 text-[#222222]">
              At NAVA Software Solutions, we’re committed to transforming industries through innovative, technology-driven solutions. Founded on the principles of integrity, agility, and customer-centricity, NAVA has established itself as a trusted partner for businesses seeking to navigate complex digital landscapes. With a focus on digital transformation, product development, and operational excellence, we help organizations stay ahead in an increasingly competitive market. <br></br><br></br>Our approach combines deep industry expertise with cutting-edge technology to deliver solutions aligned with our clients’ goals. From legacy modernization and data analytics to automation and compliance, our services are tailored to meet the diverse needs of the industries we serve.
            </p>
          </div>

          {/* Image with Overlapping Cards */}
          <div className="page-container relative vision-mission-bg-img py-8 lg:py-0">
            {/* <div>
              <img src={Visionmissionbg} 
                alt="vision-mission-img"
                className="md:rounded-3xl rounded-none" />
            </div> */}
            <div 
              className="w-full lg:h-[var(--size-490)] h-[300px] bg-[72%] bg-no-repeat bg-cover md:rounded-3xl rounded-none"
              style={{ backgroundImage: `url(${Visionmissionbg})` }}
            >
            </div>

            
            {/* Overlapping Cards */}
          </div>
          <div className="bg-[url('assets/Images/blue-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:bottom] bg-cover bg-no-repeat">
            <div className="inner-page-container relative  md:left-[0] lg:left-[21%] transform translate-y-[-20%] md:translate-y-[-40%] lg:-translate-y-[var(--size-110)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[linear-gradient(180deg,#123987,#2f5ba5)] text-[#ffffff] px-6 py-12 rounded-3xl">
                  <h3 className="font-semibold mb-7 fs-34">Our Mission</h3>
                  <p className="fs-18">
                     Our mission is to empower businesses by providing reliable, high-quality software solutions that optimize operations, enhance productivity, and deliver tangible value. We aim to be a catalyst for growth, enabling our clients to leverage technology as a driver of innovation and long-term success.
                  </p>
                </div>
                <div className="bg-[linear-gradient(180deg,#152888,#3345a5)] text-[#ffffff] p-8 rounded-3xl">
                  <h3 className="font-semibold mb-7 fs-34">Our Vision</h3>
                  <p className="fs-18">
                     We envision a future where technology seamlessly integrates with business goals, enabling organizations to achieve exceptional efficiency, agility, and resilience. At NAVA, we are dedicated to making this vision a reality for our clients, equipping them with the tools and insights needed to thrive in a digital-first world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>

      {/* Why Choose NAVA Section */}
      <section className="">
        <div className="inner-page-container mx-auto">
          <div className="text-center mb-[var(--size-20)]">
            <h2 className="fs-36 font-semibold text-[#222222] md:text-center text-start">
              Why Choose NAVA Software Solutions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative
                            before:content-[''] before:absolute before:inset-0 
                            before:bg-[url('assets/Images/pink-blue-gradient-bg.webp')] 
                            before:bg-no-repeat before:bg-center before:bg-cover
                            before:blur-[50px] before:z-[-1]">
            <div className="bg-[#ffffff] p-7 rounded-3xl">
              <img src={AboutuswhychooseIcon1} className="w-13 h-12" alt="Customer-centric approach icon" />
              <h3 className="fs-24 font-medium text-[#000000] mt-3 mb-4">Customer-Centric Approach</h3>
              <p className="text-[#222222] fs-18 h-20">
                We deliver tailored solutions by understanding client goals and working as their extended team.
              </p>
            </div>
            <div className="bg-[#ffffff] p-7 rounded-3xl">
            <img src={AboutuswhychooseIcon2} className="w-13 h-12" alt="Innovation and agility icon" />
              <h3 className="fs-24 font-medium text-[#000000] mt-3 mb-4">Innovation and Agility</h3>
              <p className="text-[#222222] fs-18 h-20">
                We leverage emerging technologies and agile methods to deliver adaptable, future-ready solutions.
              </p>
            </div>
            <div className="bg-[#ffffff] p-7 rounded-3xl">
            <img src={AboutuswhychooseIcon3} className="w-13 h-12" alt="Commitment to quality icon" />
              <h3 className="fs-24 font-medium text-[#000000] mt-3 mb-4">Commitment to Quality</h3>
              <p className="text-[#222222] fs-18 h-20">
                We deliver high-quality, reliable solutions that meet the highest standards and ensure long-term value.
              </p>
            </div>
            <div className="bg-[#ffffff] p-7 rounded-3xl">
            <img src={AboutuswhychooseIcon4} className="w-13 h-12" alt="Industry expertise icon" />
              <h3 className="fs-24 font-medium text-[#000000] mt-3 mb-4">Industry Expertise</h3>
              <p className="text-[#222222] fs-18 h-20">
                With expertise in healthcare, manufacturing, finance, and biotechnology, we empower clients to excel in their industries.
              </p>
            </div>
          </div>
        </div>
      </section>

     <div className="section-top">
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Futurevision})` }}
          >
          </div>       
          <div className="relative z-10">
            {/* Desktop */}
            <div className="inner-page-container mx-auto">
              <div className="md:flex hidden relative">
                {/* Blue Content Full Height */}
                <div className="bg-[#2f57a2] px-8 py-12 w-full lg:w-[var(--size-825)] flex items-center">
                  <div>
                    <h3 className="fs-36 lg:mb-10 xl:mb-14 font-semibold text-[#ffffff]">
                      Global Impact and Future Vision
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div className="lg:mb-12 xl:mb-16">
                        <ul className="mb-5">
                          <li className="fs-24 font-medium text-[#ffffff] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 lg:before:top-[var(--size-15)] before:w-2.5 before:h-2.5 lg:before:w-[var(--size-11)] lg:before:h-[var(--size-10)] before:bg-white before:rounded-full">
                            Our Global Reach
                          </li>
                        </ul>
                        <p className="text-[#ffffff] fs-18 pl-5 pr-10">
                          With a presence across regions and a strong team of professionals, NAVA operates at the intersection of technology and strategy. Our global capabilities allow us to deliver solutions that are scalable, efficient, and capable of supporting growth, no matter the location or industry.
                        </p>
                      </div>
                      <div>
                      <ul className="mb-5">
                        <li className="fs-24 font-medium text-[#ffffff] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 lg:before:top-[var(--size-15)] before:w-2.5 before:h-2.5 lg:before:w-[var(--size-11)] lg:before:h-[var(--size-10)] before:bg-white before:rounded-full">
                          Our Journey and Future
                        </li>
                      </ul>
                        <p className="text-[#ffffff] fs-18 pl-5 pr-8">
                          Since our founding, NAVA has grown into a dynamic organization with a portfolio of successful projects and lasting client relationships. Our journey is guided by a passion for technology and a commitment to driving positive change for our clients. As we look to the future, we remain dedicated to pioneering solutions that redefine industry standards and support our clients in achieving their strategic objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side (shows background image only) */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>

            {/* Mobile */}
            <div
            className="flex md:hidden h-[250px] bg-cover bg-[100%] bg-no-repeat"
            style={{ backgroundImage: `url(${Futurevision})` }}>
            </div>
            <div className="flex md:hidden relative">
                {/* Blue Content Full Height */}
                <div className="bg-[#2f57a2] px-8 py-12 w-full lg:w-[var(--size-825)] flex items-center">
                  <div>
                    <h3 className="fs-36 lg:mb-10 xl:mb-14 font-semibold text-[#ffffff]">
                      Global Impact and Future Vision
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div className="lg:mb-12 xl:mb-16">
                        {/* <h4 className="fs-24 mb-5 font-medium text-[#ffffff]">
                          <span className="w-2.5 h-2.5">•</span> Our Global Reach
                        </h4> */}
                        <ul className="mb-5">
                          <li className="fs-24 font-medium text-[#ffffff] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 lg:before:top-[var(--size-15)] before:w-2.5 before:h-2.5 lg:before:w-[var(--size-11)] lg:before:h-[var(--size-10)] before:bg-white before:rounded-full">
                            Our Global Reach
                          </li>
                        </ul>
                        <p className="text-[#ffffff] fs-18 pl-5 pr-10">
                          With a presence across regions and a strong team of professionals, NAVA operates at the intersection of technology and strategy. Our global capabilities allow us to deliver solutions that are scalable, efficient, and capable of supporting growth, no matter the location or industry.
                        </p>
                      </div>
                      <div>
                      <ul className="mb-5">
                        <li className="fs-24 font-medium text-[#ffffff] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 lg:before:top-[var(--size-15)] before:w-2.5 before:h-2.5 lg:before:w-[var(--size-11)] lg:before:h-[var(--size-10)] before:bg-white before:rounded-full">
                          Our Journey and Future
                        </li>
                      </ul>
                        <p className="text-[#ffffff] fs-18 pl-5 pr-8">
                          Since our founding, NAVA has grown into a dynamic organization with a portfolio of successful projects and lasting client relationships. Our journey is guided by a passion for technology and a commitment to driving positive change for our clients. As we look to the future, we remain dedicated to pioneering solutions that redefine industry standards and support our clients in achieving their strategic objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side (shows background image only) */}
                <div className="hidden md:block w-1/2"></div>
            </div>
          </div>
        </section>
      </div>


      {/* Core Values Section */}
      <section className="section-top pb-[var(--size-30)]">
        <div className="inner-page-container mx-auto">
          <div className="text-center mb-[var(--size-20)]">
            <h2 className="fs-36 font-semibold font-poppins text-[#222222]">
              Our Core Values
            </h2>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Integrity */}
              <div className="relative bg-[#2f31a5] text-white md:px-[var(--size-45)] md:py-[var(--size-65)] px-4 py-8 rounded-3xl overflow-hidden">
                    <img src={Corevalue1} 
                      alt="Integrity Icon" 
                      className="md:w-[var(--size-250)] md:h-[var(--size-250)] w-[157px] opacity-10 object-cover absolute right-2 lg:top-2 md:top-6 top-2" />
                <h3 className="fs-24 mb-5 font-medium">Integrity</h3>
                <p className="fs-18 md:max-w-full max-w-[300px]">
                  We believe in transparency and accountability, building relationships
                  based on trust and mutual respect.
                </p>
              </div>

              {/* Excellence */}
              <div className="relative bg-[#2775fa] text-white md:px-[var(--size-45)] md:py-[var(--size-65)] px-4 py-8 rounded-3xl overflow-hidden">
                    <img src={Corevalue2} 
                      alt="Excellence Icon" 
                      className="md:w-[var(--size-250)] md:h-[var(--size-250)] w-[157px] object-cover absolute right-2 lg:top-2 md:top-6 top-2" />
                  <h3 className="fs-24 mb-5 font-medium">Excellence</h3>
                  <p className="fs-18 md:max-w-full max-w-[300px]">
                    Our dedication to quality and continuous improvement drives us to exceed
                    expectations in everything we do.
                  </p>
                </div>


              {/* Collaboration */}
              <div className="relative md:bg-[#2775fa] bg-[#2f31a5] text-white md:px-[var(--size-45)] md:py-[var(--size-65)] px-4 py-8 rounded-3xl overflow-hidden">
                    <img src={Corevalue3} 
                      alt="Collaboration Icon" 
                      className="md:w-[var(--size-250)] md:h-[var(--size-250)] w-[157px] object-cover absolute right-2 lg:top-2 md:top-6 top-2" />
                <h3 className="fs-24 mb-5 font-medium">Collaboration</h3>
                <p className="fs-18 md:max-w-full max-w-[300px]">
                  We work closely with our clients and partners to co-create solutions that
                  align with their unique needs.
                </p>
              </div>

              {/* Innovation */}
              <div className="relative md:bg-[#2f31a5] bg-[#2775fa] text-white md:px-[var(--size-45)] md:py-[var(--size-65)] px-4 py-8 rounded-3xl overflow-hidden">
                    <img src={Corevalue4} 
                      alt="Innovation Icon" 
                      className="md:w-[var(--size-250)] md:h-[var(--size-250)] w-[157px] object-cover absolute right-2 lg:top-2 md:top-6 top-2" />
                <h3 className="fs-24 mb-5 font-medium">Innovation</h3>
                <p className="fs-18 md:max-w-full max-w-[300px]">
                  We are committed to staying ahead of the curve, embracing new ideas and technologies that propel our clients toward success.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:flex hidden"
          style={{ backgroundImage: `url(${Aboutsubfooterbg})` }}
        >
        </div>

        <div 
          className="absolute w-full inset-0 md:bg-center bg-[55%] bg-cover bg-no-repeat md:hidden flex"
          style={{ backgroundImage: `url(${Aboutsubfooterbg})` }}
        >
        </div>

        {/* <div
          className="flex md:hidden h-[250px] bg-cover bg-[100%] bg-no-repeat"
          style={{ backgroundImage: `url(${Futurevision})` }}>
          </div> */}
        
        <div className="relative md:top-0 top-12">
          <div className="inner-page-container mx-auto">
            <div className="max-w-xl">
              <div className="text-white">
                <h3 className="fs-36 font-semibold mb-6 max-w-md">
                  Partner with NAVA Software Solutions
                </h3>
                <p className="text-lg text-[#ffffff] leading-relaxed mb-8">
                  At NAVA Software Solutions, we're your partner in success, offering tailored solutions for legacy modernization, process optimization, digital transformation, and product engineering. Discover how our expertise and innovative approach drive growth in a fast-changing world.
                </p>              
                {/* <button className="primary-button flex items-center gap-6 px-6 py-3 bg-white rounded-lg">
                  <span className="font-medium">Get in Touch</span>
                  <img src={whiteArrow} alt="Navigate to contact page" className="w-5 h-5" />
                </button> */}
                <button onClick={() => navigate('/contact-us')}
                      className="primary-button border border-[#3A6CC9] flex text-[#ffffff] items-center gap-3 xl:gap-8 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4"
                    >
                      Get in touch
                      <img src={whitearrow} alt="service-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;