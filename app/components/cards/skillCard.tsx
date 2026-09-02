import Image from "next/image";

interface SkillCardProps {
  skill: {
    name: string;
    image: string;
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
        <div
          className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          border
          border-border
          bg-background
          transition-transform
          duration-300
          group-hover:scale-110
          "
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <h3
          className="
          mt-5
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
