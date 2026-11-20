import { ArrowUpRight } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinic';
import { ClinicImage } from './ClinicImage';
import { EditorialLine, Reveal } from './MotionPrimitives';

export function DentistSection() {
  const { leadClinician } = CLINIC_CONFIG;

  return (
    <section id="dentist" className="bg-[#E2EEF3] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ClinicImage
              src={leadClinician.photo.src}
              alt={leadClinician.photo.alt}
              caption={leadClinician.photo.caption}
              aspectClassName="aspect-[4/4.5]"
              imgClassName="object-cover object-top"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#0B7497]">
                Meet the Dentist
              </p>

              <h2 className="font-editorial mt-4 text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[#0F2733] sm:text-[2.6rem] lg:text-[3rem]">
                {leadClinician.name}
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="mt-5">
              <EditorialLine />
              <div className="py-4">
                <p className="text-[0.9375rem] font-semibold text-[#0F2733]">
                  {leadClinician.role}
                </p>
                <p className="mt-1 text-[0.875rem] font-medium tracking-[0.01em] text-[#0B7497]">
                  {leadClinician.qualifications}
                </p>
              </div>
              <EditorialLine />
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 space-y-5 text-[1rem] leading-[1.72] text-[#263F4B] sm:text-[1.0625rem]">
                <p>
                  As Director of Clinical Services at Signature Smiles Clinic, Dr. Tomi Orungbe leads patient care with a calm, methodical approach—prioritising clear communication and patient comfort at every visit.
                </p>
                <p>
                  Trained across the University of Benin, London, and Swansea University, she works closely with each patient to explain clinical findings in plain terms, review suitable options, and deliver attentive general, restorative, and aesthetic care.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <a
                  href={CLINIC_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[46px] items-center gap-2.5 border-b border-[#0B7497] pb-1.5 text-[0.875rem] font-semibold tracking-[0.01em] text-[#0F2733] transition-colors hover:border-[#0F2733] hover:text-[#0B7497]"
                >
                  <span>Arrange a consultation at the clinic</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#0B7497] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
