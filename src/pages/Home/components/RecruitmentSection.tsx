import { motion } from 'motion/react';
import { SectionHeading, BodyText } from '../../../components/Typography';

export default function RecruitmentSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center text-center py-12 md:py-16 lg:py-20 w-full px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading className="leading-tight">
          2025-2026 Member Recruitment is{' '}
          <span className="text-accent">Closed</span>
        </SectionHeading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <BodyText size="lg" className="text-muted-text">
          Stay tuned for our next application season!
        </BodyText>
      </motion.div>
    </section>
  );
}
