import type { KeyboardEvent } from 'react';
import { TeamMember } from '../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
  isExpanded?: boolean;
}

// LinkedIn icon SVG - square with 'in' logo
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <rect width="24" height="24" fill="#000" rx="2" />
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="#fff"
    />
  </svg>
);

function ExecutiveCard({ member }: { member: TeamMember }) {
  return (
    <article
      className="rounded-card border-2 border-gray-600 bg-main-bg w-full text-left overflow-hidden"
      style={{
        boxShadow:
          '0 0 20px rgba(75, 85, 99, 0.4), 0 0 40px rgba(75, 85, 99, 0.2)',
      }}
    >
      {/* Mobile V2: portrait left, role / name / bio right — no hover motion */}
      <div className="flex flex-row gap-4 items-start p-4 md:flex-col md:gap-0 md:p-0">
        <section
          className="w-[38%] max-w-[168px] shrink-0 overflow-hidden rounded-2xl bg-main-bg md:w-full md:max-w-none md:rounded-none md:rounded-t-card"
          style={{ aspectRatio: '13 / 14' }}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover block rounded-2xl md:rounded-3xl"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-main-bg to-main-bg/50 rounded-2xl md:rounded-3xl">
              <div className="text-4xl font-bold text-accent md:text-6xl">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            </div>
          )}
        </section>

        <section className="flex-1 min-w-0 flex flex-col gap-1 md:px-6 md:py-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-accent mb-0">
            {member.role}
          </p>
          <div className="flex items-center gap-2 flex-wrap min-h-[1.125rem]">
            <h3 className="text-base md:text-xl font-bold text-main-text leading-tight mb-0">
              {member.name}
            </h3>
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main-text shrink-0 flex items-center justify-center hover:opacity-80 [&>svg]:block"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            ) : (
              <span
                className="text-main-text shrink-0 flex items-center [&>svg]:block"
                aria-hidden
              >
                <LinkedInIcon />
              </span>
            )}
          </div>
          {member.bio ? (
            <p className="text-sm leading-snug text-main-text mt-2 whitespace-pre-line mb-0">
              {member.bio}
            </p>
          ) : null}
        </section>
      </div>
    </article>
  );
}

export default function TeamMemberCard({
  member,
  onClick,
  isExpanded = false,
}: TeamMemberCardProps) {
  const modalId = `member-modal-${member.id}`;
  const nameId = `member-name-${member.id}`;
  const bioId = `member-bio-${member.id}`;
  const isExecutive = member.category === 'executive';

  // Executives: static layout per mobile Figma (no expand / no hover scale)
  if (isExecutive) {
    return <ExecutiveCard member={member} />;
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // Expanded profile view (team leads only)
  if (isExpanded) {
    return (
      <button
        type="button"
        className="rounded-card cursor-pointer flex flex-col bg-main-bg w-full text-left overflow-hidden col-span-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-main-bg"
        style={{
          boxShadow:
            '0 0 40px rgba(254, 206, 0, 0.2), 0 0 80px rgba(0, 0, 0, 0.5)',
        }}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby={nameId}
        aria-describedby={bioId}
        id={modalId}
      >
        <section
          className="w-full rounded-t-card overflow-hidden bg-main-bg flex flex-col p-4"
          style={{ aspectRatio: '13 / 14' }}
        >
          <div className="flex items-center gap-2 min-h-[1.125rem]">
            <h2
              id={nameId}
              className="text-lg font-bold text-main-text leading-none mb-0"
            >
              {member.name}
            </h2>
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main-text shrink-0 flex items-center justify-center hover:opacity-80 [&>svg]:block"
                aria-label={`${member.name} on LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedInIcon />
              </a>
            ) : (
              <span
                className="text-main-text shrink-0 flex items-center [&>svg]:block"
                aria-hidden
              >
                <LinkedInIcon />
              </span>
            )}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-wider mb-1 text-accent">
            {member.role}
          </p>

          {member.bio && (
            <div
              id={bioId}
              className="flex-1 min-h-0 flex flex-col overflow-hidden"
            >
              <p className="text-sm leading-snug text-main-text whitespace-pre-line overflow-hidden">
                {member.bio}
              </p>
            </div>
          )}
        </section>

        <section className="w-full bg-main-bg rounded-b-card px-6 py-4" />
      </button>
    );
  }

  // Collapsed card view (team leads)
  return (
    <button
      type="button"
      className="rounded-card cursor-pointer hover:scale-105 transition-transform flex flex-col bg-main-bg w-full text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-main-bg"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-haspopup="dialog"
      aria-controls={modalId}
      aria-label={`View ${member.name}'s profile`}
    >
      <section
        className="w-full rounded-t-card overflow-hidden bg-main-bg relative"
        style={{ aspectRatio: '13 / 14' }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover block rounded-3xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-main-bg to-main-bg/50">
            <div className="text-6xl font-bold text-accent">
              {member.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          </div>
        )}
      </section>

      <section className="w-full bg-main-bg rounded-b-card px-2 py-3 sm:px-6 sm:py-4 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase mb-0 text-role-blue">
          {member.role}
        </p>

        <div className="flex items-center justify-center gap-1 sm:gap-2 min-h-[1.125rem] flex-wrap">
          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-main-text leading-tight">
            {member.name}
          </h3>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-main-text shrink-0 flex items-center justify-center hover:opacity-80 [&>svg]:block"
              aria-label={`${member.name} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedInIcon />
            </a>
          ) : (
            <span
              className="text-main-text shrink-0 flex items-center [&>svg]:block"
              aria-hidden
            >
              <LinkedInIcon />
            </span>
          )}
        </div>
      </section>
    </button>
  );
}
