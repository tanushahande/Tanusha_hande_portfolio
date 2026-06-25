"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative" aria-label="Projects section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Premium products built with cutting-edge technology"
        />

        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="scale" delay={index * 0.1}>
              <article className="group glass overflow-hidden rounded-3xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,245,212,0.1)]">
              <div className="grid lg:grid-cols-2">
                {/* Architecture Preview */}
                <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} p-8 lg:p-12`}>
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
                    <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-2">
                      <Sparkles className="text-primary" size={20} />
                      <span className="text-sm font-medium text-primary">Architecture Preview</span>
                    </div>

                    <div className="space-y-4">
                      {["Agent Layer", "Orchestration", "Data Layer", "LLM Integration"].map(
                        (layer, i) => (
                          <motion.div
                            key={layer}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="glass flex items-center gap-3 rounded-xl p-4 transition-transform group-hover:translate-x-1"
                          >
                            <Layers className="text-secondary" size={18} />
                            <div>
                              <p className="text-sm font-medium text-white">{layer}</p>
                              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 - i * 10}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-primary lg:text-3xl">
                      {project.title}
                    </h3>
                    {"period" in project && project.period && (
                      <p className="mb-4 text-sm text-white/40">{project.period}</p>
                    )}
                    <p className="mb-6 text-white/60">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold tracking-wider text-white/40 uppercase">
                        Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-white/70"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-3 text-sm font-semibold tracking-wider text-white/40 uppercase">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors group-hover:border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
