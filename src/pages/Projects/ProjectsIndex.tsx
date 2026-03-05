import SEO from '../../components/SEO';
import ProjectsSection from './ProjectsSection';

export default function ProjectsIndex() {
  return (
    <div className="bg-main-bg min-h-screen">
      <SEO
        title="Projects"
        description="Explore our robotics projects"
        path="/projects"
      />
      <ProjectsSection />
    </div>
  );
}
