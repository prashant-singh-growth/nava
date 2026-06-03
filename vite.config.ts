import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import svgr from "vite-plugin-svgr";
import { compression } from "vite-plugin-compression2";
import prerenderSeoPlugin from "./scripts/prerenderSeo";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    svgr(),
    mode === "development" && componentTagger(),
    // Pre-compress assets so static hosts can serve .br/.gz directly,
    // reducing CSS/JS transfer size on the critical path.
    mode !== "development" && compression({ algorithms: ["brotliCompress"], exclude: [/\.(br|gz)$/] }),
    mode !== "development" && compression({ algorithms: ["gzip"], exclude: [/\.(br|gz)$/] }),
    // Post-build: write per-route static HTML files with correct SEO tags
    // so crawlers + link-preview bots see the right meta on View Source.
    mode !== "development" && prerenderSeoPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-carousel": ["react-multi-carousel"],
          "vendor-helmet": ["react-helmet-async"],
        },
      },
    },
  },
  // Ensure meta tags are properly rendered in build
  ssr: {
    noExternal: ['react-helmet-async'],
  },
}));
