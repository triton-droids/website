import TeamCard from './TeamCard';

// Local team icons
import mechanicalIcon from '../../assets/join/mechanical-icon.svg';
import softwareIcon from '../../assets/join/software-icon.svg';
import electricalIcon from '../../assets/join/electrical-icon.svg';
import marketingIcon from '../../assets/join/marketing-icon.svg';
import businessIcon from '../../assets/join/business-icon.svg';
import designIcon from '../../assets/join/design-icon.svg';

const mainTeams = [
  { id: 'mechanical', name: 'Mechanical', icon: mechanicalIcon },
  { id: 'software', name: 'Software', icon: softwareIcon },
  { id: 'electrical', name: 'Electrical', icon: electricalIcon },
];

const internalTeams = [
  { id: 'marketing', name: 'Marketing', icon: marketingIcon },
  { id: 'business', name: 'Business', icon: businessIcon },
  { id: 'design', name: 'Design', icon: designIcon },
];

export default function TeamsSection() {
  return (
    <section className="flex flex-col gap-4 items-start w-full max-w-[1100px] mx-auto px-6 pb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-text">Teams</h2>

      {/* Main Droid Teams */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg md:text-xl lg:text-2xl text-main-text">MAIN DROID TEAMS:</h3>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
            {mainTeams.map((team) => (
              <TeamCard key={team.id} icon={team.icon} name={team.name} />
            ))}
          </div>
        </div>

        {/* Internal Teams */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg md:text-xl lg:text-2xl text-main-text">INTERNAL:</h3>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
            {internalTeams.map((team) => (
              <TeamCard key={team.id} icon={team.icon} name={team.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
