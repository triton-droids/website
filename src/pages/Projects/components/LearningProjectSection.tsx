import { SectionHeading, BodyText } from '../../../components/Typography';
import ModelViewer from './ModelViewer';

interface LearningProjectSectionProps {
  title: string;
  description: string;
  modelUrl?: string;
  modelOrientation?: string;
}

export default function LearningProjectSection({
  title,
  description,
  modelUrl,
  modelOrientation,
}: LearningProjectSectionProps) {
  return (
    <div className="flex flex-col gap-20 md:gap-32 w-full max-w-[1228px]">
      <div className="rounded-[40px] bg-[#1A1A1A] p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
        <div className="w-full lg:w-[280px] lg:max-w-[280px] shrink-0">
          <SectionHeading className="!text-accent !font-light text-center lg:text-left">
            {title}
          </SectionHeading>
        </div>
        <BodyText size="base" className="flex-1">
          {description}
        </BodyText>
      </div>
      <div className="w-full max-w-[1400px] mx-auto">
        <ModelViewer
          modelUrl={modelUrl}
          orientation={modelOrientation}
          fallbackImage={undefined}
          alt={`${title} 3D Model`}
        />
      </div>
    </div>
  );
}
