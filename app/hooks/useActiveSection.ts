"use client";

import { useEffect, useState } from "react";

export function useActiveSection(defaultSection: string = "home") {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    const handleScroll = () => {
      // 1. If user is at or near the top, force the default section (home)
      if (window.scrollY < 80) {
        setActiveSection(defaultSection);
        return;
      }

      // 2. If user is at the bottom of the page, activate the last section
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50;

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );

      if (sections.length === 0) return;

      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // 3. Detect current section based on scroll offset
      // Standard header offset (~100px below top)
      const scrollPosition = window.scrollY + 100;

      let current = defaultSection;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once on load/mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [defaultSection]);

  return activeSection;
}
