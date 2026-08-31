import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chetan Chauhan | Front-End Developer",
    short_name: "Chetan Chauhan",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: SITE_CONFIG.backgroundColor,
    theme_color: SITE_CONFIG.themeColor,
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
