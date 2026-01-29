import { HeroHeading } from '../../../components/Typography';

// Hero image from Figma - team presentation photo
const heroImage =
  'https://www.figma.com/api/mcp/asset/1a82298a-e33b-4c2b-a896-e3e3944414bd';

export default function JoinHeroSection() {
  return (
    <section className="flex flex-col gap-12 lg:gap-16 xl:gap-20 items-start py-12 lg:py-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
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
