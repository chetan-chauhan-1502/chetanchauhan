import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/constants";
import { PROJECTS } from "@/app/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");
  const lastModified = new Date();

  // Root landing page entry with full image metadata for Google Image Search
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/chetan-chauhan-frontend-developer.jpg`,
        ...PROJECTS.map((project) => `${baseUrl}${project.image}`),
      ],
    },
  ];

  return staticRoutes;
}
