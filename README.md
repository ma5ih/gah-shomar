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

### وضعیت اعتبارسنجی
CI workflow فعلی شامل migration، ESLint، typecheck، unit/integration tests، production build و Playwright browser smoke است.
- CI #287: PASS روی implementation checkpoint
- CI #288: PASS روی documentation checkpoint
- CI #292: PASS روی current repository HEAD
Product acceptance و release QA هنوز باز هستند.

### مهم‌ترین اسناد
- `docs/PROJECT.md` — تعریف کامل محصول
- `docs/ROADMAP.md` — همه Phaseها و Taskها
- `docs/STATUS.md` — snapshot لحظه‌ای و Next Task
- `docs/CHANGELOG.md` — تاریخچه اقدامات
- `docs/DECISIONS.md` — تصمیم‌های رسمی
- `docs/REQUIREMENTS.md` — Requirements و Acceptance Criteria
- `docs/ARCHITECTURE.md` — معماری فنی
- `docs/CALENDAR-SPEC.md` — قرارداد رسمی تقویم
- `docs/EDITORIAL-EVENT-REVIEW.md` — workflow انتشار محتوای تاریخی
- `docs/ARCHITECTURE-IMPLEMENTATION-AUDIT-2026-10-04.md` — audit architecture/implementation
- `docs/PROJECT-AUDIT-2026-10-04-ACT-203.md` — پرونده کامل ممیزی، مغایرت‌سنجی، اصلاحات و نقطه ادامه
- `docs/VISUAL-DESIGN-SEPARATION-WARNING.md` — قرارداد دائمی جداسازی دو Visual Theme

## Calendar Engine
تقویم اصلی خورشیدی با شماره‌گذاری شاهنشاهی است:
- سال شاهنشاهی = سال خورشیدی + ۱۱۸۰
- سال جاری پروژه: ۲۵۸۵
- نام ماه پنجم: «اَمرداد»
- نام ماه دوازدهم: «اسپند»
- میلادی فقط تاریخ فرعی UI است.
- سال هجری شمسی در UI نمایش داده نمی‌شود.
- کبیسه با چرخه ۳۳ ساله ثابت تکرار نمی‌شود.
- Calendar Engine مسئول conversion، leap-year، arithmetic، weekday، Today، time-of-day و season است.

## وضعیت جاری
Correction gate مربوط به ACT-186 بسته شده است. اصلاحات بعدی ACT-199 نیز روی implementation اعمال و در CI #287 PASS شده‌اند.
Current repository HEAD: `f2060a1265c1ac79336364e31c69576de998e97c`
Current implementation checkpoint: `a9eace682f32f6e6ff32a748fe9df53448c27692`
Next fresh ACT ID: **ACT-206**

## Visual Theme separation

از نقطه TASK-07-001 به بعد، دو Visual Theme مستقل داریم:
- `src/frontend/themes/flat-geometric/`
- `src/frontend/themes/modern-flat-vector/`

هر دو از همان Core مشترک استفاده می‌کنند و فقط presentation/visual implementation آن‌ها جداست. جزئیات ممنوعیت‌ها و قواعد ادامه کار در `docs/VISUAL-DESIGN-SEPARATION-WARNING.md` ثبت شده است.

## قانون ضد گم‌شدن
هر اقدام معنادار باید:
1. ID یکتا داشته باشد.
2. در CHANGELOG ثبت شود.
3. Task و STATUS را به‌روز کند.
4. در صورت ارتباط ROADMAP/DECISIONS/REQUIREMENTS را همگام کند.
5. INDEX را در صورت تغییر ساختار/آخرین وضعیت sync کند.

## شروع هر جلسه
ابتدا `STATUS → ROADMAP → CHANGELOG` را بخوانید؛ سپس audit و سند مرتبط با Next Task را بررسی کنید.
