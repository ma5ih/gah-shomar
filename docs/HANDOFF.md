# HANDOFF — راهنمای ادامه پروژه

Project: گاه‌شمار
Repository: ma5ih/gah-shomar
Default branch: main
Checkpoint date: 2026-10-04
Current documentation checkpoint: **ACT-248 on main**
Current implementation HEAD: 7e7ebb4bb8f2d15175900daf54968b4792d23bad
Primary workstream: PHASE-10 — Release & Handoff
Current visual stream: PHASE-07 — Theme A refinement
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: **ACT-249**

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

- کل: **204 unique**
- DONE: **190**
- IN_PROGRESS: **4**
- TODO: **9**
- DEFERRED: **1**
- BLOCKED: **0**
- DEPRECATED: **0**

این شمارش باید با ROADMAP و STATUS یکی باشد.

## 3. وضعیت Phaseها

- PHASE-00 — DONE
- PHASE-01 — DONE
- PHASE-02 — DONE
- PHASE-03 — DONE
- PHASE-04 — DONE
- PHASE-05 — DONE
- PHASE-06 — DONE: browser/product acceptance validated in CI #461.
- PHASE-07 — DONE: Theme A visual polish, time/season and PWA install experience validated.
- PHASE-08 — IN_PROGRESS: editorial dataset و historical review باقی است.
- PHASE-09 — IN_PROGRESS: automated QA is green; human visual/product signoff remains.
- PHASE-10 — IN_PROGRESS: editorial approval, external deployment validation and final release packaging remain.

## 4. آخرین اقدامات قطعی

### ACT-248 — Documentation/state reconciliation
- Central documentation was reconciled with the validated main state.
- Canonical ledger is 204 unique tasks: 190 DONE / 4 IN_PROGRESS / 9 TODO / 1 DEFERRED.
- TASK-10-005 and TASK-10-009 are DONE; the handoff is complete.
- Production dependency security and performance are PASS.
- Remaining release-critical gates are editorial approval/public event seed, human visual signoff, human final product signoff and real production/staging deployment + PWA validation.

### ACT-247 — Internal release-readiness cleanup
- TASK-08-011, TASK-10-005 and TASK-10-009 were closed.
- Handoff, README/project checkpoint and release-readiness notes were refreshed.

### ACT-246 — Final review and release checklist
- Automated/assisted review records were completed; human signoff remained explicitly open.
- Release checklist and acceptance evidence were established.

### ACT-245 / ACT-244 — Final implementation and product acceptance convergence
- PHASE-06 browser/product acceptance was closed via CI #461.
- Theme A / PHASE-07 remained DONE.
- Security/reproducibility and production build gates were validated on main.

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
- PR #4 / CI #406 — PASS end-to-end
- Main post-merge CI #407 — PASS end-to-end
- CI #461 — PASS for Phase-06 browser/product acceptance (90 acceptance tests)
- CI #454 — PASS for production dependency security audit
- CI #444 — PASS for performance baseline
- Theme A validation #37161733754 — PASS

نتیجه:
- PHASE-06 DONE.
- PHASE-07 DONE.
- Automated core QA, security hardening, reproducibility and performance gates are closed.
- Remaining release gates: editorial approval/public historical seed, human visual signoff, human final product signoff and a real production/staging URL run of the deployment/PWA validator.

## 8. مسیر ادامه

PHASE-10 is the active workstream. The next executable path is:
editorial approval/public event seed → human visual signoff → human end-to-end product signoff → real production/PWA validation → release notes/version/tag/post-release backlog.

Theme B remains untouched and outside scope.

