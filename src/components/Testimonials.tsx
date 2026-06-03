import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tag from "../assets/Images/testimonial-tag.webp";

const testimonials = [
  {
    title: "CTO - Leading Industrial Manufacturer.",
    text: "We partnered with NAVA to modernize our legacy platform and embed GenAI into key operational processes. Their product-led approach helped us accelerate delivery while staying aligned with internal compliance and security standards.",
  },
  {
    title: "Director of Enterprise Applications - Global Energy & Utilities Company.",
    text: "NAVA helped us modernize our enterprise reporting and analytics capabilities, enabling faster, more accurate decision-making across our operations. Their expertise in large-scale data transformation, cloud architecture, and business intelligence helped us shift from reactive reporting to real-time operational insight, without disrupting existing workflows.",
  },
  {
    title: "VP of Operations - Logistics Company.",
    text: "NAVA’s AI team quickly understood the nuances of our logistics workflows and delivered a real-time computer vision solution that’s now helping us increase dock efficiency and manpower safety. Their expertise in the industry and AI made the rollout smooth and measurable.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 767 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export default function TestimonialsSection() {
  const [showDots, setShowDots] = useState(false);

  // ✅ Handle responsive showDots
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // 👉 Show dots only on mobile (<768px)
      if (width < 1024) {
        setShowDots(true);
      } else {
        setShowDots(false);
      }
    };

    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative text-white testimonial-section">
      {/* Heading Section */}
      <div className="relative z-10 mx-auto text-center md:h-full">
        <div className="relative top-14 sm:top-8 md:top-4 lg:top-12 xl:top-16 testimonial-content">
          <p className="fs-24 font-medium tracking-wide text-[#ffffff]">Client Testimonials</p>
          <h2 className="fs-36 font-semibold pt-2">Our Clients Can Tell You Even More</h2>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="page-container testimonial-carousel">
        <Carousel
          arrows={false}
          // autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          showDots={showDots} // ✅ dynamically set dots
          transitionDuration={600}
          slidesToSlide={1}
          responsive={responsive}
          itemClass="px-2"
          containerClass="xl:pb-[var(--size-30)] lg:pb-[var(--size-20)] pb-[20px]"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-3xl p-6 transition-shadow duration-300 mx-3 relative testimonial-card mb-4"
            >
              {/* Title */}
              <div className="flex items-center mb-[2px]">
                <div className="text-left">
                  <p className="fs-16 text-[#6F6F6F] lg:w-[var(--size-300)] w-full lg:h-[var(--size-47)] h-[30px]">
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p
                className="text-[#222222] fs-18 max-h-[225px] md:h-[150px] lg:h-[175px] xl:h-[var(--size-250)] text-start leading-relaxed relative lg:pt-3 sm:pt-5 pt-8 lg:line-clamp-none md:line-clamp-6"
                title={t.text.length > 250 ? t.text : ""}
              >
                “{t.text.length > 250 ? `${t.text.slice(0, 250)}...` : t.text}”
              </p>

              {/* Tag Image */}
              <img loading="lazy" decoding="async" src={tag}
                alt="testimonial tag"
                className="absolute top-4 right-4 object-contain testimonial-quotes-img" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
