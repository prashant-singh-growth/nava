import googleCloudLogo from "../assets/Images/google-cloud.webp";
import awsLogo from "../assets/Images/aws.webp";
import awsPartnerLogo from "../assets/logos/aws-partner-new-logo.webp";
import microsoftPartnerLogo from "../assets/Images/microsoft.webp";
import databricksLogo from "../assets/Images/databricks.webp";
import snowflakeLogo from "../assets/Images/snowflake.webp";
import SalesforceLogo from "../assets/logos/salesforce-new-logo.webp";
import scrollexplore from "../assets/Images/scroll-explore.webp";
//import Carousel from "./Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const partners = [
    // { logo: googleCloudLogo, className: "google-cloud-logo" },
    { logo: awsPartnerLogo, className: "aws-logo" },
    { logo: SalesforceLogo, className: "salesforce-logo" },
    // { logo: microsoftPartnerLogo, className: "microsoft-logo" },
    // { logo: databricksLogo, className: "databricks-logo" },
    // { logo: snowflakeLogo, className: "snowflake-logo" },
  ];

  const slides = [
    {
      title: "Vision AI\nTransforming Operations",
      subtitle: "Turn existing cameras into event-driven computer vision insights for real-time operations",
    },
    {
      title: "Digital Transformation\nwith GenAI",
      subtitle: "Build future-ready digital ecosystems powered by GenAI and cloud innovation",
    },
    {
      title: "Cloud, Data & AI\nBuilt on AWS",
      subtitle: "Accelerate modernization with AWS, cloud-native engineering, and enterprise AI automation",
    },
    /*{
      title: "Build Your Enterprise\nFor What's Next",
      subtitle: "Power workplaces with software and systems that scale, adapt and endure",
    },
    {
          title: "Drive Real Customer Experience Transformation",
          subtitle: "Nurture customer expectations to drive today’s and tomorrow's innovation",
        },
    {
      title: "Deliver Value\nAcross the Globe",
      subtitle: "Find our Global Capability Centers for the world’s talent and technical versatility",
    },*/
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="home" className="relative flex flex-col justify-center banner">
      <div className="mx-auto text-center page-container banner-carousel-section">
        <Carousel
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          showDots={true}
          transitionDuration={600}
          slidesToSlide={1}
          responsive={responsive}
          itemClass="px-2"
          className="banner-carousel"
        >
          {slides.map((slide, index) => (
            <div key={index} className="banner-heading relative">
              <h1 className="md:mb-6 mb-4 animate-slide-up text-center font-semibold mx-auto">
                {slide.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="text-center fs-24">{slide.subtitle}</p>
              {(index === 0 || index === 2) && (
                <div className="absolute aws-slider-partner-logo lg:right-0 right-1/2 md:right-28 md:top-[calc(-1*var(--size-65))] top-[-60px]">
                  <img
                    src={awsPartnerLogo}
                    alt="AWS Partner Logo"
                    className="w-[80px] md:w-[var(--size-190)] h-auto"
                    style={{ objectFit: "contain" }}
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col items-center">
        <p className="scroll-explore flex text-center items-center flex-row-reverse">
          SCROLL TO EXPLORE
          <img src={scrollexplore} alt="Scroll down to explore more content" className="scroll-explore-icon" />
        </p>
      </div>
      <div className="flex justify-center items-center gap-6 banner-partnership-logos absolute bottom-0 bg-black w-full">
        <div className="partner-logos page-container flex items-center justify-center lg:gap-6 flex-wrap">
          <span className="fs-18 font-semibold">OUR PARTNERSHIPS</span>
          <div className="flex justify-center items-center partner-logo-items flex-wrap">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3">
                <img
                  src={partner.logo}
                  alt={`${partner.className.replace("-logo", "")} partner logo`}
                  className={`${partner.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
