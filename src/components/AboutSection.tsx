import { CLINIC_CONFIG } from '../config/clinic';
import { ClinicImage } from './ClinicImage';
import { EditorialLine, Reveal } from './MotionPrimitives';

const PRACTICE_PILLARS = [
  {
    title: 'Attentive listening first',
    detail: 'Appointments begin with understanding your comfort, concerns, and goals before any recommendation is made.',
  },
  {
    title: 'Measured, honest guidance',
    detail: 'Clear explanations of what your teeth need now and what can wait, so you can decide without pressure.',
  },
  {
    title: 'A calm Gbagada setting',
    detail: 'A welcoming environment in Ifako designed to make routine visits and restorative care feel straightforward.',
  },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="bg-[#F6F9FA] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#0B7497]">
                About Us
              </p>
            </Reveal>
            <div className="mt-6">
              <ClinicImage
                src={CLINIC_CONFIG.images.familyCare.src}
                alt={CLINIC_CONFIG.images.familyCare.alt}
                caption={CLINIC_CONFIG.images.familyCare.caption}
                aspectClassName="aspect-[4/4.5]"
                imgClassName="object-cover object-[50%_18%]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <Reveal delay={0.08}>
              <h2 className="font-editorial text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#0F2733] text-balance sm:text-[2.45rem] lg:text-[2.85rem]">
                Dental care, with a more personal touch.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 space-y-5 text-[1rem] leading-[1.72] text-[#263F4B] sm:text-[1.0625rem]">
                <p>
                  Visiting the dentist often feels rushed or clinical. At Signature Smiles Clinic, our goal is straightforward: to provide attentive, quality dental care in a welcoming and comfortable environment right here in Gbagada.
                </p>
                <p>
                  Whether you are coming in for a routine check-up and cleaning, bringing a younger family member, or looking into orthodontic or restorative treatment, our team takes time to explain each step clearly and work at a pace that keeps you at ease.
                </p>
              </div>
            </Reveal>

            <div className="mt-12">
              <EditorialLine />
              <div className="divide-y divide-[#CDDFE6] border-b border-[#CDDFE6]">
                {PRACTICE_PILLARS.map((pillar, index) => (
                  <Reveal key={pillar.title} delay={0.08 * index} y={14}>
                    <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                      <h3 className="text-[0.9375rem] font-semibold text-[#0F2733] sm:col-span-4">
                        {pillar.title}
                      </h3>
                      <p className="text-[0.9rem] leading-[1.62] text-[#355260] sm:col-span-8">
                        {pillar.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
