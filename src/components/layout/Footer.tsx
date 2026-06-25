import { siteConfig } from "@/lib/data";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/20 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-white/50">
            AI Engineer · Full Stack Developer · Problem Solver
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-white/60 transition-all hover:border-primary/50 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.links.email}
            className="rounded-full border border-white/10 p-2.5 text-white/60 transition-all hover:border-primary/50 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-sm text-white/40">
          © {year} {siteConfig.name}. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
