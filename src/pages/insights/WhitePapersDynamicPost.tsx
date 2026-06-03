import Insights from "../../components/InsightsHome";
import SocialShare from "@/components/ui/SocialShare";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Link, useParams } from "react-router-dom";
import serverRoom from "../../assets/Images/server-room.webp";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../utils/apiUtils";
import ApproachIcon from "../../assets/Icons/approach-icon.svg";
import ResultIcon from "../../assets/Icons/result-icon.svg";
import commonConfig from "../../config/commonConfig";
interface WhitePapersDynamicPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featured_image: string;
  author: string;
  categories: { name: string; id: number };
  acf?: {
    executive_summary_title?: string;
    executive_summary_description?: string;
    introduction_title?: string;
    introduction_description?: string;
    feature_title?: string;
    feature_description?: string;
    feature_box?: string | Array<{ title: string; description: string }>;
    benefits_title?: string;
    benefits_description?: string;
    benefits_box_5?: string | Array<{ number?: string; sno?: string; title: string; description: string }>;
    appraoch_results_title: string;
    appraoch_results_description: string;
    approach?: string | Array<{ title: string }>;
    results?: string | Array<{ title: string }>;
    challenges_title: string;
    challenges_description: string;
    challenges_4?: string | Array<{ title: string; description: string }>;
    best_practicses_title: string;
    best_practicses_description: string;
    best_practices_5?: string | Array<{ number?: string; sno?: string; title: string; description: string }>;
    future_outlook_title?: string;
    future_outlook_description?: string;
    conclusion_title?: string;
    conclusion_description?: string;
  };
}

