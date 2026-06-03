/**
 * Post-build static SEO prerender.
 *
 * For every route in seoConfig, copies dist/index.html to dist/<route>/index.html
 * and rewrites the <head> tags so that View Source (and non-JS crawlers like
 * LinkedIn / Slack / Facebook / Twitter) see the correct per-page title,
 * description, canonical, OG/Twitter meta and BreadcrumbList JSON-LD.
 *
 * Runs as a Vite plugin in closeBundle so vite.config.ts can directly import
 * the TypeScript seoConfig — no separate build step or headless browser.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { seoConfig, canonicalFor, type SeoEntry } from "../src/seo/seoConfig";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildHead(route: string, entry: SeoEntry): string {
  const canonical = canonicalFor(route);
  const ogType = entry.ogType ?? "website";
  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: entry.breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  });

  return `
    <!-- prerendered SEO (per-route) -->
    <title>${escapeHtml(entry.title)}</title>
    <meta name="description" content="${escapeHtml(entry.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="NAVA Software Solutions" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(entry.title)}" />
    <meta property="og:description" content="${escapeHtml(entry.description)}" />
    <meta property="og:image" content="${escapeHtml(entry.ogImage)}" />
    <meta property="og:image:secure_url" content="${escapeHtml(entry.ogImage)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonical}" />
    <meta name="twitter:title" content="${escapeHtml(entry.title)}" />
    <meta name="twitter:description" content="${escapeHtml(entry.description)}" />
    <meta name="twitter:image" content="${escapeHtml(entry.ogImage)}" />
    <script type="application/ld+json">${breadcrumbJsonLd}</script>
    <!-- /prerendered SEO -->`;
}

/**
 * Strip the tags we're going to replace from the static index.html shell so
 * crawlers don't see two competing titles / descriptions / canonicals / OGs.
 */
function stripExistingHead(html: string): string {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "");
}

export default function prerenderSeoPlugin(): Plugin {
  return {
    name: "nava-prerender-seo",
    apply: "build",
    async closeBundle() {
      const distDir = path.resolve(process.cwd(), "dist");
      const indexPath = path.join(distDir, "index.html");

      let shell: string;
      try {
        shell = await fs.readFile(indexPath, "utf8");
      } catch {
        // No SPA build output (e.g. during library build) — nothing to do.
        return;
      }

      const stripped = stripExistingHead(shell);
      let count = 0;

      for (const [route, entry] of Object.entries(seoConfig)) {
        // Build new HTML by inserting the per-route head right before </head>.
        const headBlock = buildHead(route, entry);
        const html = stripped.replace("</head>", `${headBlock}\n  </head>`);

        if (route === "/") {
          // Home overwrites the shell.
          await fs.writeFile(indexPath, html, "utf8");
          count++;
        } else {
          const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
          // Write to BOTH locations so Lovable / Cloudflare static hosting
          // serves the right HTML regardless of how the URL is requested:
          //   dist/<route>/index.html  →  served for /<route>/index.html
          //   dist/<route>.html        →  served for /<route> and /<route>/
          //                                (before the SPA fallback to root).
          const dirIndexPath = path.join(distDir, clean, "index.html");
          const flatPath = path.join(distDir, `${clean}.html`);
          await fs.mkdir(path.dirname(dirIndexPath), { recursive: true });
          await fs.writeFile(dirIndexPath, html, "utf8");
          await fs.mkdir(path.dirname(flatPath), { recursive: true });
          await fs.writeFile(flatPath, html, "utf8");
          count++;
        }
      }

      // eslint-disable-next-line no-console
      console.log(`[nava-prerender-seo] Wrote ${count} prerendered HTML files to dist/`);
    },
  };
}
