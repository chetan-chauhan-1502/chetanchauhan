import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/config/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border/80 bg-card/40 backdrop-blur-md overflow-hidden">
      {/* Top Ambient Highlight Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      {/* Giant Typography Watermark */}
      <div className="pointer-events-none absolute -bottom-10 right-4 select-none font-black text-[18vw] leading-none text-foreground/[0.02] dark:text-foreground/[0.03] -z-10">
        CHETAN
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start justify-between">
          {/* Col 1: Brand & Current Status (Span 5) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background text-xs font-black transition-transform duration-300 group-hover:scale-105">
                CC
              </div>
              <span className="text-base font-extrabold tracking-tight text-foreground">
                CHETAN CHAUHAN
              </span>
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Front-End &amp; Web Developer specializing in building scalable,
              accessible, and high-performance user interfaces with modern React
              and Next.js ecosystems.
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] text-foreground font-semibold">
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
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors max-w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Socials & External Links (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
              Connect
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground"
              >
                <div className="flex items-center gap-2.5">
                  <span>GitHub</span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="opacity-40 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground"
              >
                <div className="flex items-center gap-2.5">
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="opacity-40 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground"
              >
                <div className="flex items-center gap-2.5">
                  <span>X (Twitter)</span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="opacity-40 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Details */}
        <div className="mt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {currentYear} Chetan Chauhan. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-[11px] font-mono"></div>
        </div>
      </div>
    </footer>
  );
}
