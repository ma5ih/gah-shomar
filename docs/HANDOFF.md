# HANDOFF — راهنمای ادامه پروژه

Project: گاه‌شمار
Repository: ma5ih/gah-shomar
Default branch: main
Checkpoint date: 2026-10-04
Current documentation checkpoint: **ACT-231 on main**
Current implementation HEAD: 7e7ebb4bb8f2d15175900daf54968b4792d23bad
Primary workstream: PHASE-06 — Core Frontend Product Experience
Current visual stream: PHASE-07 — Theme A refinement
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: **ACT-232**

## 1. نقطه فعلی پروژه

این checkpoint بعد از بسته‌شدن PHASE-07 و merge موفق hardening/reproducibility در ACT-230 ثبت شده است.

- TASK-07-001 — Final Visual Hierarchy — **DONE**
- Theme A — Flat Geometric — **PHASE-07 DONE** و validation شده است.
- Theme B — Modern Flat Vector Illustration — هنوز وارد طراحی اصلی نشده است.
- TASK-07-002 تا TASK-07-011 — **DONE**
- TASK-07-013 — **DONE**
- PHASE-07 — **DONE**
- security/reproducibility integration: **PR #4 / MERGED — validated in CI #406 and main CI #407**
- هیچ تغییر جدیدی در Core، Calendar Engine، Domain، Data، Application، Auth/Session، routing یا business behavior در ACT-209 انجام نشده است.

## 2. شمارش رسمی Taskها

- کل: **204**
- DONE: **162**
- IN_PROGRESS: **28**
- TODO: **13**
- DEFERRED: **1**
- BLOCKED: **0**
- DEPRECATED: **0**

این شمارش باید با docs/ROADMAP.md یکی باشد.

## 3. وضعیت Phaseها

- PHASE-00 — DONE
- PHASE-01 — DONE
- PHASE-02 — DONE
- PHASE-03 — DONE
- PHASE-04 — DONE
- PHASE-05 — DONE
- PHASE-06 — IN_PROGRESS: runtime/browser/product acceptance باقی است.
- PHASE-07 — IN_PROGRESS: TASK-07-001 برای Theme A بسته شده؛ visual/time/season/install work باقی است.
- PHASE-08 — IN_PROGRESS: editorial dataset و historical review باقی است.
- PHASE-09 — IN_PROGRESS: final QA و release-blocker review باقی است.
- PHASE-10 — IN_PROGRESS: release hardening and final release steps.

## 4. آخرین اقدامات قطعی

### ACT-207 — Theme A visual execution
- Theme A stylesheet در src/frontend/themes/flat-geometric/theme.css فعال شد.
- flat solid surfaces، simple lines، layered angular forms و minimal visual treatment اجرا شد.
- gradient و glass/backdrop treatment کنار گذاشته شد.
- time-of-day و season فقط appearance را تحت تأثیر قرار می‌دهند.

### ACT-208 — Theme A validation
- TASK-07-001 بسته شد.
- Theme A با brief رسمی تطبیق داده شد.
- CI run #37161733754 با success کامل شد.

### ACT-209 — Documentation convergence
- STATUS/ROADMAP/INDEX/PROJECT/HANDOFF/Phase notes با ACT-208 همگام شدند.
- اشاره‌های stale به pending بودن TASK-07-001 و checkpointهای قدیمی حذف یا جایگزین شدند.

### ACT-210 — Theme A spacing implementation
- TASK-07-002 آغاز شد و spacing scale اختصاصی 4/8/12/16/20/24/32px در Theme A فعال شد.
- تغییر implementation فقط در src/frontend/themes/flat-geometric/theme.css انجام شد.
- static validation انجام شد، اما CI جدید هنوز به‌صورت مستقل مشاهده نشده است؛ بنابراین Task فعلاً IN_PROGRESS است.

### ACT-213 — PWA install experience
- Install prompt، dismiss state، appinstalled handling و localization اضافه شدند.
- service worker precache برای offline/manifest/icons تقویت شد.
- unit/E2E coverage اضافه شد.
- final validation of the complete branch remains pending.

## 5. وضعیت Visual Themeها

ساختار:

src/
├── domain/
├── application/
├── data/
├── content/
└── frontend/
    └── themes/
        ├── flat-geometric/         ← THEME A
        └── modern-flat-vector/     ← THEME B

Core بین هر دو Theme مشترک است. هیچ Theme نباید Domain/Application/Data/Auth/Calendar/business logic را کپی یا تغییر دهد.

### Theme A
Brief رسمی و تنها مرجع طراحی همان سند ثبت‌شده در docs/VISUAL-DESIGN-SEPARATION-WARNING.md و src/frontend/themes/flat-geometric/README.md است.

وضعیت:
- TASK-07-001: DONE
- TASK-07-002: DONE

### Theme B
وضعیت:
- boundary/scaffolding: موجود
- main visual execution: **not started**
- current scope: خارج از Scope

## 6. وضعیت محتوای تاریخی

seedEvents = [] عمداً خالی است. هیچ historical event عمومی بدون source/validation/editorial approval وارد public seed نمی‌شود.

## 7. QA و validation

آخرین evidence قطعی:
- PR #4 CI #406 — PASS end-to-end
- Main post-merge CI #407 — PASS end-to-end
- Theme A validation #37161733754 — PASS
- CI #299 — PASS برای checkpoint قبلی محصول

نتیجه:
- PHASE-07 DONE.
- core browser/mobile/tablet/accessibility/touch/PWA acceptance covered by green CI and DONE tasks.
- Release blocker review is completed as a review task, but some blockers remain open.
- Remaining open release gates: dependency security remediation, human visual review, performance evidence, historical editorial approval, production deployment validation, final release docs/versioning.

## 8. مسیر ادامه

**گام بعدی:** ACT-232 dependency-security audit/remediation.

بعد از آن به‌ترتیب: performance evidence → final human visual/product review → editorial event acceptance → production deployment validation → PWA production validation → release docs/versioning/handoff.

Theme B دست‌نخورده و خارج از scope می‌ماند.

## 9. قراردادهای غیرقابل مذاکره

- Calendar Engine تنها Source of Truth برای منطق تقویم است.
- سال شاهنشاهی در UI اصلی است؛ سال هجری شمسی معمولی سال اصلی UI نیست.
- Gregorian فرعی است.
- unsupported historical conversion نباید حدس زده شود.
- public و personal data جدا هستند.
- personal storage failure نباید public Today/Calendar/Day/Search را از کار بیندازد.
- event تاریخی بدون source/validation/approval منتشر نشود.
- visual Themeها نباید Core را fork کنند.
- same data + same state + different Theme = different appearance, same product behavior.
- هر اقدام معنادار: ACT ID + CHANGELOG + STATUS/ROADMAP sync + validation در صورت نیاز.

## 10. نقطه شروع جلسه بعد

ابتدا STATUS → ROADMAP → CHANGELOG را بخوانید؛ سپس RELEASE-ACCEPTANCE-MATRIX.md و RELEASE-BLOCKER-REVIEW.md را بررسی کنید و از ACT-232 ادامه دهید.