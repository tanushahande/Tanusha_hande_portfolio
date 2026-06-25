"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] w-full bg-white/5"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
