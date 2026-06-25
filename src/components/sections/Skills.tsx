"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { ScrollStagger, ScrollStaggerItem } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechLogo } from "@/components/ui/tech-logo";
import { cn } from "@/lib/utils";

export function Skills() {
  const categories = Object.keys(skillCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const skills = skillCategories[activeCategory];

  return (
    <section id="skills" className="section-padding relative" aria-label="Skills section">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Technology Stack"
          description="Languages, frameworks, and tools I use across enterprise and AI projects"
        />

        <ScrollStagger className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          {categories.map((cat) => (
            <ScrollStaggerItem key={cat}>
              <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
              )}
            >
              {cat}
              </button>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group glass flex flex-col items-center gap-3 rounded-2xl border border-white/10 p-5 transition-colors hover:border-primary/30 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-primary/10">
                  <TechLogo skill={skill} size={32} />
                </div>
                <span className="text-center text-xs font-medium text-white/80 sm:text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
