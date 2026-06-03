import Insights from "@/components/InsightsHome";
import SocialShare from "@/components/ui/SocialShare";
import { Helmet } from "react-helmet-async";
import offshoreDatacenter from "@/assets/Images/offshore-datacenter.webp";
import profileImage from "@/assets/john-smith-profile.jpg";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "../../components/ui/breadcrumb";
import { fetchPosts } from "../../utils/apiUtils";
import { useEffect } from "react";
import twitter from "../../assets/Icons/twitter.webp";
import linkedin from "../../assets/Icons/linkedin.webp";
import facebook from "../../assets/Icons/facebook.webp";
import commonConfig from "../../config/commonConfig";

interface CaseStudyDynamicPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featured_image: string;
  author: string;
  categories : { name: string; id: number };
    acf?: {
  
    // ACF Fields
    executive_summary_title?: string;
    executive_summary_description?: string;
    
    client_title?: string;
    client_description?: string;
    
    challanges_title?: string;
    challanges_description?: string;
    challange_box?: string; // JSON array
    
    solution_title?: string;
    solution_description?: string;
    solution_box_5?: string; // JSON array
    
    implementation_title?: string;
    implementation_decription?: string;
    implementation_4?: string; // JSON array
    
    result_title?: string;
    results_description?: string;
    results_box_4?: string; // JSON array
    
    key_takeaways_3?: string; // JSON array
    
    client_testimonial?: string; // JSON array
    
    future_outlook_title?: string;
    future_outlook_description?: string;
  };
}

  const stripHtml = (html: string) => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
  };

  const formatDate = (dateString: string) => {
      return format(new Date(dateString), 'MMMM d, yyyy');
  };

 const CaseStudyDynamicPost = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setPost] = useState<CaseStudyDynamicPostProps | null>(null);    
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
            console.log('Error fetching posts:', error);
        } finally {
            setLoading(false); 
        }
    };
    
    // Helper function to safely parse JSON strings
    const parseJSONField = (jsonString?: string) => {
      if (!jsonString) return [];
      try {
        const parsed = JSON.parse(jsonString);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error('Failed to parse JSON field:', error);
        return [];
      }
    };

  // Parse JSON fields
  const challenges = parseJSONField(data?.acf?.challange_box);
  const solutionSteps = parseJSONField(data?.acf?.solution_box_5);
  const implementation = parseJSONField(data?.acf?.implementation_4);
  const results = parseJSONField(data?.acf?.results_box_4);
  const keyTakeaways = parseJSONField(data?.acf?.key_takeaways_3);
  const client_testimonial = parseJSONField(data?.acf?.client_testimonial);

  const category = data?.categories[0]?.name || 'Uncategorized';
  const author = data?.author || 'NAVA Technology Team';
  const featuredImage = data?.featured_image;

  // Use parsed data or fallback
  const displayChallenges = challenges;
  const displaySolutionSteps = solutionSteps;
  const displayImplementation = implementation;
  const displayResults = results;
  const displayKeyTakeaways = keyTakeaways;
  const displayClientTestimonial = client_testimonial;

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

  //const pageUrl = window.location.href;
  const pageUrl = `${commonConfig.ADMIN_URL}/${data?.slug}`;
  const pageTitle = stripHtml(data?.title || '');
  const pageDescription = data?.acf?.executive_summary_description 
      ? stripHtml(data.acf.executive_summary_description).substring(0, 160)
      : stripHtml(data?.excerpt || '').substring(0, 160);

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
          <img src={featuredImage || offshoreDatacenter}
            alt="Case study background"
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

          <div className="max-w-4xl mb-2 mt-8">
            <h1 className="fs-50 text-[#ffffff] md:mb-7 mb-12 leading-tight font-semibold">
                {stripHtml(data?.title) || "White Paper Title"}
            </h1>
            <div className="flex flex-wrap items-center md:gap-4 gap-2 fs-16 text-[#ffffff]">
                <span>Category: {category}</span>
                <span>|</span>
                <span>Date: {formatDate(data?.date)}</span>
                <span>|</span>
                <span>Author: {author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-8 bg-page">
        <div className="inner-page-container mx-auto">
          
          {/* Executive Summary */}
          <section>
            <h2 className="fs-34 font-semibold">{data?.acf?.executive_summary_title || "Executive summary title"}</h2>
            <div>
              <p className="fs-18 mt-5 mb-8 whitespace-pre-line">
              {stripHtml(data?.acf?.executive_summary_description) || "Executive summary description"}
              </p>
            </div>
          </section>

          {/* About the Client */}
          <section className="mb-8 bg-[#ffffff] rounded-3xl px-10 py-8">
            <h2 className="fs-34 font-semibold">{data?.acf?.client_title || "Client title"}</h2>
            <p className="fs-18 mt-5 whitespace-pre-line">
            {stripHtml(data?.acf?.client_description) || "Client Description"}
            </p>
          </section>

          {/* Challenge / Business Need */}
          <section className="mb-8">
            <h2 className="fs-34 font-semibold">{data?.acf?.challanges_title || "Challanges title"}</h2>
            {data?.acf?.challanges_description && (
              <p className="fs-18 my-10 whitespace-pre-line">
                {stripHtml(data?.acf?.challanges_description) || "Challanges Description"}
              </p>
            )}
            <div className="grid md:grid-cols-2 gap-9">
              {displayChallenges.map((challenge, index) => (
                <div key={index} className="bg-[#E4E9FC] rounded-3xl px-10 py-12">
                  <h3 className="fs-24 font-medium mb-4">{challenge.title}</h3>
                  <p className="text-[#000000] fs-18 h-20">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mb-16 bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:center] bg-cover bg-no-repeat">
          {/* Solution Approach */}
          <section className=" inner-page-container mx-auto">
            <h2 className="fs-34 font-semibold mb-4">{data?.acf?.solution_title || "Solution title"}</h2>
            {data?.acf?.solution_description && (
              <p className="text-[#000000] fs-18 my-8 whitespace-pre-line">
                {stripHtml(data?.acf?.solution_description)}
              </p>
            )}
            <div className="relative flex flex-col gap-7">
              {displaySolutionSteps.map((step, index) => (
                <div key={index} className="bg-[#FFFFFF] rounded-3xl p-6 flex sm:items-center sm:flex-row flex-col gap-6 z-10">
                  <div className="flex-shrink-0 items-center flex gap-7">
                    <span className="inline-flex items-center justify-center text-[#00000022] fs-80 font-medium">
                    {step.number || step.sno || String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="fs-24 font-medium sm:w-[175px] md:w-[200px] lg:w-[var(--size-278)] w-full">{step.title || "Step title" }</h3>
                  </div>
                  <div>
                    <p className="fs-18 text-[#000000]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div> 

          {/* Implementation and Execution */}
          <section className="mb-8 bg-[#E4E9FC]">
            <div className="inner-page-container mx-auto py-6">
            <h2 className="fs-34 font-semibold whitespace-pre-line">{stripHtml(data?.acf?.implementation_title) || "Implementation title" }</h2>
            {data?.acf?.implementation_decription && (
              <p className="fs-18 text-[#222222] my-5 whitespace-pre-line">
                {stripHtml(data?.acf?.implementation_decription)}
              </p>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {displayImplementation.map((item, index) => (
                <div key={index} className="bg-[#ffffff] rounded-3xl px-6 py-5">
                  <h3 className="fs-24 font-medium text-[#000000] mb-4">{item.title}</h3>
                  <p className="fs-18 text-[#000000]">{item.description}</p>
                </div>
              ))}
            </div>
            </div>
          </section>

         <div className="bg-[url('assets/Images/pink-blue-gradient-bg.webp')] md:bg-contain md:bg-[position:top_center] bg-[position:center] bg-cover bg-no-repeat">
          {/* Results and Impact */}
            <section className="mb-6 inner-page-container mx-auto">
              <h2 className="fs-34 font-semibold mb-4">{data?.acf?.result_title || "Results title" }</h2>
              {data?.acf?.results_description && (
                <p className="text-[#000000] fs-18 my-8">
                  {data?.acf?.results_description}
                </p>
              )}
              <div className="relative flex flex-col gap-7">
                {displayResults.map((result, index) => (
                  <div key={index} className="bg-[#00328D] rounded-3xl p-6 flex sm:items-center sm:flex-row flex-col gap-6 z-10">
                    <div className="flex-shrink-0 items-center flex gap-7">
                      <span className="inline-flex items-center justify-center text-[#ffffff] fs-80 font-medium">
                      {result.number || result.sno || String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="fs-24 font-medium wsm:w-[175px] md:w-[200px] lg:w-[var(--size-278)] w-full text-[#ffffff]">{result.title}</h3>
                    </div>
                    <div>   
                      <p className="fs-18 text-[#ffffff]">{result.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          {/* Key Takeaways */}
          <section className="py-8 inner-page-container mx-auto">
            <h2 className="fs-24 font-bold text-foreground mb-8 font-poppins">Key Takeaways</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {displayKeyTakeaways.map((takeaway, index) => (
                <div key={index} className="bg-[#E4E9FC] rounded-3xl px-6 py-10">
                  <h3 className="fs-24 font-medium mb-4">{takeaway.title}</h3>
                  <p className="fs-18">{takeaway.description}</p>
                </div>
              ))}
            </div>
          </section>
          

          {/* Client Testimonial */}
          <div className="bg-[#ffffff] py-8">
            <section className="mb-8 inner-page-container mx-auto">            
            {displayClientTestimonial.map((client, index) => (
              <div key={index}>
              <h2 className="fs-34 font-semibold whitespace-pre-line">{stripHtml(client?.title) || "Client title" }</h2>
              <div className="my-6">
                <p className="fs-18 mb-3 whitespace-pre-line">
                  {stripHtml(client?.description)}
                </p>
                <div className="flex items-center gap-4">
                  {/* {!showFallback ? (
                      <img src={client.profile_image}
                        alt={client.profile_name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={() => setImgError(true)} // fallback if image breaks
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                        {initials}
                      </div>
                    )} */}
                  <div>
                    {/* <h4 className="fs-18">{client?.profile_name || "John Smith"}</h4> */}
                    <p className="fs-16">{client?.profile_role || "CTO"}</p>
                  </div>
                </div>
              </div>    
              </div>  
              ))}    
          </section>           

          {/* Future Outlook */}
          <section className="mb-0 inner-page-container mx-auto">
            <h2 className="fs-34 font-semibold">{data?.acf?.future_outlook_title|| "Future title"  }</h2>
            <p className="fs-18 my-3 whitespace-pre-line">
            {stripHtml(data?.acf?.future_outlook_description) || "Future description" }
            </p>


            {/* Social Share */}
            <SocialShare 
                url={pageUrl}
                title={pageTitle}
                description={pageDescription}
            />
          </section>
        </div>
        
      </main>

      {/* Insights Section */}
      <div className="pb-12 md:-mt-[var(--size-95)] mt-[20px]">
      <Insights />
      </div>

      {/* Footer */}
    </div>
  );
};

export default CaseStudyDynamicPost;