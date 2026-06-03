
interface ServiceImageSectionProps {
  title: string;
  description?: string;
  bulletPoints?: {title: string, description: string}[];
  className?: string;
}

const ServiceCloudAdvCard = ({ 
  title, 
  description, 
  bulletPoints, 
  className = "" 
}: ServiceImageSectionProps) => {
  return (
    <section className={`bg-page industries-service-section-top ${className}`}>
    <div className="mx-auto page-container">
      <div className="flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-3xl md:px-[var(--size-135)] px-[20px] lg:py-[var(--size-55)] py-8 bg-[#0C2169]">
        <div className="text-center">
          <h2 className="fs-36 font-semibold lg:mb-[var(--size-35)] mb-6 text-[#ffffff]">
            {title}
          </h2>
          {description && (
            <p className="fs-18 text-[#ffffff] mb-6">
              {description}
            </p>
          )}
          {bulletPoints && bulletPoints.length > 0 && (
            <div className="grid sm:grid-cols-2 sm:gap-6 gap-5 text-left">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 xl:w-[10px] xl:h-[10px] bg-[#ffffff] rounded-full flex-shrink-0 lg:mt-[var(--size-7)] mt-[6px]"></span>
                  <span className="fs-18 text-[#ffffff]">
                    <strong>{point.title} :</strong> {point.description}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ServiceCloudAdvCard;