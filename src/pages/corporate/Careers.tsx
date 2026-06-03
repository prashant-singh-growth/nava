import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";
import carrersbg from "../../assets/Images/carrers-bg.webp";

const Carrers = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://jobsapi.ceipal.com/APISource/widget.js";
    script.setAttribute("data-ceipal-api-key", "ZVJYLzFVWkd4Ky8vajBkUFRLUmJmUT09");
    script.setAttribute("data-ceipal-career-portal-id", "Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09");
    script.async = true;
    document.body.appendChild(script);

   // --- Handle back button & history state ---
   const handlePopState = () => {
    const params = new URLSearchParams(window.location.search);
    const jobId = params.get("job_id");

    if (jobId) {
      // When back is pressed on job page
      const prevUrl = sessionStorage.getItem("prevUrl");
      if (prevUrl) {
        // Go back to actual previous route
        window.location.href = prevUrl;
      } else {
        // fallback if no session history
        navigate("/corporate/careers", { replace: true });
      }
    }
  };

  window.addEventListener("popstate", handlePopState);

  return () => {
    // Cleanup
    window.removeEventListener("popstate", handlePopState);
    document.body.removeChild(script);
  };
}, [navigate]);

useEffect(() => {
  // Every time route changes (except job view), save it as previous
  const params = new URLSearchParams(location.search);
  if (!params.get("job_id")) {
    sessionStorage.setItem("prevUrl", window.location.href);
  }
}, [location]);

  useEffect(() => {
    const handlePopState = (event) => {
      const params = new URLSearchParams(window.location.search);
      const jobId = params.get("job_id");

      if (jobId) {
        event.preventDefault();
        window.history.pushState({}, "", "/corporate/careers");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
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
              {/* <button 
                //onClick={() => navigate("/corporate/about-us")} 
                className="text-[#969696]">
                Corporate
              </button> */}
              <span className="text-[#969696] font-medium">Corporate</span>
              <ChevronRight className="w-4 h-4 text-[#969696]" />
              <span className="text-[#ffffff] font-medium">Careers</span>
            </nav>
          </div>

          {/* Overline */}
          <div className="mx-auto py-2">
            <h1 className="relative fs-65 font-semibold text-white mb-8 md:mt-6 mt-20 sm:w-[65%] w-full leading-tight">
              Find the Right Fit <br></br>
              for Your Future in Tech
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
            <p className="fs-18 text-[#222222] max-w-6xl mx-auto">
              At NAVA Software Solutions, we’re shaping the future of work through AI, automation, cloud, and emerging
              technologies. We’re looking for innovators who want to be part of this journey of disruption. As a global
              technology and IT services partner, NAVA connects skilled professionals with projects that push the
              boundaries of what’s possible. If you’re driven by curiosity, creativity, and a passion for solving
              real-world challenges with technology, you’ll fit right in.
              <br />
              <br />
              We invest in our people through continuous learning, certification, and AI-focused training programs,
              helping you stay ahead in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container mx-auto">
        <div className="careers-page">
          <div id="example-widget-container" className="mb-20 mx-auto max-w-6xl"></div>
        </div>
      </section>

      {/* Footer Section */}
    </>
  );
};

export default Carrers;
