import JoinHeroSection from '../components/join/JoinHeroSection';
import JoinCTASection from '../components/join/JoinCTASection';
import WhyJoinCarousel from '../components/join/WhyJoinCarousel';
import RecruitmentProcess from '../components/join/RecruitmentProcess';
import TeamsSection from '../components/join/TeamsSection';

export default function Join() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-12 items-center">
        <JoinHeroSection />
        <JoinCTASection />
        <WhyJoinCarousel />
        <RecruitmentProcess />
        <TeamsSection />
      </div>
    </div>
  );
}
