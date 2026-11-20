import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { CLINIC_CONFIG, NAVIGATION_LINKS } from '../config/clinic';
import { ClinicLogo } from './ClinicLogo';
import { EDITORIAL_EASE } from './MotionPrimitives';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAVIGATION_LINKS.map((l) => l.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'border-b border-[#CDDFE6] bg-[#FFFFFF]/95 shadow-[0_2px_16px_rgba(15,39,51,0.06)] backdrop-blur-md'
            : 'border-b border-[#CDDFE6]/80 bg-[#FFFFFF]'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-8 px-5 sm:px-8 lg:h-[78px] lg:px-12">
          {/* Zone 1: Official Signature Smiles Clinic logo */}
          <a
            href="#home"
            aria-label={`${CLINIC_CONFIG.name} home`}
            className="inline-flex items-center whitespace-nowrap shrink-0"
          >
            <ClinicLogo className="h-[46px] w-[112px] sm:h-[52px] sm:w-[126px]" />
          </a>

          {/* Zone 2: Single-line navigation links with active cerulean scroll indicator */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8 text-[0.875rem] font-medium text-[#263F4B]"
          >
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive ? 'text-[#0B7497] font-semibold' : 'hover:text-[#0B7497]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0494C0]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary cerulean booking action + refined mobile menu trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:inline-flex items-center justify-center gap-1.5 rounded-[2px] bg-[#0B7497] px-5 py-2.5 text-[0.8125rem] font-semibold tracking-[0.01em] text-[#FFFFFF] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#085B77]"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-clinic-drawer"
              aria-label="Open navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-[#CDDFE6] bg-[#F6F9FA] text-[#0F2733] transition-colors hover:border-[#0B7497] lg:hidden"
            >
              <Menu className="h-5 w-5 text-[#0B7497]" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Slide-over full-height mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#0F2733]/50 backdrop-blur-[2px]"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-clinic-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.36, ease: EDITORIAL_EASE }}
              className="fixed inset-y-0 right-0 flex w-full max-w-[390px] flex-col justify-between border-l border-[#CDDFE6] bg-[#FFFFFF] px-6 py-5 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#CDDFE6] pb-4">
                  <ClinicLogo className="h-[44px] w-[108px]" />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close navigation menu"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-[#CDDFE6] text-[#0F2733] transition-colors hover:border-[#0B7497]"
                  >
                    <X className="h-5 w-5" strokeWidth={1.6} />
                  </button>
                </div>

                <nav aria-label="Mobile navigation" className="mt-4 divide-y divide-[#CDDFE6]/80">
                  {NAVIGATION_LINKS.map((link, idx) => {
                    const isActive = activeHref === link.href;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.32, delay: 0.08 + idx * 0.04, ease: EDITORIAL_EASE }}
                        className="flex min-h-[54px] items-center justify-between py-3 text-left transition-colors"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-editorial text-xs font-semibold tabular-nums text-[#188CB0]">
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-editorial text-[1.125rem] tracking-[-0.015em] ${
                              isActive ? 'font-semibold text-[#0B7497]' : 'font-medium text-[#0F2733]'
                            }`}
                          >
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          className={`h-4 w-4 ${isActive ? 'text-[#0B7497]' : 'text-[#6D8B99]'}`}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.24, ease: EDITORIAL_EASE }}
                className="border-t border-[#CDDFE6] pt-5"
              >
                <div className="flex flex-col gap-3">
                  <a
                    href={CLINIC_CONFIG.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] bg-[#0B7497] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-[#FFFFFF] transition-colors hover:bg-[#085B77]"
                  >
                    <span>Book an Appointment</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </a>
                  <a
                    href={CLINIC_CONFIG.phoneHref}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] border border-[#0F2733]/25 px-5 py-3 text-sm font-semibold text-[#0F2733] tabular-nums transition-colors hover:border-[#0B7497]"
                  >
                    <Phone className="h-4 w-4 text-[#0B7497]" strokeWidth={1.7} aria-hidden="true" />
                    <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
                  </a>
                </div>

                <div className="mt-4 text-xs leading-relaxed text-[#456270]">
                  <p className="font-semibold text-[#0F2733]">{CLINIC_CONFIG.address.street}, {CLINIC_CONFIG.address.locality}</p>
                  <p className="mt-0.5 tabular-nums">{CLINIC_CONFIG.summaryHours}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
