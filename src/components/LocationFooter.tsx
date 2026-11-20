import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { CLINIC_CONFIG, NAVIGATION_LINKS } from '../config/clinic';
import { ClinicLogo } from './ClinicLogo';
import { EditorialLine, Reveal } from './MotionPrimitives';

export function LocationFooter() {
  return (
    <>
      <section
        id="find-us"
        className="bg-[#F6F9FA] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#0B7497]">
                  Location &amp; Hours
                </p>
                <h2 className="font-editorial mt-4 text-[1.95rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#0F2733] text-balance sm:text-[2.45rem]">
                  Visit us in Ifako, Gbagada.
                </h2>

                <address className="mt-7 not-italic">
                  <p className="text-[1.0625rem] font-semibold text-[#0F2733]">
                    {CLINIC_CONFIG.name}
                  </p>
                  <p className="mt-1.5 text-[1rem] leading-[1.65] text-[#263F4B]">
                    {CLINIC_CONFIG.address.street}
                    <br />
                    {CLINIC_CONFIG.address.locality}, {CLINIC_CONFIG.address.country}
                  </p>
                </address>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <a
                    href={CLINIC_CONFIG.address.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[44px] items-center gap-2 rounded-[2px] border border-[#0B7497] px-5 py-2.5 text-[0.875rem] font-semibold text-[#0B7497] whitespace-nowrap transition-colors hover:bg-[#0B7497] hover:text-[#FFFFFF]"
                  >
                    <MapPin className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={CLINIC_CONFIG.phoneHref}
                    className="inline-flex min-h-[44px] items-center gap-2 text-[0.9375rem] font-semibold text-[#0F2733] tabular-nums transition-colors hover:text-[#0B7497]"
                  >
                    <Phone className="h-4 w-4 text-[#0B7497]" strokeWidth={1.7} aria-hidden="true" />
                    <span>{CLINIC_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <EditorialLine />
                <div className="py-4">
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#456270]">
                    Business Hours
                  </p>
                </div>

                <dl className="divide-y divide-[#CDDFE6] border-y border-[#CDDFE6]">
                  {CLINIC_CONFIG.hours.map((row) => (
                    <div
                      key={row.days}
                      className="flex flex-wrap items-baseline justify-between gap-4 py-4"
                    >
                      <dt className="text-[0.9375rem] font-semibold text-[#0F2733]">
                        {row.days}
                      </dt>
                      <dd className="text-[0.9375rem] text-[#263F4B] tabular-nums">
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 grid grid-cols-1 gap-4 text-[0.875rem] leading-[1.65] text-[#355260] sm:grid-cols-2 sm:gap-8">
                  <p>
                    Reserving an appointment online lets our reception team prepare for your arrival and minimise waiting time.
                  </p>
                  <p>
                    If you are unsure how to reach Diya Street from your part of Lagos, call our desk on{' '}
                    <a
                      href={CLINIC_CONFIG.phoneHref}
                      className="font-semibold text-[#0B7497] underline decoration-[#0B7497]/35 underline-offset-4 hover:decoration-[#0B7497]"
                    >
                      {CLINIC_CONFIG.phoneDisplay}
                    </a>{' '}
                    before setting out.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#CDDFE6] bg-[#FFFFFF] py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <a
                href="#home"
                aria-label={`${CLINIC_CONFIG.name} home`}
                className="inline-flex items-center"
              >
                <ClinicLogo className="h-[54px] w-[132px]" />
              </a>
              <p className="mt-4 max-w-[34ch] text-[0.875rem] leading-[1.65] text-[#263F4B]">
                Thoughtful general, restorative, and orthodontic dental care in Ifako, Gbagada, Lagos.
              </p>
              <div className="mt-5">
                <a
                  href={CLINIC_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border-b border-[#0B7497]/45 pb-0.5 text-[0.8125rem] font-semibold text-[#0B7497] transition-colors hover:border-[#0B7497] hover:text-[#085B77]"
                >
                  <span>Book an Appointment</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#456270]">
                Navigation
              </p>
              <nav aria-label="Footer navigation" className="mt-3 flex flex-col gap-2.5">
                {NAVIGATION_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[0.875rem] font-medium text-[#0F2733] transition-colors hover:text-[#0B7497]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="md:col-span-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#456270]">
                Clinic Details
              </p>
              <div className="mt-3 space-y-2.5 text-[0.875rem] leading-[1.6] text-[#263F4B]">
                <p>
                  <a
                    href={CLINIC_CONFIG.address.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#0B7497]"
                  >
                    {CLINIC_CONFIG.address.full}
                  </a>
                </p>
                <p className="tabular-nums">
                  <a
                    href={CLINIC_CONFIG.phoneHref}
                    className="font-semibold text-[#0F2733] transition-colors hover:text-[#0B7497]"
                  >
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                </p>
                <div className="pt-2 text-[0.8125rem] text-[#456270] tabular-nums">
                  {CLINIC_CONFIG.hours.map((row) => (
                    <p key={row.days}>
                      {row.days}: {row.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#CDDFE6] pt-6 text-[0.8125rem] text-[#456270] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.</p>
            <p>Ifako, Gbagada, Lagos, Nigeria</p>
          </div>
        </div>
      </footer>
    </>
  );
}
