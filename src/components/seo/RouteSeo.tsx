import { useLocation } from "react-router-dom";
import SeoHead from "./SeoHead";
import { seoConfig } from "@/seo/seoConfig";

/**
 * Mounted once inside <BrowserRouter>. Reads useLocation() and renders
 * the matching <SeoHead /> entry from seoConfig.
 *
 * For dynamic routes (e.g. /insights/blog/:id), the page itself can keep
 * rendering its own DynamicMetaTags / Helmet — no entry exists here, so
 * RouteSeo renders nothing and yields control.
 */
const RouteSeo = () => {
  const { pathname } = useLocation();
  // Normalize trailing slash — seoConfig keys have no trailing slash (except "/")
  const key = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  if (!seoConfig[key]) return null;
  return <SeoHead route={key} />;
};

export default RouteSeo;
