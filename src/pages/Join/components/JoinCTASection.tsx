import { SectionHeading, BodyText } from '../../../components/Typography';

export default function JoinCTASection() {
  // Set to true when applications are open
  const isApplicationOpen = false;

  return (
    <section className="flex flex-col gap-6 lg:gap-10 items-center py-12 lg:py-20 w-full">
      {/* Title */}
      <div className="flex items-center justify-center w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <SectionHeading className="flex-1">
          Ready to build an amazing future?
        </SectionHeading>
      </div>

      {/* Description with highlighted text */}
      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <BodyText size="lg" className="text-white w-full">
          Thanks for your interest!{' '}
          <span className="text-accent">Applications are currently closed</span>
          . Check back at the end of next quarter to see what teams we&apos;re
          accepting new members for.
        </BodyText>
      </div>

      {/* Button - disabled when applications closed */}
      <button
        disabled={!isApplicationOpen}
        className={`text-lg md:text-xl lg:text-2xl font-normal px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full flex items-center justify-center transition-all ${
          isApplicationOpen
            ? 'bg-accent text-black hover:brightness-110 cursor-pointer'
            : 'bg-[#2A2B2D] text-main-text cursor-not-allowed'
        }`}
      >
        Join Triton Droids
      </button>
    </section>
  );
}
