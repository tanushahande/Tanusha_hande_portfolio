"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";
import type { SkillItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TechLogoProps {
  skill: SkillItem;
  size?: number;
  className?: string;
}

function getIconSrc(skill: SkillItem): string | null {
  if (!skill.icon) return null;
  if (skill.iconType === "simple") {
    return `https://cdn.simpleicons.org/${skill.icon}/${skill.color ?? "FFFFFF"}`;
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}.svg`;
}

export function TechLogo({ skill, size = 36, className }: TechLogoProps) {
  const [failed, setFailed] = useState(false);
  const src = getIconSrc(skill);

  if (!src || failed) {
    return <Code2 size={size * 0.7} className={cn("text-primary", className)} aria-hidden />;
  }

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={cn("object-contain", className)}
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
