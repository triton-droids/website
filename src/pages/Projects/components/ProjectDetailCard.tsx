import { CardTitle, BodyText } from '../../../components/Typography';

interface ProjectDetailCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ProjectDetailCard({
  icon,
  title,
  description,
}: ProjectDetailCardProps) {
  return (
    <div className="border-[6px] border-[#2A2B2D] rounded-[24px] lg:rounded-[40px] flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center px-6 md:px-10 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10 xl:py-12 bg-main-bg">
      {/* Icon and Title Section - uses min-width for alignment consistency */}
      <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center w-full lg:w-auto lg:min-w-[160px] xl:min-w-[180px] shrink-0">
        {/* Icon - responsive sizing */}
        <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[88px] xl:h-[88px] flex items-center justify-center shrink-0">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <CardTitle className="font-normal text-slate-400 leading-none text-center">
          {title}
        </CardTitle>
      </div>

      {/* Description - flex-1 to fill remaining space */}
      <BodyText className="flex-1 text-center lg:text-left">
        {description}
      </BodyText>
    </div>
  );
}
