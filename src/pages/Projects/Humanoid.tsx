import ProjectDetailCard from './components/ProjectDetailCard';
import ProjectGallery from './components/ProjectGallery';
import ModelViewer from './components/ModelViewer';
import rationaleIcon from '../../assets/projects/icons/rationale-icon.svg';
import SEO from '../../components/SEO';
import functionIcon from '../../assets/projects/icons/function-icon.svg';
import approachIcon from '../../assets/projects/icons/approach-icon.svg';
import progressIcon from '../../assets/projects/icons/progress-icon.svg';
import lowerBodyModel from '../../assets/models/1.26.26 Lower Body.glb';
import galleryImage1 from '../../assets/projects/humanoid-gallery/gallery-1.jpg';
import galleryImage2 from '../../assets/projects/humanoid-gallery/gallery-2.jpg';
import galleryImage3 from '../../assets/projects/humanoid-gallery/gallery-3.jpg';
import galleryImage4 from '../../assets/projects/humanoid-gallery/gallery-4.jpg';
import galleryImage5 from '../../assets/projects/humanoid-gallery/gallery-5.webp';
import galleryImage6 from '../../assets/projects/humanoid-gallery/gallery-6.webp';
import { HeroHeading, BodyText } from '../../components/Typography';

const humanoidProject = {
  title: 'Humanoid Robot',
  description:
    "Developing UCSD's first full-scale humanoid robot through a staged, research-driven approach to bipedal locomotion and real-world functionality.",
  sections: [
    {
      icon: rationaleIcon,
      title: 'Rationale',
      description:
        "The humanoid robot industry is rapidly emerging, with companies like Tesla, Boston Dynamics, and Figure leading the charge. These robots have the potential to revolutionize industries from manufacturing to healthcare. At Triton Droids, we're bridging the gap between academic research and real-world robotics technology, creating a platform for students to contribute to this cutting-edge field.",
    },
    {
      icon: functionIcon,
      title: 'Function',
      description:
        'Our humanoid robot is designed to perform essential human movements including walking, balancing, object manipulation, and navigation. It will be equipped with advanced sensors for object detection, spatial awareness, and environmental interaction. The robot will be capable of performing tasks in hazardous environments, assisting in research, and serving as a platform for AI and machine learning development.',
    },
    {
      icon: approachIcon,
      title: 'Approach',
      description:
        "We are taking a staged, research-driven approach to development. Our initial focus is on the robot's lower body, mastering bipedal locomotion through iterative design and testing. We are building a solid foundation in mechanical design, control systems, and sensor integration before moving to upper body development. This methodical approach ensures each component is thoroughly tested and optimized.",
    },
    {
      icon: progressIcon,
      title: 'Progress',
      description:
        'We have successfully manufactured the lower body of our humanoid robot, including the legs, feet, and hip assembly. Our current goal is to achieve stable lower body locomotion by the end of 2025. We are also in the process of designing the upper body, including the torso, arms, and head assembly. Our team is actively working on control algorithms, sensor integration, and testing protocols.',
    },
  ],
  galleryImages: [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ],
  modelUrl: lowerBodyModel,
};

export default function Humanoid() {
  return (
    <div className="bg-main-bg min-h-screen">
      <SEO
        title="Humanoid Robot"
        description="Our flagship humanoid robot project"
        path="/projects/humanoid"
      />
      <div className="flex flex-col gap-0 md:gap-20 lg:gap-32 items-center">
        <section className="flex flex-col gap-5 md:gap-10 items-start px-4 py-5 md:px-12 lg:px-16 xl:px-20 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 items-start w-full">
            <HeroHeading>{humanoidProject.title}</HeroHeading>
            <BodyText
              size="lg"
              className="text-xs leading-normal md:text-lg md:leading-relaxed max-w-4xl"
            >
              {humanoidProject.description}
            </BodyText>
          </div>

          <div className="w-full">
            <ModelViewer
              modelUrl={humanoidProject.modelUrl}
              alt={`${humanoidProject.title} Lower Body Model`}
              className="rounded-[16px] md:rounded-[32px] lg:rounded-[40px] bg-black h-[179px] sm:h-[220px] md:h-[460px] lg:h-[530px]"
            />
          </div>
        </section>
        <div className="flex flex-col gap-5 md:gap-12 lg:gap-16 w-full max-w-[1400px] mx-auto px-4 md:px-20 lg:px-[148px] py-5 md:py-0">
          {humanoidProject.sections.map((section, index) => (
            <ProjectDetailCard
              key={`${section.title}-${index}`}
              icon={section.icon}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
        <ProjectGallery
          images={humanoidProject.galleryImages}
          sectionClassName="py-5 md:py-0"
        />
      </div>
    </div>
  );
}
