# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-04 — ACT-209
Current documentation checkpoint: **ACT-209 on main**
Current implementation HEAD: 5791e3e89aabcd75fd856e03e9a05023d009dbcc
Current implementation checkpoint: **ACT-207 — Theme A activation**
Latest Theme A validation: **GitHub Actions #37161733754 — PASS**
Latest product/E2E acceptance checkpoint: **CI #299 — PASS**
Primary workstream: PHASE-06 — Core Frontend Product Experience
Current visual stream: PHASE-07 — Theme A refinement
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: **ACT-210**

## شمارش رسمی ریزتسک‌ها

- کل: **204**
- DONE: **136**
- IN_PROGRESS: **31**
- TODO: **36**
- DEFERRED: **1**
- BLOCKED: **0**
- DEPRECATED: **0**

این شمارش canonical مستقیماً از ledger فعلی ROADMAP خوانده شده است.

## وضعیت فازها

| Phase | Status | وضعیت واقعی |
|---|---|---|
| PHASE-00 | DONE | Documentation foundation |
| PHASE-01 | DONE | Product specification |
| PHASE-02 | DONE | Architecture and boundaries |
| PHASE-03 | DONE | Calendar Engine + Domain |
| PHASE-04 | DONE | Application/backend use cases |
| PHASE-05 | DONE | Frontend architecture/design system |
| PHASE-06 | IN_PROGRESS | Core pages implemented; runtime/browser/product acceptance remains |
| PHASE-07 | IN_PROGRESS | TASK-07-001 Theme A complete; remaining visual/time/season/install work remains |
| PHASE-08 | IN_PROGRESS | Editorial review and historical dataset remain |
| PHASE-09 | IN_PROGRESS | Automated pipeline green; final QA remains |
| PHASE-10 | TODO | Release |

## آخرین checkpoint اجرایی

### ACT-208 — Theme A visual hierarchy validation — DONE
- TASK-07-001 — Final Visual Hierarchy برای Theme A — Flat Geometric بسته شد.
- Theme A با brief مصوب منطبق شد: flat solid colors، angular layered forms، simple lines، minimal detail، بدون gradient و realistic texture.
- Time-of-day و season فقط appearance را تغییر می‌دهند.
- Theme B در این checkpoint دست‌نخورده ماند.
- CI run #37161733754 با conclusion = success و quality job موفق شد.

### ACT-209 — Documentation convergence — DONE
- وضعیت فعلی همه اسناد continuation اصلی با ACT-208 همگام شد.
- هیچ تغییر implementation یا product behavior جدیدی انجام نشد.
- TASK-07-001 همچنان DONE است.
- گام بعدی TASK-07-002 — Spacing/Margin Consistency است و هنوز TODO است.

## وضعیت واقعی implementation

Implemented and validated:
- Calendar Engine and Imperial date rules
- Gregorian ↔ Imperial conversion
- leap-year break-point algorithm + regression matrix
- Today / Calendar / Day Detail
- Event / Important Event / Person / Timeline / Search routes
- Authentication / sessions
- Personal Event / Personal Person / Memory
- recurrence
- Personal Share Card
- Persian + English / RTL + LTR
- public/personal separation
- graceful public fallback when personal storage is unavailable
- PWA baseline
- Playwright smoke coverage for desktop/tablet/mobile

## Correction gate

تمام findings اجراییِ ثبت‌شده در correction series مربوط به ACT-186 تا ACT-196 بسته شده‌اند و CI #281 آن‌ها را اعتبارسنجی کرده است. موارد باقی‌مانده از جنس acceptance/release هستند:
- broader runtime/browser acceptance و visual acceptance
- accessibility / touch / responsive review
- release reproducibility به‌دلیل نبود package-lock
- release hardening مربوط به CSRF/rate limiting طبق Taskهای Phase-09/10

## Visual Theme state

- Theme A: src/frontend/themes/flat-geometric/ — فعال و اجراشده.
- Theme B: src/frontend/themes/modern-flat-vector/ — فقط boundary/scaffolding؛ طراحی اصلی آن هنوز شروع نشده است.
- Core مشترک single-source باقی مانده: Calendar Engine، Domain، Data، Application، Auth/Session و product contracts.
- TASK-07-001 برای Theme A — DONE.
- سند عملیاتی Theme A: docs/PHASE-07-THEME-A-FLAT-GEOMETRIC.md.
- قرارداد جداسازی دائمی: docs/VISUAL-DESIGN-SEPARATION-WARNING.md.
- هر visual change فعلی باید فقط در Theme A و دقیقاً داخل brief مصوب خودش باقی بماند.

## Editorial state

seedEvents = [] عمداً خالی است. هیچ historical event عمومی بدون editorial approval وارد محصول نشده است.

## مسیر بعدی قطعی

**Next task: TASK-07-002 — Spacing/Margin Consistency — TODO**

پس از شروع این Task، اجرای بصری فقط برای Theme A انجام می‌شود. Theme B تا تصمیم و scope مستقل خودش وارد اجرا نمی‌شود.

مسیر کلی:
PHASE-06 runtime/browser acceptance → ادامهٔ PHASE-07 برای Theme A → PHASE-08 editorial dataset → PHASE-09 final QA → PHASE-10 release.

## قانون ادامه پروژه

هر اقدام معنادار باید:
1. یک ACT ID یکتا داشته باشد.
2. در CHANGELOG ثبت شود.
3. Task و STATUS را به‌روز کند.
4. در صورت ارتباط ROADMAP/DECISIONS/REQUIREMENTS را همگام کند.
5. اگر ساختار سندی تغییر کرد، INDEX را sync کند.