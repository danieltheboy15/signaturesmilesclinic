import { useState } from 'react';
import { motion } from 'motion/react';
import { EDITORIAL_EASE } from './MotionPrimitives';

interface ClinicImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  delay?: number;
}

export function ClinicImage({
  src,
  alt,
  caption,
  aspectClassName = 'aspect-[4/5]',
  className = '',
  imgClassName = 'object-cover object-center',
  priority = false,
  delay = 0,
}: ClinicImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative w-full overflow-hidden bg-[#DCE8EE] ${aspectClassName}`}>
        {!hasError ? (
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding={priority ? 'sync' : 'async'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            initial={{ opacity: 0, scale: 1.04 }}
            {...(priority
              ? { animate: { opacity: 1, scale: 1 } }
              : {
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true, amount: 0.15 },
                })}
            transition={{ duration: 0.85, delay, ease: EDITORIAL_EASE }}
            className={`h-full w-full ${imgClassName}`}
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between border border-[#CDDFE6] bg-[#EDF4F7] p-6 text-[#0B7497]">
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Signature Smiles Clinic
            </span>
            <p className="font-editorial text-xl text-[#0F2733]">{alt}</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs leading-relaxed tracking-[0.02em] text-[#456270]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
