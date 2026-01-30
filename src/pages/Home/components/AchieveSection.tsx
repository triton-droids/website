import Carousel from '../../../components/Carousel';

import slide1Image from '../../../assets/carousel/slide-1.jpg';
import { SectionHeading, CardTitle } from '../../../components/Typography';
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

export default function AchieveSection() {
  return (
    <section className="bg-main-bg py-12 md:py-16 lg:py-20 flex flex-col gap-10 md:gap-16 lg:gap-20 items-center justify-center overflow-hidden">
      {/* Heading uses same padding as other sections */}
      <SectionHeading className="w-full max-w-7xl mx-auto text-left px-6 md:px-12 lg:px-16 xl:px-20">
        How We Aim to Achieve Our Mission
      </SectionHeading>

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-center w-full">
        <Carousel
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
                    <ul className="flex flex-col gap-6 list-disc ml-9 max-w-[449px]">
                      {slide.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-[16px] md:text-[18px] lg:text-[20px] text-main-text leading-[140%] font-normal"
                        >
                          <span className="text-accent">{point.highlight}</span>
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
    </section>
  );
}
