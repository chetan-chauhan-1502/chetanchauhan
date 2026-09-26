"use client";

import { PROJECTS } from "@/app/data/portfolioData";
import { ChevronDown, ChevronUp, FolderGit2 } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../cards/projectCard";

const FILTER_TABS = ["All", "Next.js", "React"] as const;
const INITIAL_VISIBLE_COUNT = 4;
const LOAD_MORE_STEP = 4;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_VISIBLE_COUNT,
  );

  // Filter projects by active tech stack tab
  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.tech.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase()),
          ),
        );

  // Current slice of projects to display
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Reset pagination count on tab change
  const handleTabChange = (tab: string) => {
    setActiveFilter(tab);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  // Toggle expanding or collapsing the project cards
  const handleLoadMoreToggle = () => {
    if (hasMore) {
      setVisibleCount((prev) => prev + LOAD_MORE_STEP);
    } else {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-foreground/[0.03] blur-[140px] -z-10" />

      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-transform hover:scale-105">
          <FolderGit2 size={13} className="text-foreground" />
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Selected Works // Production
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Crafted with care.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
          A showcase of client applications, production interfaces, and digital
          products built with an emphasis on speed, accessibility, and clean
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
                type="button"
                onClick={() => handleTabChange(tab)}
                className={`cursor-pointer relative flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background shadow-xs font-semibold"
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
        {displayedProjects.map((project, index) => (
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

      {/* Load More / Show Less Toggle Button */}
      {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-14 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleLoadMoreToggle}
            className="cursor-pointer group flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/60 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-foreground/40 hover:bg-muted/70 active:scale-95 shadow-md shadow-black/5 dark:shadow-black/20"
          >
            <span>
              {hasMore
                ? `Load More Projects (${filteredProjects.length - visibleCount} Remaining)`
                : "Show Less"}
            </span>
            {hasMore ? (
              <ChevronDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            ) : (
              <ChevronUp
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
