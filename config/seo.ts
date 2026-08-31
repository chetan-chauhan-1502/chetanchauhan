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
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const pageKeywords = keywords || SITE_CONFIG.keywords;
  const fullCanonical = `${SITE_CONFIG.url}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: fullCanonical,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} Portfolio Preview`,
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
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
