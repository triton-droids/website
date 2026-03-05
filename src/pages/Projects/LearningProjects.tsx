import ProjectHeroSection from './components/ProjectHeroSection';
import LearningProjectSection from './components/LearningProjectSection';
import ProjectGallery from './components/ProjectGallery';
import SEO from '../../components/SEO';
import learningAsciiArt from '../../assets/projects/hero/learning-ascii-art.svg';
import arctosModel from '../../assets/models/arctos-optimized.glb';
import pupperModel from '../../assets/models/pupper.glb';
import so101Model from '../../assets/models/SO101.glb';
import galleryImage1 from '../../assets/projects/humanoid-gallery/gallery-1.jpg';
import galleryImage2 from '../../assets/projects/humanoid-gallery/gallery-2.jpg';
import galleryImage3 from '../../assets/projects/humanoid-gallery/gallery-3.jpg';
import galleryImage4 from '../../assets/projects/humanoid-gallery/gallery-4.jpg';
import galleryImage5 from '../../assets/projects/humanoid-gallery/gallery-5.png';
import galleryImage6 from '../../assets/projects/humanoid-gallery/gallery-6.png';

const hero = {
  title: 'Learning Projects',
  description:
    'In addition to our main project, we have a subset of open source learning projects for skill building purposes. As an inclusive club that accepts members of varying skill levels, we believe that these projects are essential for developing skills that will directly translate to applicable skills for developing a humanoid robot.',
};

const projects = [
  {
    title: 'Triton Pupper',
    description:
      'The Triton Pupper Project is Triton Droids’ newest initiative at inspiring undergraduate students to break boundaries with modern innovation. Next to developing a humanoid robot, the Triton Pupper Team is aiming to develop a robotic dog at the undergraduate level. The goals of this initiative include building a proof-of-concept out of the Petoi Bittle Dog, and then graduating to an industry-grade robotic dog that matches the sophistication of those built by Boston Dynamics, Unitree, and Ghost Robotics, to name a few.',
    modelUrl: pupperModel,
    modelOrientation: '-90deg -90deg 180deg',
    cameraOrbit: undefined as string | undefined,
    cameraTarget: undefined as string | undefined,
  },
  {
    title: 'ARCTOS Robot Arm',
    description:
      'The ARCTOS Arm is an industrial-scale, six degree of freedom (6 DoF) robotic arm designed to advance research in classical control, learning-based control, and computer vision. As an open source project, Triton Droids aims to expand its capabilities by developing and sharing new software packages and 3D printable components with the broader robotics community. The arm will integrate with cutting-edge technologies such as the Amazing Hand by Pollen Robotics and Vision-Language-Action (VLA) models, enabling intelligent, general-purpose task performance and pushing the limits of autonomous manipulation.',
    modelUrl: arctosModel,
    modelOrientation: undefined as string | undefined,
    cameraOrbit: undefined as string | undefined,
    cameraTarget: '0 1.5 0',
  },
  {
    title: 'SO101 Robot Arms',
    description:
      'TThe SO101 - SO100 Robot Arms are compact, five degree of freedom (5 DoF) robotic systems designed as the primary testbed for reinforcement learning and Vision Language Action (VLA) model development. Their small form factor enables rapid experimentation and scalable testing, allowing the Simulations Team to prototype and refine intelligent control algorithms before deploying them onto the main humanoid robot.',
    modelUrl: so101Model,
    modelOrientation: undefined as string | undefined,
    cameraOrbit: undefined as string | undefined,
    cameraTarget: undefined as string | undefined,
  },
];

const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
];

export default function LearningProjects() {
  return (
    <div className="bg-main-bg min-h-screen">
      <SEO
        title="Learning Projects"
        description="Hands-on learning with Pupper, ARCTOS, SO101"
        path="/projects/learning-projects"
      />
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
              modelUrl={project.modelUrl}
              modelOrientation={project.modelOrientation}
              cameraOrbit={project.cameraOrbit}
              cameraTarget={project.cameraTarget}
            />
          ))}
        </div>
        <ProjectGallery images={galleryImages} />
      </div>
    </div>
  );
}
