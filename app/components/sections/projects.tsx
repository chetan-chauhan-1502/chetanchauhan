import { PROJECTS } from "@/app/data/portfolioData";
import ProjectCard from "../cards/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <p
          className="
          mb-3
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-muted-foreground
          "
        >
          Portfolio
        </p>

        <h2
          className="
          bg-linear-to-r
          from-foreground
          via-zinc-500
          to-foreground
          bg-clip-text
          text-4xl
          font-black
          text-transparent
          sm:text-5xl
          "
        >
          Featured Projects
        </h2>

        <p
          className="
          mx-auto
          mt-5
          max-w-2xl
          text-muted-foreground
          "
        >
          A collection of projects showcasing my skills in frontend development,
          modern UI design, performance optimization and scalable web
          application architecture.
        </p>
      </div>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
        "
      >
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
    </section>
  );
}
