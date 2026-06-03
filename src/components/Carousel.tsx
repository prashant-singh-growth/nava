import React, { useEffect, useMemo, useRef, useState, ReactNode, Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Breakpoints {
  [key: number]: {
    itemsPerView: number;
  };
}

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: number;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  showArrows?: boolean;
  className?: string;
  breakpoints?: Breakpoints;
}

const Carousel = ({
  children,
  itemsPerView = 1,
  autoPlay = false,
  autoPlayDelay = 3000,
  showArrows = true,
  className = "",
  breakpoints,
}: CarouselProps) => {
  // Flatten and filter invalid slides to prevent empty slides
  const items = useMemo(
    () => (Children.toArray(children).filter(Boolean) as ReactNode[]),
    [children]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(itemsPerView);
  const [enableTransition, setEnableTransition] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Responsive breakpoints
  useEffect(() => {
    if (!breakpoints) return;

    const updateItemsPerView = () => {
      const width = window.innerWidth;
      let newItems = itemsPerView;

      const sortedBps = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => a - b);

      for (const bp of sortedBps) {
        if (width >= bp) {
          newItems = breakpoints[bp].itemsPerView;
        }
      }
      setVisibleItems(newItems);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [breakpoints, itemsPerView]);

  // Clone count equals visible items (or total length if shorter)
  const cloneCount = Math.min(visibleItems, items.length || 0);

  // Build looped items (tail clones + items + head clones)
  const loopItems = useMemo(() => {
    if (items.length === 0) return [];
    const head = items.slice(0, cloneCount);
    const tail = items.slice(-cloneCount);
    return [...tail, ...items, ...head];
  }, [items, cloneCount]);

  // Initialize index at the first real slide (after tail clones)
  useEffect(() => {
    // When visibleItems or items change, reset properly
    if (items.length === 0) return;
    setEnableTransition(false);
    setCurrentIndex(cloneCount);
    const id = requestAnimationFrame(() => setEnableTransition(true));
    return () => cancelAnimationFrame(id);
  }, [cloneCount, items.length]);

  const totalRealItems = items.length;
  const canSlide = totalRealItems > visibleItems;

  const goToNext = () => {
    if (!canSlide) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (!canSlide) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle autoplay (always moves forward)
  useEffect(() => {
    if (!autoPlay || isPaused || !canSlide) return;
    const interval = setInterval(goToNext, autoPlayDelay);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayDelay, canSlide]);

  // Handle seamless reset when we hit clones
  useEffect(() => {
    if (!canSlide) return;
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      // Jump from clones to real index without animation
      if (currentIndex >= cloneCount + totalRealItems) {
        setEnableTransition(false);
        setCurrentIndex(cloneCount);
        requestAnimationFrame(() => setEnableTransition(true));
      } else if (currentIndex < cloneCount) {
        setEnableTransition(false);
        setCurrentIndex(cloneCount + totalRealItems - 1);
        requestAnimationFrame(() => setEnableTransition(true));
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, cloneCount, totalRealItems, canSlide]);

  if (totalRealItems === 0) return null;

  const unit = 100 / Math.max(1, visibleItems);
  const trackWidth = loopItems.length * unit;
  const translate = -(currentIndex * unit);

  // Pagination (number of positions we can slide to)
  const maxIndex = Math.max(0, totalRealItems - visibleItems);
  const activeDot = Math.min(
    Math.max(0, currentIndex - cloneCount),
    maxIndex
  );

  return (
    <div
      className={`carousel-container ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className={`carousel-track flex ${
            enableTransition ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(${translate}%)`,
            width: `${trackWidth}%`,
          }}
        >
          {loopItems.map((child, index) => (
            <div
              key={index}
              className="carousel-card mr-0"
              style={{ width: `${unit}%` }}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && canSlide && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {canSlide && (
        <div className="flex justify-center my-10 sm:my-10 md:my-8 lg:my-12 xl:my-20 space-x-2 carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(cloneCount + index)}
              className={`transition-all duration-200 rounded-full ${
                activeDot === index ? "w-8 h-3 bg-[#1A61FF]" : "w-3 h-3 bg-[#C7C7C7]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
