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
      { src: "/chetan-og.svg", sizes: "1200x630", type: "image/svg+xml" },
    ],
  };
}
