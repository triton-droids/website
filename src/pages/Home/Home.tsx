import { SplineSceneBasic } from '@/components/ui/spline-scene-basic';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import AchieveSection from './components/AchieveSection';
import ProjectsSection from '../Projects/ProjectsSection';
import RecruitmentSection from './components/RecruitmentSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Interactive 3D demo (shadcn/ui SplineScene + Spotlight) */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <SplineSceneBasic />
      </section>

      {/* A Future Worth Building - Vision Cards */}
      <VisionSection />

      {/* How We Aim to Achieve Our Mission - Carousel */}
      <AchieveSection />

      {/* A Vision Set in Motion - Projects */}
      <ProjectsSection />

      {/* Recruitment Status */}
      <RecruitmentSection />
    </>
  );
}
