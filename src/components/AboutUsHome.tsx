import whitearrow from "../assets/Icons/white-right-arrow.svg";
import aboutimage from "../assets/Images/who-we-are.webp";
import { Link, useNavigate } from "react-router-dom";

const AboutUsHome = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      image: aboutimage,
      title:
        "Beyond Technology, It’s Who We Are",
      description: (
        <>
          NAVA empowers businesses to scale smarter with{" "}
          <Link to="/vision-ai" className="text-inherit no-underline hover:underline">AI</Link>
          , cloud, and automation. Through global capability centers, top tech partnerships (Microsoft, Salesforce, AWS), and future-ready solutions, we help you transform faster, adapt easier, and lead with innovation.
        </>
      ),
      metrics: [
        { value: "20+", label: "years of technology transformation excellence" },
        { value: "40%", label: "faster time to market for cloud, AI, and product rollouts" },
      ],
    },
  ];
  
  return (
    <section id="about" className="about-us-section">
      <div className="page-container mx-auto">

      {caseStudies.map((study, index) => (
        <div key={index} className="flex flex-col about-card-right md:hidden">
          <p className="fs-24 text-gray mt-5 md:mb-4 mb-2">Who we are</p>
          <h3 className="text-2xl lg:text-3xl sm:max-w-auto max-w-[275px] m-auto font-semibold text-[#222222] md:mb-6 mb-2">
            {study.title}
          </h3>
          <p className="text-[#2A2A2A] md:mb-8 mb-4 leading-relaxed text-md">
            {study.description}
          </p>

        </div>
      ))}

        {caseStudies.map((study, index) => (
                    <div key={index} className="">
                      <article className="case-card bg-[#ffffff] rounded-3xl shadow-card transition-all duration-300 overflow-visible">
                        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] p-5 gap-10 about-us-card">
                          {/* IMAGE (left on desktop, top on mobile) */}
                          <div className="lg:max-h-full">
                            <img loading="lazy" decoding="async" src={study.image}
                              alt={study.title}
                              className="object-cover rounded-3xl block max-h-[var(--size-500)]" />
                          </div>
        
                          {/* CONTENT (right) */}
                          <div className="flex flex-col about-card-right visible [@media(max-width:768px)]:hidden">
                          <p className="fs-24 text-gray lg:mt-5 mb-4 font-medium">
                          Who we are
                          </p>
                            <h3 className="fs-30 font-semibold text-[#222222] mb-6 leading-tight font-poppins">
                              {study.title}
                            </h3>
        
                            <p className="text-[#2A2A2A] mb-16 md:mb-[var(--size-150)] lg:mb-12 leading-relaxed fs-18">
                              {study.description}
                            </p>
        
                            {/* space at bottom so pill doesn't overlap text on very short content */}
                            {/* <div className="hidden lg:block" style={{ height: 36 }} /> */}
                          </div>
                        </div>
        
                        {/* STATS PILL - absolute so it overlaps image & content (desktop),
                            becomes static and full-width on mobile */}
                        <div className="stats-pill">
                          <div className="stats-inner rounded-3xl">
                            <div className="stats-metrics">
                              {study.metrics.map((metric, i) => (
                                <div key={i} className="metric flex gap-3 items-center">
                                  <span className="metric-value min-w-auto min-w-14 text-center fs-50">{metric.value}</span>
                                  <span className="metric-label fs-18 w-auto">{metric.label}</span>
                                </div>
                              ))}
                            </div>

                              <button onClick={() => navigate('/corporate/about-us')}
                                className="primary-button md:flex gap-3 p-3 items-center justify-center md:w-60 lg:w-44 xl:w-52 border border-[#3A6CC9] fs-18 hidden">
                                <span>Know More</span>
                                <img loading="lazy" decoding="async" src={whitearrow} alt="service-arrow-icon" />
                              </button>
                              
                          </div>
                        </div>

                        <button onClick={() => navigate('/corporate/about-us')}
                                className="primary-button gap-3 p-4 items-center text-[#ffffff] justify-center !max-w-[475px] w-full -mt-14 mb-7 border border-[#3A6CC9] fs-18 md:hidden flex">
                                <span>Know More</span>
                                <img loading="lazy" decoding="async" src={whitearrow} alt="service-arrow-icon" />
                              </button>

                      </article>
                    </div>
                  ))}


      </div>
    </section>
  );
};

export default AboutUsHome;