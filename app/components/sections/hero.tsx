import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-150 w-150 -translate-x-1/2 rounded-full bg-zinc-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <h1
          className="
          mt-8
          bg-linear-to-r
          from-foreground
          via-zinc-500
          to-foreground
          bg-clip-text
          text-5xl
          font-black
          tracking-tight
          text-transparent
          sm:text-6xl
          lg:text-7xl
          xl:text-8xl
          "
        >
          Chetan Chauhan
        </h1>

        <h2
          className="
          mt-5
          text-xl
          font-semibold
          text-muted-foreground
          sm:text-2xl
          lg:text-3xl
          "
        >
          Frontend Developer
        </h2>

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-base
          leading-relaxed
          text-muted-foreground
          sm:text-lg
          "
        >
          I create modern, responsive and high-performance web applications
          using React, Next.js, TypeScript and Tailwind CSS with a strong focus
          on clean UI, accessibility, SEO and user experience.
        </p>

        <div
          className="
          mt-10
          flex
          flex-col
          items-center
          justify-center
          gap-4
          sm:flex-row
          "
        >
          <Link
            href="#projects"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-foreground
            px-6
            py-3
            font-semibold
            text-background
            transition-all
            duration-300
            hover:scale-105
            "
          >
            View Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind"].map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-border
              bg-card
              px-4
              py-2
              text-sm
              font-medium
              text-muted-foreground
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="mailto:chahanc1204@gmail.com"
            className="
            flex
            items-center
            gap-2
            text-muted-foreground
            transition-colors
            hover:text-foreground
            "
          >
            <Mail size={18} />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
