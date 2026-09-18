import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { HomeContent } from "./home.controller";

export const metadata: Metadata = buildMetadata({
  title: "Front-End Developer Portfolio",
  description:
    "Explore Chetan Chauhan's frontend development experience, education, technical skills, featured projects, and contact information.",
  canonicalUrl: "/",
});

export default function Page() {
  return <HomeContent />;
}
