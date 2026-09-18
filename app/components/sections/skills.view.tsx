import { SKILLS } from "@/app/data/portfolioData";
import SkillCard from "../cards/skillCard";

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
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
    </div>
  );
}
