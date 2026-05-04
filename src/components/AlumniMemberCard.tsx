import { AlumniMember } from '../data/alumniMembers';

interface AlumniMemberCardProps {
  member: AlumniMember;
}

export default function AlumniMemberCard({ member }: AlumniMemberCardProps) {
  return (
    <div className="rounded-card flex flex-col bg-main-bg w-full">
      {/* Picture Section */}
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

      {/* Text Section */}
      <section className="w-full bg-main-bg rounded-b-card px-2 pt-2 pb-3 sm:px-6 sm:pt-3 sm:pb-4 text-left">
        {/* White Name Text */}
        <h3 className="text-sm sm:text-base md:text-xl font-bold text-white mb-0 leading-tight">
          {member.name}
        </h3>

        <p className="text-xs sm:text-sm font-bold uppercase mb-0 leading-tight text-muted-text">
          {member.role}
        </p>

        <p className="text-xs sm:text-sm font-medium mb-0 leading-tight text-muted-text">
          {member.academicYear}
        </p>
      </section>
    </div>
  );
}
