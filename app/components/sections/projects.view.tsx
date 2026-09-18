import { PROJECTS } from "@/app/data/portfolioData";
import ProjectCard from "../cards/projectCard";
import { Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section className="bg-background px-6 py-24 text-foreground sm:px-10 lg:px-16">
      <div className="projects-section__content mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-10 border-b border-border pb-16 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-foreground" />
              <span>Projects</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Featured
              <br />
              <span className="text-foreground">Projects.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              A selection of responsive digital experiences built with careful
              attention to visual detail, performance, and usability.
            </p>
          </div>
        </div>

        <div className="projects-section__grid grid gap-8 md:grid-cols-2">
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
