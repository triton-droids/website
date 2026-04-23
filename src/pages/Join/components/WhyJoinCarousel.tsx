import { useState } from 'react';
import Carousel from '../../../components/Carousel';
import { SectionHeading } from '../../../components/Typography';
import slide1Image from '../../../assets/join/join-carousel-1.webp';
import slide2Image from '../../../assets/join/join-carousel-2.jpg';
import slide3Image from '../../../assets/join/join-carousel-3.webp';
import slide4Image from '../../../assets/join/join-carousel-4.webp';

interface Slide {
  id: number;
  title: string;
  description: JSX.Element;
  image: string;
}

function WhyJoinSlide({ slide }: { slide: Slide }) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full bg-[#2A2B2D] rounded-[28px] lg:rounded-[40px] flex min-h-[20rem] md:min-h-[36rem] flex-col items-center justify-center text-center gap-6 md:gap-8 px-7 py-10 sm:px-10 sm:py-12 md:px-12 md:py-12 max-w-[1050px] mx-auto">
        <h3 className="text-[20px] sm:text-2xl md:text-[28px] lg:text-[32px] text-main-text leading-[120%] font-normal max-w-xl mx-auto px-2 text-center">
          {slide.title}
        </h3>

        <div className="w-full flex justify-center px-1">
          <button
            type="button"
            onClick={() => setShowText((v) => !v)}
            aria-label={showText ? 'Hide description' : 'Show description'}
            aria-expanded={showText}
            className="group w-full max-w-[min(100%,300px)] aspect-square sm:max-w-[min(100%,360px)] md:aspect-[4/3] md:max-w-[min(100%,480px)] rounded-[20px] lg:rounded-[28px] overflow-hidden shrink-0 relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-[#1F2022]/95 flex items-center justify-center p-5 sm:p-6 md:p-8 overflow-y-auto transition-opacity duration-300 ${
                showText ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-main-text leading-[140%] font-normal text-center">
                {slide.description}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Real world impact',
    description: (
      <>
        Here, you won&apos;t just be tinkering in a lab. You&apos;ll be working
        on projects that have the{' '}
        <span className="text-accent">
          potential to make a global difference
        </span>
        . Imagine seeing something you helped build in action—whether it&apos;s{' '}
        <span className="text-accent">improving agricultural practices</span> in
        developing countries or{' '}
        <span className="text-accent">disaster response capabilities</span>.
      </>
    ),
    image: slide1Image,
  },
  {
    id: 2,
    title: 'Hands-on experience',
    description: (
      <>
        As an engineering or science student, you want to get your hands dirty.
        At Triton Droids, you&apos;ll{' '}
        <span className="text-accent">dive into the nitty-gritty</span> of
        robotics, AI, and engineering design. You&apos;ll{' '}
        <span className="text-accent">collaborate</span> with fellow students
        and experts, turning theories into working prototypes.
      </>
    ),
    image: slide2Image,
  },
  {
    id: 3,
    title: 'Jobs, internships, and more',
    description: (
      <>
        Whether you&apos;re looking to beef up your resume, gain practical
        skills, or start a career in robotics and AI, Triton Droids gives you
        the platform to do it. The projects you work on here can{' '}
        <span className="text-accent">set you apart</span> in job interviews,
        graduate school applications, or even your startup ambitions.
      </>
    ),
    image: slide3Image,
  },
  {
    id: 4,
    title: 'Life long connections',
    description: (
      <>
        Joining Triton Droids isn&apos;t just about the robots—it&apos;s about
        the people. You&apos;ll{' '}
        <span className="text-accent">form connections</span> with like-minded
        students, industry professionals, and mentors that will{' '}
        <span className="text-accent">last well beyond your college years</span>
        .
      </>
    ),
    image: slide4Image,
  },
];

export default function WhyJoinCarousel() {
  return (
    <section className="flex flex-col gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center w-full">
      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <SectionHeading className="w-full text-left text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Why join Triton Droids?
        </SectionHeading>
      </div>

      <Carousel
        slides={slides}
        arrowOffset="card"
        slideClassName="flex-[0_0_100%] shrink-0 px-3 sm:px-4 md:px-5"
        className="w-full max-w-[1512px] mx-auto px-14 sm:px-16 md:px-20 lg:px-[148px]"
        renderSlide={(slide) => <WhyJoinSlide slide={slide} />}
      />
    </section>
  );
}
