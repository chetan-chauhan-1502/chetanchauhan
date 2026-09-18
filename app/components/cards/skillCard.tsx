interface SkillCardProps {
  skill: {
    name: string;
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-card
      p-6
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-foreground
      "
    >
      <div className="relative z-10 text-center">
        <h3
          className="
          text-lg
          font-bold
          text-foreground
          "
        >
          {skill.name}
        </h3>
      </div>
    </div>
  );
}
