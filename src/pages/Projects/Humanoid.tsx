import ProjectHeroSection from './components/ProjectHeroSection';
import ProjectDetailCard from './components/ProjectDetailCard';
import ProjectGallery from './components/ProjectGallery';
import ModelViewer from './components/ModelViewer';
import rationaleIcon from '../../assets/projects/icons/rationale-icon.svg';
import functionIcon from '../../assets/projects/icons/function-icon.svg';
import approachIcon from '../../assets/projects/icons/approach-icon.svg';
import progressIcon from '../../assets/projects/icons/progress-icon.svg';
import lowerBodyModel from '../../assets/models/1.26.26 Lower Body.glb';
import humanoidAsciiArt from '../../assets/projects/hero/humanoid-ascii-art.png';
import galleryImage1 from '../../assets/projects/humanoid-gallery/gallery-1.jpg';
import galleryImage2 from '../../assets/projects/humanoid-gallery/gallery-2.jpg';
import galleryImage3 from '../../assets/projects/humanoid-gallery/gallery-3.jpg';
import galleryImage4 from '../../assets/projects/humanoid-gallery/gallery-4.jpg';
import galleryImage5 from '../../assets/projects/humanoid-gallery/gallery-5.png';
import galleryImage6 from '../../assets/projects/humanoid-gallery/gallery-6.png';

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
  const modelInsertAfter = 'Approach';

  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-20 md:gap-32 items-center">
        <ProjectHeroSection
          title={humanoidProject.title}
          description={humanoidProject.description}
          asciiArtAsset={humanoidAsciiArt}
          mediaWrapperClassName="max-w-[1215px] h-[530px] bg-[#101010] mx-auto"
          mediaClassName="h-full object-cover object-top"
        />
        <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-[148px]">
          {humanoidProject.sections.map((section, index) => (
            <div
              key={`${section.title}-${index}`}
              className="flex flex-col gap-12 md:gap-16"
            >
              <ProjectDetailCard
                icon={section.icon}
                title={section.title}
                description={section.description}
              />
              {section.title === modelInsertAfter && (
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-[900px]">
                    <ModelViewer
                      modelUrl={humanoidProject.modelUrl}
                      alt={`${humanoidProject.title} Lower Body Model`}
                      className="rounded-[32px] lg:rounded-[40px] bg-[#E0E0E0] h-[360px] md:h-[420px] lg:h-[480px]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <ProjectGallery images={humanoidProject.galleryImages} />
      </div>
    </div>
  );
}
