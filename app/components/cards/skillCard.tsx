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
      bg-card/50
      p-6
      backdrop-blur-sm
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-zinc-500/50
      hover:shadow-2xl
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-linear-to-br
        from-transparent
        via-zinc-500/5
        to-transparent
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      />

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
          bg-linear-to-r
          from-foreground
          via-zinc-500
          to-foreground
          bg-clip-text
          text-lg
          font-bold
          text-transparent
          "
        >
          {skill.name}
        </h3>
      </div>
    </div>
  );
}
