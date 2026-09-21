"use client";

import { ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

interface ProjectCardProps {
  index: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveUrl: string;
}

export default function ProjectCard({
  index,
  title,
  image,
  description,
  tech,
  liveUrl,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Safe hostname formatter for the mockup browser header
  let hostname = "production.app";
  try {
    hostname = new URL(liveUrl).hostname.replace("www.", "");
  } catch {
    hostname = "live-demo.com";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30 sm:p-7"
    >
      {/* Mouse Follow Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--foreground) 10%, transparent), transparent 70%)`,
        }}
      />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-muted-foreground/60">
            #{formattedIndex}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl transition-transform duration-300 group-hover:translate-x-0.5">
            {title}
          </h3>
        </div>

        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live preview of ${title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all duration-300 hover:scale-110 hover:bg-foreground hover:text-background"
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Description */}
      <p className="relative z-10 mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {description}
      </p>

      {/* Modern Browser Frame Preview */}
      <div className="relative z-10 mt-6 overflow-hidden rounded-2xl border border-border/80 bg-muted/40 transition-transform duration-500 group-hover:border-foreground/30">
        {/* Mockup Browser Window Header */}
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/70 px-4 py-2 text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>

          <div className="flex items-center gap-1 text-[10px] text-muted-foreground/80">
            <Globe size={10} />
            <span>{hostname}</span>
          </div>

          <div className="w-6" />
        </div>

        {/* Scaled Preview Image */}
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-16/10 w-full overflow-hidden bg-background"
        >
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
        </Link>
      </div>

      {/* Bottom Tech Tags & Action */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition-colors hover:opacity-75"
        >
          <span>Visit Site</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
