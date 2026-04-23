import mechanicalIcon from '../../../assets/pupper/mechanical-icon.svg';
import electricalIcon from '../../../assets/pupper/electrical-icon.svg';
import embeddedSystemsIcon from '../../../assets/pupper/embedded-systems-icon.svg';
import machineLearningIcon from '../../../assets/pupper/machine-learning-icon.svg';
import { SectionHeading, BodyText } from '../../../components/Typography';
import TeamCard from './TeamCard';
import TeamSectionMobileCarousel from './TeamSectionMobileCarousel';

const teams = [
  {
    id: 'mechanical',
    name: 'Mechanical',
    icon: mechanicalIcon,
    description:
      'Design and build the robotic dog’s structure—legs, joints, and body. Work from proof-of-concept builds toward industry-grade hardware and locomotion.',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: electricalIcon,
    description:
      'Design and integrate power, sensors, and electronics for the Pupper. Enable sensing and actuation that support agile, responsive behavior.',
  },
  {
    id: 'software-embedded',
    name: 'Software: Embedded Systems',
    icon: embeddedSystemsIcon,
    description:
      'Develop real-time control and firmware for the Pupper. Implement low-level code for gait, balance, and sensor processing on the platform.',
  },
  {
    id: 'software-ml',
    name: 'Software: Machine Learning',
    icon: machineLearningIcon,
    description:
      'Bring intelligence to the Pupper with learning-based control and perception. Prototype algorithms that can later scale to the humanoid.',
  },
];

export default function PupperTeamsSection() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-start justify-center py-12 md:py-16 lg:py-20 w-full">
      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <div className="flex flex-col w-full">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl">
            Triton Pupper Project
          </SectionHeading>
          <BodyText size="lg" className="text-slate-400">
            Main Engineering Teams
          </BodyText>
        </div>
      </div>
      <TeamSectionMobileCarousel teams={teams} />
      <div className="hidden md:block w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-center w-full">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              icon={team.icon}
              name={team.name}
              description={team.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
