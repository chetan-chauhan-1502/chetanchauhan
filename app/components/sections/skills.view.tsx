"use client";

import { useState } from "react";
import { SKILLS } from "@/app/data/portfolioData";
import SkillCard from "../cards/skillCard";
import { Terminal } from "lucide-react";

const FILTER_TABS = [
  { id: "all", label: "All Arsenal" },
  { id: "frontend", label: "Frontend" },
  { id: "styling", label: "Styling & UI" },
  { id: "tools", label: "AI & Tools" },
  { id: "cloud", label: "Cloud & DevOps" },
] as const;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSkills =
    activeTab === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeTab);

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-150 rounded-full bg-foreground/3 blur-[120px] -z-10" />

      {/* Section Header */}
      <div className="mb-14 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-transform hover:scale-105">
          <Terminal size={13} className="text-foreground" />
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Technical Stack &amp; Workflow
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Skills &amp; Technologies
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
          Modern frameworks, styling systems, AI workflows, and deployment tools
          I use to build fast, resilient web applications.
        </p>

        {/* Dynamic Category Filter Tabs (Just like Projects) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full border border-border/60 bg-muted/30 backdrop-blur-md">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const count =
              tab.id === "all"
                ? SKILLS.length
                : SKILLS.filter((s) => s.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <span>{tab.label}</span>
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

      {/* Modern Bento Grid */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index + 1} />
        ))}
      </div>
    </div>
  );
}
