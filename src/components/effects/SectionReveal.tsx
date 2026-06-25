"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { EASE_OUT, sectionRevealVariants, VIEWPORT_SECTION } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
}

export function SectionReveal({
  children,
  className,
  showDivider = true,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      {showDivider && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center px-4 sm:px-6"
          aria-hidden="true"
        >
          <motion.div
            initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={VIEWPORT_SECTION}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="h-px w-full max-w-3xl origin-center bg-gradient-to-r from-transparent via-primary/50 to-transparent sm:max-w-4xl"
          />
        </div>
      )}

      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={VIEWPORT_SECTION}
        variants={prefersReducedMotion ? undefined : sectionRevealVariants}
        className="will-change-[transform,opacity]"
      >
        {children}
      </motion.div>
    </div>
  );
}
