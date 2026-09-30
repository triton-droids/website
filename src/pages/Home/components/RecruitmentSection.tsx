import { SectionHeading, BodyText } from '../../../components/Typography';
import {
  RECRUITMENT_OPEN,
  RECRUITMENT_SEASON,
  APPLICATION_DEADLINE,
  GBM_DATE,
  GBM_TIME,
  APPLICATION_FORMS,
} from '../../../data/recruitment';

const applicationButtonClass =
  'h-14 px-10 py-4 bg-accent text-button-text text-base font-bold rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 transition-colors';

const ENGINEERING_APPLICATION_URL = 'https://bit.ly/TDSU2026';
const OPERATIONS_APPLICATION_URL = 'https://bit.ly/TDOP26';
const applicationButtonClass =
  'h-14 px-10 py-4 bg-accent text-button-text text-base font-bold rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 transition-colors';

export default function RecruitmentSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center text-center py-12 md:py-16 lg:py-20 w-full px-6">
      <SectionHeading className="font-bold leading-tight">
        {RECRUITMENT_SEASON} Member Recruitment is{' '}
        <span className="text-accent">
          {RECRUITMENT_OPEN ? 'OPEN' : 'CLOSED'}
        </span>
      </SectionHeading>
      {RECRUITMENT_OPEN ? (
        <BodyText size="lg" className="font-normal">
          Applications are due{' '}
          <span className="text-accent font-bold">{APPLICATION_DEADLINE}</span>
          <br />
          Come to our GBM on <span className="font-bold">{GBM_DATE}</span>{' '}
          <span className="font-bold">{GBM_TIME}</span> for more information!
        </BodyText>
      ) : (
        <BodyText size="lg" className="text-muted-text">
          Stay tuned for our next application season!
        </BodyText>
      )}
      {RECRUITMENT_OPEN && (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7">
          {APPLICATION_FORMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={applicationButtonClass}
            >
              {label} Applications
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
