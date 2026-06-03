/**
 * Single source of truth for route → dynamic import thunk.
 *
 * Used by:
 *   - src/App.tsx          → wraps each thunk in React.lazy()
 *   - nav menu components  → call prefetchRoute(href) on hover/focus
 *   - App on mount         → calls prefetchOnIdle() to warm likely-next pages
 *
 * Each thunk is idempotent: the browser dedupes the chunk request, and Vite/Rollup
 * caches the resolved module. Calling prefetchRoute() repeatedly is free.
 */

export type RouteImporter = () => Promise<unknown>;

export const routeImporters: Record<string, RouteImporter> = {
  // Insights
  "/insights": () => import("../pages/Insights"),
  "/insights/blog": () => import("../pages/insights/BlogDynamicPost"),
  "/insights/whitepapers": () => import("../pages/insights/WhitePapersDynamicPost"),
  "/insights/casestudies": () => import("../pages/insights/CaseStudyDynamicPost"),

  // Strategy & Advisory
  "/services/strategy-advisory": () => import("../pages/services/StrategyAdvisory"),
  "/services/strategy-advisory/digital-strategy": () =>
    import("../pages/services/StrategyAdvisory/DigitalStrategy"),
  "/services/strategy-advisory/tech-assessment": () =>
    import("../pages/services/StrategyAdvisory/TechAssessment"),
  "/services/strategy-advisory/change-management": () =>
    import("../pages/services/StrategyAdvisory/ChangeManagement"),
  "/services/strategy-advisory/risk-compliance-advisory": () =>
    import("../pages/services/StrategyAdvisory/RiskComplianceAdvisory"),

  // Transformation & Modernization
  "/services/transformation-modernization": () => import("../pages/services/TransformationModernization"),
  "/services/transformation-modernization/agile-product": () =>
    import("../pages/services/TransformationModernization/AgileProduct"),
  "/services/transformation-modernization/automation-process": () =>
    import("../pages/services/TransformationModernization/AutomationProcess"),
  "/services/transformation-modernization/cloud-transformation": () =>
    import("../pages/services/TransformationModernization/CloudTransformation"),
  "/services/transformation-modernization/customer-transformation": () =>
    import("../pages/services/TransformationModernization/CustomerTransformation"),
  "/services/transformation-modernization/data-modernization": () =>
    import("../pages/services/TransformationModernization/DataModernization"),

  // Product Engineering
  "/services/product-engineering": () => import("../pages/services/ProductEngineering"),
  "/services/product-engineering/ai-modernization": () =>
    import("../pages/services/ProductEngineering/AIModernization"),
  "/services/product-engineering/dedicated-teams": () =>
    import("../pages/services/ProductEngineering/DedicatedTeams"),
  "/services/product-engineering/end-to-end": () =>
    import("../pages/services/ProductEngineering/EndToEnd"),
  "/services/product-engineering/product-sustenance": () =>
    import("../pages/services/ProductEngineering/ProductSustenance"),
  "/services/product-engineering/quality-engineering": () =>
    import("../pages/services/ProductEngineering/QualityEngineering"),

  // Cloud & Data
  "/services/cloud-data-solutions": () => import("../pages/services/CloudDataSolutions"),
  "/services/cloud-data-solutions/cloud-architecture": () =>
    import("../pages/services/CloudDataSolutions/CloudArchitecture"),
  "/services/cloud-data-solutions/data-platforms": () =>
    import("../pages/services/CloudDataSolutions/DataPlatforms"),
  "/services/cloud-data-solutions/observability": () =>
    import("../pages/services/CloudDataSolutions/Observability"),

  // Engagement Models (hidden nav, routes preserved)
  "/services/engagement-models": () => import("../pages/services/EngagementModels"),
  "/services/engagement-models/bot": () => import("../pages/services/EngagementModels/Bot"),
  "/services/engagement-models/pod": () => import("../pages/services/EngagementModels/Pod"),
  "/services/engagement-models/hybrid-model": () => import("../pages/services/EngagementModels/HybridModel"),
  "/services/engagement-models/gcc": () => import("../pages/services/EngagementModels/GCC"),

  // AWS Solutions
  "/services/aws-solutions": () => import("../pages/services/AWSSolutions"),
  "/services/aws-solutions/aws-data-analytics": () => import("../pages/services/AWSSolutions/AWSData"),
  "/services/aws-solutions/aws-genai": () => import("../pages/services/AWSSolutions/AWSGenAI"),
  "/services/aws-solutions/aws-migration": () => import("../pages/services/AWSSolutions/AWSMigration"),
  "/services/aws-solutions/aws-machine-learning": () =>
    import("../pages/services/AWSSolutions/AWSMachineLearning"),

  // Vision AI
  "/vision-ai": () => import("../pages/vision-ai/VisionAISolutions"),
  "/vision-ai/use-cases": () => import("../pages/vision-ai/UseCases"),
  "/vision-ai/edge-intelligence": () => import("../pages/vision-ai/EdgeIntelligence"),
  "/vision-ai/privacy-security": () => import("../pages/vision-ai/PrivacySecurity"),
  "/vision-ai/aws-marketplace": () => import("../pages/vision-ai/AWSMarketplace"),
  "/vision-ai/demo-center": () => import("../pages/vision-ai/DemoCenter"),
  "/vision-ai/zero-cost-poc": () => import("../pages/vision-ai/ZeroCostPoC"),

  // Outbound campaign landing pages (hidden from nav, direct URL only)
  "/vision-ai-industrial-safety": () => import("../pages/landing/IndustrialSafety"),
  "/vision-ai-dock-operations": () => import("../pages/landing/DockOperations"),



  // Industries
  "/industries/oil-gas": () => import("../pages/industries/OilGas"),
  "/industries/energy-utility": () => import("../pages/industries/EnergyUtility"),
  "/industries/supply-chain-logistics": () => import("../pages/industries/SupplyChainLogistics"),
  "/industries/manufacturing": () => import("../pages/industries/Manufacturing"),

  // Corporate
  "/corporate/about-us": () => import("../pages/corporate/AboutUs"),
  "/corporate/meet-the-team": () => import("../pages/corporate/MeetTheTeam"),
  "/corporate/csr": () => import("../pages/corporate/CSR"),
  "/corporate/careers": () => import("../pages/corporate/Careers"),
  "/corporate/careers-jobposting": () => import("../pages/corporate/CareersJobPosting"),
  "/contact-us": () => import("../pages/ContactUs"),
  "/disclaimer": () => import("../pages/Disclaimer"),
  "/privacy-policy": () => import("../pages/PrivacyPolicy"),

  // 404
  "*": () => import("../pages/NotFound"),
};

