import { Briefcase, CalendarDays } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border/60
      bg-card/70
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-linear-to-r
        from-transparent
        via-zinc-500/10
        to-transparent
        opacity-0
        transition-all
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
            <Briefcase size={24} />
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
              {role}
            </h3>

            <p className="mt-1 text-muted-foreground">{company}</p>

            <div
              className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              px-4
              py-2
              text-sm
              text-muted-foreground
              "
            >
              <CalendarDays size={14} />
              {period}
            </div>
          </div>
        </div>

        <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
