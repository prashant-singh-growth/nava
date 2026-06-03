import { ArrowRight } from "lucide-react";
import bluearrow from "../../assets/Icons/blue-right-arrow.svg";
import hoverArrow from "../../assets/Icons/hover-blue-right-arrow.svg";
import { Link } from "react-router-dom";

interface SolutionCard {
  title: string;
  description: React.ReactNode;
  image?: string;
  hasImage: boolean;
  path?: string;
  ctaAction?: () => void;
}

interface ServiceSolutionCardsProps {
  title: string;
  description?: string;
  cards: SolutionCard[];
  className?: string;
  CustomClass?: string;
  imageSize?: "default" | "lg";
}

const ServiceSolutionCards = ({
  title,
  description,
  cards,
  className = "",
  CustomClass,
  imageSize = "default",
}: ServiceSolutionCardsProps) => {
  const imageHeightClass = imageSize === "lg" ? "md:h-[320px] h-[200px]" : "md:h-[260px] h-[180px]";
  return (
    <section className={`industries-service-section-top bg-page ${className}`}>
      <div className="inner-page-container mx-auto">
        <div>
          <h2
            className={`fs-36 font-semibold md:pb-[var(--size-7)] pb-[10px] text-[#000000] md:text-center ${CustomClass || ""}`}
          >
            {title}
          </h2>
          {description && <h4>{description}</h4>}
          <br />
        </div>

        <div className="flex flex-col gap-7">
          {cards.map((card, index) => (
            <div
              key={index}
              className="solution-card flex mx-auto rounded-3xl gap-0 overflow-hidden shadow-sm bg-white last:mb-0 w-full"
            >
              {index % 2 === 0 ? (
                // Image first, then content
                <>
                  <div className="flex md:flex-row flex-col">
                    <div className={`flex-1 ${imageHeightClass}`}>
                      {card.hasImage && card.image ? (
                        <img loading="lazy" decoding="async" src={card.image}
                          alt={card.title}
                          className={`w-full object-cover ${imageHeightClass} rounded-3xl`} />
                      ) : (
                        <div className="w-full h-64 md:h-full bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 flex items-center justify-center">
                          <div className="w-16 h-16 bg-accent-blue/20 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center group md:pl-14 py-5 p-4 group cursor-pointer">
                      {card.path ? (
                        <Link to={card.path}>
                          <h3 className="fs-24 font-medium mb-3 group-hover:text-[#0089FF]">{card.title}</h3>
                          <p className="fs-18 text-[#2A2A2A] mb-6 max-w-md">{card.description}</p>

                          <button className="relative w-1/2 h-4 overflow-hidden">
                            <img loading="lazy" decoding="async" src={bluearrow} alt=""
                              className="absolute inset-0 transition-all duration-300 ease-in-out 
                                       group-hover:translate-x-full group-hover:opacity-0" />
                            <img loading="lazy" decoding="async" src={hoverArrow} alt=""
                              className="absolute inset-0 -translate-x-full opacity-0 
                                       transition-all duration-300 ease-in-out 
                                       group-hover:translate-x-0 group-hover:opacity-100" />
                          </button>
                        </Link>
                      ) : (
                        <>
                          <h3 className="fs-24 font-medium mb-3">{card.title}</h3>
                          <p className="fs-18 text-[#2A2A2A] mb-6 max-w-md">{card.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                // Content first, then image
                <>
                  <div className="flex md:flex-row flex-col-reverse">
                    <div className="flex-1 flex flex-col md:pl-14 py-5 p-4 justify-center group cursor-pointer">
                      {card.path ? (
                        <Link to={card.path}>
                          <h3 className="fs-24 font-medium mb-3 group-hover:text-[#0089FF]">{card.title}</h3>
                          <p className="fs-18 text-[#2A2A2A] mb-6 max-w-md">{card.description}</p>

                          <button className="relative w-1/2 h-4 overflow-hidden">
                            <img loading="lazy" decoding="async" src={bluearrow} alt=""
                              className="absolute inset-0 transition-all duration-300 ease-in-out 
                                       group-hover:translate-x-full group-hover:opacity-0" />
                            <img loading="lazy" decoding="async" src={hoverArrow} alt=""
                              className="absolute inset-0 -translate-x-full opacity-0 
                                       transition-all duration-300 ease-in-out 
                                       group-hover:translate-x-0 group-hover:opacity-100" />
                          </button>
                        </Link>
                      ) : (
                        <>
                          <h3 className="fs-24 font-medium mb-3">{card.title}</h3>
                          <p className="fs-18 text-[#2A2A2A] mb-6 max-w-md">{card.description}</p>
                        </>
                      )}
                    </div>
                    <div className={`flex-1 ${imageHeightClass}`}>
                      {card.hasImage && card.image ? (
                        <img loading="lazy" decoding="async" src={card.image}
                          alt={card.title}
                          className={`w-full object-cover ${imageHeightClass} rounded-3xl`} />
                      ) : (
                        <div className="w-full bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 flex items-center justify-center">
                          {/* <div className="w-16 h-16 bg-accent-blue/20 rounded-full"></div> */}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutionCards;
