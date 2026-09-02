import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date("2026-09-02");

  const routes = [
    "/",
    "/about",
    "/experience",
    "/education",
    "/skills",
    "/projects",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "daily" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
