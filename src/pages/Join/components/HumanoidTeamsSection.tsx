import mechanicalIcon from '../../../assets/humanoid/mechanical-icon.svg';
import electricalIcon from '../../../assets/humanoid/electrical-icon.svg';
import embeddedSystemsIcon from '../../../assets/humanoid/embedded-systems-icon.svg';
import machineLearningIcon from '../../../assets/humanoid/machine-learning-icon.svg';
import { SectionHeading, BodyText } from '../../../components/Typography';
import TeamCard from './TeamCard';
import TeamSectionMobileCarousel from './TeamSectionMobileCarousel';

const teams = [
  {
    id: 'mechanical',
    name: 'Mechanical',
    icon: mechanicalIcon,
    description:
      'Design and build the physical structure—legs, joints, and upper body. Focus on bipedal locomotion, structural integrity, and iterative prototyping from lower body to torso, arms, and head.',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: electricalIcon,
    description:
      'Design and integrate power systems, sensors, and wiring so the robot can sense and act. Work on the hardware that connects perception to motion and supports control systems.',
  },
  {
    id: 'software-embedded',
    name: 'Software: Embedded Systems',
    icon: embeddedSystemsIcon,
    description:
      'Develop real-time control systems and firmware on the robot. Bridge hardware and software with low-level code for locomotion, balance, and sensor integration.',
  },
  {
    id: 'software-ml',
    name: 'Software: Machine Learning',
    icon: machineLearningIcon,
    description:
      'Build the intelligence: reinforcement learning, vision-language-action models, and learning-based control for autonomous behavior and manipulation on the humanoid platform.',
  },
];

export default function HumanoidTeamsSection() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-start justify-center py-12 md:py-16 lg:py-20 w-full">
      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <div className="flex flex-col w-full">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl">
            Humanoid Droid Project
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
