"use client";

import { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Mouse Follow Radial Spotlight (Identical to Card Component) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--foreground) 7%, transparent), transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h1 className="mt-8 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
          Chetan Chauhan — Front-End Developer
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I create modern, responsive and high-performance web applications
          using React, Next.js, TypeScript and Tailwind CSS with a strong focus
          on clean UI, accessibility, SEO and user experience.
        </p>

        {/* View Projects & Contact Me - Together Side by Side */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition-all duration-300 hover:scale-105"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="mailto:chahanc1204@gmail.com"
            className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/40 hover:bg-muted/50 hover:scale-105"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
