import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  keywords,
  canonicalUrl = "/",
  ogImage = SITE_CONFIG.ogImage,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title
    ? title.includes(SITE_CONFIG.name)
      ? title
      : `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;

  const pageDescription = description || SITE_CONFIG.description;
  const pageKeywords = keywords || SITE_CONFIG.keywords;

  const normalizedCanonical =
    canonicalUrl === "/"
      ? "/"
      : canonicalUrl.startsWith("/")
        ? canonicalUrl
        : `/${canonicalUrl}`;

  const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");
  const fullCanonical = `${baseUrl}${normalizedCanonical}`;

  const resolvedOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${baseUrl}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
    creator: SITE_CONFIG.author.name,
    publisher: SITE_CONFIG.author.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonical,
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: fullCanonical,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: "Chetan Chauhan - Front-End Developer",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      creator: "@chetan_1502",
      images: [resolvedOgImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
