/**
 * Centralized per-route SEO configuration.
 * Source: schema spec doc provided by client (32 routes).
 *
 * Used by <SeoHead /> to render Helmet tags + BreadcrumbList JSON-LD
 * for runtime + prerender output. Single source of truth — do not
 * duplicate these values in page components.
 */

export type Crumb = { name: string; url: string };

export interface SeoEntry {
  title: string;
  description: string;
  ogImage: string;
  ogType?: string;
  breadcrumbs: Crumb[];
}

export const SITE_ORIGIN = "https://navasoftware.com";

const HOME: Crumb = { name: "Home", url: `${SITE_ORIGIN}/` };

export const seoConfig: Record<string, SeoEntry> = {
  "/": {
    title: "NAVA Software | Vision AI, Cloud, Data & AWS Automation Solutions",
    description:
      "NAVA Software empowers logistics, manufacturing, warehousing & industrial enterprises with AWS-powered Vision AI, Computer Vision, Cloud, Data & GenAI solutions.",
    ogImage: `${SITE_ORIGIN}/assets/og-image.png`,
    ogType: "website",
    breadcrumbs: [HOME],
  },

  // ── Vision AI ──────────────────────────────────────────────────────────
  "/vision-ai": {
    title: "NAVA Software Solutions | Vision AI, Computer Vision & AWS-Powered Automation",
    description:
      "Transform existing cameras into real-time Vision AI intelligence. NAVA's AWS-powered computer vision solutions automate safety, dock, damage & yard ops. Available on AWS Marketplace.",
    ogImage: `${SITE_ORIGIN}/assets/vision-ai-solutions-bg-DM0SmNb5.png`,
    breadcrumbs: [HOME, { name: "Vision AI", url: `${SITE_ORIGIN}/vision-ai/` }],
  },
  "/vision-ai/edge-intelligence": {
    title: "Edge Intelligence for Real-Time Computer Vision | NAVA Software",
    description:
      "Deploy edge intelligence with AI computer vision for real-time object detection & zero latency. Runs on NVIDIA Jetson & custom hardware. Book a free PoC.",
    ogImage: `${SITE_ORIGIN}/assets/edge-pitfalls-card-CAQOLin6.png`,
    breadcrumbs: [HOME, { name: "Edge Intelligence", url: `${SITE_ORIGIN}/vision-ai/edge-intelligence/` }],
  },
  "/vision-ai/privacy-security": {
    title: "Privacy & Security - Enterprise Vision AI Security | NAVA Software",
    description:
      "NAVA's enterprise AI security solutions cover GDPR, SOC 2, ISO 27001 & HIPAA compliance - with zero-trust access, encrypted video pipelines & privacy-by-design.",
    ogImage: `${SITE_ORIGIN}/assets/privacy-security-bg-CKtrp79G.png`,
    breadcrumbs: [HOME, { name: "AI Security Solutions", url: `${SITE_ORIGIN}/vision-ai/privacy-security/` }],
  },

  // ── AWS Solutions ──────────────────────────────────────────────────────
  "/services/aws-solutions": {
    title: "AWS Solutions | Cloud, GenAI & Data Analytics | NAVA Software",
    description:
      "NAVA Software delivers AWS Solutions including GenAI, migration, ML and analytics. Clients achieve up to 40% cost reduction. Schedule your free POC today.",
    ogImage: `${SITE_ORIGIN}/assets/service-aws-card1-dr4Z0QVH.png`,
    breadcrumbs: [HOME, { name: "AWS Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/` }],
  },
  "/services/aws-solutions/aws-data-analytics": {
    title: "AWS Data & Analytics | GenAI Data Platforms | NAVA Software",
    description:
      "Transform data into insights with NAVA's AWS Data Analytics solutions. Proven architectures, Customer 360 and zero-cost POC. Get in touch with us today.",
    // Doc had URL accidentally pasted as og:image — using the matching local hero asset instead
    ogImage: `${SITE_ORIGIN}/assets/aws-data-bg.png`,
    breadcrumbs: [
      HOME,
      { name: "AWS Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/` },
      { name: "AWS Data Analytics", url: `${SITE_ORIGIN}/services/aws-solutions/aws-data-analytics/` },
    ],
  },
  "/services/aws-solutions/aws-genai": {
    title: "AWS GenAI Solutions | Amazon Bedrock & AI | NAVA Software",
    description:
      "NAVA Software, an AWS Advanced Partner, delivers GenAI solutions on Amazon Bedrock. Automate workflows & scale AI. Start with a free POC today.",
    ogImage: `${SITE_ORIGIN}/assets/aws-genai-bg-CCoNo-Jz.png`,
    breadcrumbs: [
      HOME,
      { name: "AWS Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/` },
      { name: "AWS GenAI Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/aws-genai/` },
    ],
  },
  "/services/aws-solutions/aws-migration": {
    title: "AWS VMware Migration | Cloud Migration | NAVA Software",
    description:
      "Migrate VMware workloads to AWS using Amazon EVS, DMS & AI tools. Proven frameworks, MAP funding backed by NAVA Software. Book your free consultation today.",
    ogImage: `${SITE_ORIGIN}/assets/aws-migrate-solution-bg-pWvWDu_o.png`,
    breadcrumbs: [
      HOME,
      { name: "AWS Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/` },
      { name: "AWS VMware Migration", url: `${SITE_ORIGIN}/services/aws-solutions/aws-migration/` },
    ],
  },
  "/services/aws-solutions/aws-machine-learning": {
    title: "AWS Machine Learning Solutions | SageMaker & MLOps | NAVA Software",
    description:
      "Build enterprise AWS Machine Learning solutions using SageMaker, MLOps & AutoML. From model training to deployment. Start your free POC today.",
    ogImage: `${SITE_ORIGIN}/assets/aws-ml-bg-BE_HiHJo.png`,
    breadcrumbs: [
      HOME,
      { name: "AWS Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/` },
      { name: "AWS Machine Learning Solutions", url: `${SITE_ORIGIN}/services/aws-solutions/aws-machine-learning/` },
    ],
  },

  // ── AI Product Engineering ─────────────────────────────────────────────
  "/services/product-engineering": {
    title: "Product Engineering | AI, Development & QA | NAVA Software",
    description:
      "End-to-end product engineering services powered by AI, agile development & test automation. From concept to launch. Book a free consultation today.",
    ogImage: `${SITE_ORIGIN}/assets/product-engg-bg-Cyig9a4H.png`,
    breadcrumbs: [HOME, { name: "AI Product Engineering", url: `${SITE_ORIGIN}/services/product-engineering/` }],
  },
  "/services/product-engineering/ai-modernization": {
    title: "AI Product Modernization | ML Solutions | NAVA Software",
    description:
      "Product modernization with AI, ML & predictive analytics. NAVA Software delivers personalized UX, automated workflows & cost reduction. Get started today.",
    ogImage: `${SITE_ORIGIN}/assets/ai-driven-bg-CVgk4JWM.png`,
    breadcrumbs: [
      HOME,
      { name: "AI Product Engineering", url: `${SITE_ORIGIN}/services/product-engineering/` },
      { name: "AI-Driven Product Modernization", url: `${SITE_ORIGIN}/services/product-engineering/ai-modernization/` },
    ],
  },
  "/services/product-engineering/end-to-end": {
    title: "End-to-End Product Development | Concept to Launch | NAVA Software",
    description:
      "From ideation to launch, end-to-end product development with NAVA Software delivers agile sprints, AI optimization & test automation. Book free consultation.",
    ogImage: `${SITE_ORIGIN}/assets/end-end-development-bg-DgEHuSbV.png`,
    breadcrumbs: [
      HOME,
      { name: "AI Product Engineering", url: `${SITE_ORIGIN}/services/product-engineering/` },
      { name: "End-to-End Product Development", url: `${SITE_ORIGIN}/services/product-engineering/end-to-end/` },
    ],
  },
  "/services/product-engineering/dedicated-teams": {
    title: "Embedded Teams | Dedicated Engineering Teams | NAVA Software",
    description:
      "Get tailored embedded teams that integrate with your workflows. Delivering dedicated engineering expertise & agile scaling. Let's talk today.",
    ogImage: `${SITE_ORIGIN}/assets/embedded-teams-bg-CftbyDan.png`,
    breadcrumbs: [
      HOME,
      { name: "AI Product Engineering", url: `${SITE_ORIGIN}/services/product-engineering/` },
      { name: "Embedded Teams", url: `${SITE_ORIGIN}/services/product-engineering/dedicated-teams/` },
    ],
  },

  // ── Cloud & Data Solutions ─────────────────────────────────────────────
  "/services/cloud-data-solutions": {
    title: "Cloud & Data Solutions | DevOps & Observability | NAVA Software",
    description:
      "Scale smarter with cloud data solutions. NAVA Software delivers cloud-native architecture, data lakehouse, DevOps & FinOps optimization. Get started today.",
    ogImage: `${SITE_ORIGIN}/assets/cloud-card-1-ZOuvIktF.png`,
    breadcrumbs: [HOME, { name: "Cloud Data Solutions", url: `${SITE_ORIGIN}/services/cloud-data-solutions/` }],
  },
  "/services/cloud-data-solutions/cloud-architecture": {
    title: "Cloud Architecture & DevOps | Scalable Infrastructure | NAVA Software",
    description:
      "Build scalable cloud architecture with DevOps, IaC & CI/CD pipelines. Secure, cost-optimized infrastructure & automation for faster innovation. Start today.",
    ogImage: `${SITE_ORIGIN}/assets/cloud-devops-bg-DSyNG5no.png`,
    breadcrumbs: [
      HOME,
      { name: "Cloud Data Solutions", url: `${SITE_ORIGIN}/services/cloud-data-solutions/` },
      { name: "Cloud Architecture & DevOps", url: `${SITE_ORIGIN}/services/cloud-data-solutions/cloud-architecture/` },
    ],
  },
  "/services/cloud-data-solutions/data-platforms": {
    title: "Data Platforms, Lakehouse & Pipelines | NAVA Software",
    description:
      "Build unified data platforms with cloud-native lakehouse, automated ETL pipelines & governed analytics. Built on AWS, Azure & GCP. Talk to us today.",
    ogImage: `${SITE_ORIGIN}/assets/data-pipelines-bg-DRskT7jt.png`,
    breadcrumbs: [
      HOME,
      { name: "Cloud Data Solutions", url: `${SITE_ORIGIN}/services/cloud-data-solutions/` },
      { name: "Data Platforms, Lakehouse & Pipelines", url: `${SITE_ORIGIN}/services/cloud-data-solutions/data-platforms/` },
    ],
  },
  "/services/cloud-data-solutions/observability": {
    title: "Cloud Observability, Security & Cost Optimization | NAVA Software",
    description:
      "Achieve full cloud observability with real-time monitoring, automated threat detection & FinOps cost optimization. HIPAA, SOC2 & GDPR compliant. Start today.",
    ogImage: `${SITE_ORIGIN}/assets/observability-cost-bg-D3ozlOMO.png`,
    breadcrumbs: [
      HOME,
      { name: "Cloud Data Solutions", url: `${SITE_ORIGIN}/services/cloud-data-solutions/` },
      { name: "Cloud Observability, Security & Cost Optimization", url: `${SITE_ORIGIN}/services/cloud-data-solutions/observability/` },
    ],
  },

  // ── Strategy & Advisory ────────────────────────────────────────────────
  "/services/strategy-advisory": {
    title: "Strategy & Advisory - Digital Transformation | NAVA Software",
    description:
      "Enterprise strategy & advisory for AI, cloud & digital transformation. Covering risk governance, compliance & change management. Book a free consultation today.",
    ogImage: `${SITE_ORIGIN}/assets/strategy-bg-C6enq6Rz.webp`,
    breadcrumbs: [HOME, { name: "Strategy and Advisory", url: `${SITE_ORIGIN}/services/strategy-advisory/` }],
  },
  "/services/strategy-advisory/digital-strategy": {
    title: "Digital Strategy & Roadmap - AI Planning | NAVA Software",
    description:
      "A digital strategy & roadmap aligned with business goals. AI planning, KPI-driven execution & cloud-ready architecture for measurable ROI. Talk to us today.",
    ogImage: `${SITE_ORIGIN}/assets/digital-strategy-bg-P22x8Y0g.webp`,
    breadcrumbs: [
      HOME,
      { name: "Strategy and Advisory", url: `${SITE_ORIGIN}/services/strategy-advisory/` },
      { name: "Digital Strategy", url: `${SITE_ORIGIN}/services/strategy-advisory/digital-strategy/` },
    ],
  },
  "/services/strategy-advisory/tech-assessment": {
    title: "Technology Assessment & Advisory - ROI Analysis | NAVA Software",
    description:
      "Future-proof IT with technology assessment & advisory. Reduce technical debt, maximize ROI & cover vendor, security & compliance review. Schedule a discovery call.",
    ogImage: `${SITE_ORIGIN}/assets/tech-assessment-bg-BL86uuPS.webp`,
    breadcrumbs: [
      HOME,
      { name: "Strategy and Advisory", url: `${SITE_ORIGIN}/services/strategy-advisory/` },
      { name: "Technology Assessment", url: `${SITE_ORIGIN}/services/strategy-advisory/tech-assessment/` },
    ],
  },
  "/services/strategy-advisory/risk-compliance-advisory": {
    title: "Risk & Compliance Advisory - Security Governance | NAVA Software",
    description:
      "Risk & compliance advisory covering GDPR, HIPAA, SOC2 & PCI-DSS. Proactive governance & security frameworks for audit-ready enterprises. Talk to us today.",
    ogImage: `${SITE_ORIGIN}/assets/risk-advisory-bg-Da-7cuen.webp`,
    breadcrumbs: [
      HOME,
      { name: "Strategy and Advisory", url: `${SITE_ORIGIN}/services/strategy-advisory/` },
      { name: "Risk and Compliance Advisory", url: `${SITE_ORIGIN}/services/strategy-advisory/risk-compliance-advisory/` },
    ],
  },
  "/services/strategy-advisory/change-management": {
    title: "Change Management & Training - NAVA Software",
    description:
      "70% of transformations fail due to poor adoption. NAVA Software's change management & training drives readiness & role-based learning. Request a free POC today.",
    ogImage: `${SITE_ORIGIN}/assets/change-training-bg-CFf3-ZPw.webp`,
    breadcrumbs: [
      HOME,
      { name: "Strategy and Advisory", url: `${SITE_ORIGIN}/services/strategy-advisory/` },
      { name: "Change Management & Training", url: `${SITE_ORIGIN}/services/strategy-advisory/change-management/` },
    ],
  },

  // ── Industries ─────────────────────────────────────────────────────────
  "/industries/supply-chain-logistics": {
    title: "Supply Chain & Logistics Solutions - NAVA Software",
    description:
      "Supply chain & logistics solutions powered by Computer Vision, AI agents & predictive analytics. Optimize routes, inventory & warehouse ops. Talk to us today.",
    ogImage: `${SITE_ORIGIN}/assets/supply-accordian3-DG3UXkXH.webp`,
    breadcrumbs: [HOME, { name: "Supply Chain and Logistics", url: `${SITE_ORIGIN}/industries/supply-chain-logistics/` }],
  },
  "/industries/manufacturing": {
    title: "Manufacturing Solutions - NAVA Software",
    description:
      "NAVA Software empowers manufacturers with Computer Vision & AI agents. Improve manufacturing efficiency, quality control & reduce downtime. Talk to us today.",
    ogImage: `${SITE_ORIGIN}/assets/manufacturing-bg-DAAQynkO.webp`,
    breadcrumbs: [HOME, { name: "Manufacturing", url: `${SITE_ORIGIN}/industries/manufacturing/` }],
  },
  "/industries/oil-gas": {
    title: "Oil & Gas Solutions - NAVA Software",
    description:
      "Optimize oil and gas operations with Computer Vision & predictive maintenance. NAVA Software improves asset reliability & compliance. Partner with us today.",
    ogImage: `${SITE_ORIGIN}/assets/oil-gas-bg-Bv0cMniJ.webp`,
    breadcrumbs: [HOME, { name: "Oil and Gas", url: `${SITE_ORIGIN}/industries/oil-gas/` }],
  },
  "/industries/energy-utility": {
    title: "Energy & Utility Solutions - NAVA Software",
    description:
      "Powering energy and utility companies with IoT monitoring, predictive maintenance & automation. Improve reliability & compliance. Book a free consultation.",
    ogImage: `${SITE_ORIGIN}/assets/energy-utility-bg-B8jSIVrG.webp`,
    breadcrumbs: [HOME, { name: "Energy and Utility", url: `${SITE_ORIGIN}/industries/energy-utility/` }],
  },

  // ── Insights ───────────────────────────────────────────────────────────
  "/insights": {
    title: "Insights - Blogs, Cases & White Papers | NAVA Software",
    description:
      "Explore NAVA Software's blogs, case studies & white papers on AI, Vision AI, cloud & intelligent automation. Expert insights for technology leaders.",
    ogImage:
      "https://api.navasoftware.com/wp-content/uploads/2025/10/futuristic-technology-concept_23-2151908129.png",
    breadcrumbs: [HOME, { name: "Insights", url: `${SITE_ORIGIN}/insights/` }],
  },

  // ── Corporate ──────────────────────────────────────────────────────────
  "/corporate/about-us": {
    title: "About Us - IT Services & Technology Partner | NAVA Software",
    description:
      "NAVA Software is a trusted technology partner driving digital transformation, AI, cloud & product engineering across industries. Explore who we are.",
    ogImage: `${SITE_ORIGIN}/assets/about-us-bg-CHJ6xF8Y.webp`,
    breadcrumbs: [HOME, { name: "About Us", url: `${SITE_ORIGIN}/corporate/about-us/` }],
  },
  "/corporate/meet-the-team": {
    title: "Meet Our Leadership Team | NAVA Software",
    description:
      "Meet the leadership team behind NAVA Software. Experienced executives driving Vision AI, cloud & digital transformation. Explore the people behind NAVA.",
    ogImage: `${SITE_ORIGIN}/assets/Rakesh-N4BY_vYA.webp`,
    breadcrumbs: [HOME, { name: "Meet Our Leadership Team", url: `${SITE_ORIGIN}/corporate/meet-the-team/` }],
  },
  "/corporate/csr": {
    title: "Corporate Social Responsibility - NAVA Software",
    description:
      "NAVA Software's CSR focuses on education, youth empowerment & student scholarships. Committed to building stronger, inclusive communities. Learn more.",
    ogImage: `${SITE_ORIGIN}/assets/csr-banner-B3_jTeX0.webp`,
    breadcrumbs: [HOME, { name: "Corporate Social Responsibility", url: `${SITE_ORIGIN}/corporate/csr/` }],
  },
  "/corporate/careers": {
    title: "Careers - Join Our Innovation Team | NAVA Software",
    description:
      "Join NAVA Software and work on AI, cloud & automation projects. Continuous learning, certifications & AI-focused training included. Explore open roles today.",
    ogImage: `${SITE_ORIGIN}/assets/carrers-bg-wvAE1Jxg.webp`,
    breadcrumbs: [HOME, { name: "Careers", url: `${SITE_ORIGIN}/corporate/careers/` }],
  },

  // ── Other ──────────────────────────────────────────────────────────────
  "/contact-us": {
    title: "Contact Us - Get In Touch | NAVA Software",
    description:
      "Contact NAVA Software for digital transformation, AI & cloud queries. 24hr response, NDA available & senior experts on every call. Get in touch today.",
    ogImage: `${SITE_ORIGIN}/assets/map-BAHH1Qov.webp`,
    breadcrumbs: [HOME, { name: "Contact Us", url: `${SITE_ORIGIN}/contact-us/` }],
  },
  "/privacy-policy": {
    title: "Privacy Policy & Data Protection | NAVA Software",
    description:
      "NAVA Software's privacy policy covers data collection, processing, security & GDPR compliance. Committed to transparency & protecting your personal data.",
    ogImage:
      "https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_2/j23wo4uzjwyfwxqevjco?ik-sanitizeSvg=true",
    breadcrumbs: [HOME, { name: "Privacy Policy", url: `${SITE_ORIGIN}/privacy-policy/` }],
  },
  "/disclaimer": {
    title: "Disclaimer - Terms of Use & Legal Info | NAVA Software",
    description:
      "Read the disclaimer, terms of use & legal info of NAVA Software. Covering prohibited conduct & liability limitations before accessing our website content.",
    ogImage:
      "https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_2/j23wo4uzjwyfwxqevjco?ik-sanitizeSvg=true",
    breadcrumbs: [HOME, { name: "Disclaimer", url: `${SITE_ORIGIN}/disclaimer/` }],
  },

  // ── Outbound campaign landing pages (hidden from nav) ─────────────────
  "/vision-ai-industrial-safety": {
    title: "Industrial Safety Vision AI for Manufacturing | NAVA Software",
    description:
      "Reduce OSHA exposure, insurance claims, and downtime with Vision AI on existing CCTV. PPE compliance, forklift near-miss detection, EHS & ERP integration.",
    ogImage: `${SITE_ORIGIN}/assets/vision-ai-industrial-safety-og.jpg`,
    breadcrumbs: [
      HOME,
      { name: "Vision AI", url: `${SITE_ORIGIN}/vision-ai/` },
      { name: "Industrial Safety", url: `${SITE_ORIGIN}/vision-ai-industrial-safety/` },
    ],
  },
  "/vision-ai-dock-operations": {
    title: "Dock Operations Vision AI for Warehousing | NAVA Software",
    description:
      "Cut detention fees, OTIF penalties & trailer dwell with Vision AI on existing dock cameras. Real-time utilization, delays, bottlenecks — into your WMS/YMS/TMS.",
    ogImage: `${SITE_ORIGIN}/assets/vision-ai-dock-operations-og.jpg`,
    breadcrumbs: [
      HOME,
      { name: "Vision AI", url: `${SITE_ORIGIN}/vision-ai/` },
      { name: "Dock & Operational Flow", url: `${SITE_ORIGIN}/vision-ai-dock-operations/` },
    ],
  },
};

/**
 * Returns the canonical URL for a given route path.
 * Home is "/", all other routes have NO trailing slash — matches the
 * approved canonical URL audit list provided by the client.
 */
export function canonicalFor(routePath: string): string {
  const clean = routePath.replace(/\/+$/, "");
  return clean === "" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${clean}/`;
}
