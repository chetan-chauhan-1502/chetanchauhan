import { EDUCATION } from "@/app/data/portfolioData";
import EducationCard from "../cards/educationCard";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-100 w-100 -translate-x-1/2 rounded-full bg-zinc-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span
            className="
            rounded-full
            border
            border-border
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-muted-foreground
            "
          >
            Qualification
          </span>

          <h2
            className="
            mt-6
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
            Education Journey
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-relaxed
            text-muted-foreground
            sm:text-lg
            "
          >
            Academic foundation that helped me develop problem-solving skills,
            software engineering principles and modern web development
            expertise.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="
            absolute
            left-6
            top-0
            h-full
            w-px
            bg-linear-to-b
            from-transparent
            via-border
            to-transparent
            md:left-1/2
            "
          />

          <div className="space-y-12">
            {EDUCATION.map((item, index) => (
              <div
                key={`${item.institute}-${item.degree}`}
                className={`
                  relative
                  md:flex
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >
                <div
                  className="
                  absolute
                  left-4
                  top-10
                  h-6
                  w-6
                  rounded-full
                  border-4
                  border-background
                  bg-zinc-500
                  shadow-lg
                  shadow-zinc-500/30
                  md:left-1/2
                  md:-translate-x-1/2
                  "
                />

                <div className="ml-16 md:ml-0 md:w-[46%]">
                  <EducationCard
                    degree={item.degree}
                    institute={item.institute}
                    year={item.year}
                    description={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
