"use client";

import { Award, Lightbulb, TrendingUp, Trophy, Users, Zap } from "lucide-react";
import { ScrollStagger, ScrollStaggerItem } from "@/components/effects/ScrollReveal";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const iconMap = {
  zap: Zap,
  trending: TrendingUp,
  award: Award,
  users: Users,
  trophy: Trophy,
  lightbulb: Lightbulb,
};

export function Achievements() {
  return (
    <section id="achievements" className="section-padding relative" aria-label="Achievements section">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Achievements"
          title="Impact & Recognition"
          description="Measurable results that drive business value"
        />

        <ScrollStagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Award;
            return (
              <ScrollStaggerItem key={achievement.title} className="h-full">
                <GlassCard className="h-full text-center transition-transform duration-300 hover:-translate-y-1" glow="primary">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="text-sm text-white/50">{achievement.description}</p>
                </GlassCard>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
}
