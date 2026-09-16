import { SKILLS } from "@/app/data/portfolioData";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Palette,
  Plug,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import SkillCard from "../cards/skillCard";

const skillCategories = [
  {
    title: "Development",
    subtitle: "ENGINEERING",
    description:
      "High-performance application logic and scalable web architectures.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Databases",
    subtitle: "DATA_LAYER",
    description:
      "Robust persistence structures, relational databases, and distributed stores.",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQL"],
  },
  {
    title: "UI/UX & Design",
    subtitle: "INTERACTION",
    description:
      "Immersive human-centric layouts, micro-interactions, and visual systems.",
    icon: Palette,
    skills: [
      "Figma",
      "UI Design",
      "UX Design",
      "Responsive Design",
      "Sass & SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Tools",
    subtitle: "ECOSYSTEM",
    description:
      "Advanced development environments, version control, and debug suites.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Cursor", "Antigravity"],
  },
  {
    title: "Cloud & Deployment",
    subtitle: "INFRASTRUCTURE",
    description:
      "Resilient cloud orchestration, serverless setups, and edge delivery.",
    icon: Cloud,
    skills: ["Vercel", "Netlify", "AWS", "Firebase", "GitHub Pages"],
  },
  {
    title: "Core Competencies",
    subtitle: "FOUNDATION",
    description:
      "Full-stack problem solving, strict typing, and system integration.",
    icon: Plug,
    skills: [
      "REST API",
      "API Integration",
      "Authentication",
      "Full-Stack Architecture",
      "Problem Solving",
      "Debugging",
    ],
  },
];

interface SkillsProps {
  fullPage?: boolean;
}

export default function Skills({ fullPage = false }: SkillsProps) {
  if (fullPage) {
    return (
      <section className="relative isolate min-h-screen overflow-hidden bg-background font-sans text-foreground antialiased selection:bg-rose-500 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-[-20%] h-125 w-125 rounded-full bg-rose-500/10 blur-[180px]" />
          <div className="absolute right-[-10%] top-[30%] h-150 w-150 rounded-full bg-indigo-500/10 blur-[200px]" />
        </div>

        <section className="relative border-b border-border px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
                  <Fingerprint className="h-3.5 w-3.5 text-rose-500" />
                  <span className="font-mono tracking-widest uppercase">
                    Skills
                  </span>
                </div>
                <h1 className="text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl">
                  Technical
                  <br />
                  <span className="bg-linear-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text font-semibold text-transparent">
                    Repertoire.
                  </span>
                </h1>
              </div>
              <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                A focused collection of tools and technologies used to build
                modern, reliable digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-rose-500/50 hover:bg-card"
                >
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-xs tracking-wider text-muted-foreground">
                        {String(index + 1).padStart(2, "0")} {"//"}{" "}
                        {category.subtitle}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors group-hover:border-rose-500/50 group-hover:bg-rose-500/10 group-hover:text-rose-400">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h2 className="mb-3 text-2xl font-medium tracking-tight text-foreground">
                      {category.title}
                    </h2>
                    <p className="mb-8 text-xs font-light leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-border pt-6">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-light text-muted-foreground transition-colors hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative px-6 pb-32 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card/80 p-10 backdrop-blur-2xl sm:flex-row sm:items-center sm:p-16">
              <div>
                <span className="font-mono text-xs tracking-widest text-rose-500 uppercase">
                  Collaboration
                </span>
                <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s build exceptional software.
                </h2>
                <p className="mt-2 max-w-md text-sm font-light text-muted-foreground">
                  Available for contract engineering roles, product development,
                  and technical consulting.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xs font-medium tracking-wider text-black uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </section>
    );
  }

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Technical Expertise
        </p>

        <h2
          className="
          text-4xl
          font-black
          text-foreground
          sm:text-5xl
          "
        >
          Skills
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Technologies and tools I use to build fast, scalable and modern web
          applications.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-2
        gap-5
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
        "
      >
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
