import MarketingBg from "../../assets/Images/services-market-bg.webp";

interface ServiceImageSectionProps {
  title: string;
  description?: string;
  bulletPoints?: string[];
  // image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const ServiceImageSection = ({ 
  title, 
  description, 
  bulletPoints, 
  // image, 
  imageAlt, 
  imagePosition = "right",
  className = "" 
}: ServiceImageSectionProps) => {
  return (
    <section className={`industries-service-section-top bg-page ${className}`}>
        <div className="mx-auto page-container service-marketing-bg">
        <div
          className="items-center bg-cover md:bg-center bg-[85%] bg-no-repeat md:h-auto h-[375px] md:rounded-3xl px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14"
          style={{ backgroundImage: `url(${MarketingBg})` }}
        >
            {/* Content */}
            <div className="max-w-lg ml-0 md:ml-8 lg:ml-12 xl:ml-20 md:flex flex-col hidden">
              <h2 className="fs-24 font-medium my-3 text-[#ffffff]">
                {title}
              </h2>
              {description && (
                <p className="fs-18 text-[#ffffff]">
                  {description}
                </p>
              )}
              {bulletPoints && (
                <ul className="space-y-7 py-7">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 xl:w-[10px] xl:h-[10px] bg-[#ffffff] rounded-full flex-shrink-0 lg:mt-[var(--size-7)] mt-[6px]"></span>
                      <span className="fs-18 text-[#ffffff]">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="md:hidden flex flex-col w-full bg-[#0D2F6F]">
            <div className="inner-page-container mx-auto">
              <h2 className="md:fs-24 text-2xl font-medium mt-10 my-3 text-[#ffffff]">
                {title}
              </h2>
              {description && (
                <p className="fs-18 text-[#ffffff]">
                  {description}
                </p>
              )}
              {bulletPoints && (
                <ul className="space-y-7 py-7">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#ffffff] rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="fs-18 text-[#ffffff]">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              </div>
            </div>

        </div>
    </section>
  );
};

export default ServiceImageSection;