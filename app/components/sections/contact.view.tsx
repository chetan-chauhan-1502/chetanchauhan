"use client";

import { Check, Copy, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 overflow-hidden">
      {/* Background Soft Glow Spots */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-150 rounded-full bg-foreground/3 blur-[120px] -z-10" />

      {/* Header */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-transform hover:scale-105">
          <Sparkles size={13} className="text-foreground" />
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Initiate Contact // 2026
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Let&apos;s build something exceptional.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
          Open for high-impact frontend engineering roles, Next.js web
          applications, design system implementations, and contract projects.
        </p>
      </div>

      {/* Main Container Card */}
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-10 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/30">
        {/* Subtle Top Ambient Reflection */}
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
          {/* Left Column: Direct Pitch (Span 7) */}
          <div className="flex flex-col items-start lg:col-span-7">
            <h3 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-foreground">
              Have a project in mind or an open role?
            </h3>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-lg">
              Whether you need an interactive React/Next.js frontend, a
              performant web interface, or UI architecture consultations, my
              inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:chauhanc1204@gmail.com"
                className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wider text-background shadow-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Write An Email</span>
                <Send
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                onClick={() => handleCopy("chauhanc1204@gmail.com", "email")}
                className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-5 py-3 text-xs font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:bg-muted hover:border-foreground/30 active:scale-[0.98]"
              >
                {copiedType === "email" ? (
                  <>
                    <Check size={14} className="text-foreground" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-muted-foreground" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Channels (Span 5) */}
          <div className="flex flex-col gap-3 lg:col-span-5 w-full">
            {/* Email Tile */}
            <div className="group relative flex items-center justify-between rounded-2xl border border-border/70 bg-background/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md">
              <a
                href="mailto:chauhanc1204@gmail.com"
                className="flex items-center gap-3.5 min-w-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/50 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Direct Email
                  </span>
                  <p className="truncate text-xs sm:text-sm font-bold text-foreground">
                    chauhanc1204@gmail.com
                  </p>
                </div>
              </a>

              <button
                type="button"
                aria-label="Copy email address"
                onClick={() =>
                  handleCopy("chauhanc1204@gmail.com", "tile-email")
                }
                className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {copiedType === "tile-email" ? (
                  <Check size={14} className="text-foreground" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            {/* Phone Tile */}
            <div className="group relative flex items-center justify-between rounded-2xl border border-border/70 bg-background/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md">
              <a
                href="tel:+919913041204"
                className="flex items-center gap-3.5 min-w-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/50 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Direct Phone
                  </span>
                  <p className="truncate text-xs sm:text-sm font-bold text-foreground">
                    +91 99130 41204
                  </p>
                </div>
              </a>

              <button
                type="button"
                aria-label="Copy phone number"
                onClick={() => handleCopy("+919913041204", "tile-phone")}
                className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {copiedType === "tile-phone" ? (
                  <Check size={14} className="text-foreground" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            {/* Location Tile */}
            <div className="group relative flex items-center justify-between rounded-2xl border border-border/70 bg-background/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/50 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Current Location
                  </span>
                  <p className="truncate text-xs sm:text-sm font-bold text-foreground">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <span className="rounded-md border border-border/50 bg-muted/30 px-2 py-0.5 text-[10px] font-mono text-muted-foreground shrink-0">
                Remote / Onsite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
