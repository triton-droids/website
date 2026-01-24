import { useState } from 'react';
import { Link } from 'react-router-dom';
import humanoidIcon from '../assets/projects/humanoid-icon.svg';
import pupperIcon from '../assets/projects/pupper-icon.svg';
import robocupIcon from '../assets/projects/robocup-icon.svg';
import humanoidImage from '../assets/projects/humanoid-image.jpg';
import pupperImage from '../assets/projects/pupper-image.jpg';
import robocupImage from '../assets/projects/robocup-image.png';

interface ProjectData {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    id: 'humanoid',
    icon: humanoidIcon,
    title: 'Humanoid Robot',
    description:
      'Humanoid robots represent a rapidly emerging industry with an enormous growth potential. Unlike specialized robots, general-purpose humanoid bots can operate in spaces designed for the human form factor—our homes, workplaces, and cities. This flexibility makes them well-suited for various applications, from caregiving to labor-intensive tasks. According to ARK Invest, this market is estimated to be worth $24 billion...',
    image: humanoidImage,
    link: '/projects/humanoid',
  },
  {
    id: 'pupper',
    icon: pupperIcon,
    title: 'Triton Pupper',
    description:
      "The Triton Pupper Project is Triton Droids' newest initiative at inspiring undergraduate students to break boundaries with modern innovation. Next to developing a humanoid robot, the Triton Pupper Team is aiming to develop a robotic dog at the undergraduate level. The goals of this initiative include building a proof-of-concept out of the Petoi Bittle Dog, and then graduating to an industry-grade robotic dog that matches the sophistication of...",
    image: pupperImage,
    link: '/projects/pupper',
  },
  {
    id: 'robocup',
    icon: robocupIcon,
    title: 'RoboCup',
    description:
      'In collaboration with the Institute of Electrical and Electronics Engineers (IEEE), Triton Droids is proud to announce our participation in RoboCup 2027, an international competition taking place in June 2027. RoboCup brings together brilliant minds from all over the world, including both PhD laboratories and industry grade robotics companies, to compete in a thrilling showcase of autonomous humanoid soccer.',
    image: robocupImage,
    link: '/projects/robocup',
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section className="bg-main-bg py-20 flex flex-col gap-20 items-center justify-center">
      <div className="w-full px-[140px]">
        <h2 className="text-[64px] font-bold text-main-text">
          A Vision Set in Motion
        </h2>
      </div>

      <div className="flex flex-col gap-10 items-center">
        {/* Project Icons/Indicators */}
        <div className="flex gap-20 items-center">
          {projects.map((proj, index) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(index)}
              className="flex flex-col gap-[14px] items-center justify-center p-4 w-[142px] cursor-pointer"
            >
              <div className="h-[90px] flex items-center justify-center">
                <img
                  src={proj.icon}
                  alt={proj.title}
                  className={`h-full w-auto transition-opacity ${
                    index === activeProject ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </div>
              <div
                className={`h-[3px] w-[110px] rounded-full transition-colors ${
                  index === activeProject ? 'bg-[#3C92DD]' : 'bg-[#2A2B2D]'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Project Card */}
        <div className="bg-[#2A2B2D] rounded-[40px] p-12 flex gap-14 items-center max-w-[1165px]">
          {/* Content */}
          <div className="flex flex-col gap-8 items-start flex-1">
            <div className="flex flex-col gap-3">
              <h3 className="text-[40px] font-normal text-main-text">
                {project.title}
              </h3>
              <p className="text-2xl text-muted-text leading-[1.4] w-[581px]">
                {project.description}
              </p>
            </div>
            <Link
              to={project.link}
              className="flex gap-2 items-center p-2 text-main-text text-base hover:text-accent transition-colors group"
            >
              <span>Learn More</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-[-90deg] group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M12 5L12 19M12 5L6 11M12 5L18 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="w-[432px] h-[411px] rounded-[32px] overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
