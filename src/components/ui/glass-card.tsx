"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  glow?: "primary" | "secondary" | "none";
}

export function GlassCard({ className, glow = "none", children, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500",
        glow === "primary" && "hover:neon-glow",
        glow === "secondary" && "hover:neon-glow-purple",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
