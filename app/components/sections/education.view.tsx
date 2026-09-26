"use client";

import { EDUCATION } from "@/app/data/portfolioData";
import EducationCard from "../cards/educationCard";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-foreground/[0.03] blur-[140px] -z-10" />

      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md">
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Academic Ledger // Foundation
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Education &amp; Qualifications
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
          Academic foundation and software engineering principles developed
          throughout my education.
        </p>
      </div>

      {/* Perfectly Aligned Timeline */}
      <div className="relative max-w-4xl mx-auto flex flex-col">
        {EDUCATION.map((item, index) => {
          const isLast = index === EDUCATION.length - 1;

          return (
            <div
              key={`${item.institute}-${item.degree}`}
              className="group flex gap-4 sm:gap-8"
            >
              {/* Right Column: Card Content */}
              <div className={`flex-1 ${!isLast ? "pb-8" : ""}`}>
                <EducationCard
                  index={index + 1}
                  degree={item.degree}
                  institute={item.institute}
                  year={item.year}
                  description={item.description}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
