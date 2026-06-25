"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { brandingCards } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const cardPositions = [
  { top: "10%", left: "5%", delay: 0 },
  { top: "15%", right: "5%", delay: 0.2 },
  { bottom: "20%", left: "8%", delay: 0.4 },
  { bottom: "15%", right: "8%", delay: 0.6 },
];

export function PhotoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="section-padding relative overflow-hidden"
      aria-label="Photo showcase section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Personal Brand"
          title="Beyond the Code"
          description="Engineering excellence meets creative vision"
        />

        <div className="relative mx-auto flex h-[500px] max-w-4xl items-center justify-center sm:h-[600px]">
          {/* Floating cards */}
          {brandingCards.map((card, i) => {
            const pos = cardPositions[i];
            return (
              <motion.div
                key={card}
                style={pos}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: pos.delay },
                  scale: { duration: 0.6, delay: pos.delay },
                  y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className="glass absolute z-20 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg sm:px-6 sm:py-4 sm:text-base"
              >
                <span className="text-gradient-primary">{card}</span>
              </motion.div>
            );
          })}

          {/* Main image */}
          <motion.div style={{ y: imageY }} className="relative z-10">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl" />
            <div className="gradient-border relative overflow-hidden rounded-3xl">
              <div className="relative h-[400px] w-[300px] sm:h-[480px] sm:w-[360px]">
                <Image
                  src="/images/profile.jpg"
                  alt="Tanusha Hande - Professional portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 300px, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Decorative rings */}
          <div className="absolute h-[450px] w-[450px] rounded-full border border-white/5 sm:h-[550px] sm:w-[550px]" />
          <div className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-primary/10 sm:h-[420px] sm:w-[420px]" />
        </div>
      </div>
    </section>
  );
}
