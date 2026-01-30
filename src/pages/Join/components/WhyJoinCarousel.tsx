import Carousel from '../../../components/Carousel';
import { SectionHeading } from '../../../components/Typography';

const slide1Image =
  'https://www.figma.com/api/mcp/asset/e5765e1e-d063-4905-a164-dbf2388ca35a';
const slide2Image =
  'https://www.figma.com/api/mcp/asset/707c4e7c-5ab3-4893-a606-7c1fa1e9eb21';
const slide3Image =
  'https://www.figma.com/api/mcp/asset/7df99e02-f063-40d1-bde6-861e40bc7be3';
const slide4Image =
  'https://www.figma.com/api/mcp/asset/499b1824-7e2f-4e6a-b8de-d5e77760d2d9';

interface Slide {
  id: number;
  title: string;
  description: JSX.Element;
  image: string;
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
    <section className="flex flex-col gap-10 lg:gap-16 xl:gap-20 items-center w-full">
      {/* Heading matches standard container width */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <SectionHeading>Why join Triton Droids?</SectionHeading>
      </div>

      <Carousel
        slides={slides}
        renderSlide={(slide, _index, tweenValue) => {
          const scale = 0.85 + tweenValue * 0.15;
          const opacity = 0.3 + tweenValue * 0.7;

          return (
            <div
              className="transition-transform duration-100 ease-out origin-center"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
              }}
            >
              <div className="w-full bg-[#2A2B2D] rounded-[24px] lg:rounded-[40px] flex flex-col md:flex-row gap-0 lg:gap-6 items-stretch max-w-[1050px] md:h-[595px] mx-auto">
                {/* Image section: Reduced from 513px to 420px for more text space */}
                <div className="w-full md:w-[420px] h-full shrink-0 p-4 md:pt-10 md:pb-10 md:pl-10 md:pr-4 flex items-center justify-center">
                  <div className="w-full h-full md:w-[360px] md:h-[360px] rounded-[16px] lg:rounded-[32px] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content section: More space with reduced image, added horizontal padding */}
                <div className="flex flex-col gap-8 px-8 md:px-10 py-10 flex-1 justify-center">
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] text-main-text leading-[120%] font-normal max-w-[449px]">
                    {slide.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-main-text leading-[140%] font-normal max-w-[480px]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      />
    </section>
  );
}
