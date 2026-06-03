// Script to generate meta tags for prerendering
import fs from 'fs';
import path from 'path';

const API_BASE = "https://api.navasoftware.com/wp-json/custom-rest-api/v1";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  featured_image?: string;
}

async function fetchAllPosts(endpoint: string): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}&t=${Date.now()}`);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching posts from ${endpoint}:`, error);
    return [];
  }
}

async function generatePrerenderedRoutes() {
  console.log('Fetching posts for prerendering...');
  
  const [blogs, caseStudies, whitepapers] = await Promise.all([
    fetchAllPosts('/posts?type=blog'),
    fetchAllPosts('/posts?type=case-studies'),
    fetchAllPosts('/posts?type=whitepapers')
  ]);

  const routes = [
    ...blogs.map(post => ({
      path: `/insights/blog/${post.slug}`,
      type: 'blog',
      data: post
    })),
    ...caseStudies.map(post => ({
      path: `/insights/case-study/${post.slug}`,
      type: 'case-study',
      data: post
    })),
    ...whitepapers.map(post => ({
      path: `/insights/whitepaper/${post.slug}`,
      type: 'whitepaper',
      data: post
    }))
  ];

  console.log(`Found ${routes.length} routes to prerender`);
  
  // Save routes configuration
  const outputPath = path.resolve(__dirname, '../dist/prerender-routes.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(routes, null, 2));
  
  return routes;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePrerenderedRoutes()
    .then(() => console.log('Prerender routes generated successfully'))
    .catch(error => console.error('Error generating routes:', error));
}

export { generatePrerenderedRoutes };
