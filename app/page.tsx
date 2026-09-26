import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { HomeContent } from "./home.controller";

export const metadata: Metadata = buildMetadata({
  title: "Chetan Chauhan | Front-End Developer",
  description:
    "Explore Chetan Chauhan's front-end developer portfolio: production Next.js & React web applications, technical skill matrix, enterprise experience, and direct contact channels.",
  canonicalUrl: "/",
  ogImage: "/chetan-chauhan-frontend-developer.jpg",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://chetan-chauhan.in/#person",
        name: "Chetan Chauhan",
        jobTitle: "Front-End Developer",
        description:
          "Front-End Developer specializing in building scalable, accessible, and high-performance user interfaces with modern React, Next.js, and TypeScript ecosystems.",
        image:
          "https://chetan-chauhan.in/chetan-chauhan-frontend-developer.jpg",
        sameAs: [
          "https://github.com/chauhanc1204",
          "https://www.linkedin.com/in/chauhanc1204",
          "https://twitter.com/chauhanc1204",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "Front-End Development",
          "Web Performance Optimization",
          "SEO Optimization",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://chetan-chauhan.in/#website",
        url: "https://chetan-chauhan.in/",
        name: "Chetan Chauhan - Front-End Developer Portfolio",
        publisher: {
          "@id": "https://chetan-chauhan.in/#person",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
