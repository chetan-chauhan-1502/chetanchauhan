import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chetan Chauhan | Front-End Developer",
    short_name: "Chetan Chauhan",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: SITE_CONFIG.backgroundColor ?? "#09090b",
    theme_color: SITE_CONFIG.themeColor ?? "#09090b",
    icons: [
      {
        src: "/chetan-chauhan-frontend-developer.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/chetan-chauhan-frontend-developer.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/chetan-og.svg",
        sizes: "1200x630",
        type: "image/svg+xml",
      },
    ],
  };
}
