import { ExperienceContent } from "./experience.controller";
import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Experience | Chetan Chauhan",
  description:
    "View the frontend development experience of Chetan Chauhan across React, Next.js, responsive UI, and performance-focused projects.",
  canonicalUrl: "/experience",
});

export default function ExperiencePage() {
  return <ExperienceContent />;
}
