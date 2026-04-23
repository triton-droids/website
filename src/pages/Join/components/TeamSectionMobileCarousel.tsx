import Carousel from '../../../components/Carousel';

export interface TeamSlide {
  id: string;
  name: string;
  icon: string;
  description: string | string[];
}

interface TeamSectionMobileCarouselProps {
  teams: TeamSlide[];
}

function TeamDescription({ text }: { text: string | string[] }) {
  if (Array.isArray(text)) {
    return (
      <div className="mt-2 max-w-[260px] mx-auto space-y-1.5 text-sm text-slate-400 leading-relaxed text-center">
        {text.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    );
  }
  return (
    <p className="text-sm text-slate-400 mt-2 leading-relaxed text-center max-w-[260px] mx-auto">
      {text}
    </p>
  );
}

/** Fixed size so every team card matches; content stays vertically grouped and centered */
const TEAM_CARD_BOX =
  'flex h-[308px] w-full max-w-[300px] mx-auto flex-col items-center justify-center text-center rounded-2xl border border-slate-600/80 bg-transparent px-5 py-6';

export default function TeamSectionMobileCarousel({
  teams,
}: TeamSectionMobileCarouselProps) {
  return (
    <div className="md:hidden w-full max-w-[1512px] mx-auto px-14 sm:px-16">
      <Carousel
        slides={teams}
        arrowOffset="card"
        slideClassName="flex-[0_0_100%] shrink-0 px-2 sm:px-3"
        renderSlide={(team) => (
          <article className={TEAM_CARD_BOX} aria-label={`${team.name} team`}>
            <div className="flex max-h-[248px] w-full flex-col items-center justify-center gap-3 overflow-hidden px-1">
              <div className="flex size-14 shrink-0 items-center justify-center">
                <img
                  src={team.icon}
                  alt=""
                  className="max-h-12 max-w-12 object-contain"
                />
              </div>
              <h3 className="text-main-text text-lg font-semibold leading-tight">
                {team.name} Team
              </h3>
              <TeamDescription text={team.description} />
            </div>
          </article>
        )}
        renderPagination={(total, selectedIndex, onDotClick) => (
          <div className="flex gap-2.5 items-center justify-center w-full mt-8">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onDotClick(i)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === selectedIndex
                    ? 'bg-main-text w-10 h-2.5'
                    : 'border-2 border-muted-text size-2.5 hover:border-main-text'
                }`}
                aria-label={`Go to team ${i + 1}`}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
}