/**
 * Normalize a path so query strings and trailing slashes don't break the lookup.
 * Examples:
 *   "/insights?category=Blog" → "/insights"
 *   "/insights/blog/abc-123"  → "/insights/blog"
 *   "/services/aws-solutions/" → "/services/aws-solutions"
 */
function normalizePath(href: string): string {
  if (!href) return "";
  const noQuery = href.split("?")[0].split("#")[0];
  const noTrailing = noQuery.length > 1 && noQuery.endsWith("/") ? noQuery.slice(0, -1) : noQuery;

  // Direct hit
  if (routeImporters[noTrailing]) return noTrailing;

  // Match dynamic routes by stripping the last segment (e.g. /insights/blog/:id → /insights/blog)
  const segments = noTrailing.split("/");
  while (segments.length > 1) {
    segments.pop();
    const candidate = segments.join("/") || "/";
    if (routeImporters[candidate]) return candidate;
  }
  return "";
}

const inflight = new Set<string>();

/**
 * Kick off the chunk download for a route. Idempotent and silent on failure
 * (prefetch failures must never break the UI; the real navigation will retry).
 */
export function prefetchRoute(href: string): void {
  const key = normalizePath(href);
  if (!key || inflight.has(key)) return;
  const importer = routeImporters[key];
  if (!importer) return;
  inflight.add(key);
  importer().catch(() => {
    // Allow a retry on a future hover if the network blip clears
    inflight.delete(key);
  });
}

/**
 * Warm likely-next routes during browser idle time, after first paint.
 * Keep this list small — these chunks download in the background and
 * can compete with later user-initiated requests on slow networks.
 */
const IDLE_PREFETCH_ROUTES = [
  "/vision-ai",
  "/services/strategy-advisory",
  "/services/transformation-modernization",
  "/services/product-engineering",
  "/services/cloud-data-solutions",
  "/services/aws-solutions",
  "/insights",
  "/corporate/about-us",
  "/contact-us",
];

type IdleCb = (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void;
type WindowWithIdle = Window & {
  requestIdleCallback?: (cb: IdleCb, opts?: { timeout: number }) => number;
};

export function prefetchOnIdle(): void {
  if (typeof window === "undefined") return;
  const w = window as WindowWithIdle;
  const run = () => IDLE_PREFETCH_ROUTES.forEach(prefetchRoute);
  if (typeof w.requestIdleCallback === "function") {
    w.requestIdleCallback(run, { timeout: 4000 });
  } else {
    // Safari fallback — wait a bit so we don't fight initial render
    setTimeout(run, 2500);
  }
}
