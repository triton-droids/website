import { Suspense, lazy, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import heroBackground from '../../../assets/hero-background.png';
import robotScene from '../../../assets/splinerobot/nexbot_robot_character_concept (1).spline';
import { HeroHeading, BodyText } from '../../../components/Typography';

const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function SplineScene() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Spline scene={robotScene} onLoad={() => setLoaded(true)} />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[50vh] lg:min-h-[70vh] px-6 md:px-12 lg:px-16 xl:px-20 bg-main-bg">
      {/* Background image */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none z-0">
        <img
          alt=""
          className="absolute h-full right-0 top-0 max-w-none object-contain object-right"
          src={heroBackground}
        />
      </div>

      {/* 3D Robot Spline */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 md:w-2/3 pointer-events-auto z-10 hidden md:flex items-center justify-end">
        <Suspense fallback={<SplineLoader />}>
          <SplineScene />
        </Suspense>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start w-full max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex flex-col gap-4 md:gap-6 items-start text-main-text">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <HeroHeading className="max-w-full xl:max-w-4xl">
              Engineering What Comes Next
            </HeroHeading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <BodyText size="lg" className="max-w-full lg:max-w-3xl">
              We&apos;re building autonomous humanoid robots to expand global
              access to robotics—powered by students, experts, and industry
              partners working toward a more equitable future.
            </BodyText>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              const section = document.getElementById('projects');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-accent text-button-text text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 transition-colors"
          >
            Our Projects
          </a>
          <Link
            to="/join"
            className="outline outline-1 outline-offset-[-1px] outline-accent text-accent text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 transition-colors"
          >
            Join Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
