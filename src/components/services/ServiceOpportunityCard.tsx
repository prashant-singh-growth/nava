import OpportunityIcon from "../../assets/Icons/setting-bulb-icon.webp";

interface ServiceOpportunityCardProps {
  title: string;
  overlineText: string;
  bulletPoints: {title: string; description: string}[]
  className?: string;
}

const ServiceOpportunityCard = ({ 
  title, 
  overlineText,
  bulletPoints,
  className = "" 
}: ServiceOpportunityCardProps) => {
  return (
    <section className={`industries-service-section-top bg-page ${className}`}>
      <div className="mx-auto inner-page-container">
        <div className="bg-[#E4E9FC] rounded-3xl p-6 md:px-9 md:py-7">
          <div className="relative">
            <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-6 mb-6">
              <div className="flex-1">
                <h2 className="fs-36 text-[#000000] font-semibold mb-2">
                  {title}
                </h2>
                <p className="fs-18">
                  {overlineText}
                </p>
              </div>
              <div className="flex-shrink-0">
                {/* <div className="w-24 h-24 items-center justify-center"> */}
                  <img src={OpportunityIcon} className="lg:w-[var(--size-92)] lg:h-[var(--size-92)] w-20 h-20" alt="Opportunity Icon" />
                {/* </div> */}
              </div>
            </div>

            <div className="h-[1px] bg-[#5C5C5C33] mb-6 -mr-6 -ml-6"></div>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 xl:w-[10px] xl:h-[10px] bg-[#000000] rounded-full flex-shrink-0 lg:mt-[var(--size-7)] mt-[6px]"></span>
                  <span className="fs-18 w-[85%] leading-[1.5] text-[#000000]"><strong>{point.title}</strong> {point.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOpportunityCard;
