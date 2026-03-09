interface TeamCardProps {
  icon: string;
  name: string;
  description?: string | string[];
}

const PLACEHOLDER_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export default function TeamCard({ icon, name, description }: TeamCardProps) {
  const displayDescription = description ?? PLACEHOLDER_DESCRIPTION;
  const isBullets = Array.isArray(displayDescription);

  return (
    <div
      className="group relative flex flex-col rounded-[40px] w-full sm:w-56 md:w-60 lg:w-64 xl:w-[274px] h-[376px] shrink-0 overflow-hidden transition-all duration-300 border-[6px] border-[#2A2B2D] bg-transparent shadow-[0px_4px_10px_0px_rgba(163,178,194,0.25)] hover:bg-[#2A2B2D] hover:border-[#2A2B2D] hover:shadow-[0px_4px_15px_0px_rgba(163,178,194,0.55)]"
      role="article"
      aria-label={name}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
        <div className="flex items-center justify-center min-h-16 md:min-h-20 lg:min-h-[88px] shrink-0">
          <img
            src={icon}
            alt=""
            className="max-w-16 md:max-w-20 lg:max-w-[88px] max-h-16 md:max-h-20 lg:max-h-[88px] w-auto h-auto object-contain"
          />
        </div>
        <p className="text-main-text text-base text-center font-normal leading-normal">
          {name}
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-start p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <p className="text-main-text text-base font-normal leading-normal w-full">
          {name} Team
        </p>
        <div className="mt-4 flex flex-col gap-1.5 w-full">
          {isBullets ? (
            <ul className="list-disc list-inside text-main-text text-sm font-normal leading-normal space-y-1">
              {displayDescription.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-main-text text-sm font-normal leading-normal">
              {displayDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
