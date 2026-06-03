import { useState } from "react";
import AccordianMinusIcon from "../../assets/Icons/accordian-minus.svg";
import AccordianPlusIcon from "../../assets/Icons/accordian-plus.svg";

interface SupportItem {
  id: string;
  title: string;
  content: {
    bullets: Array<{
      heading: string;
      text: string;
    }>;
    image: string;
  };
}

interface IndustriesSupportProps {
  title: string;
  description: string[];
  items: SupportItem[];
  defaultOpen?: string;
}

const IndustriesSupport = ({ 
  title, 
  description, 
  items, 
  defaultOpen = "01" 
}: IndustriesSupportProps) => {
  const [openAccordion, setOpenAccordion] = useState(defaultOpen);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? "" : id);
  };

  return (
    <section className="industries-service-section-top">
      <div className="inner-page-container mx-auto">
        <div className="mb-[var(--size-35)]">
          <h2 className="fs-36 font-semibold text-[#222222] mb-[var(--size-10)]">
            {title}
          </h2>
          <div>
            {description.map((paragraph, index) => (
              <p className="fs-18 text-[#222222] mx-auto" key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="mx-auto space-y-8 industries-support-accordian relative flex flex-col 
                            before:content-[''] before:absolute before:inset-0 
                            before:bg-[url('assets/Images/pink-blue-gradient-bg.webp')] 
                            before:bg-no-repeat before:bg-center before:bg-[length:100%] 
                            before:blur-[125px] before:z-[-1]">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl ${
                openAccordion === item.id 
                  ? 'bg-[#ffffff]' 
                  : 'bg-[#ffffff]'
              }`}
              style={{ minHeight: '64px' }}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between md:px-8 md:py-8 px-6 py-6 text-left"
                aria-expanded={openAccordion === item.id}
              >
                <div className="flex items-center gap-6">
                  <span className="fs-24 font-medium text-[#00000088]">
                    {item.id}
                  </span>
                  <h3 className="fs-24 font-medium text-[#000000]">
                    {item.title}
                  </h3>
                </div>
                <img src={openAccordion === item.id ? AccordianMinusIcon : AccordianPlusIcon}
                  alt={openAccordion === item.id ? "Collapse" : "Expand"}
                  className={`md:w-10 md:h-10 w-8 h-8 p-2 rounded-full border border-[#E5E5E5] transition-all duration-300`}
                  style={{
                    background: openAccordion === item.id
                      ? "#C3DEFC"
                      : "linear-gradient(35deg, #FFFFFF 0%, #a8cdffc4 100%)",
                    boxShadow: openAccordion === item.id
                    ? "inset transparent;"
                    : "inset 0px 3px 6px #4facfe26;",
                  }} />
              </button>
              
              {openAccordion === item.id && (
                <div className="md:px-8 md:pb-8 px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {item.content.bullets.map((bullet, index) => (
                        <div key={index} className="">
                          <div className="flex items-start gap-3">
                            <ul className="space-y-7" style={{ fontSize: "var(--size-25)" }}>
                              <li className="flex items-start gap-3">
                                {/* DOT */}
                                <span
                                  className="
                                    w-2 h-2
                                    xl:w-[10px] xl:h-[10px]
                                    bg-[#0059FE]
                                    rounded-full
                                    flex-shrink-0
                                    lg:mt-[var(--size-7)] mt-[6px]
                                  "
                                ></span>

                                {/* TEXT */}
                                <h4 className="font-bold text-[#000000] fs-18 lg:leading-[var(--size-27)] leading-5">
                                  {bullet.heading}: <span className="font-[400]">{bullet.text}</span>
                                </h4>
                              </li>
                            </ul>

                          </div>
                          {/* <p className="text-text-gray ml-8">{bullet.text}</p> */}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <img src={item.content.image} 
                        alt={item.title}
                        className="rounded-3xl object-cover h-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSupport;