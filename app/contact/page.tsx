import { ContactContent } from "./contact.controller";
import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Chetan Chauhan",
  description:
    "Contact Chetan Chauhan about frontend development, React, Next.js applications, UI implementation, and collaboration.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
