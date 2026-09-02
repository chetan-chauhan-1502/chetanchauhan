import { ProjectsContent } from "./projects.controller";
import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects by Chetan Chauhan",
  description:
    "Explore frontend projects by Chetan Chauhan, including responsive React, Next.js, TypeScript, and UI development work.",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}
