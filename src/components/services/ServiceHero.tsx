import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";

interface ServiceHeroProps {
    backgroundImage: string;
    breadcrumbs: Array<{ name: string; path?: string }>;
    overline: string | React.ReactNode;
    title: string;
    ctaText?: string;
    ctaAction?: () => void;
    heroImage?: string;
    HeroBannerClass?: string;
}

const ServiceHero = ({
    backgroundImage,
    breadcrumbs,
    overline,
    title,
    HeroBannerClass = "",
    ctaText = "Get in touch",
    ctaAction,
    heroImage
}: ServiceHeroProps) => {
    const navigate = useNavigate();

    const handleCTA = () => {
        if (ctaAction) {
            ctaAction();
        } else {
            navigate("/contact-us");
        }
    };

    return (
        <section
            className={`flex items-center justify-center bg-cover lg:bg-center md:bg-[75%] bg-[70%] bg-no-repeat ${HeroBannerClass}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="page-container pt-24 md:pt-0 flex justify-between md:items-end md:flex-row flex-col-reverse items-start">

                <div>
                    {/* Breadcrumb */}
                    <div className="items-center fs-14 text-[#BEBEBE] mb-6 mt-8 hidden md:flex">
                        {breadcrumbs.map((crumb, index) => (
                            <span key={index} className="flex items-center fs-14">
                                {crumb.path ? (
                                    <button
                                        onClick={() => navigate(crumb.path)}
                                        className="hover:text-white transition-colors"
                                    >
                                        {crumb.name}
                                    </button>
                                ) : (
                                    <span
                                        className={
                                            index === breadcrumbs.length - 1
                                                ? "text-white fs-14"
                                                : "fs-14"
                                        }
                                    >
                                        {crumb.name}
                                    </span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight className="w-4 h-4 mx-2" />
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Overline with underline */}
                    <div className="mx-auto py-4 pb-10">
                        <h1 className="relative fs-65 font-semibold mb-2 inline-block text-[#ffffff] leading-tight whitespace-pre-line">
                            {overline}
                            <span className="absolute left-0 bottom-[-18px] md:w-20 md:h-1.5 w-16 h-1 bg-[#0059FF] rounded-full"></span>
                        </h1>
                    </div>
                    <div>
                        <p className="fs-18 text-[#ffffff] mb-12 max-w-2xl">
                            {title}
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleCTA}
                        className="primary-button mb-16 border border-[#3A6CC9] text-[#ffffff] items-center gap-3 xl:gap-6 fs-18 p-2 md:py-3 md:px-4 lg:py-3 lg:px-4 xl:py-3 xl:px-4 hidden md:flex"
                    >
                        {ctaText}
                        <img src={whitearrow} alt="service-arrow-icon" />
                    </button>   

                </div>

                <div>
                {heroImage && (
                    <div className="md:mb-[var(--size-40)] -mt-10 mb-10">
                        <img src={heroImage} 
                        alt="AWS Data Analytics" 
                        className="md:w-[var(--size-200)] w-40 h-auto md:mb-auto -mb-[40px]" />
                    </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ServiceHero;
