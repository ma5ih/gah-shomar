import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/frontend/themes/flat-geometric/theme.css";
import { ServiceWorkerRegister } from "@/frontend/components/service-worker-register";

export const metadata: Metadata = {
  title: { default: "گاه‌شمار", template: "%s | گاه‌شمار" },
  description: "گاه‌شمار دیجیتال ایرانی",
  applicationName: "گاه‌شمار",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "گاه‌شمار",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4efe5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" data-theme="flat-geometric">
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
