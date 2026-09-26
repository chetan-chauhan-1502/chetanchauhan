"use client";

import { useRef, useState, MouseEvent } from "react";
import { Code2, Globe, FolderGit2, Rocket, Sparkles } from "lucide-react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
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
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/40 hover:bg-card/90 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/25 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--foreground) 10%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function About() {
  const capabilities = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "React, Next.js, TypeScript & Tailwind CSS",
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      desc: "Fast, accessible & search engine friendly architecture",
    },
    {
      icon: FolderGit2,
      title: "Real-World Projects",
      desc: "Production platforms & business applications",
    },
    {
      icon: Rocket,
      title: "High Performance",
      desc: "Optimized loading speeds & scalable structures",
    },
    {
      icon: Sparkles,
      title: "Clean Architecture",
      desc: "Modern design systems & modular components",
    },
  ];

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-foreground/[0.03] blur-[140px] -z-10" />

      {/* Header */}
      <div className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md">
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Introduction
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          About Chetan Chauhan
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground sm:text-base">
          Passionate Frontend Developer focused on building fast, modern, and
          user-friendly digital experiences.
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-12">
        {/* Left Column: Bio Card + Highlighted Experience Stats (Span 6) */}
        <div className="lg:col-span-6">
          <SpotlightCard className="p-8 sm:p-9">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1">
              Hi, I&apos;m Chetan Chauhan 👋
            </h3>

            <p className="mt-5 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
              I am a Frontend Developer from India who enjoys creating modern
              websites and web applications using React, Next.js, TypeScript,
              and Tailwind CSS.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
              My focus is building responsive, scalable, and performance-driven
              applications with clean code and premium user experiences.
            </p>

            {/* Metrics Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border/50 pt-6">
              <div className="cursor-pointer rounded-2xl border border-border/70 bg-muted/20 p-4 transition-all duration-300 hover:border-foreground/30 hover:bg-muted/40 hover:-translate-y-1">
                <h4 className="text-3xl font-black text-foreground">2.5+</h4>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="cursor-pointer rounded-2xl border border-border/70 bg-muted/20 p-4 transition-all duration-300 hover:border-foreground/30 hover:bg-muted/40 hover:-translate-y-1">
                <h4 className="text-3xl font-black text-foreground">100%</h4>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Client Focused
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Interactive Capabilities Grid (Span 6) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const isFullWidth = index === capabilities.length - 1;

            return (
              <SpotlightCard
                key={item.title}
                className={isFullWidth ? "sm:col-span-2" : ""}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/80 bg-muted/40 text-foreground transition-all duration-300 group-hover:scale-110 group-hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background">
                  <Icon size={20} />
                </div>

                <h4 className="mt-4 text-base font-bold text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                  {item.title}
                </h4>

                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                  {item.desc}
                </p>

                {/* Micro hover progress rail */}
                <div className="relative mt-5 h-1 w-full overflow-hidden rounded-full bg-muted/40">
                  <div className="h-full w-0 rounded-full bg-foreground transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
