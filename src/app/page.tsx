import { PageTransition } from "@/components/effects/PageTransition";
import { SectionReveal } from "@/components/effects/SectionReveal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Achievements } from "@/components/sections/Achievements";
import { PhotoShowcase } from "@/components/sections/PhotoShowcase";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SectionReveal showDivider={false}>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Skills />
      </SectionReveal>
      <SectionReveal>
        <Experience />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Publications />
      </SectionReveal>
      <SectionReveal>
        <Achievements />
      </SectionReveal>
      <SectionReveal>
        <PhotoShowcase />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </PageTransition>
  );
}
