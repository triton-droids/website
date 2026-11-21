import type { ReactNode } from 'react';
import { SectionHeading, BodyText } from '../../../components/Typography';

export interface TeamSizeEntry {
  id: string;
  name: string;
  icon: string;
  /** Active members on this team. Leave undefined to show "--". */
  count?: number;
}

interface TeamSizeProps {
  teams: TeamSizeEntry[];
  title?: string;
}

function renderCount(count?: number): ReactNode {
  if (count !== undefined) return count;
  return (
    <>
      <span aria-hidden="true">--</span>
      <span className="sr-only">not available yet</span>
    </>
  );
}

// Values follow the Figma "members sect" frame. Typography's built-in
// size/weight/leading classes win over plain className overrides (Tailwind
// CSS order), so overrides use `!`. leading-[1.22] matches the Figma text
// boxes (32px text -> 39px box).
export default function TeamSize({
  teams,
  title = 'Active Members',
}: TeamSizeProps) {
  // Only show a total once every team has a count, so it is never partial.
  const total = teams.every((team) => team.count !== undefined)
    ? teams.reduce((sum, team) => sum + (team.count ?? 0), 0)
    : undefined;

  return (
    <section className="flex flex-col gap-6 md:gap-10 w-full max-w-[1512px] mx-auto px-4 md:px-12 lg:px-[148px]">
      <SectionHeading className="!text-[24px] md:!text-[32px] !font-bold !leading-[1.22]">
        {title}:{' '}
        <span className={total !== undefined ? 'text-accent' : undefined}>
          {renderCount(total)}
        </span>
      </SectionHeading>

      <ul className="grid grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-4 md:gap-6 xl:gap-10 w-full max-w-[1103px] mx-auto">
        {teams.map((team) => (
          // 3px border + 17px padding = Figma's 20px padding. Side padding is
          // smaller than Figma so names wrap the same without Proxima Nova.
          <li
            key={team.id}
            className="flex flex-col items-center justify-center gap-3 md:gap-5 text-center rounded-[32px] lg:rounded-[40px] border-[3px] border-[#2A2B2D] px-2 py-4 md:py-[17px]"
          >
            <img
              src={team.icon}
              alt=""
              className="w-14 h-14 md:w-16 md:h-16 lg:w-[88px] lg:h-[88px] object-contain"
            />
            <BodyText size="lg" className="!font-bold !leading-[1.22]">
              {team.name}
            </BodyText>
            <BodyText
              size="lg"
              className="!text-[20px] md:!text-[24px] xl:!text-[32px] !font-normal !leading-[1.22]"
            >
              {renderCount(team.count)}
            </BodyText>
          </li>
        ))}
      </ul>
    </section>
  );
}
