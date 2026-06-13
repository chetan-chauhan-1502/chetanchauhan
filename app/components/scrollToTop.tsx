"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-border
        bg-background/80
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-2xl
        cursor-pointer
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
}
