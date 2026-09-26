"use client";

import { useRef, useState, MouseEvent } from "react";
import { CalendarDays, Building2 } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  isCurrent = false,
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/25"
    >
      {/* Mouse Follow Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--foreground) 10%, transparent), transparent 70%)`,
        }}
      />

      {/* Top Header Row: Period & Live Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/40 px-3 py-1 font-mono text-[11px] text-muted-foreground">
          <CalendarDays size={12} className="text-foreground" />
          <span>{period}</span>
        </div>

        {isCurrent && (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            <span>Current Role</span>
          </div>
        )}
      </div>

      {/* Role Title & Company */}
      <div className="relative z-10 mt-4">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-transform duration-200 group-hover:translate-x-0.5">
          {role}
        </h3>

        <div className="mt-1.5 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <Building2 size={14} className="shrink-0 text-foreground/70" />
          <span className="font-medium">{company}</span>
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-4">
          {description}
        </p>
      </div>

      {/* Bottom Subtle Progress Beam */}
      <div className="relative z-10 mt-6 h-1 w-full overflow-hidden rounded-full bg-muted/40">
        <div className="h-full w-0 rounded-full bg-foreground transition-all duration-500 ease-out group-hover:w-full" />
      </div>
    </div>
  );
}
