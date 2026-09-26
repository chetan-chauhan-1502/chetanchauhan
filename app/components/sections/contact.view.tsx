"use client";

import { Check, Copy, Mail, MapPin, Phone, Terminal } from "lucide-react";
import { MouseEvent, useRef, useState } from "react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactChannels = [
    {
      key: "email",
      label: "Direct Email",
      value: "chauhanc1204@gmail.com",
      href: "mailto:chauhanc1204@gmail.com",
      icon: Mail,
      tag: "PRIMARY",
    },
    {
      key: "phone",
      label: "Direct Line",
      value: "+91 99130 41204",
      href: "tel:+919913041204",
      icon: Phone,
      tag: "MOBILE",
    },
    {
      key: "location",
      label: "Base Location",
      value: "Ahmedabad, Gujarat, India",
      href: null,
      icon: MapPin,
      tag: "REMOTE / ONSITE",
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--foreground) 8%, transparent), transparent 75%)`,
        }}
      />

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-foreground/[0.03] blur-[140px] -z-20" />

      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md">
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Initiate Contact // Open Channels
          </span>
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Let&apos;s build something exceptional.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
          Open for high-impact frontend engineering roles, modern React &amp;
          Next.js applications, and design system implementations.
        </p>
      </div>

      {/* Terminal Matrix Card */}
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-foreground/30 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30">
        {/* Terminal Top Bar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-5">
          <div className="flex items-center gap-2"></div>

          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/30 px-3 py-1 font-mono text-[10px] text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            <span className="font-semibold uppercase tracking-wider">
              Available for work
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Call to Action (Span 6) */}
          <div className="flex flex-col justify-between h-full lg:col-span-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                START A CONVERSATION
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                Have a project or open frontend role?
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Whether you need a high-performance web interface, scalable
                component architecture, or full frontend consultation, feel free
                to reach out anytime.
              </p>
            </div>
          </div>

          {/* Right Column: Channels Matrix (Span 6) */}
          <div className="flex flex-col gap-3 lg:col-span-6 w-full">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const isCopied = copiedKey === channel.key;

              return (
                <div
                  key={channel.key}
                  className="group relative flex items-center justify-between rounded-2xl border border-border/70 bg-card/40 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card/80"
                >
                  {/* Channel Link / Details */}
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="cursor-pointer flex items-center gap-3.5 min-w-0 flex-1"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/40 text-foreground transition-all duration-300 group-hover:scale-105 group-hover:bg-foreground group-hover:text-background">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {channel.label}
                        </span>
                        <p className="truncate text-xs sm:text-sm font-bold text-foreground">
                          {channel.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/40 text-foreground">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {channel.label}
                        </span>
                        <p className="truncate text-xs sm:text-sm font-bold text-foreground">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Actions / Protocol Tags */}
                  <div className="ml-3 flex items-center gap-2">
                    {channel.href ? (
                      <button
                        type="button"
                        aria-label={`Copy ${channel.label}`}
                        onClick={() => handleCopy(channel.value, channel.key)}
                        className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground transition-colors"
                      >
                        {isCopied ? (
                          <Check size={13} className="text-foreground" />
                        ) : (
                          <Copy size={13} />
                        )}
                      </button>
                    ) : (
                      <span className="rounded-md border border-border/50 bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {channel.tag}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Ambient Line Indicator */}
        <div className="relative mt-8 h-1 w-full overflow-hidden rounded-full bg-muted/40">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
