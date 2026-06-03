import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "@/utils/apiUtils";
import whitearrow from "../assets/Icons/white-right-arrow.svg";
import bluearrow from "../assets/Icons/blue-right-arrow.svg";
import hoverArrow from "../assets/Icons/hover-blue-right-arrow.svg";

const Insights = ({pageurl}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const POSTS_PER_PAGE: number = 2;

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts(`/posts?_embed&per_page=${POSTS_PER_PAGE}`);
        setPosts(data);        
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handlePostClick = (post) => {
    const category = (post?.categories[0]?.name).replace(/\s+/g, "").toLowerCase() || 'uncategorized'
    if(pageurl) return  navigate(`/${pageurl}/${post.slug}`, { state: { postId: post.id } });
    navigate(`/insights/${category}/${post.slug}`, { state: { postId: post.id } });
    //navigate(`/insights/${category}/${post.id}`);
  };

  return (
    <section id="insights" className="insights-section page-container md:pt-[var(--size-200)] lg:pt-[90px] xl:pt-[var(--size-150)]">
      {/* Section Header */}
      <div className="text-center">
        <p className="fs-24 text-gray mb-0 font-medium">NAVA Insights</p>
        <h2 className="font-semibold fs-36 text-[#000000]">From Our ThinkLab</h2>
      </div>

      {/* Cards Section */}
      <section className="py-3 pb-[25px] lg:pb-[var(--size-35)]">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#427AE0]"></div>
            <p className="mt-4 text-gray-600">Loading insights...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto relative">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl p-4 md:p-6 cursor-pointer group"
                onClick={() => handlePostClick(post)}
              >
                {/* Image */}
                <div className="overflow-hidden rounded-3xl mb-5">
                <img loading="lazy" decoding="async" src={post.featured_image || "../placeholder.svg"}
                    alt={stripHtml(post.title)}
                    className="w-full h-auto lg:h-[var(--size-350)] md:h-[300px] object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement; // cast to HTMLImageElement
                        target.src = "/placeholder.svg";
                    }}
                />
                </div>

              
                {/* Category */}
                <p className="fs-16 text-[#00328E] mb-2 font-medium">
                   {post?.categories[0]?.name || 'Uncategorized'}
                </p>

                {/* Title */}
                <div className="">
                <h3 className="text-[#2B2B2B] fs-24 font-medium mb-5 transition-colors duration-300 group-hover:text-[#0089FF]">{stripHtml(post.title)}</h3>

                {/* Description */}
                <p className="text-[#2A2A2A] fs-18 leading-relaxed mb-7 line-clamp-3">
                  {stripHtml(post.excerpt)}
                </p>
                </div>

                {/* Read More Button */}
                <button className="relative w-1/2 h-4 overflow-hidden">
                  <img loading="lazy" decoding="async" src={bluearrow} alt=""
                      className="absolute inset-0 transition-all duration-300 ease-in-out 
                                 group-hover:translate-x-full group-hover:opacity-0" />
                  <img loading="lazy" decoding="async" src={hoverArrow} alt=""
                      className="absolute inset-0 -translate-x-full opacity-0 
                                 transition-all duration-300 ease-in-out 
                                 group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Button */}
      <div className="text-center flex justify-center relative z-10">
        <button
          onClick={() => navigate("/insights")}
          className="primary-button flex gap-9 py-4 px-6 p-2 lg:px-8 text-[#ffffff] border border-[#3A6CC9] items-center justify-center fs-18 md:w-auto w-full"
        >
          Explore Insights
          <img loading="lazy" decoding="async" src={whitearrow}
            className="group-hover:translate-x-1 transition-transform duration-200"
            alt="Explore Insights" />
        </button>
      </div>
    </section>
  );
};

export default Insights;