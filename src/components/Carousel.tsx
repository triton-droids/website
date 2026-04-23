import { useCallback, useEffect, useState, useRef, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR = 0.6;

interface CarouselProps<T = unknown> {
  slides: T[];
  className?: string;
  slideClassName?: string;
  containerClassName?: string;
  renderSlide: (slide: T, index: number, tweenValue: number) => ReactNode;
  renderArrowButton?: (
    direction: 'left' | 'right',
    onClick: () => void,
    disabled: boolean
  ) => ReactNode;
  renderPagination?: (
    total: number,
    selectedIndex: number,
    onDotClick: (index: number) => void
  ) => ReactNode;
  showArrows?: boolean;
  showPagination?: boolean;
  /**
   * Arrow visual / position style:
   * - 'flush'  : legacy outer arrows with gutter padding on the viewport
   * - 'inset'  : legacy outer arrows pulled slightly inward
   * - 'card'   : white ring buttons overlaid on the carousel (outside the Embla viewport),
   *              vertically centered. Guarantees one pair, no per-slide arrows.
   */
  arrowOffset?: 'flush' | 'inset' | 'card';
}

export default function Carousel<T = unknown>({
  slides,
  className = '',
  slideClassName = '',
  containerClassName = '',
  renderSlide,
  renderArrowButton,
  renderPagination,
  showArrows = true,
  showPagination = true,
  arrowOffset = 'flush',
}: CarouselProps<T>) {
  const isCardStyle = arrowOffset === 'card';
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: isCardStyle ? 'start' : 'center',
    skipSnaps: false,
    containScroll: isCardStyle ? 'trimSnaps' : false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback(() => {
    if (!emblaApi) return;
    tweenFactor.current = TWEEN_FACTOR * emblaApi.scrollSnapList().length;
  }, [emblaApi]);

  const updateTweenValues = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (snapIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress);
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          }
        });
      }

      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
      return Math.max(0, Math.min(1, tweenValue));
    });

    setTweenValues(styles);
  }, [emblaApi]);

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

    setTweenFactor();
    updateTweenValues();
    onSelect();

    emblaApi
      .on('select', onSelect)
      .on('reInit', onSelect)
      .on('reInit', setTweenFactor)
      .on('reInit', updateTweenValues)
      .on('scroll', updateTweenValues)
      .on('slideFocus', updateTweenValues);

    return () => {
      emblaApi
        .off('select', onSelect)
        .off('reInit', onSelect)
        .off('reInit', setTweenFactor)
        .off('reInit', updateTweenValues)
        .off('scroll', updateTweenValues)
        .off('slideFocus', updateTweenValues);
    };
  }, [emblaApi, onSelect, setTweenFactor, updateTweenValues]);

  const defaultArrowButton = (
    direction: 'left' | 'right',
    onClick: () => void,
    disabled: boolean
  ) => {
    const enabled = !disabled;
    return (
      <button
        onClick={onClick}
        disabled={!enabled}
        className={`size-12 lg:size-14 xl:size-[66px] rounded-full border-2 lg:border-3 xl:border-4 border-muted-text bg-main-bg/75 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shrink-0 ${
          direction === 'left' ? '' : 'rotate-180'
        } ${enabled ? 'hover:border-main-text hover:bg-main-text/20' : 'opacity-50'}`}
        aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-text lg:w-6 lg:h-6"
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
  };

  const cardArrowButton = (
    direction: 'left' | 'right',
    onClick: () => void
  ) => (
    <button
      type="button"
      onClick={onClick}
      className={`size-10 sm:size-11 rounded-full border-2 border-white bg-black/30 text-white flex items-center justify-center transition-colors hover:bg-white/15 active:scale-95 ${
        direction === 'left' ? '' : 'rotate-180'
      }`}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg
        width="18"
        height="18"
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

  const defaultPagination = (
    total: number,
    selectedIndex: number,
    onDotClick: (index: number) => void
  ) => (
    <div className="flex gap-[18px] items-center justify-center w-full mt-10">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`rounded-full transition-all cursor-pointer ${
            i === selectedIndex
              ? 'bg-main-text w-[55px] h-[18px]'
              : 'border-2 border-muted-text size-[18px] hover:border-main-text'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  const leftArrowWrapClass =
    arrowOffset === 'card'
      ? 'absolute left-0 top-1/2 z-30 -translate-y-1/2 -translate-x-[calc(100%+10px)] sm:-translate-x-[calc(100%+16px)] md:-translate-x-[calc(100%+20px)] pointer-events-none'
      : arrowOffset === 'inset'
        ? 'absolute left-2 sm:left-3 md:left-4 top-1/2 z-30 -translate-y-1/2 pointer-events-none'
        : 'absolute left-0 top-1/2 z-30 -translate-y-1/2 pl-0 sm:pl-1 pointer-events-none';
  const rightArrowWrapClass =
    arrowOffset === 'card'
      ? 'absolute right-0 top-1/2 z-30 -translate-y-1/2 translate-x-[calc(100%+10px)] sm:translate-x-[calc(100%+16px)] md:translate-x-[calc(100%+20px)] pointer-events-none'
      : arrowOffset === 'inset'
        ? 'absolute right-2 sm:right-3 md:right-4 top-1/2 z-30 -translate-y-1/2 pointer-events-none'
        : 'absolute right-0 top-1/2 z-30 -translate-y-1/2 pr-0 sm:pr-1 pointer-events-none';

  const viewportPaddingClass = isCardStyle
    ? 'overflow-hidden'
    : 'overflow-hidden pl-11 pr-11 sm:pl-12 sm:pr-12 lg:pl-16 lg:pr-16 xl:pl-20 xl:pr-20';

  const renderArrow = (
    direction: 'left' | 'right',
    onClick: () => void,
    disabled: boolean
  ) => {
    if (renderArrowButton) {
      return renderArrowButton(direction, onClick, disabled);
    }
    if (isCardStyle) {
      return cardArrowButton(direction, onClick);
    }
    return defaultArrowButton(direction, onClick, disabled);
  };

  return (
    <div className={className}>
      <div
        className={`relative w-full min-w-0 max-w-full lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto ${containerClassName}`.trim()}
      >
        {showArrows && (
          <div className={leftArrowWrapClass}>
            <div className="pointer-events-auto">
              {renderArrow('left', scrollPrev, !canScrollPrev && !emblaApi)}
            </div>
          </div>
        )}
        {showArrows && (
          <div className={rightArrowWrapClass}>
            <div className="pointer-events-auto">
              {renderArrow('right', scrollNext, !canScrollNext && !emblaApi)}
            </div>
          </div>
        )}

        <div className={viewportPaddingClass} ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => {
              const tweenValue = tweenValues[index] ?? 0;
              const slideBasis =
                slideClassName ||
                'flex-[0_0_90%] md:flex-[0_0_85%] lg:flex-[0_0_80%] xl:flex-[0_0_70%] min-w-0 pl-4 pr-4';
              const slideSizing = isCardStyle
                ? `${slideBasis} min-w-[100%] shrink-0`
                : slideBasis;
              return (
                <div key={index} className={slideSizing}>
                  {renderSlide(slide, index, tweenValue)}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showPagination && (
        <div className="flex justify-center items-center w-full">
          {renderPagination
            ? renderPagination(slides.length, selectedIndex, scrollTo)
            : defaultPagination(slides.length, selectedIndex, scrollTo)}
        </div>
      )}
    </div>
  );
}
