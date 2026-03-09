import { SectionHeading, BodyText } from '../../../components/Typography';

const SOFTWARE_APPLICATION_FORMS = [
  {
    label: 'Machine Learning',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScthp04-A62N6FrYu92x6nY3jxRrwE3rep7e50SiFL4Hc1kZg/viewform',
  },
  {
    label: 'Embedded Systems',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSctltE5l48yu2NIdaKxaaAmugnm5V3NXVRjNLDyBRjv1NfJ5A/viewform',
  },
] as const;

export default function JoinCTASection() {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 items-center py-12 lg:py-20 w-full">
      <div className="flex items-center justify-center w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <SectionHeading className="flex-1">
          Ready to build an amazing future?
        </SectionHeading>
      </div>

      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <BodyText size="base" className="text-white w-full">
          Thanks for your interest!{' '}
          <span className="text-accent">
            Software applications are now open for Machine Learning and Embedded
            Systems teams.
          </span>
        </BodyText>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {SOFTWARE_APPLICATION_FORMS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg lg:text-xl font-normal px-6 md:px-8 lg:px-10 py-2.5 md:py-3 rounded-full flex items-center justify-center gap-1.5 transition-colors bg-accent text-button-text hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 cursor-pointer"
          >
            Apply: {label}
          </a>
        ))}
      </div>
    </section>
  );
}