const WhitePapersDynamicPost = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setPost] = useState<WhitePapersDynamicPostProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const fetchPost = async (id: string) => {
    try {
      setLoading(true);
      const postData = await fetchPosts(`/posts?slug=${id}`);
      setPost(postData);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const parseJsonArray = (field: string | Array<{ [key: string]: any }> | undefined): Array<{ [key: string]: any }> => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    try {
      return JSON.parse(field);
    } catch {
      return [];
    }
  };

  // Parse dynamic data
  const benefits = parseJsonArray(data?.acf?.benefits_box_5);
  const challenges = parseJsonArray(data?.acf?.challenges_4);
  const bestPractices = parseJsonArray(data?.acf?.best_practices_5);
  const features = parseJsonArray(data?.acf?.feature_box);
  const approach = parseJsonArray(data?.acf?.approach);
  const results = parseJsonArray(data?.acf?.results);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  const category = data?.categories[0]?.name || "Uncategorized";
  const author = data?.author || "NAVA Technology Team";
  const featuredImage = data?.featured_image;

  //const pageUrl = window.location.href;
  const pageUrl = `${commonConfig.ADMIN_URL}/${data?.slug}`;
  const pageTitle = stripHtml(data?.title || "");
  const pageDescription = data?.acf?.executive_summary_description
    ? stripHtml(data.acf.executive_summary_description).substring(0, 160)
    : stripHtml(data?.excerpt || "").substring(0, 160);

  // Use dynamic data or fallback to defaults
  const displayBenefits = benefits;
  const displayChallenges = challenges;
  const displayBestPractices = bestPractices;
  const displayAprroach = approach;
  const displayResults = results;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#427AE0]"></div>
          <p className="mt-4 text-gray-600">Loading insights...</p>
        </div>
      </div>
    );
  }

  // Show not found state
  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Post Not Found</h1>
          <p className="text-gray-600">The requested post could not be found.</p>
          <Link to="/insights" className="text-primary hover:text-[#427AE0] mt-4 inline-block">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>{pageTitle} - NAVA Software Solutions</title>
        <meta name="description" content={pageDescription} />

        {/* Open Graph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="NAVA Software Solutions" />
        <meta property="og:locale" content="en_US" />
        {featuredImage && (
          <>
            <meta property="og:image" content={featuredImage} />
            <meta property="og:image:secure_url" content={featuredImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={pageUrl} />
        {featuredImage && <meta name="twitter:image" content={featuredImage} />}

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-10 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={featuredImage ? featuredImage : serverRoom}
            alt="Server Room Background"
            className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative page-container">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6 mt-2 hidden md:flex">
            <BreadcrumbList className="text-white/80">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/insights" className="hover:text-white transition-colors">
                    Insights
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title and Meta */}
          <div className="max-w-4xl mb-2 mt-16">
            <h1 className="fs-50 text-[#ffffff] md:mb-7 mb-12 leading-tight font-semibold">
              {stripHtml(data?.title) || "White Paper Title"}
            </h1>
            <div className="flex flex-wrap items-center md:gap-4 gap-2 fs-16 text-[#ffffff]">
              <span>Category: {category}</span>
              <span>|</span>
              <span>Date: {formatDate(data.date)}</span>
              <span>|</span>
              <span>Author: {author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="pt-8 bg-page">
        <div className="inner-page-container mx-auto">
          {/* Executive Summary */}
          <section>
            <h2 className="fs-34 font-semibold">{data?.acf?.executive_summary_title}</h2>
            <p className="fs-18 mt-5 mb-7 whitespace-pre-line">{stripHtml(data?.acf?.executive_summary_description)}</p>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="fs-34 font-semibold">{data?.acf?.introduction_title || "Introduction"}</h2>
            <p className="fs-18 mt-6 mb-7 whitespace-pre-line">{stripHtml(data?.acf?.introduction_description)}</p>
          </section>

          {/* Features Section */}
          {(data?.acf?.feature_title || features.length > 0) && (
            <section>
              <h2 className="fs-34 font-semibold">{data?.acf?.feature_title || "Key Features"}</h2>
              {data?.acf?.feature_description && (
                <p className="fs-18 mt-10 mb-12 whitespace-pre-line">{stripHtml(data.acf?.feature_description)}</p>
              )}
              {features.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-[#E4E9FC] px-5 py-10 rounded-3xl">
                      <h3 className="fs-24 h-10 mb-8 font-medium">{feature.title}</h3>
                      <p className="fs-18">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </div>

        <div className="bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:center] bg-cover bg-no-repeat">
          {/* Benefits */}
          <section className="lg:mt-8 lg:mb-8 mt-4 !mb-6 inner-page-container mx-auto">
            <h2 className="fs-36 font-semibold mt-8">{data?.acf?.benefits_title}</h2>
            {data?.acf?.benefits_description && (
              <p className="fs-18 pb-4 mb-4 whitespace-pre-line">{stripHtml(data.acf?.benefits_description)}</p>
            )}
            <div className="relative flex flex-col gap-7">
              {displayBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-3xl p-6 flex sm:items-center sm:flex-row flex-col gap-6 z-10"
                >
                  <div className="flex-shrink-0 items-center flex gap-7">
                    <span className="inline-flex items-center justify-center text-[#00000022] fs-80 font-medium">
                      {benefit.number || benefit.sno || String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="fs-24 font-medium sm:w-[175px] md:w-[200px] lg:w-[var(--size-278)] w-full">
                      {benefit.title}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="fs-18 text-[#000000]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Approach and Results */}
          {(displayAprroach || displayResults) && (
            <section className="lg:mt-8 lg:mb-6 mt-4 !mb-6 inner-page-container mx-auto">
              <h2 className="fs-34 font-semibold">{data?.acf?.appraoch_results_title}</h2>
              {data?.acf?.feature_description && (
                <p className="fs-18 mt-6 mb-8 whitespace-pre-line">
                  {stripHtml(data.acf?.appraoch_results_description)}
                </p>
              )}
              {/* <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">Case Study: Implementation Excellence</h2> */}
              <div className="grid md:grid-cols-2 gap-6">
                {data?.acf?.approach && (
                  <div className="bg-[#e4e9fc] p-6 rounded-3xl">
                    <img src={ApproachIcon} className="" alt="Approach strategy icon" />
                    <h3 className="fs-24 font-medium my-8">Approach</h3>
                    <ul className="space-y-2 text-muted-foreground font-poppins">
                      {displayAprroach.map((item, index) => (
                        <li className="fs-18 mb-4 text-black">• {item.title}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {data?.acf?.results && (
                  <div className="bg-[#00328E] p-6 rounded-3xl">
                    <img src={ResultIcon} className="" alt="Results achievement icon" />
                    <h3 className="fs-24 text-[#ffffff] font-medium my-8">Results</h3>
                    <ul className="space-y-2 text-muted-foreground font-poppins">
                      {displayResults.map((item, index) => (
                        <li className="fs-18 mb-4 text-white">• {item.title}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {!displayAprroach && !displayResults && (
                  <>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-foreground mb-4 font-poppins">Approach</h3>
                      <ul className="space-y-2 text-muted-foreground font-poppins">
                        <li>• Deployed IoT sensors across 500+ machines</li>
                        <li>• Implemented machine learning algorithms</li>
                        <li>• Created predictive maintenance dashboard</li>
                        <li>• Trained maintenance teams on new processes</li>
                      </ul>
                    </div>
                    <div className="bg-primary p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4 font-poppins">Results</h3>
                      <ul className="space-y-2 text-white/90 font-poppins">
                        <li>• 45% reduction in unplanned downtime</li>
                        <li>• 30% decrease in maintenance costs</li>
                        <li>• 25% improvement in equipment lifespan</li>
                        <li>• ROI achieved within 18 months</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </section>
          )}
        </div>

        {displayChallenges.length > 0 && (
          <div className="inner-page-container mx-auto">
            {/* Challenges */}
            <section className="mb-6">
              <h2 className="fs-34 font-semibold mb-4">{data?.acf?.challenges_title}</h2>
              {data?.acf?.challenges_description && (
                <p className="fs-18 py-4 whitespace-pre-line">{stripHtml(data.acf?.challenges_description)}</p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                {displayChallenges.map((challenge, index) => (
                  <div key={index} className="bg-[#ffffff] px-6 py-8 rounded-3xl">
                    <h3 className="fs-24 mb-5 font-medium">{challenge.title}</h3>
                    <p className="fs-18">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        <div className="bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:center] bg-cover bg-no-repeat">
          {/* Best Practices */}
          <section className="mb-12 inner-page-container mx-auto">
            <h2 className="fs-34 font-semibold mb-6">{data?.acf?.best_practicses_title}</h2>
            {data?.acf?.best_practicses_description && (
              <p className="fs-18 py-8 whitespace-pre-line">{stripHtml(data.acf?.best_practicses_description)}</p>
            )}
            <div className="relative flex flex-col gap-7">
              {displayBestPractices.map((practice, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-3xl p-6 flex sm:items-center sm:flex-row flex-col gap-6 z-10"
                >
                  <div className="flex-shrink-0 items-center flex gap-7">
                    <span className="inline-flex items-center justify-center text-[#00000022] fs-80 font-medium">
                      {practice.number || practice.sno || String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="fs-24 font-medium sm:w-[175px] md:w-[200px] lg:w-[var(--size-278)] w-full">
                      {practice.title}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="fs-18 text-[#000000]">{practice.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Future Outlook */}
          <section className="mb-12 inner-page-container mx-auto">
            <h2 className="fs-36 font-semibold mt-6 mb-4">{data?.acf?.future_outlook_title}</h2>
            <div className="">
              {/* <h3 className="fs-24 text-[#ACACAC] mb-4">The Evolution of Technology</h3> */}
              <p className="fs-18 text-[#222222] whitespace-pre-line">
                {stripHtml(data?.acf?.future_outlook_description)}
              </p>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <section className="bg-[#ffffff] py-8">
          <div className="inner-page-container mx-auto">
            <h2 className="fs-34 font-semibold mb-4">{data?.acf?.conclusion_title}</h2>
            {/* <div className="bg-white"> */}
            <p className="fs-18 text-[#222222] mb-5 whitespace-pre-line">
              {stripHtml(data?.acf?.conclusion_description)}
            </p>
            {/* </div> */}

            {/* Social Share */}
            <SocialShare url={pageUrl} title={pageTitle} description={pageDescription} />
          </div>
        </section>
      </div>

      {/* Insights Section */}
      <div className="pb-12 md:-mt-[var(--size-95)] mt-[20px]">
        <Insights />
      </div>

      {/* Footer */}
    </div>
  );
};

export default WhitePapersDynamicPost;
