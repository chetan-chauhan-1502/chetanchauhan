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
  variable: "--font-geist",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        name: "Chetan Chauhan",
        jobTitle: "Front-End Developer",
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        image: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          caption: "Chetan Chauhan - Front-End Developer",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "India",
        },
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Web Performance Optimization",
          "Search Engine Optimization (SEO)",
          "Front-End Engineering",
        ],
        sameAs: [
          SITE_CONFIG.socials.github,
          SITE_CONFIG.socials.linkedin,
          SITE_CONFIG.socials.twitter,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Structured Data (Schema.org) */}
        <script
          id="portfolio-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
      </head>
      <body className={geist.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 pt-24 sm:pt-28 w-full overflow-x-hidden">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
