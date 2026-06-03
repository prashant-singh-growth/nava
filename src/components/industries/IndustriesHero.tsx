import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";
import { useNavigate } from "react-router-dom";


interface IndustriesHeroProps {
  backgroundImage: string;
  overline: string;
  title: string;
  ctaText?: string;
  HeroBannerClass?: string;
  gradientOverlay?: string;
  breadcrumbPath: string;
}

const IndustriesHero = ({
  backgroundImage,
  overline,
  title,
  HeroBannerClass,
  ctaText = "Get in touch",
  gradientOverlay = "rgba(10, 25, 49, 0.85)",
  breadcrumbPath
}: IndustriesHeroProps) => {
  const navigate = useNavigate();
  
  return (
    <section
      className={`relative flex items-center justify-center bg-cover lg:bg-center md:bg-[75%] bg-[70%] bg-no-repeat pb-[25px] md:pt-0 pt-20 ${HeroBannerClass}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div 
        className="inset-0" /> 
      <div className="page-container">
          <div className="items-center fs-14 text-[#BEBEBE] mb-6 mt-8 hidden md:flex">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Industries</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{breadcrumbPath}</span>
          </div>
          
          <div className="mx-auto py-2">
          <p className="relative text-[#FFFFFF] fs-18 font-medium mb-4 pt-3 inline-block">
            {overline}
            <span className="absolute left-0 bottom-[-20px] md:w-20 md:h-1.5 w-16 h-1 bg-[#0059FF] rounded-full"></span>
          </p>
          <h1 className="fs-65 font-bold text-white mb-8 mt-10 md:w-[65%] leading-tight font-poppins">
            {title}
          </h1>
          </div>

          <button onClick={() => navigate('/contact-us')}
              className="primary-button mb-16 border border-[#3A6CC9] text-[#ffffff] items-center gap-3 xl:gap-6 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4 hidden md:flex"
            >
              {ctaText}
              <img src={whitearrow} alt="service-arrow-icon" />
            </button>
      </div>
    </section>
  );
};

export default IndustriesHero;