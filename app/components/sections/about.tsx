import {
  Code2,
  Globe,
  Laptop,
  FolderGit2,
  Sparkles,
  Rocket,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32"
    >
      <div className="mb-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Introduction
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
          lg:text-6xl
          "
        >
          About Me
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Passionate Frontend Developer focused on building fast, modern and
          user-friendly digital experiences.
        </p>
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div
            className="
            rounded-3xl
            border
            border-border
            bg-card/50
            p-8
            backdrop-blur
            "
          >
            <h3 className="mb-6 text-2xl font-bold">
              Hi, I&apos;m Chetan Chauhan 👋
            </h3>

            <p className="leading-8 text-muted-foreground">
              I am a Frontend Developer from India who enjoys creating modern
              websites and web applications using React, Next.js, TypeScript and
              Tailwind CSS.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              My focus is building responsive, scalable and performance-driven
              applications with clean code and premium user experiences.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5">
                <h4 className="text-3xl font-black">20+</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h4 className="text-3xl font-black">2.5+</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h4 className="text-3xl font-black">10+</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h4 className="text-3xl font-black">100%</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Client Focused
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <Code2
              size={38}
              className="mb-4 transition-transform group-hover:scale-110"
            />

            <h3 className="font-bold">Frontend Development</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              React, Next.js, TypeScript, JavaScript
            </p>
          </div>

          <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <Laptop
              size={38}
              className="mb-4 transition-transform group-hover:scale-110"
            />

            <h3 className="font-bold">UI / UX Design</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Responsive & Modern Interfaces
            </p>
          </div>

          <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <Globe
              size={38}
              className="mb-4 transition-transform group-hover:scale-110"
            />

            <h3 className="font-bold">SEO Optimization</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Fast & Search Engine Friendly Websites
            </p>
          </div>

          <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <FolderGit2
              size={38}
              className="mb-4 transition-transform group-hover:scale-110"
            />

            <h3 className="font-bold">Real Projects</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Freelance & Personal Applications
            </p>
          </div>

          <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <Rocket
              size={38}
              className="mb-4 transition-transform group-hover:scale-110"
            />

            <h3 className="font-bold">Performance</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Optimized Loading & Scalability
            </p>
          </div>

          <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <Sparkles
              size={38}
              className="mb-4 transition-transform group-hover:scale-110"
            />

            <h3 className="font-bold">Clean UI</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Modern Design Systems & Components
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
