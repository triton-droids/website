import designIcon from '../../../assets/join/design-icon-new.svg';
import businessIcon from '../../../assets/join/business-icon.svg';
import webdevIcon from '../../../assets/join/webdev-icon.svg';
import marketingIcon from '../../../assets/join/marketing-icon-new.svg';
import { SectionHeading, BodyText } from '../../../components/Typography';
import TeamCard from './TeamCard';

const internalOpsTeams = [
  {
    id: 'design',
    name: 'Design',
    icon: designIcon,
    description:
      'Create our visual identity and user experience—from branding and graphics to interfaces that communicate our work and mission to the world.',
  },
  {
    id: 'business',
    name: 'Business',
    icon: businessIcon,
    description:
      'Manage operations, partnerships, and sponsorship. Keep the organization running and help secure the resources that fuel our projects.',
  },
  {
    id: 'webdev',
    name: 'Web Development',
    icon: webdevIcon,
    description:
      'Build and maintain Triton Droids’ digital presence—this site and other tools that connect our community and showcase our projects.',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: marketingIcon,
    description:
      'Lead outreach and storytelling through social media, content, and communications that share our mission and attract members and partners.',
  },
];

export default function InternalOpsSection() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-start justify-center py-12 md:py-16 lg:py-20 w-full">
      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <div className="flex flex-col w-full">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl">
            Internal
          </SectionHeading>
          <BodyText size="lg" className="text-slate-400">
            Operations Teams
          </BodyText>
        </div>
      </div>
      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-center w-full">
          {internalOpsTeams.map((team) => (
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
