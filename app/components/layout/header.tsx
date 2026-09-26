"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./themeToggle";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { NAV_LINKS } from "@/config/constants";
import logo from "../../../public/chetan-chauhan-frontend-developer.jpg";

export default function Header() {
  const rawActiveSection = useActiveSection();
  const activeSection = rawActiveSection || "home";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Island Wrapper */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-out ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between gap-4 rounded-full border border-border/70 transition-all duration-500 ${
            scrolled
              ? "w-full max-w-5xl bg-background/80 py-2 px-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)] dark:border-white/10"
              : "w-full max-w-6xl bg-background/50 py-2.5 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md dark:border-border/50"
          }`}
        >
          {/* Subtle top reflection line for Apple-style glass */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

          {/* Left: Brand Monogram & Name */}
          <Link
            href="/"
            className="cursor-pointer group flex items-center gap-2.5 pl-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-muted/40 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-foreground/40">
              <Image
                src={logo}
                alt="Chetan Chauhan - Frontend Developer"
                title="Chetan Chauhan Frontend Developer"
                fill
                priority
                className="object-cover"
                sizes="32px"
              />
            </div>

            <span className="text-sm font-black tracking-wider text-foreground transition-colors group-hover:opacity-80">
              CHETAN CHAUHAN
            </span>
          </Link>

          {/* Center: Floating Magnetic Nav Capsule */}
          <nav
            aria-label="Main navigation"
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 rounded-full bg-muted/60 p-1 border border-border/50 backdrop-blur-md"
          >
            {NAV_LINKS.map((link) => {
              const linkSection = link.href.replace(/^[/#]+/, "") || "home";
              const isActive = activeSection === linkSection;
              const isHovered = hoveredNav === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className={`cursor-pointer relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-background border border-border/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] -z-10 transition-all duration-300" />
                  )}

                  {/* Soft hover glow */}
                  {isHovered && !isActive && (
                    <span className="absolute inset-0 rounded-full bg-foreground/5 -z-10 transition-all duration-200" />
                  )}

                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Theme Toggle + Hamburger) */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-px bg-border hidden sm:block" />

            {/* Theme Toggle Button */}
            <div className="rounded-full p-0.5">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-muted/60 backdrop-blur-sm transition-transform active:scale-90 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Modern Pop-down Modal Drawer for Mobile */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-start px-4 pt-20 transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto bg-black/50 backdrop-blur-md opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-full max-w-sm mx-auto overflow-hidden rounded-3xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-6 scale-95 opacity-0"
          }`}
        >
          {/* Header row inside popup */}
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div className="flex items-center gap-2.5">
              <div className="relative h-6 w-6 overflow-hidden rounded-full border border-border/80">
                <Image
                  src={logo}
                  alt="Chetan Chauhan - Frontend Developer"
                  title="Chetan Chauhan Frontend Developer"
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Navigation
              </span>
            </div>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-muted"
            >
              <X size={15} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Mobile navigation"
            className="mt-3 flex flex-col gap-1.5"
          >
            {NAV_LINKS.map((link, idx) => {
              const linkSection = link.href.replace(/^[/#]+/, "") || "home";
              const isActive = activeSection === linkSection;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${idx * 30}ms` }}
                  className={`cursor-pointer flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-foreground text-background font-semibold shadow-xs"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={15}
                    className={`transition-transform duration-200 ${
                      isActive ? "rotate-45" : "opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
