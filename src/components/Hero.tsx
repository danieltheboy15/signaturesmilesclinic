import { ArrowUpRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_CONFIG } from '../config/clinic';
import { EDITORIAL_EASE, HeroReveal } from './MotionPrimitives';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-[#1D4859] bg-[#0D2632] text-[#F6F9FA]"
    >
      {/* Full-bleed clinic treatment-suite photograph with balanced cerulean-navy directional veil */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src={CLINIC_CONFIG.images.heroSuite.src}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="sync"
          referrerPolicy="no-referrer"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.65, scale: 1 }}
          transition={{ duration: 1.15, ease: EDITORIAL_EASE }}
          className="h-full w-full object-cover object-[70%_22%] contrast-[1.04] saturate-[0.95]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A202B]/96 via-[#0F2E3D]/84 via-52% to-[#0494C0]/24"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A1F2A]/92 via-transparent via-35% to-[#0A1F2A]/30"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <HeroReveal delay={0.05} y={18}>
              <h1 className="font-editorial text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#FFFFFF] text-balance sm:text-[3.35rem] lg:text-[4.15rem]">
                A healthier smile starts with feeling{' '}
                <span className="text-[#7ED3EE]">at ease.</span>
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.14} y={16}>
              <p className="mt-6 max-w-[48ch] text-[1rem] leading-[1.75] text-[#E4EFF4] sm:text-[1.0625rem]">
                Thoughtful dental care for your everyday oral health and the changes that help you smile with confidence. At Signature Smiles Clinic, your comfort and care come first.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.22} y={14}>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={CLINIC_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[2px] bg-[#0494C0] px-7 py-3.5 text-[0.875rem] font-semibold tracking-[0.01em] text-[#FFFFFF] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0B7497]"
                >
                  <span>Book an Appointment</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={CLINIC_CONFIG.phoneHref}
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-[2px] border border-[#BFE6F3]/50 bg-[#0A202B]/40 px-6 py-3.5 text-[0.875rem] font-semibold text-[#F6F9FA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#FFFFFF] hover:bg-[#0A202B]/65"
                >
                  <Phone className="h-3.5 w-3.5 text-[#7ED3EE]" strokeWidth={1.8} aria-hidden="true" />
                  <span>Call the Clinic</span>
                </a>
              </div>
            </HeroReveal>

          </div>
        </div>

        {/* Bottom architectural practice bar */}
        <HeroReveal delay={0.3} y={12} className="mt-16 lg:mt-24">
          <div className="border-t border-[#BFE6F3]/25 pt-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-10">
              <div>
                <p className="font-editorial text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#8CD9F0]">
                  Clinic Address
                </p>
                <p className="mt-1.5 text-[0.9375rem] text-[#F6F9FA]">
                  {CLINIC_CONFIG.address.street}, {CLINIC_CONFIG.address.locality}
                </p>
              </div>
              <div>
                <p className="font-editorial text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#8CD9F0]">
                  Opening Hours
                </p>
                <p className="mt-1.5 text-[0.9375rem] text-[#F6F9FA] tabular-nums">
                  {CLINIC_CONFIG.summaryHours}
                </p>
              </div>
              <div>
                <p className="font-editorial text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#8CD9F0]">
                  Reception Desk
                </p>
                <p className="mt-1.5 text-[0.9375rem] text-[#F6F9FA] tabular-nums">
                  <a
                    href={CLINIC_CONFIG.phoneHref}
                    className="font-semibold transition-colors hover:text-[#7ED3EE]"
                  >
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}
