import { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const autoScrollPlugin = useMemo(
    () =>
      AutoScroll({
        speed: 2.0,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    []
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      skipSnaps: false,
    },
    [autoScrollPlugin]
  );

  if (images.length === 0) return null;

  return (
    <section className="flex flex-col items-center py-20 w-full">
      <div className="w-full">
        <div
          className="h-[670px] overflow-hidden"
          ref={emblaRef}
          aria-label="Humanoid project gallery"
          onClick={() => autoScrollPlugin.stop()}
        >
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`flex-[0_0_auto] w-[420px] sm:w-[460px] md:w-[520px] lg:w-[552px] h-[670px] pr-8 ${
                  index === 0 ? 'pl' : ''
                }`}
              >
                <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#2A2B2D]">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
