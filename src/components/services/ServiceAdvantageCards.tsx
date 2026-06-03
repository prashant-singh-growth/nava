import Greentick from "../../assets/Icons/green-tick.webp";

interface AdvantageCard {
  title: string | React.ReactNode;
  description: string;
  isdescription? : boolean;
  isTitleSemiBold?:boolean
}

interface ServiceAdvantageCardsProps {
  title: string;
  advantages: AdvantageCard[];
  className?: string;
  CustomClass?: string;
  WhyChooseNava?: string;
  AwsWhyChooseBg?: string;
  isdescription? : boolean;  
  isTitleSemiBold?:boolean
}

const ServiceAdvantageCards = ({ title, advantages, className = "", CustomClass = "", WhyChooseNava = "", AwsWhyChooseBg = "", isdescription=true, isTitleSemiBold=false }: ServiceAdvantageCardsProps) => {
  const width = isdescription ? "278px" : "978px";
  
  return (
    <section className={`industries-service-section-top ${WhyChooseNava || ""}`}>
      <div className={`mx-auto relative bg-[url('assets/Images/blue-bg.webp')] md:bg-contain md:bg-[position:top_var(--size-30)_center] bg-center bg-cover bg-no-repeat ${AwsWhyChooseBg || ""}`}>
        <div className="grid md:grid-cols-1 lg:gap-[var(--size-10)] gap-2 inner-page-container mx-auto">
        <h2 className={`fs-36 font-semibold text-center ${CustomClass || ""}`}>
          {title}
        </h2>
        <div className="relative flex flex-col gap-5 
            ">
            {advantages.map((advantage, index) => (
            <div key={index} className="bg-[#FFFFFF] rounded-3xl p-5 md:p-7 xl:p-9 flex sm:items-center items-start sm:flex-row flex-col gap-6 sm:gap-16 z-10">
              <div className="flex-shrink-0 items-center flex gap-5 xl:gap-7">
                <img src={Greentick} className="w-8 h-8 xl:w-10 xl:h-10" alt="Check mark icon" />
                {isTitleSemiBold ?
                <h3
                  className={`fs-24 font-medium ${
                    isdescription ? "sm:w-[175px] md:w-[200px] lg:w-[var(--size-278)] w-full" : "max-w-[var(--size-970)] !w-full"
                  }`}
                >
                 <div dangerouslySetInnerHTML={{ __html: advantage.title }} ></div></h3>
                 :
                <h3
                  className={`fs-24 font-medium ${
                    isdescription ? "sm:w-[175px] md:w-[200px] lg:w-[var(--size-278)] w-full" : "max-w-[var(--size-970)] !w-full"
                  }`}
                >
                  {advantage.title}
                </h3>}
              </div>  
              {isdescription &&               
              <div className="flex-1">
                <p className="fs-18 text-[#000000] max-w-xl font-normal line-clamp-6">{advantage.description}</p>
              </div>
              }
            </div>
            ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantageCards;