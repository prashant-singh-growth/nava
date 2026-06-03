import RoadMapImg from "../../assets/Images/roadmap.webp";
interface ServiceImageSectionProps {
  title: string;
  description?: string;
  bulletPoints?: {title: string, description: string}[];
  className?: string;
}

const ServicePlatformsCard = ({ 
  title, 
  description, 
  bulletPoints, 
  className = "" 
}: ServiceImageSectionProps) => {
  return (
    <section className={`bg-page ${className}`}>
        <div className="bg-[#00328E]">
        <div
          className="items-center bg-cover bg-center bg-no-repeat rounded-3xl pt-10 pb-14"
        >
            <div className="grid md:grid-cols-2 md:gap-12 gap-6 items-center mx-auto inner-page-container">
              {/* Left Column */}
              <div>
                <h2 className="fs-24 font-medium mb-8 text-[#ffffff]">
                  {title}
                </h2>

                {description && (
                  <p className="fs-18 text-[#ffffff] mb-6">
                    {description}
                  </p>
                )}

                {bulletPoints && (
                  <ul className="space-y-3">
                    {bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-5">
                        <span className="w-2 h-2 xl:w-[10px] xl:h-[10px] bg-[#ffffff] rounded-full flex-shrink-0 lg:mt-[var(--size-7)] mt-[6px]"></span>
                        <span className="fs-18 text-[#ffffff] mb-4">
                          <strong>{point.title}:</strong> {point.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right Column (Image) */}
              <div className="flex justify-center h-full">
                <img src={RoadMapImg}
                  alt="Section Illustration"
                  className="w-full rounded-3xl object-cover" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServicePlatformsCard;