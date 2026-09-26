import { NAV_LINKS, SITE_CONFIG } from "@/config/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/chetan-chauhan-frontend-developer.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-28 border-t border-border/80 bg-card/40 backdrop-blur-xl overflow-hidden">
      {/* Top Ambient Highlight Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />

      {/* Giant Ambient Typography Watermark */}
      <div className="pointer-events-none absolute -bottom-10 right-4 select-none font-black text-[18vw] leading-none text-foreground/2 dark:text-foreground/3 -z-10">
        CHETAN
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-start justify-between">
          {/* Col 1: Brand & Availability Status (Span 5) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link
              href="/"
              className="cursor-pointer group flex items-center gap-3"
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-muted/40 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-foreground/40">
                <Image
                  src={logo}
                  alt="Chetan Chauhan - Frontend Developer"
                  title="Chetan Chauhan Frontend Developer"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight text-foreground transition-colors group-hover:opacity-80">
                  CHETAN CHAUHAN
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Frontend Developer
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Specializing in crafting scalable, accessible, and
              performance-driven web interfaces using React, Next.js,
              TypeScript, and modern CSS architectures.
            </p>

            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span className="font-mono text-[11px] font-semibold text-foreground">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer text-xs text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 max-w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Social Network Channels (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
              Connect
            </p>

            <div className="flex flex-col gap-2">
              {[
                { label: "GitHub", href: SITE_CONFIG.socials.github },
                { label: "LinkedIn", href: SITE_CONFIG.socials.linkedin },
                { label: "X (Twitter)", href: SITE_CONFIG.socials.twitter },
              ].map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground"
                >
                  <span>{channel.label}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-40 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="mt-14 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {currentYear} Chetan Chauhan. All rights reserved.</p>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
            <span>Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
