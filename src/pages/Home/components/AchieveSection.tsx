import Carousel from '../../../components/Carousel';
import MobileCarousel from '../../../components/MobileCarousel';
import { BodyText, SectionHeading } from '../../../components/Typography';

import slide1Image from '../../../assets/carousel/slide-1.jpg';
import slide2Image from '../../../assets/carousel/slide-2.jpg';
import slide3Image from '../../../assets/carousel/slide-3.jpg';
import slide4Image from '../../../assets/carousel/slide-4.jpg';

interface SlideData {
  image: string;
  title: string;
  points: { highlight: string; text: string }[];
}

const slides: SlideData[] = [
  {
    image: slide1Image,
    title: "Leveraging UCSD's Unique Assets",
    points: [
      {
        highlight: 'Expert Faculty Collaboration',
        text: ': Access to multidisciplinary experts ensures holistic, socially impactful robot development.',
      },
      {
        highlight: 'Student Volunteer Network',
        text: ': Large student body aids in data collection, user testing, and real-world development.',
      },
      {
        highlight: 'Advanced Data Infrastructure',
        text: ': UCSD data center enables complex simulations and AI development.',
      },
    ],
  },
  {
    image: slide2Image,
    title: 'Focus on Equity and Global Impact',
    points: [
      {
        highlight: 'Disrupting Global Production Disparities',
        text: ': Low-cost robots address global inequities in production efficiency.',
      },
      {
        highlight: 'Targeting Underserved Markets',
        text: ': Committed to deploying robots in underserved regions for transformative impact.',
      },
    ],
  },
  {
    image: slide3Image,
    title: 'Modular and Scalable Robotics Solutions',
    points: [
      {
        highlight: 'Customizable Robotics Platforms',
        text: ': Modular robots adaptable across various industries, ensuring scalability.',
      },
      {
        highlight: 'Affordability Without Compromise',
        text: ': Cost-effective design allows affordable, high-quality robots for wide access.',
      },
    ],
  },
  {
    image: slide4Image,
    title: 'Ethical AI and Value Based Partnerships',
    points: [
      {
        highlight: 'Ethical AI Development',
        text: '',
      },
      {
        highlight: 'Inclusive Design Philosophy',
        text: ': Robots designed for diverse, global populations, including developing regions and disabled users.',
      },
      {
        highlight: 'Partnerships',
        text: ' for tech subsidy and shared resources.',
      },
    ],
  },
];

/** Mobile: fill width between arrows; type scale aligned with section heading body text. */
function AchieveMissionMobileSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="mx-auto w-full max-w-full">
      <div className="flex flex-col gap-5 rounded-3xl bg-[#2A2B2D] py-6">
        <div className="flex flex-col px-5 sm:px-6">
          <div className="aspect-[260/173] w-full overflow-hidden rounded-xl">
            <img
              src={slide.image}
              alt={slide.title}
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5 sm:px-6">
          <BodyText
            size="sm"
            className="!text-base !leading-snug !font-normal w-full text-left text-main-text sm:!text-lg"
          >
            {slide.title}
          </BodyText>
          <ul className="flex w-full flex-col gap-3 list-disc pl-[1.15rem] text-sm leading-relaxed text-main-text marker:text-main-text sm:text-[15px] sm:leading-relaxed">
            {slide.points.map((point, pointIndex) => (
              <li key={pointIndex} className="pl-0.5">
                <span className="font-medium text-accent">
                  {point.highlight}
                </span>
                {point.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AchieveSection() {
  return (
    <section className="bg-main-bg py-12 md:py-16 lg:py-20 flex flex-col gap-10 md:gap-16 lg:gap-20 items-center justify-center overflow-hidden">
      <SectionHeading className="w-full max-w-7xl mx-auto text-left px-6 md:px-12 lg:px-16 xl:px-20">
        How We Aim to Achieve Our Mission
      </SectionHeading>

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-center w-full">
        <div
          className="md:hidden w-full px-6"
          data-testid="achieve-carousel-mobile"
        >
          <MobileCarousel
            slides={slides}
            aria-label="How we achieve our mission"
            renderSlide={(slide) => <AchieveMissionMobileSlide slide={slide} />}
          />
        </div>

        <div
          className="hidden md:flex flex-col items-center w-full px-6 lg:px-8"
          data-testid="achieve-carousel-desktop"
        >
          <Carousel
            className="mx-auto w-full max-w-[min(100%,1400px)]"
            containerClassName="!max-w-none"
            slideClassName="min-w-0 flex-[0_0_92%] lg:flex-[0_0_88%] xl:flex-[0_0_84%] 2xl:flex-[0_0_80%] px-2 sm:px-3 lg:px-4"
            renderSlide={(slide, index, tweenValue) => {
              const scale = 0.85 + tweenValue * 0.15;
              const opacity = 0.3 + tweenValue * 0.7;

              return (
                <div
                  data-testid={`achieve-slide-${index + 1}`}
                  className="min-h-0 w-full overflow-hidden py-1 origin-center transition-transform duration-150 ease-out"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                  }}
                >
                  <div className="mx-auto flex w-full max-w-full flex-col items-stretch rounded-[20px] bg-[#2A2B2D] md:min-h-[430px] md:flex-row md:gap-5 lg:min-h-[480px] lg:rounded-[24px] xl:min-h-[510px]">
                    <div className="flex w-full shrink-0 flex-col items-center justify-center p-4 md:w-[320px] md:py-8 md:pl-8 md:pr-3 lg:w-[360px]">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] md:aspect-auto md:h-[320px] md:w-[280px] lg:h-[360px] lg:w-[320px] lg:rounded-[18px]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 px-6 py-8 md:gap-7 md:px-8 md:py-11 lg:px-9 lg:py-12">
                      <h3 className="max-w-full text-[22px] font-normal leading-[120%] text-main-text md:text-[26px] lg:text-[28px] xl:text-[30px]">
                        {slide.title}
                      </h3>
                      <ul className="ml-8 max-w-full list-outside list-disc space-y-4 pl-1 marker:text-main-text md:ml-9 md:space-y-5">
                        {slide.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="text-[15px] font-normal leading-[1.45] text-main-text md:text-[18px] lg:text-[18px] lg:leading-[1.4]"
                          >
                            <span className="font-medium text-accent">
                              {point.highlight}
                            </span>
                            {point.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }}
            slides={slides}
          />
        </div>
      </div>
    </section>
  );
}
