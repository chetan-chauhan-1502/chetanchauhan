import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveUrl: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-card
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-foreground
      "
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${title} project by Chetan Chauhan`}
          fill
          className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />
      </div>

      <div className="p-6">
        <h3
          className="
          text-xl
          font-bold
          text-foreground
          "
        >
          {title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-border
              px-3
              py-1
              text-xs
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-foreground
            px-4
            py-2
            text-sm
            font-medium
            text-background
            "
          >
            <ExternalLink size={16} />
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
