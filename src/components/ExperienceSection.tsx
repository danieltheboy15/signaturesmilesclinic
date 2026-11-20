import { CLINIC_CONFIG, PATIENT_STEPS } from '../config/clinic';
import { ClinicImage } from './ClinicImage';
import { Reveal } from './MotionPrimitives';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0F2733] py-20 text-[#F6F9FA] sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#8CD9F0]">
                The Patient Experience
              </p>
              <h2 className="font-editorial mt-4 text-[1.95rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#FFFFFF] text-balance sm:text-[2.45rem] lg:text-[2.75rem]">
                What to expect when you book.
              </h2>
              <p className="mt-5 max-w-[42ch] text-[0.96875rem] leading-[1.7] text-[#DCEAF0]">
                From your first enquiry to agreeing on a care plan, visits are structured so you know what is happening at every stage.
              </p>
            </Reveal>

            <div className="mt-10 hidden lg:block">
              <ClinicImage
                src={CLINIC_CONFIG.images.consultationRoom.src}
                alt={CLINIC_CONFIG.images.consultationRoom.alt}
                aspectClassName="aspect-[4/4.2]"
                imgClassName="object-cover object-top"
              />
              <Reveal delay={0.1}>
                <p className="mt-3 text-xs tracking-[0.02em] text-[#BFE6F3]/80">
                  {CLINIC_CONFIG.images.consultationRoom.caption}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-[#8CD9F0]/20 border-y border-[#8CD9F0]/20">
              {PATIENT_STEPS.map((item, idx) => (
                <li key={item.step}>
                  <Reveal delay={idx * 0.07} y={18}>
                    <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:items-start sm:gap-6 lg:py-9">
                      <span
                        className="font-editorial text-[1.5rem] font-semibold leading-none tracking-[-0.02em] text-[#7ED3EE] tabular-nums sm:col-span-2 sm:text-[1.75rem]"
                        aria-hidden="true"
                      >
                        {item.step}
                      </span>
                      <div className="sm:col-span-10">
                        <h3 className="text-[1.2rem] font-semibold leading-[1.25] tracking-[-0.01em] text-[#FFFFFF] sm:text-[1.35rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-[#DCEAF0]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
