import { motion } from 'motion/react';
import challengeIcon from '../../../assets/icons/challenge-icon.svg';
import missionIcon from '../../../assets/icons/mission-icon.svg';
import focusIcon from '../../../assets/icons/focus-icon.svg';
import {
  SectionHeading,
  CardTitle,
  BodyText,
} from '../../../components/Typography';

interface VisionCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  bodyWidthClass?: string;
}

function VisionCard({
  icon,
  title,
  children,
  bodyWidthClass,
  delay = 0,
}: VisionCardProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -10, transition: { duration: 0.2, delay: 0 } }}
      className="border-[6px] border-[#2A2B2D] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 px-6 md:px-8 lg:px-[70px] py-6 md:py-8 lg:py-[40px] flex-1 basis-0 min-w-0 lg:h-[558px] bg-main-bg"
    >
      <div className="size-16 md:size-20 lg:size-[88px] flex items-center justify-center shrink-0">
        <img alt="" className="max-w-full max-h-full" src={icon} />
      </div>
      <CardTitle className="text-center font-normal text-2xl md:text-3xl lg:text-[32px] xl:text-[32px] leading-none">
        {title}
      </CardTitle>
      {/* Let card text flow naturally within the flex container */}
      <BodyText
        size="sm"
        className={`text-center mx-auto font-normal leading-normal ${
          bodyWidthClass ?? 'max-w-[254px]'
        }`}
      >
        {children}
      </BodyText>
    </motion.div>
  );
}

export default function VisionSection() {
  return (
    <section className="flex flex-col gap-10 md:gap-16 lg:gap-[80px] items-center justify-center pb-12 md:pb-16 lg:pb-20 pt-6 md:pt-8 lg:pt-10 px-6 md:px-12 lg:px-[100px] xl:px-[148px] bg-main-bg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full"
      >
        <SectionHeading className="w-full text-left font-bold text-3xl md:text-4xl lg:text-[64px]">
          A Future Worth Building
        </SectionHeading>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-9 items-stretch w-full max-w-[1400px]">
        <VisionCard
          icon={challengeIcon}
          title="Our Challenge"
          bodyWidthClass="max-w-[254px]"
          delay={0.1}
        >
          At Triton Droids, we&apos;re taking on one of the biggest challenges
          of our time:{' '}
          <span className="text-accent">
            creating affordable, high-efficiency humanoid robots
          </span>{' '}
          that can level the playing field in global production.
        </VisionCard>

        <VisionCard
          icon={missionIcon}
          title="Our Mission"
          bodyWidthClass="max-w-[237px]"
          delay={0.3}
        >
          To{' '}
          <span className="text-accent">
            design robots that can work in any environment
          </span>
          , from dangerous mines to remote farms, and{' '}
          <span className="text-accent">empower communities</span> that have
          been left behind by technology.
        </VisionCard>

        <VisionCard
          icon={focusIcon}
          title="Our Focus"
          bodyWidthClass="max-w-[244px]"
          delay={0.5}
        >
          <span className="text-accent">Bridging the tech gap</span> between the
          rich and poor countries can make an incremental difference in value
          creation by <span className="text-accent">over $2 trillion</span>.
        </VisionCard>
      </div>
    </section>
  );
}
