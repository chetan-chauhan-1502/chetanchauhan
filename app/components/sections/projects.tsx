import { PROJECTS } from "@/app/data/portfolioData";
import ProjectCard from "../cards/projectCard";
import { Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-background px-6 py-24 text-foreground sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[15%] top-[-15%] h-112 w-md rounded-full bg-emerald-500/10 blur-[170px]" />
        <div className="absolute right-[-8%] top-[42%] h-136 w-136 rounded-full bg-cyan-500/10 blur-[190px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-10 border-b border-border pb-16 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Projects</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Featured
              <br />
              <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              A selection of responsive digital experiences built with careful
              attention to visual detail, performance, and usability.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
