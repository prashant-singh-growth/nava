import { Helmet } from "react-helmet-async";
import { canonicalFor, seoConfig, SITE_ORIGIN, type SeoEntry } from "@/seo/seoConfig";

interface SeoHeadProps {
  /** Route key matching seoConfig (e.g. "/services/aws-solutions"). */
  route: string;
  /** Optional override — falls back to seoConfig[route]. */
  override?: Partial<SeoEntry>;
}

/**
 * Single source of SEO truth per page.
 *
 * Renders:
 *   - <title> + <meta name="description">
 *   - canonical link
 *   - Open Graph (og:*) + Twitter card meta
 *   - BreadcrumbList JSON-LD (per-route)
 *
 * react-helmet-async dedupes by (tagName, identifying-attr) — this means
 * <SeoHead /> overrides any prior Helmet block on the same page.
 */
const SeoHead = ({ route, override }: SeoHeadProps) => {
  const base = seoConfig[route];
  if (!base) {
    if (import.meta.env?.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[SeoHead] No seoConfig entry for route "${route}"`);
    }
    return null;
  }

  const entry: SeoEntry = { ...base, ...override };
  const canonical = canonicalFor(route);
  const ogType = entry.ogType ?? "website";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: entry.breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };

  return (
    <Helmet>
      <title>{entry.title}</title>
      <meta name="description" content={entry.description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="NAVA Software Solutions" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={entry.title} />
      <meta property="og:description" content={entry.description} />
      <meta property="og:image" content={entry.ogImage} />
      <meta property="og:image:secure_url" content={entry.ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={entry.title} />
      <meta name="twitter:description" content={entry.description} />
      <meta name="twitter:image" content={entry.ogImage} />

      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
    </Helmet>
  );
};

export default SeoHead;
export { SITE_ORIGIN };
