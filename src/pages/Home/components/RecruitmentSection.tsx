import { SectionHeading, BodyText } from '../../../components/Typography';

const ENGINEERING_APPLICATION_URL = 'https://bit.ly/TDSU2026';
const OPERATIONS_APPLICATION_URL = 'https://bit.ly/TDOP26';
const applicationButtonClass =
  'h-14 px-10 py-4 bg-accent text-button-text text-base font-bold rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 transition-colors';

export default function RecruitmentSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center text-center py-12 md:py-16 lg:py-20 w-full px-6">
      {/*<SectionHeading className="leading-tight">
        2025-2026 Member Recruitment is{' '}
        <span className="text-accent">Closed</span>*/}
      <SectionHeading className="font-bold leading-tight">
        2026-2027 Member Recruitment is{' '}
        <span className="text-accent">OPEN</span>
      </SectionHeading>
      {/*<BodyText size="lg" className="text-muted-text">
        Stay tuned for our next application season!</BodyText>*/}
      <BodyText size="lg" className="font-normal">
        Applications are due{' '}
        <span className="text-accent font-bold">
          October 7, 2026 at 11:59 PM
        </span>
        <br />
        Come to our GBM on <span className="font-bold">
          October 2nd, 2026
        </span>{' '}
        <span className="font-bold">from 6-7 PM</span> for more information!
      </BodyText>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7">
        <a
          href={ENGINEERING_APPLICATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={applicationButtonClass}
        >
          Engineering Team Applications
        </a>
        <a
          href={OPERATIONS_APPLICATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={applicationButtonClass}
        >
          Operations Team Applications
        </a>
      </div>
    </section>
  );
}
