import { AboutContent } from "./about.controller";
import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Chetan Chauhan",
  description:
    "Learn about Chetan Chauhan, a Front-End Developer from India building responsive React and Next.js web experiences.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
