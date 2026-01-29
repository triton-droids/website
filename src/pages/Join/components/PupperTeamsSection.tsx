import mechanicalIcon from '../../../assets/pupper/mechanical-icon.svg';
import electricalIcon from '../../../assets/pupper/electrical-icon.svg';
import embeddedSystemsIcon from '../../../assets/pupper/embedded-systems-icon.svg';
import machineLearningIcon from '../../../assets/pupper/machine-learning-icon.svg';
import { SectionHeading, BodyText } from '../../../components/Typography';

interface TeamCardProps {
  icon: string;
  name: string;
}

function TeamCard({ icon, name }: TeamCardProps) {
  return (
    // Use aspect ratio instead of fixed height
    <div className="border-[6px] border-[#2A2B2D] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] w-full sm:w-56 md:w-60 lg:w-64 xl:w-[274px] aspect-[3/4] flex flex-col items-center justify-center gap-4 shrink-0">
      <img
        src={icon}
        alt={name}
        className="w-10 md:w-12 lg:w-[50px] h-10 md:h-12 lg:h-[50px]"
      />
      <span className="text-lg md:text-xl lg:text-2xl text-main-text text-center px-4 md:px-6 lg:px-8">
        {name}
      </span>
    </div>
  );
}

const teams = [
  { id: 'mechanical', name: 'Mechanical', icon: mechanicalIcon },
  { id: 'electrical', name: 'Electrical', icon: electricalIcon },
  {
    id: 'software-embedded',
    name: 'Software: Embedded Systems',
    icon: embeddedSystemsIcon,
  },
  {
    id: 'software-ml',
    name: 'Software: Machine Learning',
    icon: machineLearningIcon,
  },
];

export default function PupperTeamsSection() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-center justify-center py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20 w-full">
      <div className="flex flex-col w-full max-w-7xl">
        <SectionHeading className="text-2xl md:text-3xl lg:text-4xl">
          Triton Pupper
        </SectionHeading>
        <BodyText size="lg" className="text-slate-400">
          Main Engineering Teams
        </BodyText>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-center w-full max-w-7xl">
        {teams.map((team) => (
          <TeamCard key={team.id} icon={team.icon} name={team.name} />
        ))}
      </div>
    </section>
  );
}
