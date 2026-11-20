import { ArrowUpRight, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinic';
import { Reveal } from './MotionPrimitives';

export function AppointmentSection() {
  return (
    <section
      id="book"
      className="border-b border-[#095E7B] bg-[#0B7497] py-20 text-[#FFFFFF] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#D7F0F8]">
                Appointments
              </p>
              <h2 className="font-editorial mt-4 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#FFFFFF] text-balance sm:text-[2.65rem] lg:text-[3.25rem]">
                Your next step towards a healthier smile.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[1rem] leading-[1.72] text-[#EDF7FA] sm:text-[1.0625rem]">
                Whether you need a routine dental check-up or want to explore a particular treatment, get in touch with our team to arrange your visit.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <a
                  href={CLINIC_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[2px] bg-[#FFFFFF] px-7 py-3.5 text-[0.875rem] font-semibold tracking-[0.01em] text-[#0F2733] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#E2EEF3]"
                >
                  <span>Book Your Appointment</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#0B7497] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={CLINIC_CONFIG.phoneHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[2px] border border-[#FFFFFF]/55 bg-transparent px-6 py-3.5 text-[0.875rem] font-semibold text-[#FFFFFF] tabular-nums whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10"
                >
                  <Phone className="h-3.5 w-3.5 text-[#D7F0F8]" strokeWidth={1.8} aria-hidden="true" />
                  <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              <p className="mt-4 text-[0.8125rem] text-[#D7F0F8]">
                Online bookings open our official clinic appointment calendar directly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
