"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import Link from "next/link";
import ThemeToggle from "./themeToggle";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <Link href="/">
            <h1 className="bg-linear-to-r from-foreground via-zinc-500 to-foreground bg-clip-text text-2xl font-black text-transparent">
              CHETAN
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const section = link.href.replace("#", "");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    activeSection === section
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}

                  {activeSection === section && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-foreground" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto bg-black/50 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-72 border-l border-border bg-background p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-bold">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            {links.map((link) => {
              const section = link.href.replace("#", "");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    activeSection === section
                      ? "bg-foreground text-background"
                      : "hover:bg-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
