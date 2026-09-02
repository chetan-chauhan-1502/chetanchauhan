import { SkillsContent } from "./skills.controller";
import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Skills and Technologies | Chetan Chauhan",
  description:
    "Technical skills used by Chetan Chauhan, including React, Next.js, TypeScript, JavaScript, and Tailwind CSS.",
  canonicalUrl: "/skills",
});

export default function SkillsPage() {
  return <SkillsContent />;
}
