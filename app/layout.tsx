import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";

import "./globals.css";
import ThemeProvider from "./providers/themeProvider";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { SITE_CONFIG } from "@/config/constants";
import { buildMetadata } from "@/config/seo";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chetan Chauhan",
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    jobTitle: "Front-End Developer",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Web Performance",
      "Search Engine Optimization (SEO)",
    ],
    sameAs: [
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.twitter,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: personSchema,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <Script
          id="portfolio-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
