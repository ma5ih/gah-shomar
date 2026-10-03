# HANDOFF — راهنمای ادامه پروژه

Project: گاه‌شمار
Repository: ma5ih/gah-shomar
Default branch: main
Checkpoint date: 2026-10-04
Current documentation checkpoint: **ACT-209 on main**
Current implementation HEAD: 5791e3e89aabcd75fd856e03e9a05023d009dbcc
Primary workstream: PHASE-06 — Core Frontend Product Experience
Current visual stream: PHASE-07 — Theme A refinement
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: **ACT-210**

## 1. نقطه فعلی پروژه

این checkpoint بعد از بسته‌شدن موفق TASK-07-001 برای Theme A ثبت شده است.

- TASK-07-001 — Final Visual Hierarchy — **DONE**
- Theme A — Flat Geometric — فعال و validation شده است.
- Theme B — Modern Flat Vector Illustration — هنوز وارد طراحی اصلی نشده است.
- گام بعدی بصری: **TASK-07-002 — Spacing/Margin Consistency — TODO**
- هیچ تغییر جدیدی در Core، Calendar Engine، Domain، Data، Application، Auth/Session، routing یا business behavior در ACT-209 انجام نشده است.

## 2. شمارش رسمی Taskها

- کل: **204**
- DONE: **136**
- IN_PROGRESS: **31**
- TODO: **36**
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
- PHASE-10 — TODO: release.

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
- implementation HEAD بدون تغییر باقی ماند.

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
- TASK-07-002: TODO / next

### Theme B
وضعیت:
- boundary/scaffolding: موجود
- main visual execution: **not started**
- current scope: خارج از Scope

## 6. وضعیت محتوای تاریخی

seedEvents = [] عمداً خالی است. هیچ historical event عمومی بدون source/validation/editorial approval وارد public seed نمی‌شود.

## 7. QA و validation

آخرین evidenceهای قطعی:
- CI #281 — implementation correction series green
- CI #299 — product/E2E acceptance checkpoint green
- GitHub Actions #37161733754 — Theme A validation checkpoint green

موارد باز همچنان acceptance/release هستند:
- runtime/browser acceptance کامل برای PHASE-06
- responsive/mobile/tablet/desktop visual QA
- accessibility / touch/swipe review
- release reproducibility و lockfile
- final security/release hardening

بدون اجرای واقعی CI یا acceptance evidence جدید، وضعیت جدید PASS اعلام نشود.

## 8. مسیر ادامه

**گام بعدی:** TASK-07-002 — Spacing/Margin Consistency — TODO

تا زمانی که کاربر scope را تغییر نداده است، هر visual implementation جدید فقط روی Theme A انجام می‌شود و Theme B دست‌نخورده می‌ماند.

مسیر کلی بعد از آن:
PHASE-06 acceptance → remaining PHASE-07 Theme A work → PHASE-08 editorial dataset → PHASE-09 final QA → PHASE-10 release.

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

ابتدا:
1. docs/STATUS.md
2. docs/ROADMAP.md
3. آخرین بخش docs/CHANGELOG.md
4. سند docs/PHASE-07-THEME-A-FLAT-GEOMETRIC.md

سپس فقط در صورت شروع TASK-07-002، اجرای visual refinement برای **Theme A** انجام شود.