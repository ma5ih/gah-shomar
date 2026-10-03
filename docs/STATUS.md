# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-04
Current repository checkpoint: **ACT-204 on main**
Current implementation HEAD: `a9eace682f32f6e6ff32a748fe9df53448c27692`
Current documentation/audit checkpoint: **ACT-204 — PHASE-06 browser acceptance checkpoint**
Latest CI: **#299 — PASS**
Latest implementation-head CI: **#287 — PASS**
Primary workstream: PHASE-06 — Core Frontend Product Experience
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: **ACT-205**

## شمارش رسمی ریزتسک‌ها

- کل: **204**
- DONE: **134**
- IN_PROGRESS: **32**
- TODO: **37**
- DEFERRED: **1**
- BLOCKED: **0**
- DEPRECATED: **0**

این شمارش همان ledger فعلی ROADMAP است؛ هیچ Task جدیدی در correction series اضافه نشده است.

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
| PHASE-07 | IN_PROGRESS | Visual polish, time/season states and install UX remain |
| PHASE-08 | IN_PROGRESS | Editorial review and historical dataset remain |
| PHASE-09 | IN_PROGRESS | Automated pipeline green; final QA remains |
| PHASE-10 | TODO | Release |

## Audit continuation record\n\nبرای جزئیات کامل بررسی، مغایرت‌ها، اصلاحات، تست‌ها و تصمیم‌های نگهداری/واگذاری به Taskهای آینده، `docs/PROJECT-AUDIT-2026-10-04-ACT-203.md` مرجع این checkpoint است.\n\n## وضعیت واقعی implementation

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

## Correction gate — ACT-186 follow-up

تمام findings اجراییِ ثبت‌شده در ACT-186 اکنون در کد اصلاح و در CI #281 اعتبارسنجی شده‌اند:
- HIGH-01 Presentation/Data boundary — CLOSED
- HIGH-02 Event slug/routing — CLOSED
- HIGH-03 Period exact-date containment — CLOSED
- MEDIUM-01 Personal Person unlink semantics — CLOSED
- MEDIUM-02 Recurrence clear semantics — CLOSED
- MEDIUM-03 Optional-field clear semantics — CLOSED
- MEDIUM-04 Public search approval filtering — CLOSED
- MEDIUM-05 Ranged-event date matching — CLOSED
- MEDIUM-06 Timeline event nodes — CLOSED
- MEDIUM-07 Share Card theme treatment — CLOSED
- MEDIUM-09 Lint gate — CLOSED
- LOW-01 Session lastSeenAt lifecycle — CLOSED
- LOW-02 AuthorizationError consistency — CLOSED
- LOW-03 Memory relationship ownership validation — CLOSED

دو موضوع هنوز باز هستند، اما از جنس release/acceptance هستند نه «کد خرابِ شناخته‌شده»:
- MEDIUM-08: گسترش E2E به English flow، recurrence browser acceptance، memory CRUD، share-card behavior، accessibility، swipe و visual acceptance.
- MEDIUM-10: نبود `package-lock.json`؛ برای reproducible release باید در محیط دارای package-manager/network به‌صورت رسمی تولید و commit شود.

## Editorial state

`seedEvents = []` همچنان عمداً خالی است. هیچ رویداد تاریخی عمومی بدون editorial approval وارد محصول نشده است.

## مسیر بعدی

**ACT-204 runtime/browser acceptance is validated. Next is TASK-07-001 — Final Visual Hierarchy. Per product-owner instruction, stop before entering main visual design.** → PHASE-08 editorial dataset → PHASE-09 final QA → PHASE-10 release.
