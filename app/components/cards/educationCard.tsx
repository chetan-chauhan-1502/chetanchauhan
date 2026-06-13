import { GraduationCap, CalendarDays } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institute: string;
  year: string;
  description: string;
}

export default function EducationCard({
  degree,
  institute,
  year,
  description,
}: EducationCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-card/80
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-zinc-500/30
      hover:shadow-2xl
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-linear-to-r
        from-transparent
        via-zinc-500/5
        to-transparent
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        <div className="flex items-start gap-5">
          <div
            className="
            flex
            h-14
            w-14
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
            <GraduationCap size={24} />
          </div>

          <div className="flex-1">
            <h3
              className="
              bg-linear-to-r
              from-foreground
              via-zinc-500
              to-foreground
              bg-clip-text
              text-xl
              font-bold
              text-transparent
              "
            >
              {degree}
            </h3>

            <p className="mt-1 text-muted-foreground">{institute}</p>

            <div
              className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-background
              px-4
              py-2
              text-sm
              text-muted-foreground
              "
            >
              <CalendarDays size={14} />
              {year}
            </div>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
