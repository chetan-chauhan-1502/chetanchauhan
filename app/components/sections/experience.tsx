import { EXPERIENCE } from "@/app/data/portfolioData";
import ExperienceCard from "../cards/experienceCard";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="mb-20 text-center">
        <p
          className="
          mb-3
          text-sm
          font-semibold
          uppercase
          tracking-[0.35em]
          text-muted-foreground
          "
        >
          Career Journey
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
          Work Experience
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Building modern user interfaces, scalable web applications and
          high-performance frontend experiences.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div
          className="
          absolute
          left-5
          top-0
          h-full
          w-px
          bg-border
          md:left-1/2
          md:-translate-x-1/2
          "
        />

        <div className="space-y-12">
          {EXPERIENCE.map((item, index) => (
            <div
              key={`${item.company}-${item.role}`}
              className={`
                relative
                flex
                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
              `}
            >
              <div
                className="
                absolute
                left-0
                top-8
                h-10
                w-10
                rounded-full
                border-4
                border-background
                bg-zinc-500
                shadow-lg
                md:left-1/2
                md:-translate-x-1/2
                "
              />

              <div className="ml-16 w-full md:ml-0 md:w-[45%]">
                <ExperienceCard
                  role={item.role}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
