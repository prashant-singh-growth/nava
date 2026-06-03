import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** Reserved height of the placeholder so layout doesn't jump (no CLS). */
  minHeight?: number | string;
  /** How early to mount before scroll-in. */
  rootMargin?: string;
  className?: string;
  /** Optional skeleton shown before the section mounts. */
  fallback?: ReactNode;
}

/**
 * Defers mounting of a subtree until it nears the viewport using
 * IntersectionObserver. No CSS containment — children render in normal
 * document flow once mounted, so positioning, sticky, overflow,
 * carousels, and modals behave exactly as if they were eager.
 */
const LazySection = ({
  children,
  minHeight = 400,
  rootMargin = "400px 0px",
  className,
  fallback,
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldMount(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldMount(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, shouldMount]);

  // Once mounted, do NOT apply any containment/min-height — let the children
  // size themselves naturally. Only apply minHeight to the placeholder state
  // so the page doesn't collapse before mount.
  return (
    <div
      ref={ref}
      className={className}
      // Reserve placeholder height to prevent CLS before mount.
      // `contain: layout` keeps the placeholder's layout isolated from the
      // surrounding page so its eventual replacement won't reflow neighbors
      // beyond its own box.
      style={
        shouldMount
          ? undefined
          : { minHeight, contain: "layout" }
      }
    >
      {shouldMount ? children : fallback ?? null}
    </div>
  );
};

export default LazySection;
