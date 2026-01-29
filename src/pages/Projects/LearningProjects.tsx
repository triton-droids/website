import ProjectHeroSection from './components/ProjectHeroSection';
import LearningProjectSection from './components/LearningProjectSection';
import ProjectGallery from './components/ProjectGallery';
import learningAsciiArt from '../../assets/projects/hero/learning-ascii-art.svg';

const hero = {
  title: 'Learning Projects',
  description:
    'In addition to our main project, we have a subset of open source learning projects for skill building purposes. As an inclusive club that accepts members of varying skill levels, we believe that these projects are essential for developing skills that will directly translate to applicable skills for developing a humanoid robot.',
};

const projects = [
  {
    title: 'Triton Pupper',
    description:
      "Triton Droids' newest initiative focuses on developing a robotic dog at the undergraduate level. This project provides hands-on experience with quadruped robotics, from mechanical design to locomotion control.",
  },
  {
    title: 'ARCTOS Robot Arm',
    description:
      'An industrial-scale, six degree of freedom (6-DOF) robotic arm designed to advance research in classical control, learning-based control, and computer vision.',
  },
  {
    title: 'Telearm Project',
    description:
      'The SO101–SO180 Robot Arms are compact, five degree of freedom (5-DOF) robotic arms designed as the primary testbed for reinforcement learning and Vision Language Action (VLA) model development.',
  },
];

const humanoidPlaceholder =
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+1';

const galleryPlaceholders = [
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+1',
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+2',
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+3',
];

export default function LearningProjects() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-20 md:gap-32 items-center w-full">
        <ProjectHeroSection
          title={hero.title}
          description={hero.description}
          asciiArtAsset={learningAsciiArt}
        />
        <div className="flex flex-col gap-20 md:gap-32 w-full items-center px-6 md:px-20 lg:px-[148px]">
          {projects.map((project, index) => (
            <LearningProjectSection
              key={index}
              title={project.title}
              description={project.description}
              imagePlaceholder={humanoidPlaceholder}
            />
          ))}
        </div>
        <ProjectGallery images={galleryPlaceholders} />
      </div>
    </div>
  );
}
