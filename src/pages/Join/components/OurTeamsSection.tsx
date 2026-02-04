import HumanoidTeamsSection from './HumanoidTeamsSection';
import InternalOpsSection from './InternalOpsSection';
import PupperTeamsSection from './PupperTeamsSection';
import { SectionHeading } from '../../../components/Typography';

export default function OurTeamsSection() {
  return (
    <section className="flex flex-col w-full">
      {/* Our Teams Header - uses standard container */}
      <div className="px-6 md:px-12 lg:px-[148px] py-12 md:py-16 lg:py-20 w-full max-w-[1512px] mx-auto">
        <SectionHeading className="w-full !text-[32px] md:!text-[48px] lg:!text-[64px] !font-bold !leading-none">
          Our Teams
        </SectionHeading>
      </div>

      {/* Humanoid Droid Project */}
      <HumanoidTeamsSection />

      {/* Internal Operations */}
      <InternalOpsSection />

      {/* Triton Pupper */}
      <PupperTeamsSection />
    </section>
  );
}
