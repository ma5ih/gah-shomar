import type {Metadata,Viewport} from "next";
import {Vazirmatn} from "next/font/google";
import "./globals.css";
import "@/frontend/themes/flat-geometric/theme.css";
import {ServiceWorkerRegister} from "@/frontend/components/service-worker-register";

const vazirmatn=Vazirmatn({
  subsets:["arabic"],
  display:"swap",
  variable:"--font-vazirmatn",
  weight:["400","500","600","700","800","900"],
});

export const metadata:Metadata={
  title:{default:"گاه‌شمار",template:"%s | گاه‌شمار"},
  description:"گاه‌شمار دیجیتال ایرانی",
  applicationName:"گاه‌شمار",
  manifest:"/manifest.webmanifest",
  appleWebApp:{capable:true,statusBarStyle:"default",title:"گاه‌شمار"},
  icons:{icon:"/icon.svg",shortcut:"/icon.svg"},
};

export const viewport:Viewport={
  width:"device-width",
  initialScale:1,
  viewportFit:"cover",
  themeColor:"#ece5d7",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fa" dir="rtl" data-theme="flat-geometric" className={vazirmatn.variable}><body><ServiceWorkerRegister/>{children}</body></html>;
}
