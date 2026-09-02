import { SITE_CONFIG } from "@/config/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-muted-foreground">
          © 2026 Chetan Chauhan. All Rights Reserved.
        </p>
        <nav
          aria-label="Professional profiles"
          className="mt-4 flex justify-center gap-5 text-sm text-muted-foreground"
        >
          <a
            href={SITE_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={SITE_CONFIG.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            X
          </a>
        </nav>
      </div>
    </footer>
  );
}
