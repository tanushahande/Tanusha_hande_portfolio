"use client";

import { BookOpen, FlaskConical } from "lucide-react";
import { publications, researchProjects } from "@/lib/data";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ScrollStagger, ScrollStaggerItem } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function Publications() {
  return (
    <section id="research" className="section-padding relative" aria-label="Research section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Research"
          title="Publications & Research"
          description="Academic research and IEEE contributions in cloud computing and data systems"
        />

        <ScrollStagger className="mb-12 grid gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6">
          {publications.map((pub) => (
            <ScrollStaggerItem key={pub.title}>
              <GlassCard glow="secondary" className="relative h-full overflow-hidden">
                <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-br from-secondary to-primary px-5 py-1.5">
                  <span className="text-xs font-bold tracking-widest text-background uppercase">
                    {pub.publisher} · {pub.status}
                  </span>
                </div>

                <div className="flex gap-4 pt-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <BookOpen className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-base font-bold text-white sm:text-lg">{pub.title}</h3>
                    <p className="mb-3 text-sm text-white/40">{pub.year}</p>
                    <p className="text-sm leading-relaxed text-white/60">{pub.description}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        <ScrollReveal>
          <h3 className="mb-6 text-center text-lg font-semibold text-white sm:mb-8 sm:text-xl">
            Research Projects
          </h3>
        </ScrollReveal>

        <ScrollStagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" stagger={0.1}>
          {researchProjects.map((project) => (
            <ScrollStaggerItem key={project.title}>
              <GlassCard
                className="flex h-full flex-col transition-transform duration-300 hover:-translate-y-1"
                glow="primary"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FlaskConical className="text-primary" size={20} />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-primary uppercase">
                    {project.type}
                  </span>
                </div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">{project.title}</h4>
                <p className="mb-1 text-xs text-white/40">{project.period}</p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
