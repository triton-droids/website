import buildCostImage from '../assets/build-cost.png';
import heidenhainLogo from '../assets/heidenhain.png';
import ansysLogo from '../assets/ansys.png';
import onshapeLogo from '../assets/onshape.png';

export default function Sponsorship() {
  return (
    <>
      <section className="py-16 px-20">
        <div className="flex flex-col gap-6 text-left max-w-4xl">
          <h1 className="text-8xl font-bold leading-tight">
            Fund a Droid. Make a Difference
          </h1>
          <p className="text-xl font-normal font-sans leading-relaxed max-w-4xl">
            Your donations directly fund essential components, tools, and
            materials needed to build our humanoid robot. Each contribution
            helps students gain hands-on experience and develop practical
            skills, preparing them for careers in robotics and engineering.
          </p>
        </div>
      </section>

      <section className="py-16 px-20">
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-bold">
              No contribution is too small.
            </h2>
            <p className="text-xl font-normal font-sans leading-relaxed">
              We offer several different sponsorship tier levels. In addition to
              monetary donations, we also greatly appreciate sponsorships in the
              form of parts or mentorship. Please refer to the sponsorship
              package for details!
            </p>
            <div className="mt-20 self-stretch inline-flex justify-start items-center gap-6">
              <button className="h-20 px-10 bg-accent text-button-text text-xl rounded-button font-normal flex justify-center items-center hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 transition-colors">
                Donate Now
              </button>
              <button className="h-20 px-10 rounded-button outline outline-1 outline-offset-[-1px] outline-accent flex justify-center items-center text-yellow-400 text-xl font-normal hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 transition-colors">
                Sponsorship Package
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start">
            <img
              src={buildCostImage}
              alt="Estimated Build Cost"
              className="w-auto h-96 rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-bold">We are Proud to be Trusted By</h2>
          <a
            href="#"
            className="text-white text-lg underline hover:text-accent transition-colors"
          >
            view all
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <div className="bg-transparent p-8 flex items-center justify-center min-h-[120px] min-w-[200px]">
            <img
              src={heidenhainLogo}
              alt="HEIDENHAIN"
              className="max-w-full max-h-[120px] object-contain"
            />
          </div>
          <div className="bg-white p-8 flex items-center justify-center min-h-[120px] min-w-[200px]">
            <img
              src={ansysLogo}
              alt="Ansys"
              className="max-w-full max-h-20 object-contain"
            />
          </div>
          <div className="bg-white p-8 flex items-center justify-center min-h-[120px] min-w-[200px]">
            <img
              src={onshapeLogo}
              alt="onshape"
              className="max-w-full max-h-20 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
