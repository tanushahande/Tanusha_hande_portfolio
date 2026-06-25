"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSceneInner = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
  ),
});

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <HeroSceneInner />
      </Suspense>
    </div>
  );
}
