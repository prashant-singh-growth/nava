import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import patharrowicon from "../assets/Icons/path-arrow-icon.webp";
import bluearrow from "../assets/Icons/blue-right-arrow.svg";
import hoverArrow from "../assets/Icons/hover-blue-right-arrow.svg";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { fetchPosts } from "@/utils/apiUtils";
import { Helmet } from "react-helmet-async";
interface WordPressPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    featured_image: string;
    categories : { name: string; id: number };
    author : string
    acf?: {
        intro_section_title?: string;
        intro_section_description?: string;
        summary_title?: string;
        summary_description?: string;
        best_practices?: string;
        conclusion?: string;
    };
}

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState("Blog");
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [allPosts, setAllPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<{id: number, name: string}[]>([]);
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    const navigate = useNavigate();

    const POSTS_PER_PAGE = 6;

    useEffect(() => {
        fetchAllPosts();
    }, []);

    // Restore scroll position when returning from detail page
    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('insightsScrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition));
            sessionStorage.removeItem('insightsScrollPosition');
        }
    }, []);

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        if (categoryParam && categoryParam !== activeFilter) {
            setActiveFilter(categoryParam);
            handleCategoryFilter(categoryParam);
        }
    }, [searchParams]);

    const fetchAllPosts = async () => {
        try {
            setLoading(true);
            const data = await fetchPosts(`/posts?per_page=100&_fields=id,title,excerpt,featured_image,categories,slug`);
            setAllPosts(data);
            
            // Extract unique categories from all posts
            const uniqueCategories = new Map();
            data.forEach((post: WordPressPost) => {
                if (post.categories[0].name) {
                    const term = post.categories[0];
                    uniqueCategories.set(term.id, term);
                }
            });
            
            const desiredOrder = ["blog", "white papers", "case studies"];
            const sortedCategories = Array.from(uniqueCategories.values())
                .filter(cat => cat.name)
                .sort(
                    (a, b) => desiredOrder.indexOf(a.name.toLowerCase()) - desiredOrder.indexOf(b.name.toLowerCase())
                );

            setCategories(sortedCategories);
            
            // Apply initial filter from URL if present
            const categoryParam = "Blog";
            if (categoryParam) {
                const filteredPosts = data.filter(post => 
                    post?.categories[0]?.name === categoryParam
                );
                setPosts(filteredPosts);
            } else {
                setPosts(data);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryFilter = (categoryName: string) => {
        setActiveFilter(categoryName);
        setCurrentPage(1); // Reset to first page when filtering
        
        // Update URL params
        if (categoryName === "All") {
            searchParams.delete("category");
            searchParams.delete("page");
            setSearchParams(searchParams);
            setPosts(allPosts);
        } else {
            const newParams = new URLSearchParams();
            newParams.set("category", categoryName);
            setSearchParams(newParams);
            const filteredPosts = allPosts.filter(post => 
                post?.categories[0]?.name === categoryName
            );
            setPosts(filteredPosts);
        }
    };

    const handlePostClick = (post: WordPressPost) => {
        // Save current scroll position before navigating
        sessionStorage.setItem('insightsScrollPosition', window.scrollY.toString());
        
        const category = (post?.categories[0]?.name).replace(/\s+/g, "").toLowerCase() || 'uncategorized'
        // Preserve current URL state for back navigation
        navigate(`/blog/${post.slug}`, { 
            state: { 
                postId: post.id,
                returnTo: window.location.pathname + window.location.search
            } 
        });
    };

    const filters = ["All", ...categories.map(cat => cat.name)];

    const stripHtml = (html: string) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    // Pagination logic
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        
        // Update URL with current page
        const newParams = new URLSearchParams(searchParams);
        if (page === 1) {
            newParams.delete("page");
        } else {
            newParams.set("page", page.toString());
        }
        setSearchParams(newParams);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Helmet>
             <link rel="canonical" href="https://navasoftware.com/blog" />
            </Helmet>
            {/* Main Content */}
            <main className="page-container">
                {/* Breadcrumb */}
                <div className="mx-auto md:py-12 py-6">
                    <nav className="text-sm text-[#969696] flex">
                        <span className="hover:text-accent-blue cursor-pointer">
                        <Link to="/" className="hover:text-blue transition-colors">
                            Home
                        </Link>
                        </span>
                        <span className="mx-2">
                            {" "}
                            <img src={patharrowicon} alt="" className="w-5 h-5" />{" "}
                        </span>
                        <span className="text-[#000000]">
                            Blog
                        </span>
                    </nav>
                </div>

                {/* Header Section */}
                <section className="insights-header-section border-b border-b-[#7070701f]">
                    <div className="container mx-auto px-0">
                        <p className="relative text-[#000000] text-lg font-normal mb-4 pb-4 inline-block">
                        Blog
                            <span className="absolute left-0 bottom-0 w-20 h-1 bg-[#0059FF] rounded-full"></span>
                        </p>

                        <h1 className="text-[#222222] fs-65 font-semibold mb-8 flex lg:flex-row flex-col lg:flex lg:items-end items-start gap-4 lg:gap-10">
Blogthat Inspire
                            <span className="text-sm fs-18 font-normal lg:max-w-[var(--size-600)] w-full mb-[var(--size-25)] leading-normal">
                                Explore expert perspectives, success stories,
                                and research-driven strategies shaping
                                the future of business and technology.
                            </span>
                        </h1>

                        {/* CTA Buttons Row */}
                        {/* <div className="flex flex-wrap gap-4 mb-7 max-[567px]:justify-center justify-start">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => handleCategoryFilter(filter)}
                                    className={`px-2 py-4 md:px-1 md:py-3 lg:px-2 lg:py-3 xl:px-3 xl:py-4 rounded-full fs-18 ${
                                        activeFilter === filter
                                            ? "bg-[#427AE0] text-white shadow-lg"
                                            : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-[#7070706c]"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div> */}
                        {/* <div
                            className="flex flex-wrap gap-4 sm:mb-7 mb-6 justify-start max-[567px]:flex-nowrap max-[567px]:overflow-x-auto max-[567px]:gap-2 max-[567px]:pb-2 max-[567px]:-mx-2 max-[567px]:px-2 scrollbar-hide"
                            >
                            {filters.map((filter) => (
                                <button
                                key={filter}
                                onClick={() => handleCategoryFilter(filter)}
                                className={`px-2 py-4 md:px-1 md:py-3 lg:px-2 lg:py-3 xl:px-3 xl:py-4 rounded-full fs-18 flex-shrink-0 ${
                                    activeFilter === filter
                                    ? "bg-[#427AE0] text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-[#7070706c]"
                                }`}
                                >
                                {filter}
                                </button>
                            ))}
                            </div> */}

                    </div>
                </section>

                {/* Cards Section */}
                <section className="py-7 pb-12">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#427AE0]"></div>
                            <p className="mt-4 text-gray-600">Loading insights...</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto relative">
                                {currentPosts.map((post, index) => (
                                    <div
                                        key={post.id}
                                        className="bg-white group rounded-3xl p-4 md:p-6 cursor-pointer flex flex-col"
                                        onClick={() => handlePostClick(post)}
                                    >
                                        {/* Image */}
                                        <div className="overflow-hidden rounded-xl mb-5">
                                            <img src={post.featured_image || '/placeholder.svg'}
                                                alt={stripHtml(post.title)}
                                                className="w-full h-[300px] md:h-[var(--size-350)] object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = '/placeholder.svg';
                                                }}
                                            />
                                        </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                        {/* Category */}
                                        <p className="text-sm text-[#00328E] mb-2 font-medium">
                                            {post?.categories[0]?.name || 'Uncategorized'}
                                        </p>

                                        {/* Title */}
                                        <h3 className="text-[#2B2B2B] fs-24 font-medium mb-5 transition-colors duration-300 group-hover:text-[#0089FF] line-clamp-2">
                                            {stripHtml(post.title)}
                                        </h3>

                                        {/* Description with 3-line limit */}
                                        <p className="text-[#2A2A2A] fs-18 leading-relaxed mb-7 line-clamp-3">
                                            {stripHtml(post.excerpt)}
                                        </p>
                                        </div>

                                        {/* Read More Button */}
                                        <button className="relative w-1/2 h-4 overflow-hidden">
                                            <img src={bluearrow} alt=""
                                                className="absolute inset-0 transition-all duration-300 ease-in-out 
                                                        group-hover:translate-x-full group-hover:opacity-0" />
                                            <img src={hoverArrow} alt=""
                                                className="absolute inset-0 -translate-x-full opacity-0 
                                                        transition-all duration-300 ease-in-out 
                                                        group-hover:translate-x-0 group-hover:opacity-100" />
                                        </button>
                                    </div>
                                </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-12 flex justify-center">
                                    <Pagination>
                                        <PaginationContent>
                                            {currentPage > 1 && (
                                                <PaginationItem>
                                                    <PaginationPrevious 
                                                        onClick={() => handlePageChange(currentPage - 1)}
                                                        className="cursor-pointer"
                                                    />
                                                </PaginationItem>
                                            )}
                                            
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                <PaginationItem key={page}>
                                                    <PaginationLink
                                                        onClick={() => handlePageChange(page)}
                                                        isActive={currentPage === page}
                                                        className="cursor-pointer"
                                                    >
                                                        {page}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            ))}
                                            
                                            {currentPage < totalPages && (
                                                <PaginationItem>
                                                    <PaginationNext 
                                                        onClick={() => handlePageChange(currentPage + 1)}
                                                        className="cursor-pointer"
                                                    />
                                                </PaginationItem>
                                            )}
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Blog;
