# گاه‌شمار | Calendar App

> **Current status: PHASE-06 — Core Frontend Product Experience — IN_PROGRESS**

این repository مرجع اصلی و Source of Truth پروژه «گاه‌شمار» است. وضعیت واقعی پروژه باید از اسناد GitHub خوانده شود، نه از چت‌های قبلی.

## الان کجاییم؟
- PHASE-00 Documentation — DONE
- PHASE-01 Product / Specification — DONE
- PHASE-02 Architecture — DONE
- PHASE-03 Core Backend / Calendar Engine — DONE
- PHASE-04 Application Backend / Use Cases — DONE
- PHASE-05 Frontend Architecture & Design System — DONE
- PHASE-06 Core Frontend Product Experience — IN_PROGRESS
- PHASE-07 Visual Polish & PWA — IN_PROGRESS
- PHASE-08 Historical Content / Editorial Dataset — IN_PROGRESS
- PHASE-09 Integration & QA — IN_PROGRESS
- PHASE-10 Release — TODO

### کارهای انجام‌شده اخیر در PHASE-03
- Imperial Date Type، Year/Month/Day و Month Lengths
- Leap-Year Engine با break-pointهای Borkowski/Jalaali
- Gregorian ↔ Imperial conversion
- Today calculation
- Historical Date conversion gateway
- Nowruz/year-boundary regression coverage
- Date arithmetic
- Weekday calculation
- Time-of-day state
- Seasonal state
- CI workflow برای typecheck + unit test + production build

### وضعیت اعتبارسنجی
CI فعلی شامل migration، typecheck، unit/integration tests، production build و Playwright browser smoke است. ACT-187 checkpoint در run #244 موفق شد و ACT-188 checkpoint در run #246 نیز با SUCCESS کامل شد. Product acceptance و release QA هنوز باز هستند. با این حال product acceptance و release QA هنوز باز هستند.

## مهم‌ترین اسناد
- `docs/PROJECT.md` — تعریف کامل محصول
- `docs/ROADMAP.md` — همه Phaseها و Taskها
- `docs/STATUS.md` — snapshot لحظه‌ای و Next Task
- `docs/CHANGELOG.md` — تاریخچه تمام ACTها
- `docs/DECISIONS.md` — تصمیم‌های رسمی
- `docs/REQUIREMENTS.md` — Requirements و Acceptance Criteria
- `docs/ARCHITECTURE.md` — معماری فنی
- `docs/CALENDAR-SPEC.md` — قرارداد تقویم
- `docs/CALENDAR-ENGINE-OPEN-QUESTION.md` — وضعیت نهایی تصمیم کبیسه
- `docs/INDEX.md` — فهرست مرکزی اسناد
- `docs/ARCHITECTURE-IMPLEMENTATION-AUDIT-2026-10-04.md` — آخرین audit مستقل implementation

## Calendar Engine
تقویم اصلی خورشیدی با شماره‌گذاری شاهنشاهی است:
- سال شاهنشاهی = سال خورشیدی + ۱۱۸۰
- سال جاری پروژه: ۲۵۸۵
- نام ماه پنجم: «اَمرداد»
- نام ماه دوازدهم: «اسپند»
- میلادی فقط تاریخ فرعی UI است.
- سال هجری شمسی در UI نمایش داده نمی‌شود.
- کبیسه با یک چرخه ۳۳ ساله ثابت تکرار نمی‌شود.
- Calendar Engine مسئول conversion، leap-year، arithmetic، weekday، Today، time-of-day و season است.

## قانون ضد گم‌شدن
هر اقدام معنادار باید:
1. ID یکتا داشته باشد.
2. در CHANGELOG ثبت شود.
3. Task و STATUS را به‌روز کند.
4. در صورت ارتباط ROADMAP/DECISIONS/REQUIREMENTS را همگام کند.
5. INDEX را در صورت تغییر ساختار/آخرین وضعیت sync کند.

## شروع هر جلسه
ابتدا `STATUS → ROADMAP → CHANGELOG` را بخوانید؛ سپس audit و سند مرتبط با Next Task را بررسی کنید.
