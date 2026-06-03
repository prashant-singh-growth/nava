interface ServiceContentImageCardProps {
  title: string;
  description?: string;
  bulletPoints?: {title?: string; description: string; bold?: boolean}[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bgColor?: "white" | "gray";
  className?: string;
}
 
const ServiceContentImageCard = ({
  title,
  description,
  bulletPoints,
  image,
  imageAlt,
  imagePosition = "right",
  bgColor = "white",
  className = ""
}: ServiceContentImageCardProps) => {
  const bgClass = bgColor === "white" ? "bg-white" : "bg-[#F5F5F5]";
  
  return (
    <section className={`industries-service-section-top bg-page ${className}`}>
      <div className="mx-auto inner-page-container">
        <div className={`${bgClass} rounded-3xl p-6 md:p-9`}>
          <div className={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12`}>
            {/* Content */}
            <div className="flex-1">
              <h2 className="fs-36 font-semibold mb-[var(--size-25)]">
                {title}
              </h2>
              {description && (
                <p className="fs-18 mb-6">{description}</p>
              )}
              {bulletPoints && (
                <ul className="space-y-4">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 pl-1">
                      <span className="w-2 h-2 xl:w-[10px] xl:h-[10px] bg-[#0D2F6F] rounded-full flex-shrink-0 lg:mt-[var(--size-7)] mt-[6px]"></span>
                      <span className="fs-18">
                        <strong className="fs-18">{point.title}</strong> {point.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Image */}
            <div className="flex-1">
              <img loading="lazy" decoding="async" src={image}
                alt={imageAlt}
                className="rounded-2xl shadow-card h-full md:w-[var(--size-500)] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default ServiceContentImageCard;
