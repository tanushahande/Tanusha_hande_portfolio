"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, VIEWPORT_ITEM } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: VIEWPORT_ITEM,
      };

  return (
    <div className="mb-12 text-center sm:mb-16">
      <motion.span
        {...motionProps}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary"
      >
        {label}
      </motion.span>
      <motion.h2
        {...motionProps}
        transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
        className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          {...motionProps}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.16 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-sm text-white/60 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={VIEWPORT_ITEM}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.24 }}
        className="mx-auto mt-6 h-px w-16 origin-center bg-gradient-to-r from-transparent via-primary to-transparent sm:w-24"
      />
    </div>
  );
}
