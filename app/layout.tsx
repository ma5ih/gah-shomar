import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "گاه‌شمار",
  description: "گاه‌شمار دیجیتال ایرانی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
