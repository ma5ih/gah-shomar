import type { Locale } from "../../application/types";
export const copy = {
  fa: {
    today: "امروز", calendar: "تقویم", events: "رویدادها", timeline: "خط زمان", search: "جستجو",
    personal: "شخصی", important: "رویدادهای مهم", occasions: "مناسبت‌های امروز", details: "جزئیات",
    previous: "ماه قبل", next: "ماه بعد", backToday: "بازگشت به امروز", sources: "منابع",
    people: "افراد مرتبط", period: "دوره تاریخی", signIn: "ورود", signUp: "ثبت‌نام",
    logout: "خروج", username: "نام کاربری", password: "رمز عبور", memories: "خاطرات",
    addEvent: "افزودن رویداد شخصی", addMemory: "ثبت خاطره", noResults: "نتیجه‌ای پیدا نشد",
    demoNotice: "داده‌های تاریخی فعلاً آزمایشی‌اند؛ محتوای منبع‌گذاری‌شده در PHASE-08 وارد می‌شود.",
    morning: "صبح", noon: "ظهر", sunset: "غروب", night: "شب",
    spring: "بهار", summer: "تابستان", autumn: "پاییز", winter: "زمستان",
  },
  en: {
    today: "Today", calendar: "Calendar", events: "Events", timeline: "Timeline", search: "Search",
    personal: "Personal", important: "Important events", occasions: "Today's occasions", details: "Details",
    previous: "Previous month", next: "Next month", backToday: "Back to today", sources: "Sources",
    people: "Related people", period: "Historical period", signIn: "Sign in", signUp: "Sign up",
    logout: "Sign out", username: "Username", password: "Password", memories: "Memories",
    addEvent: "Add personal event", addMemory: "Save memory", noResults: "No results",
    demoNotice: "Historical content is temporary demo data; sourced editorial content arrives in PHASE-08.",
    morning: "Morning", noon: "Noon", sunset: "Sunset", night: "Night",
    spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
  },
} as const;
export function t(locale: Locale, key: keyof typeof copy.fa) { return copy[locale][key]; }
