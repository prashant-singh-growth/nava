import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";

interface ServiceCTASectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaAction?: () => void;
  className?: string;
}

const ServiceCTASection = ({ 
  title, 
  description,
  ctaText = "Schedule a Discovery Call",
  ctaAction,
  className = "" 
}: ServiceCTASectionProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (ctaAction) {
      ctaAction();
    } else {
      navigate('/contact-us');
    }
  };

  return (
    <section className={`bg-[url('assets/Images/aws-advantage-bg.webp')] bg-no-repeat bg-center bg-cover ${className}`}>
      <div className="mx-auto inner-page-container text-center md:py-[var(--size-50)]  pt-[20px] pb-[60px]">
        <h2 className="fs-36 text-[#ffffff] font-semibold mb-6">
          {title}
        </h2>
        <p className="fs-18 mb-8 max-w-5xl text-[#ffffff] text-center mx-auto">
          {description}
        </p>
        <button 
          onClick={handleClick}
          className="primary-button border border-[#3A6CC9] text-[#ffffff] inline-flex items-center gap-3 xl:gap-6 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4"
        >
          {ctaText}
          {/* <ArrowRight className="w-4 h-4" /> */}
          <img src={whitearrow} alt="service-arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default ServiceCTASection;
