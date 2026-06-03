import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";
import Insights from "../../components/InsightsHome";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../utils/apiUtils";
import SocialShare from "@/components/ui/SocialShare";
import commonConfig from "../../config/commonConfig";
interface WordPressPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    featured_image: string;
    author: string;
    categories : { name: string; id: number };
    acf?: {
        intro_section_title?: string;
        intro_section_description?: string;
        summary_title?: string;
        summary_description?: string;
        summary_bullet_content?: string;
        best_practices?: string;
        best_practices_8_block_content?: string;
        conclusion?: string;
    };
}

const BlogDynamicPost = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<WordPressPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchPost(id);
        }
    }, [id]);

    const fetchPost = async (id: string) => {
        try {
            setLoading(true);
            const data = await fetchPosts(`/posts?slug=${id}`);
            setPost(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };   


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
    if (!post) {
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

    const stripHtml = (html: string) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'MMMM d, yyyy');
    };

    const category = post.categories?.[0]?.name || 'Uncategorized';
    const author = post.author || 'NAVA Technology Team';
    const featuredImage = post.featured_image || '';
    
    //const pageUrl = window.location.href;
    const pageUrl = `${commonConfig.ADMIN_URL}/${post?.slug}`;
    const pageTitle = stripHtml(post.title || 'Blog Post');
    const pageDescription = post.acf?.intro_section_description 
        ? stripHtml(post.acf.intro_section_description).substring(0, 160)
        : stripHtml(post.excerpt || 'Read our latest insights and articles').substring(0, 160);

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
                <link rel="canonical" href={`https://navasoftware.com/blog/${post?.slug}`} />
            </Helmet>

            {/* Hero Section */}
            <section className="relative text-white py-20">
                {/* Background Image with Overlay */}
                {featuredImage && (
                    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/50">
                        <img src={featuredImage} 
                            alt={stripHtml(post.title)} 
                            className="w-full h-full object-cover" />
                    </div>
                )}
                
                <div className="container mx-auto px-4 relative">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link to="/" className="text-white/70 hover:text-white transition-colors">
                                Home
                            </Link>
                            <span className="text-white/70">/</span>
                            <Link to="/insights" className="text-white/70 hover:text-white transition-colors">
                                Insights
                            </Link>
                            <span className="text-white/70">/</span>
                            <span className="text-white">{category}</span>
                        </div>
                    </nav>

                    {/* Title and Meta */}
                    <div className="max-w-4xl mb-5">
                        <h1 className="fs-50 text-[#ffffff] mb-7 font-semibold">
                            {stripHtml(post.title)}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 fs-16 text-[#ffffff]">
                            <span>Category: {category}</span>
                            <span>|</span>
                            <span>Date: {formatDate(post.date)}</span>
                            <span>|</span>
                            <span>Author: {author}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body Section */}
            <section className="pt-8">
                <div className="page-container max-w-6xl">
                    <div className="">
                        {/* Intro Section */}
                        {post.acf?.intro_section_title && (
                            <div className="mb-8">
                                <h3 className="fs-34 font-semibold">
                                    {post.acf.intro_section_title}
                                </h3>
                                <p className="fs-18 mt-9 mb-8 text-[#222222]"
                                  dangerouslySetInnerHTML={{ __html: post.acf.intro_section_description }}>   
                                </p>
                            </div>
                        )}

                        {/* Summary Section */}
                        {post.acf?.summary_title && (
                            <div className="mb-8">
                                <h3 className="fs-34 font-semibold mb-4">
                                    {post.acf.summary_title}
                                </h3>
                                <p className="fs-18 text-[#222222] mb-2" 
                                  dangerouslySetInnerHTML={{ __html: post.acf.summary_description }}>                                    
                                </p>
                            </div>
                        )}

                        {/* Summary Bullet Content Section */}
                        {post.acf?.summary_bullet_content && (() => {
                            try {
                                const summaryBullets = JSON.parse(post.acf.summary_bullet_content);
                                return summaryBullets.length > 0 && (
                                    <div className="mb-8">
                                        <div className="space-y-6">
                                            {summaryBullets.map((item: any, index: number) => (
                                        <div key={index} className="flex gap-4">
                                            <span className="fs-18 font-semibold text-[#222222] flex-shrink-0">
                                                {index + 1}.
                                            </span>
                                            <div>
                                                <h4 className="fs-18 font-semibold text-[#222222] mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="fs-18 text-[#222222]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            } catch (error) {
                                console.error('Error parsing summary_bullet_content:', error);
                                return null;
                            }
                        })()}

                        {/* Best Practices Section */}
                        {post.acf?.best_practices && (
                            <div className="mb-8">
                                {/* <h3 className="fs-34 font-semibold mb-4">
                                    Best Practices
                                </h3> */}
                                <div 
                                     className="fs-18 text-[#222222] mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2"
                                    dangerouslySetInnerHTML={{ __html: post.acf.best_practices }}
                                />
                            </div>
                        )}

                        {/* Best Practices 8 Block Content Section */}
                        {post.acf?.best_practices_8_block_content && (() => {
                            try {
                                const bestPractices = JSON.parse(post.acf.best_practices_8_block_content);
                                return bestPractices.length > 0 && (
                                    <div className="mb-8">
                                        <div className="space-y-8">
                                            {bestPractices.map((block: any, index: number) => (
                                        <div key={index} className="flex gap-4">
                                            <span className="fs-18 font-semibold text-[#222222] flex-shrink-0">
                                                {index + 1}.
                                            </span>
                                            <div className="flex-1">
                                                <h4 className="fs-18 font-semibold text-[#222222] mb-3">
                                                    {block.title}
                                                </h4>
                                                <p className="fs-18 text-[#222222] mb-4">
                                                    {block.description}
                                                </p>
                                                {block.best_practices && block.best_practices.length > 0 && (
                                                    <div>
                                                        <p className="fs-18 font-semibold text-[#222222] mb-3">
                                                            Best Practices:
                                                        </p>
                                                         <ul className="space-y-2">
                                                            {block.best_practices.map((practice: any, practiceIndex: number) => (
                                                                <li key={practiceIndex} className="flex gap-3">
                                                                    <span className="text-[#427AE0] flex-shrink-0 mt-1">●</span>
                                                                    <span className="fs-18 text-[#222222]">
                                                                        <strong>{practice.title}:</strong> {practice.description}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            } catch (error) {
                                console.error('Error parsing best_practices_8_block_content:', error);
                                return null;
                            }
                        })()}
                      </div>
                     </div> 
                        {/* Conclusion Section */}
                        {post.acf?.conclusion && (
                            <div className="bg-[#ffffff] py-8">
                                <div className="max-w-6xl page-container">
                                <h3 className="fs-34 font-semibold mb-4">
                                    Conclusion
                                </h3>
                                <p className="fs-18 text-[#222222] mb-5 whitespace-pre-line">
                                    {stripHtml((post.acf.conclusion))}
                                </p>

                                {/* Social Share */}
                                <SocialShare 
                                    url={pageUrl}
                                    title={pageTitle}
                                    description={pageDescription}
                                />
                                </div>
                            </div>
                        )}                     
            </section>

            {/* Insights Section */}
            <div className="pb-12 md:-mt-[var(--size-95)] mt-[20px]">
              <Insights pageurl={"blog"} />
            </div>

            {/* Footer */}
        </div>
    );
};

export default BlogDynamicPost;