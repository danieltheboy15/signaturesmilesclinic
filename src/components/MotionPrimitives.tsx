import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function HeroReveal({
  children,
  delay = 0,
  y = 18,
  className = '',
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface EditorialLineProps {
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function EditorialLine({
  className = '',
  delay = 0,
  immediate = false,
}: EditorialLineProps) {
  if (immediate) {
    return (
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.85, delay, ease: EDITORIAL_EASE }}
        style={{ originX: 0 }}
        className={`h-px w-full bg-[#CDDFE6] ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, delay, ease: EDITORIAL_EASE }}
      style={{ originX: 0 }}
      className={`h-px w-full bg-[#CDDFE6] ${className}`}
      aria-hidden="true"
    />
  );
}
