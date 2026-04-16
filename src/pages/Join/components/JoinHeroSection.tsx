import { HeroHeading } from '../../../components/Typography';
import heroImage from '../../../assets/join/join-hero.webp';

export default function JoinHeroSection() {
  return (
    <section className="flex flex-col gap-12 lg:gap-16 xl:gap-20 items-start py-12 lg:py-20 w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
      {/* Title */}
      <HeroHeading className="w-full">Join the Team</HeroHeading>

      {/* Image container - uses aspect ratio for consistent proportions */}
      <div className="w-full aspect-[21/9] rounded-[24px] lg:rounded-[40px] overflow-hidden relative">
        <img
          src={heroImage}
          alt="Triton Droids team presentation"
          className="absolute w-full h-[200%] object-cover object-top left-0 -top-[75%]"
        />
      </div>
    </section>
  );
}
