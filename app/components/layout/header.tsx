"use client";

import { useActiveSection } from "@/app/hooks/useActiveSection";
import Link from "next/link";
import ThemeToggle from "./themeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const activeSection = useActiveSection();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-border/50
      bg-background/80
      backdrop-blur-xl
      "
    >
      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-4
        lg:px-6
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
          cursor-pointer
          transition-transform
          duration-300
          hover:scale-105
          "
        >
          <h1
            className="
            bg-gradient-to-r
            from-foreground
            via-zinc-500
            to-foreground
            bg-clip-text
            text-2xl
            font-black
            tracking-tight
            text-transparent
            "
          >
            CHETAN
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const section = link.href.replace("#", "");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  cursor-pointer
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:text-foreground
                  ${
                    activeSection === section
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
