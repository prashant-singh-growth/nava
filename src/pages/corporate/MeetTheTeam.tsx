import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bluearrow from "../../assets/Icons/blue-right-arrow.svg";
import hoverArrow from "../../assets/Icons/hover-blue-right-arrow.svg";
import { ChevronRight } from "lucide-react";

// Images
import Rakesh from "../../assets/Images/Rakesh.webp";
import Malelead from "../../assets/Images/male-lead.webp";
import Santhosh from "../../assets/Images/Santhosh.webp";
import DonLogan from "../../assets/Images/DonLogan.webp";
import modalgradient from "../../assets/Images/modal-bg.webp";
import linkedinicon from "../../assets/Icons/linked-in.webp";
import Closeicon from "../../assets/Icons/close-icon.webp";

const MeetTheTeam = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const leaders = [
    {
      id: 1,
      name: "Rakesh Reddy",
      role: "CEO and COO",
      image: Rakesh,
      linkedinUrl: "https://www.linkedin.com/company/nava-software-solutions/",
      description:
        "Rakesh is a serial tech entrepreneur with over 20 years of experience in IT Product Development and Product-based R&D. He has delivered valuable solutions in Product Lifecycle Management (PLM), Delivery Management, Contract Management, and Customer Relationship Management (CRM) that have been deployed across 6 continents. Driven by a commitment to sustainable entrepreneurship, he has acquired strong skills in various disciplines and led critical Mergers and Acquisitions <br/><br/> He has played a key role in building and driving companies to success, with attention to detail and a quality-first approach. At NAVA, his primary objective is to help clients increase productivity and competitiveness in the global marketplace. He sets business objectives and leads strategic decisions to help realize NAVA’s vision through actionable business plans.",
    },
    {
      id: 2,
      name: "Santosh Kumar",
      role: "CTO",
      image: Santhosh,
      linkedinUrl: "https://www.linkedin.com/company/nava-software-solutions/",
      description:
        "Santosh Kumar is the CTO of NAVA Software Solutions. A serial entrepreneur, he built his first software company in his twenties and exited it by 30, followed by multiple ventures across enterprise software and AI-driven product platforms. At NAVA, Santosh leads the company’s focus on applying AI, cloud, and data technologies to real operational environments, helping enterprises move from experimentation to production-grade systems with measurable ROI. With deep experience building and scaling global delivery teams across the U.S., Canada, Mexico, the Middle East, and India, he brings a strong execution mindset to modernizing legacy systems, building AI-powered products, and delivering Computer Vision–enabled solutions that augment physical operations at scale.",
    },
    {
      id: 3,
      name: "Don Logan",
      role: "Executive Vice President",
      image: DonLogan,
      linkedinUrl: "https://www.linkedin.com/company/nava-software-solutions/",
      description:
        "Don an IT industry veteran with over 35 years of experience in industry building software, web, and technology-based and service-based solutions. For the past 19 years, he has been lending his extensive industry knowledge to help founders of emerging ventures get to their next level of growth, at the helm of a unique business advisory practice.  During his professional journey, Don has led many businesses to success, be it startups, expansions, or turnarounds and served as COO for many organizations. <br/><br/>He has experience in every major function of technology and service-based companies, product development and infrastructure development, sales, growth, and exit. As Executive Vice President, he guides the NAVA team in turning obstacles to opportunities and exceeding performance targets. He is key in tactical delivery of near-term goals and strategically building the infrastructure, processes, and teams, needed to support long-term growth and scalability",
    },
  ];

  const openDialog = (profile) => {
    setSelectedProfile(profile);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProfile(null);
  };

  // Close modal when clicking outside
  useEffect(() => {
    if (!isDialogOpen) return;
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDialog();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDialogOpen]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isDialogOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDialogOpen]);

  return (
    <>
      <div className="page-container">
        {/* Breadcrumb Section */}
        <div className="mx-auto py-5 hidden md:flex">
          <nav className="flex items-center text-sm">
            <button onClick={() => navigate("/")} className="text-[#969696] hover:text-[#4FCEDB]">
              Home
            </button>
            <ChevronRight className="w-4 h-4 mx-2 text-white" />
            {/* <button 
                //onClick={() => navigate("/corporate/about-us")} 
                className="text-[#969696]">
                Corporate
              </button> */}
            <span className="text-[#969696] font-medium">Corporate</span>
            <ChevronRight className="w-4 h-4 mx-2 text-[#969696]" />
            <span className="text-[#000000] font-medium">Leadership Team</span>
          </nav>
        </div>

        {/* Leadership Team Text with Underline */}
        <div className="mx-auto py-8">
          <p className="relative fs-18 mb-4 inline-block">
            Leadership Team
            <span className="absolute left-0 bottom-[-20px] w-20 h-1.5 bg-[#0059FF] rounded-full"></span>
          </p>
        </div>

        {/* Hero Section */}
        <div>
          <h1 className="text-[36px] font-semibold text-[#222222] mb-4">Meet the People Behind NAVA</h1>
          <p className="fs-18 text-[#222222]">
            Meet the leaders behind NAVA who provide the right road map for navigating the twenty-first-century world of
            uncertainty, exponential change, and disruption that business and HR leaders face today.
          </p>
        </div>

        {/* Leadership Profiles */}
        <div className="mx-auto md:py-[var(--size-50)] md:pb-[var(--size-95)] py-5 pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => openDialog(leader)}
                className="bg-white rounded-3xl lg:p-[var(--size-20)] p-3 flex items-center gap-4 group cursor-pointer"
              >
                {/* Profile Image */}
                <div className="flex-shrink-0 overflow-hidden rounded-2xl">
                  <img src={leader.image}
                    alt={leader.name}
                    className="lg:w-[var(--size-165)] lg:h-[var(--size-150)] w-[120px] h-[120px] object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="fs-16 sm:fs-18 md:fs-20 font-semibold text-[#0089FF] mb-[var(--size-10)] truncate">
                    {leader.name}
                  </h3>
                  <p className="text-[#2B2B2B] fs-18 line-clamp-2">{leader.role}</p>
                  <button className="relative w-1/2 h-4 overflow-hidden mt-[var(--size-30)]">
                    <img src={bluearrow}
                      alt="View leader profile"
                      className="absolute inset-0 transition-all duration-300 ease-in-out 
                                                group-hover:translate-x-full group-hover:opacity-0" />
                    <img src={hoverArrow}
                      alt="View leader profile"
                      className="absolute inset-0 -translate-x-full opacity-0 
                                                transition-all duration-300 ease-in-out 
                                                group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 max-w-[950px] w-[90%] md:w-full mx-4 relative overflow-hidden leaders-modal"
          >
            <img src={modalgradient}
              alt="gradient-bg"
              className="absolute -right-[var(--size-125)] -z-6 -top-[var(--size-80)] w-[500px] xl:w-[var(--size-600)] lg:h-[var(--size-700)] items-end object-cover pointer-events-none md:flex hidden" />

            <button
              onClick={closeDialog}
              className="absolute top-4 right-5 text-[#7C7C7C] z-10 flex items-center gap-1"
            >
              Close <img src={Closeicon} alt="Close profile dialog" className="close-icon w-5 h-4" />
            </button>

            <div className="relative flex flex-col gap-6 z-10 md:mt-0 mt-4">
              <div className="flex gap-4 sm:gap-6 md:gap-7 flex-col md:flex-row">
                <div className="flex-shrink-0 overflow-hidden">
                  <img src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="lg:md:w-[var(--size-250)] lg:h-[var(--size-230)] w-[220px] h-[210px] object-cover rounded-3xl" />
                </div>

                <div className="flex flex-col justify-end">
                  <h3 className="fs-36 font-semibold text-[#000000] mb-2">{selectedProfile.name}</h3>
                  <div className="flex items-center fs-18 gap-2 text-[#000000]">
                    <span>{selectedProfile.role}</span>
                    <span className="modal-pipeline">|</span>
                    <a href={selectedProfile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <img src={linkedinicon}
                        alt="LinkedIn"
                        className="lg:w-[var(--size-30)] lg:h-[var(--size-30)] w-[30px] h-[30px] inline-block" />
                    </a>
                  </div>
                </div>
              </div>

              <p
                className="text-[#000000] fs-18 lg:max-h-[var(--size-275)] max-h-[250px] overflow-y-auto"
                style={{
                  scrollbarWidth: "thin", // Firefox
                  scrollbarColor: "#1C1C1C #f3f4f6", // thumb color / track color
                }}
                dangerouslySetInnerHTML={{ __html: selectedProfile.description }}
              />
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default MeetTheTeam;
