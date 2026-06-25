"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { aboutSummary, stats } from "@/lib/data";
import { getExperienceDisplay } from "@/lib/experience";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ScrollStagger, ScrollStaggerItem } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ProfileImage } from "@/components/ui/profile-image";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const experience = getExperienceDisplay();
  const displayStats = [
    {
      label: "Experience",
      value: experience.value,
      suffix: experience.suffix,
    },
    ...stats,
  ];

  return (
    <section id="about" className="section-padding relative" aria-label="About section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="About Me"
          title="Crafting Intelligent Systems"
          description="Building the bridge between enterprise software and the future of AI"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left" className="flex justify-center">
            <GlassCard className="!p-3" glow="primary">
              <ProfileImage size="lg" />
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6">
            {aboutSummary.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-white/70 sm:text-lg">
                {paragraph.includes("Amdocs") ? (
                  <>
                    {paragraph.split("Amdocs")[0]}
                    <span className="font-semibold text-primary">Amdocs</span>
                    {paragraph.split("Amdocs")[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </ScrollReveal>
        </div>

        <ScrollStagger className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-4 sm:gap-6">
          {displayStats.map((stat) => (
            <ScrollStaggerItem key={stat.label}>
              <GlassCard className="text-center" glow="primary">
                <p className="text-2xl font-bold text-gradient-primary sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs text-white/50 sm:text-sm">{stat.label}</p>
              </GlassCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
