"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface SkillCardProps {
  skill: {
    name: string;
  };
  index?: number;
}

export default function SkillCard({ skill, index = 1 }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30"
    >
      {/* Radial Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--foreground) 10%, transparent), transparent 70%)`,
        }}
      />

      {/* Top Meta: Index & Micro Arrow */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold text-muted-foreground/60 transition-colors group-hover:text-foreground/70">
          #{formattedIndex}
        </span>
        <ArrowUpRight
          size={14}
          className="text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        />
      </div>

      {/* Skill Name */}
      <div className="relative z-10 mt-6">
        <h3 className="text-base font-bold tracking-tight text-foreground transition-transform duration-200 group-hover:translate-x-0.5">
          {skill.name}
        </h3>
      </div>

      {/* Bottom Beam Progress Bar */}
      <div className="relative z-10 mt-4 h-1 w-full overflow-hidden rounded-full bg-muted/40">
        <div className="h-full w-0 rounded-full bg-foreground transition-all duration-500 ease-out group-hover:w-full" />
      </div>
    </div>
  );
}
