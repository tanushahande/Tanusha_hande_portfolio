"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  /** Subtle float + glow pulse — no rotation */
  subtleMotion?: boolean;
}

const sizeMap = {
  sm: "h-24 w-24",
  md: "h-40 w-40",
  lg: "h-56 w-56",
  xl: "h-72 w-72 sm:h-80 sm:w-80",
};

export function ProfileImage({
  className,
  size = "md",
  priority = false,
  subtleMotion = false,
}: ProfileImageProps) {
  const content = (
    <div className={cn("relative", className)}>
      {/* Soft ambient glow — static, no spin */}
      <div
        className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-2xl"
        aria-hidden="true"
      />

      {/* Clean static gradient frame */}
      <div className="relative rounded-full bg-gradient-to-br from-primary/90 via-white/20 to-secondary/90 p-[2px] shadow-[0_0_32px_rgba(0,245,212,0.15)]">
        <div className={cn("relative overflow-hidden rounded-full bg-background", sizeMap[size])}>
          <Image
            src="/images/profile.jpg"
            alt="Tanusha Hande - Software Engineer"
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 640px) 160px, 320px"
          />
        </div>
      </div>
    </div>
  );

  if (subtleMotion) {
    return (
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
