import { lazy, Suspense, useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import LazySection from "@/components/LazySection";
import SectionSkeleton from "@/components/SectionSkeleton";
import bgvideo from "../assets/Images/banner-bg.mp4";
// Chunk-split + viewport-gated. Idle-prefetched below so chunks are
// usually in cache by the time the user scrolls.
const trustedByImport = () => import("@/components/TrustedBy");
const caseStudiesImport = () => import("@/components/CaseStudies");
const testimonialsImport = () => import("@/components/Testimonials");
const insightsHomeImport = () => import("@/components/InsightsHome");
const aboutUsHomeImport = () => import("@/components/AboutUsHome");

const TrustedBy = lazy(trustedByImport);
const CaseStudies = lazy(caseStudiesImport);
const Testimonials = lazy(testimonialsImport);
const InsightsHome = lazy(insightsHomeImport);
const AboutUsHome = lazy(aboutUsHomeImport);

type IdleCb = (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void;
type WindowWithIdle = Window & {
  requestIdleCallback?: (cb: IdleCb, opts?: { timeout: number }) => number;
};

function prefetchSectionChunks() {
  const tasks = [
    trustedByImport,
    caseStudiesImport,
    testimonialsImport,
    insightsHomeImport,
    aboutUsHomeImport,
  ];
  tasks.forEach((t) => {
    t().catch(() => {
      /* prefetch failures are silent — real mount will retry */
    });
  });
}

const Index = () => {
  // Warm below-the-fold chunks during browser idle, after first paint.
  // Viewport gate still controls *mount*; this just makes mount instant.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as WindowWithIdle;
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(prefetchSectionChunks, { timeout: 3000 });
    } else {
      setTimeout(prefetchSectionChunks, 1500);
    }
  }, []);

  return (
    <div className="min-h-screen home">
      <main>
        <div className="hero">
          {/* Defer 23MB video: only fetch metadata until idle, no blocking on FCP.
              No `poster` here — the `.hero` background gradient (banner-gradient-bg.webp)
              shows through instead, avoiding a stretched OG-image flash before video paints. */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="hero-video"
            aria-hidden="true"
          >
            <source src={bgvideo} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Services />
        {/* Eager: first below-fold section. Almost everyone scrolls once. */}
        <Industries />
        {/* Tight 200px look-ahead so sections genuinely defer mounting until
            the user scrolls — skeleton becomes visible while chunk + render
            complete. Idle prefetch (above) keeps chunks warm. */}
        <LazySection minHeight={300} fallback={<SectionSkeleton variant="logos" height={300} />}>
          <Suspense fallback={<SectionSkeleton variant="logos" height={300} />}>
            <TrustedBy />
          </Suspense>
        </LazySection>
        <LazySection minHeight={600} fallback={<SectionSkeleton variant="carousel" height={600} />}>
          <Suspense fallback={<SectionSkeleton variant="carousel" height={600} />}>
            <CaseStudies adjustTop={false} />
          </Suspense>
        </LazySection>
        <LazySection minHeight={500} fallback={<SectionSkeleton variant="carousel" height={500} />}>
          <Suspense fallback={<SectionSkeleton variant="carousel" height={500} />}>
            <Testimonials />
          </Suspense>
        </LazySection>
        <LazySection minHeight={500} fallback={<SectionSkeleton variant="cards" height={500} />}>
          <Suspense fallback={<SectionSkeleton variant="cards" height={500} />}>
            <InsightsHome />
          </Suspense>
        </LazySection>
        <LazySection minHeight={500} fallback={<SectionSkeleton variant="split" height={500} />}>
          <Suspense fallback={<SectionSkeleton variant="split" height={500} />}>
            <AboutUsHome />
          </Suspense>
        </LazySection>
      </main>
    </div>
  );
};

export default Index;
