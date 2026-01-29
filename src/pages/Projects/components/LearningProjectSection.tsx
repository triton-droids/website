import { SectionHeading, BodyText } from '../../../components/Typography';

interface LearningProjectSectionProps {
  title: string;
  description: string;
  imagePlaceholder?: string;
}

export default function LearningProjectSection({
  title,
  description,
  imagePlaceholder,
}: LearningProjectSectionProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1228px]">
      <div className="rounded-[40px] bg-[#1A1A1A] p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <SectionHeading className="!text-accent !font-light shrink-0 lg:max-w-[280px]">
          {title}
        </SectionHeading>
        <BodyText size="base" className="flex-1">
          {description}
        </BodyText>
      </div>
      <div className="w-full rounded-[40px] overflow-hidden bg-[#1A1A1A] min-h-[240px] md:min-h-[320px] flex items-center justify-center">
        {imagePlaceholder ? (
          <img
            src={imagePlaceholder}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full min-h-[240px] md:min-h-[320px] flex items-center justify-center text-muted-text">
            <span className="text-lg">Image placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
}
