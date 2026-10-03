# گاه‌شمار | Calendar App

> **Current status: PHASE-06 — Core Frontend Product Experience — IN_PROGRESS | Visual stream: PHASE-07 Theme A**

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
- CI #281: PASS روی implementation correction series
- CI #299: PASS روی product/E2E acceptance checkpoint
- GitHub Actions #37161733754: PASS روی Theme A visual validation
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
Correction gate مربوط به ACT-186 و correctionهای بعدی بسته شده‌اند.
Current implementation HEAD: 5791e3e89aabcd75fd856e03e9a05023d009dbcc
Current documentation checkpoint: **ACT-210**
TASK-07-001 — Final Visual Hierarchy برای Theme A — **DONE**.
TASK-07-002 — Spacing/Margin Consistency — **IN_PROGRESS**.
ACT-210 implementation commit: dadfc21de5bbc1c262774b47c539bd10c1072414.
Next fresh ACT ID: **ACT-211**.

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