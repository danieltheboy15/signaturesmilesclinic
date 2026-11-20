import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { CLINIC_CONFIG, TREATMENTS } from '../config/clinic';
import { ClinicImage } from './ClinicImage';
import { EDITORIAL_EASE, EditorialLine, Reveal } from './MotionPrimitives';

export function TreatmentsSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(TREATMENTS[0].slug);

  const toggleItem = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      id="treatments"
      className="border-t border-[#CDDFE6] bg-[#EDF4F7] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Editorial header */}
        <div className="grid grid-cols-1 items-end gap-6 pb-12 lg:grid-cols-12 lg:pb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#0B7497]">
                Treatments &amp; Services
              </p>
              <h2 className="font-editorial mt-4 text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#0F2733] text-balance sm:text-[2.45rem] lg:text-[2.85rem]">
                Considered care across everyday and restorative dentistry.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.08}>
              <p className="text-[0.96875rem] leading-[1.68] text-[#263F4B]">
                Every treatment plan starts with a calm clinical assessment so you understand the options suited to your oral health.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric editorial treatment directory with reference photography */}
        <EditorialLine />
        <div className="divide-y divide-[#CDDFE6] border-b border-[#CDDFE6]">
          {TREATMENTS.map((item, idx) => {
            const isExpanded = expandedSlug === item.slug;
            const imageOnLeft = idx % 2 === 1;

            return (
              <Reveal key={item.slug} delay={Math.min(idx * 0.04, 0.16)} y={18}>
                <article className="py-10 sm:py-12 lg:py-14">
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Oversized editorial index number */}
                    <div className="lg:col-span-2 lg:self-start">
                      <span
                        className={`font-editorial block text-[2rem] font-semibold leading-none tracking-[-0.03em] tabular-nums transition-colors duration-200 sm:text-[2.5rem] ${
                          isExpanded ? 'text-[#0494C0]' : 'text-[#188CB0]/75'
                        }`}
                        aria-hidden="true"
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Textual treatment column */}
                    <div className={`lg:col-span-5 ${imageOnLeft ? 'lg:order-3' : ''}`}>
                      <h3 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-[#0F2733] sm:text-[1.55rem]">
                        {item.title}
                      </h3>

                      <p className="mt-3.5 max-w-[52ch] text-[0.96875rem] leading-[1.7] text-[#263F4B]">
                        {item.summary}
                      </p>

                      <p className="mt-4 text-[0.8125rem] font-medium leading-relaxed text-[#456270]">
                        {item.focusPoints.map((point, pIdx) => (
                          <span key={point}>
                            {pIdx > 0 && (
                              <span className="mx-2 text-[#188CB0]" aria-hidden="true">
                                ·
                              </span>
                            )}
                            <span>{point}</span>
                          </span>
                        ))}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-6">
                        <button
                          type="button"
                          onClick={() => toggleItem(item.slug)}
                          aria-expanded={isExpanded}
                          aria-controls={`visit-note-${item.slug}`}
                          className="inline-flex min-h-[40px] items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.01em] text-[#0F2733] transition-colors hover:text-[#0B7497]"
                        >
                          {isExpanded ? (
                            <Minus className="h-3.5 w-3.5 text-[#0B7497]" strokeWidth={1.8} aria-hidden="true" />
                          ) : (
                            <Plus className="h-3.5 w-3.5 text-[#0B7497]" strokeWidth={1.8} aria-hidden="true" />
                          )}
                          <span>
                            {isExpanded ? 'Hide consultation note' : 'What to expect at consultation'}
                          </span>
                        </button>

                        <a
                          href={CLINIC_CONFIG.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-1.5 border-b border-[#0B7497]/40 pb-0.5 text-[0.8125rem] font-semibold text-[#0B7497] transition-colors hover:border-[#0B7497] hover:text-[#085B77]"
                        >
                          <span>Book consultation</span>
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
                        </a>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`visit-note-${item.slug}`}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                            className="mt-5 border-t border-[#CDDFE6] pt-4 text-[0.875rem] leading-[1.68] text-[#263F4B]"
                          >
                            {item.visitNote}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Reference photograph for each treatment */}
                    <div className={`lg:col-span-5 ${imageOnLeft ? 'lg:order-2' : ''}`}>
                      <ClinicImage
                        src={item.image.src}
                        alt={item.image.alt}
                        aspectClassName="aspect-[16/11]"
                        imgClassName={`object-cover ${item.image.objectPosition ?? 'object-center'}`}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
