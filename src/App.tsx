import React, { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // eager: home is the LCP page
import ScrollToTop from "./components/ui/scroll-to-top";
import Header from "./components/ui/NavHeader/Header";
import Footer from "./components/ui/Footer/Footer";
import RouteSeo from "./components/seo/RouteSeo";
import TrailingSlashRedirect from "./components/seo/TrailingSlashRedirect";
import LegacyRedirect from "./components/seo/LegacyRedirect";
import { routeImporters, prefetchOnIdle } from "./lib/prefetch";

// Wrap each route's import thunk in React.lazy(). The thunks themselves live
// in src/lib/prefetch.ts so hover/focus prefetch in nav menus and idle prefetch
// share the same chunk identity (browser dedupes the request).
const Blog = lazy(() => import("./pages/blog.tsx"));
const lazyOf = (key: string) => lazy(routeImporters[key] as () => Promise<{ default: React.ComponentType<unknown> }>);

// Insights
const Insights = lazyOf("/insights");
// const Blog = lazyOf("/blog");
const BlogDynamicPost = lazyOf("/insights/blog");
const WhitePapersDynamicPost = lazyOf("/insights/whitepapers");
const CaseStudyDynamicPost = lazyOf("/insights/casestudies");
const NotFound = lazyOf("*");

// Strategy & Advisory
const StrategyAdvisory = lazyOf("/services/strategy-advisory");
const DigitalStrategy = lazyOf("/services/strategy-advisory/digital-strategy");
const TechAssessment = lazyOf("/services/strategy-advisory/tech-assessment");
const ChangeManagement = lazyOf("/services/strategy-advisory/change-management");
const RiskComplianceAdvisory = lazyOf("/services/strategy-advisory/risk-compliance-advisory");

// Transformation & Modernization
const TransformationModernization = lazyOf("/services/transformation-modernization");
const AgileProduct = lazyOf("/services/transformation-modernization/agile-product");
const AutomationProcess = lazyOf("/services/transformation-modernization/automation-process");
const CloudTransformation = lazyOf("/services/transformation-modernization/cloud-transformation");
const CustomerTransformation = lazyOf("/services/transformation-modernization/customer-transformation");
const DataModernization = lazyOf("/services/transformation-modernization/data-modernization");

// Product Engineering
const ProductEngineering = lazyOf("/services/product-engineering");
const AIModernization = lazyOf("/services/product-engineering/ai-modernization");
const DedicatedTeams = lazyOf("/services/product-engineering/dedicated-teams");
const EndToEnd = lazyOf("/services/product-engineering/end-to-end");
const ProductSustenance = lazyOf("/services/product-engineering/product-sustenance");
const QualityEngineering = lazyOf("/services/product-engineering/quality-engineering");

// Cloud & Data
const CloudDataSolutions = lazyOf("/services/cloud-data-solutions");
const CloudArchitecture = lazyOf("/services/cloud-data-solutions/cloud-architecture");
const DataPlatforms = lazyOf("/services/cloud-data-solutions/data-platforms");
const Observability = lazyOf("/services/cloud-data-solutions/observability");

// Engagement Models (hidden but routes preserved)
const EngagementModels = lazyOf("/services/engagement-models");
const Bot = lazyOf("/services/engagement-models/bot");
const Pod = lazyOf("/services/engagement-models/pod");
const HybridModel = lazyOf("/services/engagement-models/hybrid-model");
const GCC = lazyOf("/services/engagement-models/gcc");

// AWS Solutions
const AWSSolutions = lazyOf("/services/aws-solutions");
const AWSData = lazyOf("/services/aws-solutions/aws-data-analytics");
const AWSGenAI = lazyOf("/services/aws-solutions/aws-genai");
const AWSMigration = lazyOf("/services/aws-solutions/aws-migration");
const AWSMachineLearning = lazyOf("/services/aws-solutions/aws-machine-learning");

// Vision AI
const VisionAISolutions = lazyOf("/vision-ai");
const UseCases = lazyOf("/vision-ai/use-cases");
const EdgeIntelligence = lazyOf("/vision-ai/edge-intelligence");

// Outbound campaign landing pages (hidden from nav, direct URL only)
const IndustrialSafetyLanding = lazyOf("/vision-ai-industrial-safety");
const DockOperationsLanding = lazyOf("/vision-ai-dock-operations");
const PrivacySecurity = lazyOf("/vision-ai/privacy-security");
const AWSMarketplace = lazyOf("/vision-ai/aws-marketplace");
const DemoCenter = lazyOf("/vision-ai/demo-center");
const ZeroCostPoC = lazyOf("/vision-ai/zero-cost-poc");

// Industries
const OilGas = lazyOf("/industries/oil-gas");
const EnergyUtility = lazyOf("/industries/energy-utility");
const SupplyChainLogistics = lazyOf("/industries/supply-chain-logistics");
const Manufacturing = lazyOf("/industries/manufacturing");

// Corporate
const AboutUs = lazyOf("/corporate/about-us");
const MeetTheTeam = lazyOf("/corporate/meet-the-team");
const CSR = lazyOf("/corporate/csr");
const Careers = lazyOf("/corporate/careers");
const CareersJobPosting = lazyOf("/corporate/careers-jobposting");
const ContactUs = lazyOf("/contact-us");
const Disclaimer = lazyOf("/disclaimer");
const PrivacyPolicy = lazyOf("/privacy-policy");

/**
 * Route fallback shown ONLY during chunk fetch (typically <300ms on 4G,
 * <50ms after hover-prefetch warms the cache).
 *
 * Renders a header-shaped strip + body skeleton instead of pure white so
 * the navigation feels instantaneous and avoids a "blank screen" flash.
 * No Header/Footer import here — keeps the initial JS bundle small.
 */
const RouteFallback = () => (
  <div aria-busy="true" aria-label="Loading page" style={{ minHeight: "100vh", background: "#ffffff" }}>
    {/* Header-shaped strip */}
    <div style={{ height: "88px", background: "#002467", width: "100%" }} />
    {/* Body skeleton */}
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>
      <div
        style={{
          height: "48px",
          width: "60%",
          background: "linear-gradient(90deg, #eef2f7 25%, #f7f9fc 37%, #eef2f7 63%)",
          backgroundSize: "400% 100%",
          borderRadius: "8px",
          animation: "route-skeleton-shimmer 1.4s ease infinite",
          marginBottom: "16px",
        }}
      />
      <div
        style={{
          height: "20px",
          width: "85%",
          background: "linear-gradient(90deg, #eef2f7 25%, #f7f9fc 37%, #eef2f7 63%)",
          backgroundSize: "400% 100%",
          borderRadius: "6px",
          animation: "route-skeleton-shimmer 1.4s ease infinite",
          marginBottom: "12px",
        }}
      />
      <div
        style={{
          height: "20px",
          width: "70%",
          background: "linear-gradient(90deg, #eef2f7 25%, #f7f9fc 37%, #eef2f7 63%)",
          backgroundSize: "400% 100%",
          borderRadius: "6px",
          animation: "route-skeleton-shimmer 1.4s ease infinite",
        }}
      />
    </div>
    <style>{`@keyframes route-skeleton-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}`}</style>
  </div>
);

const App = () => {
  // Warm likely-next route chunks once, after the home page mounts.
  // Runs during browser idle so it never competes with first paint.
  useEffect(() => {
    prefetchOnIdle();
  }, []);

  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrailingSlashRedirect />
        <ScrollToTop />
        <RouteSeo />
        {/* Mounted ONCE for the lifetime of the app — preserves state, avoids
            re-fetch of logo/icons and re-init of nav menus on navigation.
            Header itself is route-aware via useLocation (color/logo per route). */}
        <Header />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDynamicPost />} />
            <Route path="/insights/whitepapers/:id" element={<WhitePapersDynamicPost />} />
            <Route path="/insights/casestudies/:id" element={<CaseStudyDynamicPost />} />

            <Route path="/services/strategy-advisory" element={<StrategyAdvisory />} />
            <Route path="/services/strategy-advisory/risk-compliance-advisory" element={<RiskComplianceAdvisory />} />
            <Route path="/services/strategy-advisory/digital-strategy" element={<DigitalStrategy />} />
            <Route path="/services/strategy-advisory/tech-assessment" element={<TechAssessment />} />
            <Route path="/services/strategy-advisory/change-management" element={<ChangeManagement />} />

            <Route path="/services/transformation-modernization" element={<TransformationModernization />} />
            <Route path="/services/transformation-modernization/agile-product" element={<AgileProduct />} />
            <Route path="/services/transformation-modernization/automation-process" element={<AutomationProcess />} />
            <Route path="/services/transformation-modernization/cloud-transformation" element={<CloudTransformation />} />
            <Route
              path="/services/transformation-modernization/customer-transformation"
              element={<CustomerTransformation />}
            />
            <Route path="/services/transformation-modernization/data-modernization" element={<DataModernization />} />

            <Route path="/services/product-engineering" element={<ProductEngineering />} />
            <Route path="/services/product-engineering/ai-modernization" element={<AIModernization />} />
            <Route path="/services/product-engineering/dedicated-teams" element={<DedicatedTeams />} />
            <Route path="/services/product-engineering/end-to-end" element={<EndToEnd />} />
            <Route path="/services/product-engineering/product-sustenance" element={<ProductSustenance />} />
            <Route path="/services/product-engineering/quality-engineering" element={<QualityEngineering />} />

            <Route path="/services/cloud-data-solutions" element={<CloudDataSolutions />} />
            <Route path="/services/cloud-data-solutions/cloud-architecture" element={<CloudArchitecture />} />
            <Route path="/services/cloud-data-solutions/data-platforms" element={<DataPlatforms />} />
            <Route path="/services/cloud-data-solutions/observability" element={<Observability />} />

            <Route path="/services/engagement-models" element={<EngagementModels />} />
            <Route path="/services/engagement-models/bot" element={<Bot />} />
            <Route path="/services/engagement-models/pod" element={<Pod />} />
            <Route path="/services/engagement-models/hybrid-model" element={<HybridModel />} />
            <Route path="/services/engagement-models/gcc" element={<GCC />} />

            <Route path="/services/aws-solutions" element={<AWSSolutions />} />
            <Route path="/services/aws-solutions/aws-data-analytics" element={<AWSData />} />
            <Route path="/services/aws-solutions/aws-genai" element={<AWSGenAI />} />
            <Route path="/services/aws-solutions/aws-migration" element={<AWSMigration />} />
            <Route path="/services/aws-solutions/aws-machine-learning" element={<AWSMachineLearning />} />

            <Route path="/vision-ai" element={<VisionAISolutions />} />
            <Route path="/vision-ai/use-cases" element={<UseCases />} />
            <Route path="/vision-ai/edge-intelligence" element={<EdgeIntelligence />} />
            <Route path="/vision-ai/privacy-security" element={<PrivacySecurity />} />
            <Route path="/vision-ai/aws-marketplace" element={<AWSMarketplace />} />
            <Route path="/vision-ai/demo-center" element={<DemoCenter />} />
            <Route path="/vision-ai/zero-cost-poc" element={<ZeroCostPoC />} />

            {/* Outbound campaign landing pages (intentionally NOT in nav menus) */}
            <Route path="/vision-ai-industrial-safety" element={<IndustrialSafetyLanding />} />
            <Route path="/vision-ai-dock-operations" element={<DockOperationsLanding />} />

            <Route path="/industries/oil-gas" element={<OilGas />} />
            <Route path="/industries/energy-utility" element={<EnergyUtility />} />
            <Route path="/industries/supply-chain-logistics" element={<SupplyChainLogistics />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/corporate/about-us" element={<AboutUs />} />
            <Route path="/corporate/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/corporate/csr" element={<CSR />} />
            <Route path="/corporate/careers" element={<Careers />} />
            <Route path="/corporate/careers-jobposting" element={<CareersJobPosting />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Legacy WordPress URL redirects (301-style, client-side) */}
            <Route path="/current-openings" element={<LegacyRedirect to="/corporate/careers" />} />
            <Route path="/openings" element={<LegacyRedirect to="/corporate/careers" />} />
            <Route path="/staffing" element={<LegacyRedirect to="/services/product-engineering/dedicated-teams" />} />
            <Route path="/leadership-team" element={<LegacyRedirect to="/corporate/meet-the-team" />} />
            <Route path="/corporate-social-responsibility" element={<LegacyRedirect to="/corporate/csr" />} />
            <Route path="/faqs" element={<LegacyRedirect to="/contact-us" />} />
            <Route path="/blog/*" element={<LegacyRedirect to="/insights" />} />
            <Route path="/category/blog/*" element={<LegacyRedirect to="/insights" />} />
            <Route path="/category/*" element={<LegacyRedirect to="/insights" />} />
            <Route path="/portfolio/*" element={<LegacyRedirect to="/insights" />} />
            <Route path="/portfolio-category/*" element={<LegacyRedirect to="/insights" />} />
            <Route path="/work" element={<LegacyRedirect to="/insights" />} />
            <Route path="/industries/bio-technology" element={<LegacyRedirect to="/" />} />
            <Route path="/nearshore" element={<LegacyRedirect to="/" />} />
            <Route path="/onshore" element={<LegacyRedirect to="/" />} />
            <Route path="/offshore" element={<LegacyRedirect to="/" />} />
            <Route path="/about-us" element={<LegacyRedirect to="/corporate/about-us" />} />
            <Route path="/industries/ports-terminals" element={<LegacyRedirect to="/" />} />
            <Route path="/training-and-recruitment" element={<LegacyRedirect to="/services/engagement-models/gcc" />} />
            <Route path="/press-release-aws-advanced-partnership" element={<LegacyRedirect to="/" />} />
            <Route path="/blogs" element={<LegacyRedirect to="/insights" />} />
            <Route path="/aws-services" element={<LegacyRedirect to="/services/aws-solutions" />} />
            <Route path="/services" element={<LegacyRedirect to="/" />} />
            <Route path="/Services" element={<LegacyRedirect to="/" />} />
            <Route path="/industries" element={<LegacyRedirect to="/" />} />
            <Route path="/Industries" element={<LegacyRedirect to="/" />} />
            <Route path="/industries/biotechnology" element={<LegacyRedirect to="/" />} />
            <Route path="/industries/fintech" element={<LegacyRedirect to="/" />} />
            <Route path="/industries/healthcare" element={<LegacyRedirect to="/" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* Footer also mounted once. */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
