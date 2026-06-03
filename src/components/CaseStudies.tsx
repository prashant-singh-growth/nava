import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import whitearrow from "../assets/Icons/white-right-arrow.svg";
import { fetchPosts } from "../utils/apiUtils";

interface CaseStudiesProps {
  adjustTop?: boolean;
}

const CaseStudies = ({ adjustTop=false }: CaseStudiesProps)=> {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  const [postData, setPostData] = useState([]);

  // Helper function to safely parse JSON strings
  const parseJSONField = (jsonString?: string) => {
    if (!jsonString) return [];
    try {
      const parsed = JSON.parse(jsonString);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Failed to parse JSON field:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await fetchPosts(`/posts?categories=2&per_page=5`);

        // Helper function to safely parse JSON strings
        const parseJSONField = (jsonString?: string) => {
          if (!jsonString) return [];
          try {
            const parsed = JSON.parse(jsonString);
            return Array.isArray(parsed) ? parsed : [];
          } catch (error) {
            console.error("Failed to parse JSON field:", error);
            return [];
          }
        };

        const formattedData = data.map((study) => ({
          id: study.id,
          title: study.title,
          description: study.excerpt ? study.excerpt.replace(/(<([^>]+)>)/gi, "") : "",
          image: study.featured_image || "",
          slug: study.slug,
          results: parseJSONField(study?.acf?.results_box_4),
          metric: { value: study.acf?.metric_value || "N/A" },
          metrics: [
            { value: "30%", label: "Increase in Operational Efficiency" },
            { value: "5X", label: "Improved Data Accessibility" },
          ],
        }));

        setCaseStudies(formattedData);
        setPostData(data);
      } catch (error) {
        console.error("Failed to fetch case studies:", error);
      }
    };

    fetchCaseStudies();
  }, []);

  const handlePostClick = (post) => {
    const category = post?.categories?.[0]?.name?.replace(/\s+/g, "").toLowerCase() || "uncategorized";
    navigate(`/insights/${category}/${post.slug}`, { state: { postId: post.id } });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
      partialVisibilityGutter: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 2,
    },
  };

  return (
    <section className={`featured-case-studies bg-page ${adjustTop ? 'pt-10' : 'section-top'}`}>
      <div className={`mx-auto swiper-container ${isMobile ? "page-container" : ""}`}>
        {/* Header */}
        <div className="text-center mb-3">
          <p className="fs-24 text-gray font-medium">Featured Case Studies</p>
          <h2 className="font-semibold fs-36">Proven Outcomes</h2>
        </div>

        {/* Carousel */}
        <Carousel
          arrows={false}
          // autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          showDots={true}
          transitionDuration={600}
          slidesToSlide={1}
          partialVisible={true}
          responsive={responsive}
          itemClass="px-2"
        >
          {caseStudies.map((study, index) => (
            <div key={study.id || index} className="case-studies-carousel">
              <article className="case-card bg-[#E4E9FC] rounded-3xl overflow-visible">
                <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] md:p-5 px-5 pt-5 gap-4 lg:gap-6 xl:gap-10">
                  {/* Image */}
                  <div className="max-h-[460px] lg:max-h-full">
                    <img loading="lazy" decoding="async" src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="h-[var(--size-460)] w-full rounded-[30px] proven-card-img object-cover" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col proven-card-right lg:py-2 xl:py-5 lg:pr-14 pr-0 mb-4">
                    <h3 className="fs-30 font-medium text-[#2B2B2B] md:mb-1 mb-0 leading-tight truncate-multiline">
                      {study.title.length > 95 ? `${study.title.slice(0, 95)}...` : study.title}
                    </h3>
                    <p className="text-[#2B2B2B] fs-18 line-clamp-4 leading-relaxed text-start relative lg:pt-3 pt-2 lg:pb-0 md:pb-6 h-100 md:max-h-36 lg:max-h-24 xl:max-h-32">
                      {study.description}
                    </p>
                  </div>
                </div>

                {/* Metrics & Button */}
                <div className="stats-pill">
                  <div className="stats-inner rounded-3xl lg:h-auto h-24 flex items-center">
                    <div className="stats-metrics">
                      {study?.results[0] && (
                        <div className="metric flex gap-3 items-center">
                          <span className="metric-value fs-24 lg:w-full text-center md:w-64 w-full truncate-multiline h-auto max-[568px]:h-[54px]">
                            {study.results[0].title}
                          </span>
                          {/* <span className="metric-value fs-14">{study.results[1].title}</span> */}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handlePostClick(postData[index])}
                      className="primary-button border border-[#3A6CC9] text-[#ffffff] flex items-center justify-center gap-3 fs-18 p-2 lg:p-3"
                    >
                      View Case Study
                      <img loading="lazy" decoding="async" src={whitearrow} className="w-5 lg:w-3 xl:w-6" alt="View case study details" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudies;
