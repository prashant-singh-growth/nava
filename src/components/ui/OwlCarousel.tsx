import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselWrapperProps {
  children: ReactNode;
  items?: number;
  responsive?: {
    [key: number]: {
      items: number;
    };
  };
  autoPlay?: boolean;
  autoPlayTimeout?: number;
  loop?: boolean;
  nav?: boolean;
  dots?: boolean;
  margin?: number;
  className?: string;
}

const OwlCarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
  },
  autoPlay = true,
  autoPlayTimeout = 5000,
  loop = true,
  nav = false,
  dots = true,
  className = "",
}) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const childrenArray = React.Children.toArray(children);

  // Determine items per view based on screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      let newItems = 1;

      const sortedBps = Object.keys(responsive)
        .map(Number)
        .sort((a, b) => a - b);

      for (const bp of sortedBps) {
        if (width >= bp) {
          newItems = responsive[bp].items;
        }
      }
      setVisibleItems(newItems);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [responsive]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Manual autoplay implementation
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (loop) {
        emblaApi.scrollTo(0);
      }
    }, autoPlayTimeout);

    return () => clearInterval(autoplayInterval);
  }, [autoPlay, autoPlayTimeout, emblaApi, loop]);

  const slideCount = Math.ceil(childrenArray.length / visibleItems);

  return (
    <div className={`owl-carousel-wrapper ${className}`}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {childrenArray.map((child, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ flex: `0 0 ${100 / visibleItems}%` }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {nav && (
          <>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 disabled:opacity-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 disabled:opacity-50"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {dots && slideCount > 1 && (
        <div className="flex justify-center my-10 sm:my-10 md:my-8 lg:my-12 xl:my-20 space-x-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-200 rounded-full ${
                selectedIndex === index
                  ? "w-8 h-3 bg-[#1A61FF]"
                  : "w-3 h-3 bg-[#C7C7C7]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OwlCarouselWrapper;
