import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

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
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-border bg-card/80 p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:bg-card hover:shadow-2xl hover:shadow-emerald-500/10 sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-500 sm:text-3xl">
        {title}
      </h3>

      <p className="mt-3 text-xs font-light leading-relaxed text-muted-foreground sm:text-sm">
        {description}
      </p>

      <Link
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-6 block overflow-hidden rounded-2xl border border-border bg-muted"
      >
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${title} project by Chetan Chauhan`}
            fill
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/0" />
          <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-xl bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={20} strokeWidth={2} />
          </div>
        </div>
      </Link>

      <div className="mt-6 flex flex-col justify-between gap-4 border-t border-border pt-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-foreground transition hover:text-emerald-500"
        >
          <span>Live Preview</span>
          <ExternalLink
            size={13}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
