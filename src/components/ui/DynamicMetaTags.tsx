import { useEffect } from "react";

interface DynamicMetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
}

const DynamicMetaTags = ({ title, description, image, url, type = "article" }: DynamicMetaTagsProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} - NAVA Software Solutions`;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? "name" : "property";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Update or create link tags (e.g., canonical)
    const updateLinkTag = (rel: string, href: string) => {
      let linkEl = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!linkEl) {
        linkEl = document.createElement("link");
        linkEl.setAttribute("rel", rel);
        document.head.appendChild(linkEl);
      }
      linkEl.setAttribute("href", href);
    };

    // Basic meta tags
    updateMetaTag("description", description, true);

    // Open Graph tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:type", type);
    updateMetaTag("og:url", url);
    if (image) {
      updateMetaTag("og:image", image);
      updateMetaTag("og:image:secure_url", image);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:url", url, true);
    if (image) {
      updateMetaTag("twitter:image", image, true);
    }

    // Additional context
    updateMetaTag("og:site_name", "NAVA Software Solutions");
    updateMetaTag("og:locale", "en_US");

    // Canonical URL
    updateLinkTag("canonical", url);

    // Cleanup function to restore default title
    return () => {
      document.title = "NAVA Software Solutions - Vision AI, AWS & Product Engineering";
    };
  }, [title, description, image, url, type]);

  return null; // This component doesn't render anything
};

export default DynamicMetaTags;
