import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";
import carrersbg from "../../assets/Images/carrers-bg.webp";

const CareersJobPosting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat flex" style={{ backgroundImage: `url(${carrersbg})` }}>
        <div className="page-container">
          {/* Breadcrumb */}
          <div className="items-center fs-14 text-[#BEBEBE] mb-6 mt-4 hidden md:flex">
            <nav className="flex items-center text-sm">
              <button
                onClick={() => navigate("/")}
                className="text-[#969696] hover:text-white"
              >Home
              </button>
              <ChevronRight className="w-4 h-4 text-[#969696]" />
              <span className="text-[#969696] font-medium">Corporate</span>
              <ChevronRight className="w-4 h-4 text-[#969696]" />
              <button
                onClick={() => navigate("/corporate/careers")}
                className="text-[#969696] hover:text-white"
              >Careers
              </button>
              <ChevronRight className="w-4 h-4 text-[#969696]" />
              <span className="text-[#ffffff] font-medium">Job Posting</span>
            </nav>
          </div>

          {/* Overline */}
          <div className="mx-auto py-2">
            <h1 className="relative fs-65 font-semibold text-white mb-8 md:mt-6 mt-20 sm:w-[65%] w-full leading-tight">
              Entry to Sr. Level <br />
              Software Developers
              <span className="absolute left-0 bottom-[-20px] md:w-20 md:h-1.5 w-16 h-1 bg-[#0059FF] rounded-full"></span>
            </h1>
          </div>
          {/* CTA Button */}
          <button onClick={() => navigate('/contact-us')}
            className="primary-button mb-16 mt-10 border border-[#3A6CC9] text-[#ffffff] items-center gap-3 xl:gap-6 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4 hidden md:flex"
          >
            Get in touch
            <img src={whitearrow} alt="service-arrow-icon" />
          </button>
        </div>
      </section>

      <section className="py-10">
        <div className="page-container mx-auto">
          <div className="mb-10 mx-auto max-w-6xl">
            <h2 className="fs-36 font-semibold text-[#222222] mb-6">Job Description</h2>
            <p className="fs-18 text-[#222222] max-w-6xl mx-auto leading-relaxed">
              Developing applications, building APIs, and supporting production systems. Work on enhancements to the Team Timecards API service using C#, ASP.NET, and Visual Studio, ensuring it can be used by mobile, web, and microservices clients. Assist in creating Oracle database queries for reporting and issue analysis. Support production incidents by debugging with Visual Studio and analyzing logs with Splunk and Dynatrace. Participate in the Preferred Name project, applying changes across applications and APIs using C#, JavaScript, ASP.NET MVC, Oracle, and MSTest. Help test and implement APIs such as Time Entry Modify and DataCollections with automated unit tests. Contribute to improvements of the Time Processor system for global payroll services. Assist in monitoring applications and services using tools like Resource Monitor and DebugDiag to ensure system performance and availability. Additional experience includes supporting deployments on Windows/Linux servers, helping with application migrations using Docker and Ansible, and contributing to internal frameworks such as Messaging Core Application. Actively participate in Agile/Scrum activities, including requirement gathering, estimation, and team coordination. Perform feasibility studies, and evaluate user requirements. Must be willing to travel for setting up various systems to various clients at unanticipated locations within the United States for short term and long term durations.
            </p>

            <div className="mt-10 p-6 md:p-8 bg-[#F7FAFF] rounded-lg border border-[#E0E7F1]">
              <h3 className="fs-24 font-semibold text-[#222222] mb-4">How to Apply</h3>
              <p className="fs-18 text-[#222222] leading-relaxed">
                Please send your cover letter, resume, and salary requirements to:
              </p>
              <p className="fs-18 text-[#222222] font-semibold mt-4">
                Nava Software Solutions LLC
              </p>
              <p className="fs-18 text-[#222222]">
                35 Cold Spring Road, Suite 125<br />
                Rocky Hill, CT 06067
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    </>
  );
};

export default CareersJobPosting;
