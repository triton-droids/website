import { useCallback, useEffect, useState, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export interface MobileCarouselProps<T = unknown> {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  className?: string;
  /** Accessible name for the carousel region. */
  'aria-label'?: string;
}

function MobileCarouselArrow({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex size-8 shrink-0 items-center justify-center rounded-[19px] border-[1.5px] border-muted-text bg-main-bg text-muted-text transition-colors hover:border-main-text hover:text-main-text active:scale-95 sm:size-9 ${
        direction === 'left' ? '' : 'rotate-180'
      }`}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * Mobile-only carousel: horizontal swipe, compact arrows flanking the viewport,
 * Figma V2 mobile pagination (pill + circular dots). Use below `md` with desktop carousel hidden.
 */
export default function MobileCarousel<T = unknown>({
  slides,
  renderSlide,
  className = '',
  'aria-label': ariaLabel = 'Carousel',
}: MobileCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
  });

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
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect).on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="flex w-full items-center justify-center gap-1.5 sm:gap-2.5">
        <MobileCarouselArrow direction="left" onClick={scrollPrev} />

        <div className="flex min-w-0 flex-1 flex-col items-center gap-5 max-w-full">
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="box-border min-w-0 shrink-0 flex-[0_0_100%] px-3 sm:px-4"
                >
                  {renderSlide(slide, index)}
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-center gap-[5px]"
            aria-label="Slide indicators"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === selectedIndex ? 'true' : undefined}
                className={
                  i === selectedIndex
                    ? 'h-2 w-6 shrink-0 rounded-full bg-main-text'
                    : 'size-2 shrink-0 rounded-full border border-muted-text'
                }
              />
            ))}
          </div>
        </div>

        <MobileCarouselArrow direction="right" onClick={scrollNext} />
      </div>
    </div>
  );
}
