import { useState, useEffect } from 'react';
import { teamMembers } from '../../data/teamMembers';
import TeamMemberCard from '../../components/TeamMemberCard';
import {
  HeroHeading,
  SectionHeading,
  BodyText,
} from '../../components/Typography';
import { TeamMember } from '../../types/team';
import teamPhoto from '../../imgs/hero/team-hero.webp';
import SEO from '../../components/SEO';

// Shared layout constants for consistent spacing
const SECTION_WRAPPER = 'py-16';
const CONTAINER = 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
/** Executives keep a single column on small phones (detailed cards); 2+ cols from sm. */
const GRID_EXECUTIVES = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14';
/** Team Leads: Figma mobile — two columns, ~28px gutter; align with V2 mobile design. */
const GRID_TEAM_LEADS =
  'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-14';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const executives = teamMembers.filter((m) => m.category === 'executive');
  const teamLeads = teamMembers.filter((m) => m.category === 'team-lead');

  // Handle ESC key to close expanded card
  useEffect(() => {
    if (!selectedMember) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedMember]);

  return (
    <div className="pb-24">
      <SEO
        title="Team"
        description="Meet the Triton Droids executive board and team leads at UC San Diego"
        path="/team"
      />
      <div className={CONTAINER}>
        <HeroHeading>Meet The Team</HeroHeading>
        <BodyText size="lg" className="mt-6">
          Meet our talented team! Each member brings unique skills and
          experiences, contributing to our collective success. Learn more about
          their backgrounds and expertise below.
        </BodyText>
      </div>

      <div className={`my-8 ${CONTAINER}`}>
        <img
          src={teamPhoto}
          alt="Team photo"
          className="w-full rounded-lg object-contain bg-card-bg"
        />
      </div>

      <section className={SECTION_WRAPPER}>
        <div className={CONTAINER}>
          <SectionHeading className="text-left mb-8">
            Our Executives
          </SectionHeading>
          <div className={GRID_EXECUTIVES}>
            {executives.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() =>
                  setSelectedMember(
                    selectedMember?.id === member.id ? null : member
                  )
                }
                isExpanded={selectedMember?.id === member.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_WRAPPER} mt-12`}>
        <div className={CONTAINER}>
          <SectionHeading className="text-left mb-8">
            Our Team Leads
          </SectionHeading>
          <div className={GRID_TEAM_LEADS}>
            {teamLeads.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() =>
                  setSelectedMember(
                    selectedMember?.id === member.id ? null : member
                  )
                }
                isExpanded={selectedMember?.id === member.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
