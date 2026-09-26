"use client";

import { useState } from "react";
import { PROJECTS } from "@/app/data/portfolioData";
import ProjectCard from "../cards/projectCard";
import { Layers } from "lucide-react";

const FILTER_TABS = ["All", "Next.js", "React"] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.tech.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase()),
          ),
        );

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-150 rounded-full bg-foreground/3 blur-[140px] -z-10" />

      {/* Header */}
      <div className="mb-14 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md">
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Selected Works // 2026
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Crafted with care.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
          A showcase of client applications, production interfaces, and digital
          products built with emphasis on speed, accessibility, and clean
          motion.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full border border-border/60 bg-muted/30 backdrop-blur-md">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab;
            const count =
              tab === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) =>
                    p.tech.some((t) =>
                      t.toLowerCase().includes(tab.toLowerCase()),
                    ),
                  ).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`cursor-pointer relative flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                    isActive
                      ? "bg-background/20 text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index + 1}
            title={project.title}
            image={project.image}
            description={project.description}
            tech={project.tech}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}
