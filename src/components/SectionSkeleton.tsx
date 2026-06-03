interface SectionSkeletonProps {
  /** Total reserved height for the section (matches LazySection minHeight). */
  height?: number | string;
  /** Variant kept for API compatibility — no longer affects visuals. */
  variant?: "default" | "hero" | "cards" | "logos" | "carousel" | "split" | "footer";
}

/**
 * Invisible spacer used as a fallback for lazy-mounted sections.
 * Reserves vertical space to prevent layout shift but renders no visible
 * skeleton bars or background — keeps the loading state silent so users
 * don't see colored placeholder strips before the real content paints.
 */
const SectionSkeleton = ({ height = 500 }: SectionSkeletonProps) => {
  return <div aria-hidden="true" style={{ minHeight: height }} className="w-full" />;
};

export default SectionSkeleton;
