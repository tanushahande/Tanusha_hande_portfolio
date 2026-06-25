"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";
import { getExperienceDisplay } from "@/lib/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

function ExperienceCard({ entry, index }: { entry: (typeof experiences)[0]; index: number }) {
  const experience = getExperienceDisplay();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const totalHighlights = entry.projects.reduce((n, p) => n + p.highlights.length, 0);
  const [highlightCount, setHighlightCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setHighlightCount((prev) => {
        if (prev >= totalHighlights) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(timer);
  }, [isInView, totalHighlights]);

  let globalIndex = 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
    >
      <GlassCard glow="secondary" className="relative overflow-hidden border-l-2 border-l-primary/60">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Building2 className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{entry.company}</h3>
              <p className="text-base text-primary sm:text-lg">{entry.role}</p>
              <p className="mt-1 text-sm text-white/40">
                {entry.period} · {entry.location}
              </p>
            </div>
          </div>
          <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {experience.badge}
          </span>
        </div>

        <div className="space-y-8">
          {entry.projects.map((project) => (
            <div key={project.name}>
              <h4 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
                {project.name}
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight) => {
                  const i = globalIndex++;
                  return (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, x: -12 }}
                      animate={i < highlightCount ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className={`mt-0.5 shrink-0 ${i < highlightCount ? "text-primary" : "text-white/20"}`}
                        size={16}
                      />
                      <span
                        className={`text-sm leading-relaxed ${i < highlightCount ? "text-white/70" : "text-white/30"}`}
                      >
                        {highlight}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {entry.metrics && (
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/5 pt-6 sm:gap-4">
            {entry.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-xl font-bold text-gradient-primary sm:text-2xl">{metric.value}</p>
                <p className="mt-1 text-xs text-white/40">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Experience section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Building enterprise automation and full-stack solutions at scale"
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((entry, index) => (
            <ExperienceCard key={entry.company} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
