"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import {
  slideLeftVariants,
  slideRightVariants,
  scaleUpVariants,
  staggerItemVariants,
  VIEWPORT_ITEM,
  EASE_OUT,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";

const upVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT, delay },
  }),
};

const directionVariants: Record<RevealDirection, Variants> = {
  up: upVariants,
  left: slideLeftVariants,
  right: slideRightVariants,
  scale: scaleUpVariants,
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ITEM}
      variants={directionVariants[direction]}
      custom={delay}
      className={cn("will-change-[transform,opacity]", className)}
    >
      {children}
    </motion.div>
  );
}

interface ScrollStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function ScrollStagger({ children, className, stagger = 0.08 }: ScrollStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ITEM}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.04 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function ScrollStaggerItem({ children, className }: ScrollStaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}
