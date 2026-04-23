import { SectionHeading, BodyText } from '../../../components/Typography';

/** Set to false when software team applications are not running */
const SOFTWARE_APPLICATIONS_OPEN = true;

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
    <section className="flex flex-col gap-5 md:gap-6 lg:gap-10 items-stretch md:items-center py-10 md:py-12 lg:py-20 w-full">
      <div className="flex w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <SectionHeading className="w-full text-left text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Ready to build an amazing future?
        </SectionHeading>
      </div>

      <div className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
        <BodyText
          size="base"
          className="text-white w-full text-left font-normal md:font-light"
        >
          {SOFTWARE_APPLICATIONS_OPEN ? (
            <>
              Thanks for your interest!{' '}
              <span className="text-accent">
                Software applications are now open for Machine Learning and
                Embedded Systems teams.
              </span>
            </>
          ) : (
            <>
              Thanks for your interest!{' '}
              <span className="text-accent">
                Applications are currently closed.
              </span>{' '}
              Check back next recruitment cycle for updates.
            </>
          )}
        </BodyText>
      </div>

      {SOFTWARE_APPLICATIONS_OPEN && (
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[148px]">
          {SOFTWARE_APPLICATION_FORMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg lg:text-xl font-normal px-6 md:px-8 lg:px-10 py-2.5 md:py-3 rounded-full flex items-center justify-center gap-1.5 transition-colors bg-accent text-button-text hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 cursor-pointer text-center"
            >
              Apply: {label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
