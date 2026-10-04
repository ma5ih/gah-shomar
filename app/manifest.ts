import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "گاه‌شمار",
    short_name: "گاه‌شمار",
    description: "گاه‌شمار دیجیتال ایرانی",
    start_url: "/?lang=fa",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#f4efe5",
    theme_color: "#f4efe5",
    lang: "fa",
    dir: "rtl",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
