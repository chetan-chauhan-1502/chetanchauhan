import { EducationContent } from "./education.controller";
import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Education | Chetan Chauhan",
  description:
    "View Chetan Chauhan's education and academic background in computer applications and web technologies.",
  canonicalUrl: "/education",
});

export default function EducationPage() {
  return <EducationContent />;
}
