"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, Linkedin } from "lucide-react";
import { heroTitles, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProfileImage } from "@/components/ui/profile-image";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { HeroBackground } from "@/components/three/HeroBackground";
import gsap from "gsap";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const current = heroTitles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % heroTitles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  useEffect(() => {
    if (!nameRef.current) return;
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 60, letterSpacing: "0.5em" },
      { opacity: 1, y: 0, letterSpacing: "0.05em", duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      <HeroBackground />
      <FloatingParticles count={40} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p variants={itemVariants} className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
            Welcome to my universe
          </motion.p>

          <h1
            ref={nameRef}
            className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            TANUSHA
            <br />
            <span className="text-gradient-primary">HANDE</span>
          </h1>

          <motion.div variants={itemVariants} className="mb-8 h-8">
            <span className="text-lg text-white/70 sm:text-xl">
              {displayText}
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-primary" />
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="mb-10 max-w-lg text-base text-white/50 sm:text-lg">
            AI Engineer + Full Stack Developer + Problem Solver
          </motion.p>

          <motion.div variants={itemVariants} className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <MagneticButton>
              <Button asChild size="lg">
                <a href="/resume.pdf" download aria-label="Download Resume">
                  <Download className="mr-1" />
                  Download Resume
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  <FolderOpen className="mr-1" />
                  View Projects
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-1" />
                  Contact Me
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 lg:justify-start">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-white/10 p-3 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)]"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="text-white/60 transition-colors group-hover:text-primary" size={20} />
            </a>
            <a
              href={siteConfig.links.email}
              className="group rounded-full border border-white/10 p-3 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)]"
              aria-label="Send email"
            >
              <Mail className="text-white/60 transition-colors group-hover:text-primary" size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <ProfileImage size="xl" priority subtleMotion />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-white/30 uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/20 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
