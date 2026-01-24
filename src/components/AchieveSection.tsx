import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slide1Image from '../assets/carousel/slide-1.jpg';
import slide2Image from '../assets/carousel/slide-2.jpg';
import slide3Image from '../assets/carousel/slide-3.jpg';
import slide4Image from '../assets/carousel/slide-4.jpg';

interface SlidePoint {
  highlight: string;
  text: string;
}

interface SlideData {
  image: string;
  title: string;
  points: SlidePoint[];
}

const slides: SlideData[] = [
  {
    image: slide1Image,
    title: "Leveraging UCSD's Unique Assets",
    points: [
      {
        highlight: 'Expert Faculty Collaboration:',
        text: ' Access to multidisciplinary experts ensures holistic, socially impactful robot development.',
      },
      {
        highlight: 'Student Volunteer Network:',
        text: ' Large student body aids in data collection, user testing, and real-world development.',
      },
      {
        highlight: 'Advanced Data Infrastructure:',
        text: ' UCSD data center enables complex simulations and AI development.',
      },
    ],
  },
  {
    image: slide2Image,
    title: 'Focus on Equity and Global Impact',
    points: [
      {
        highlight: 'Disrupting Global Production Disparities:',
        text: ' Low-cost robots address global inequities in production efficiency.',
      },
      {
        highlight: 'Targeting Underserved Markets:',
        text: ' Committed to deploying robots in underserved regions for transformative impact.',
      },
    ],
  },
  {
    image: slide3Image,
    title: 'Modular and Scalable Robotics Solutions',
    points: [
      {
        highlight: 'Customizable Robotics Platforms:',
        text: ' Modular robots adaptable across various industries, ensuring scalability.',
      },
      {
        highlight: 'Affordability Without Compromise:',
        text: ' Cost-effective design allows affordable, high-quality robots for wide access.',
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
        highlight: 'Inclusive Design Philosophy:',
        text: ' Robots designed for diverse, global populations, including developing regions and disabled users.',
      },
      {
        highlight: 'Partnerships',
        text: ' for tech subsidy and shared resources.',
      },
    ],
  },
];

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const imageVariants = {
  enter: {
    y: 20,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

const textVariants = {
  enter: {
    y: 30,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
  },
};

function ArrowButton({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: direction === 'left' ? -10 : 10 }}
      whileTap={{ scale: 0.95 }}
      className={`size-[66px] rounded-full border-4 border-muted-text flex items-center justify-center hover:border-main-text transition-colors ${
        direction === 'left' ? '' : 'rotate-180'
      }`}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-muted-text"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}

export default function AchieveSection() {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setSlide(([prev]) => {
      const next = prev + newDirection;
      if (next < 0) return [slides.length - 1, newDirection];
      if (next >= slides.length) return [0, newDirection];
      return [next, newDirection];
    });
  }, []);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);

  const goToSlide = (index: number) => {
    const newDirection = index > currentSlide ? 1 : -1;
    setSlide([index, newDirection]);
  };

  // Auto-play with 4s interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      className="bg-main-bg py-20 flex flex-col gap-20 items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[64px] font-bold text-main-text text-center px-[100px]"
      >
        How We Aim to Achieve Our Mission
      </motion.h2>

      <div className="flex gap-12 items-center justify-center w-full">
        {/* Left side panel */}
        <div className="bg-[#2A2B2D] h-[456px] w-[70px] rounded-r-[40px] shrink-0" />

        {/* Left arrow */}
        <ArrowButton direction="left" onClick={prevSlide} />

        {/* Main carousel content */}
        <div className="flex flex-col gap-[72px] items-center w-[1050px]">
          {/* Slide content */}
          <div className="bg-[#2A2B2D] rounded-[40px] flex gap-6 items-center w-full overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="flex gap-6 items-center w-full"
              >
                {/* Image with parallax */}
                <motion.div
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-[513px] h-[595px] shrink-0 p-10 pr-4 flex items-center justify-center"
                >
                  <div className="w-[457px] h-[416px] rounded-[32px] overflow-hidden">
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Text content with stagger */}
                <motion.div
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-10 px-8 py-10 flex-1"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-[40px] font-normal text-main-text leading-tight w-[449px]"
                  >
                    {slide.title}
                  </motion.h3>
                  <ul className="flex flex-col gap-6 list-disc ml-9">
                    {slide.points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="text-2xl text-main-text leading-[1.4]"
                      >
                        <span className="text-accent">{point.highlight}</span>
                        {point.text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-[18px] items-center">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                animate={{
                  scale: index === currentSlide ? 1.1 : 1,
                  width: index === currentSlide ? 55 : 18,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`h-[18px] rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-main-text shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                    : 'border-2 border-muted-text hover:border-main-text'
                }`}
                style={{ width: index === currentSlide ? 55 : 18 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <ArrowButton direction="right" onClick={nextSlide} />

        {/* Right side panel */}
        <div className="bg-[#2A2B2D] h-[456px] w-[70px] rounded-l-[40px] shrink-0" />
      </div>
    </section>
  );
}
