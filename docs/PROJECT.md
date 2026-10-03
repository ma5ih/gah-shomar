# PROJECT — سند آشنایی و توضیحات رسمی پروژه

Project ID: CAL-001
Name: گاه‌شمار
Repository: ma5ih/gah-shomar
Default branch: main
Status: IN_PROGRESS
Document version: 1.3.0
Last updated: 2026-10-04

## 1. تعریف محصول
«گاه‌شمار» یک گاه‌شمار دیجیتال ایرانی است که تقویم روزانه را با تاریخ و فرهنگ ایران، رویدادهای تاریخی، مناسبت‌ها، رویدادهای شخصی، خاطرات، جستجو و Timeline ترکیب می‌کند.

محصول Web App است اما تجربه آن باید mobile-first، touch-friendly و app-like باشد؛ نه یک وب‌سایت تقویم که صرفاً responsive شده است.

## 2. سیستم تقویم
تقویم اصلی خورشیدی/ایرانی با شماره‌گذاری شاهنشاهی است.

- سال فعلی پروژه: ۲۵۸۵
- رابطه: سال شاهنشاهی = سال خورشیدی + ۱۱۸۰
- مبدأ فنی: ۵۵۹ پیش از میلاد / آغاز پادشاهی کوروش بزرگ
- نوروز آغاز سال است.
- سال هجری شمسی معمولی در UI نمایش داده نمی‌شود.
- Gregorian فقط به‌صورت کوچک و فرعی نمایش داده می‌شود.
- ماه‌ها: فروردین، اردیبهشت، خرداد، تیر، اَمرداد، شهریور، مهر، آبان، آذر، دی، بهمن، اسپند.
- شش ماه اول ۳۱ روز، پنج ماه بعد ۳۰ روز، اسپند ۲۹/۳۰ روز.
- کبیسه از الگوریتم break-point خانواده Borkowski/Jalaali استفاده می‌کند؛ چرخه ۳۳ ساله ثابت نیست.
- نمونه قطعی: ۲۵۸۳ کبیسه، ۲۵۸۵ عادی، ۲۵۸۸ کبیسه، ۲۶۲۰ عادی، ۲۶۲۱ کبیسه.

## 3. وضعیت فعلی Calendar Engine
پیاده‌سازی فعلی شامل:
- Imperial Date Type
- Year/Month/Day validation
- Month lengths
- Leap-year calculation
- Gregorian ↔ Imperial conversion
- Today calculation
- Historical-date conversion gateway
- Nowruz/year-boundary handling
- Date arithmetic
- Weekday calculation
- Time-of-day state
- Seasonal state

Timezone/clock resolution عمداً خارج از Domain است؛ runtime ابتدا تاریخ Gregorian محلی موردنظر را resolve می‌کند و سپس Domain آن را به Imperial تبدیل می‌کند.

Historical conversion فعلاً Gregorian و Solar Hijri دقیق را پوشش می‌دهد. برای تقویم‌های دیگر، تا زمانی که converter و policy مستقل تعریف نشده، تاریخ شاهنشاهی حدس زده نمی‌شود.

## 4. محصول و MVP
MVP شامل:
1. Calendar Engine / Today / Monthly Calendar / Day Detail
2. Events / Important Events / Timeline / Person
3. Personal Events / Personal Person / Memories
4. Search
5. Persian + English / RTL + LTR
6. PWA baseline
7. Username/password account برای لایه شخصی
8. Personal Share Card

Reminder، social features، public event submission، Admin/CMS، maps، export/import، integrations، monetization، public API، forgot password و account deletion خارج MVP هستند.

## 5. معماری
لایه‌ها:
1. Presentation
2. Application
3. Domain
4. Data
5. Content
6. Infrastructure

Calendar Engine تنها Source of Truth برای منطق تقویم است و UI نباید آن را دوباره پیاده‌سازی کند.

## 6. محتوای تاریخی
Event/Person/Timeline/Source/Media داده ساختاریافته هستند. محتوای تاریخی مهم باید source-backed و دارای وضعیت validation باشد. Event عمومی و Personal Event از نظر مدل و دسترسی جدا هستند.

صفحهٔ Important Events بخشی از قرارداد محصول است: رویدادهای منتخب ماه باید با تصویر شاخص نمایش داده شوند، card قابل کلیک باشد و به Event Detail مستقل با روایت کامل‌تر، منابع، افراد/دوره و تصاویر بیشتر در صورت وجود منتهی شود.

در checkpoint فعلی `seedEvents` عمداً خالی است و انتشار هر event تا بررسی ماه‌به‌ماه و تأیید صریح متوقف است.

## 7. مخاطب
تعریف مخاطب محصول در REQUIREMENTS و PROJECT ثبت شده و شامل ایرانیان و مخاطبان علاقه‌مند به تاریخ/فرهنگ ایران است. محتوای سیاسی/معاصر باید factual، منبع‌دار و قابل بررسی ارائه شود.

## 8. وضعیت ساخت
PHASE-00 DONE
PHASE-01 DONE
PHASE-02 DONE
PHASE-03 DONE
PHASE-04 DONE
PHASE-05 DONE
PHASE-06 IN_PROGRESS
PHASE-07 IN_PROGRESS
PHASE-08 IN_PROGRESS
PHASE-09 IN_PROGRESS
PHASE-10 TODO

Current implementation HEAD: 5791e3e89aabcd75fd856e03e9a05023d009dbcc.
Current documentation checkpoint: **ACT-209 — Theme A documentation convergence**.
Latest Theme A validation: **GitHub Actions #37161733754 — PASS**.
Earlier full product/E2E acceptance checkpoint: **CI #299 — PASS**.
TASK-09-019 is DONE. The product remains in PHASE-06 with runtime/browser acceptance open.
TASK-07-001 is DONE for Theme A; the next visual task is TASK-07-002 and remains TODO.

## 9. وضعیت Visual Themeها

از ACT-205 دو Visual Theme مستقل با Core مشترک تعریف شده‌اند.

### Theme A — Flat Geometric
- مسیر: src/frontend/themes/flat-geometric/
- TASK-07-001 — Final Visual Hierarchy: **DONE**
- اجرای بصری و validation این Task انجام شده است.
- تمام تصمیم‌های فعلی باید داخل brief مصوب Theme A بمانند.
- Task بعدی در مسیر بصری: TASK-07-002 — Spacing/Margin Consistency.

### Theme B — Modern Flat Vector Illustration
- مسیر: src/frontend/themes/modern-flat-vector/
- فقط boundary/scaffolding ایجاد شده است.
- طراحی اصلی Theme B هنوز شروع نشده و در scope فعلی نیست.

قاعده: **shared Core + independent presentation**. تغییر purely visual در Theme مربوط انجام می‌شود؛ تغییر semantic/product behavior در shared Core باقی می‌ماند.

## 10. اصل ادامه پروژه
GitHub مرجع نهایی است. فرد یا اکانت جدید نباید برای فهم وضعیت پروژه به چت قبلی نیاز داشته باشد.
