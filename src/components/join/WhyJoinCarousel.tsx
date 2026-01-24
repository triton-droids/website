import { useState, useCallback } from 'react';

// Slide images from Figma
const slide1Image = 'https://www.figma.com/api/mcp/asset/e5765e1e-d063-4905-a164-dbf2388ca35a';
const slide2Image = 'https://www.figma.com/api/mcp/asset/707c4e7c-5ab3-4893-a606-7c1fa1e9eb21';
const slide3Image = 'https://www.figma.com/api/mcp/asset/7df99e02-f063-40d1-bde6-861e40bc7be3';
const slide4Image = 'https://www.figma.com/api/mcp/asset/499b1824-7e2f-4e6a-b8de-d5e77760d2d9';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Real world impact',
    description:
      "Here, you won't just be tinkering in a lab. You'll be working on projects that have the potential to make a global difference. Imagine seeing something you helped build in action—whether it's improving agricultural practices in developing countries or disaster response capabilities.",
    image: slide1Image,
  },
  {
    id: 2,
    title: 'Hands-on experience',
    description:
      "As an engineering or science student, you want to get your hands dirty. At Triton Droids, you'll dive into the nitty-gritty of robotics, AI, and engineering design. You'll collaborate with fellow students and experts, turning theories into working prototypes.",
    image: slide2Image,
  },
  {
    id: 3,
    title: 'Jobs, internships, and more',
    description:
      "Whether you're looking to beef up your resume, gain practical skills, or start a career in robotics and AI, Triton Droids gives you the platform to do it. The projects you work on here can set you apart in job interviews, graduate school applications, or even your startup ambitions.",
    image: slide3Image,
  },
  {
    id: 4,
    title: 'Life long connections',
    description:
      "Joining Triton Droids isn't just about the robots—it's about the people. You'll form connections with like-minded students, industry professionals, and mentors that will last well beyond your college years.",
    image: slide4Image,
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-[50px] h-[50px] md:w-[66px] md:h-[66px] rounded-full border-[3px] md:border-4 border-main-text flex items-center justify-center hover:bg-main-text/10 transition-colors cursor-pointer shrink-0"
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === 'right' ? 'rotate-180' : ''}
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#F5F5F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function WhyJoinCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="flex flex-col gap-10 lg:gap-20 items-center w-full">
      {/* Title - constrained width */}
      <div className="w-full max-w-[1228px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-text">
          Why join Triton Droids?
        </h2>
      </div>

      {/* Carousel - full width */}
      <div className="flex gap-6 md:gap-12 items-center w-full">
        {/* Left decorative bar - touches left edge */}
        <div className="w-6 md:w-10 h-[300px] md:h-[400px] lg:h-[456px] bg-[#2A2B2D] rounded-r-[24px] md:rounded-r-[40px] shrink-0" />

        {/* Left arrow */}
        <ArrowButton direction="left" onClick={prevSlide} />

        {/* Slide content - centered, fixed width */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[1050px] bg-[#2A2B2D] rounded-[24px] lg:rounded-[40px] flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Image container - Figma: 513px x 595px with pl-40 pr-16 py-40 */}
            <div className="w-full md:w-[320px] lg:w-[420px] xl:w-[513px] h-[250px] md:h-[380px] lg:h-[480px] xl:h-[595px] pl-4 md:pl-6 lg:pl-10 pr-2 md:pr-3 lg:pr-4 py-4 md:py-6 lg:py-10 shrink-0">
              <div className="w-full h-full rounded-[16px] lg:rounded-[32px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-main-text leading-tight">
                {slide.title}
              </h3>
              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-main-text leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <ArrowButton direction="right" onClick={nextSlide} />

        {/* Right decorative bar - touches right edge */}
        <div className="w-6 md:w-10 h-[300px] md:h-[400px] lg:h-[456px] bg-[#2A2B2D] rounded-l-[24px] md:rounded-l-[40px] shrink-0" />
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide
                ? 'bg-accent w-6'
                : 'bg-main-text/40 hover:bg-main-text/60 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
