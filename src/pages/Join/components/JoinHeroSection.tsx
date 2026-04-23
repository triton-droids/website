import { HeroHeading, BodyText } from '../../../components/Typography';
import heroImage from '../../../assets/join/join-hero.webp';

export default function JoinHeroSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-12 lg:gap-16 xl:gap-20 items-start py-10 md:py-12 lg:py-20 w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
      <HeroHeading className="w-full text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Join the Team
      </HeroHeading>

      <BodyText
        size="base"
        className="w-full text-white font-normal md:font-light"
      >
        At Triton Droids, our mission is to inspire members to pursue their
        passions in robotics while building industry-relevant skills critical
        for their professional growth.
      </BodyText>

      <div className="w-full aspect-[16/10] sm:aspect-[2/1] md:aspect-[21/9] rounded-[20px] md:rounded-[24px] lg:rounded-[40px] overflow-hidden relative">
        <img
          src={heroImage}
          alt="Triton Droids team presentation"
          className="absolute left-0 top-0 w-full h-full object-cover object-center md:h-[200%] md:object-top md:-top-[75%]"
        />
      </div>
    </section>
  );
}
