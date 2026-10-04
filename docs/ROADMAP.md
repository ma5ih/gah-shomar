# ROADMAP — نقشه راه کامل پروژه

Version: 3.1.0
Last updated: 2026-10-04 — ACT-231

این سند مرجع اجرایی پروژه از صفر تا Release است. وضعیت Taskها باید با implementation و validation واقعی هماهنگ باشد.

## وضعیت‌ها
TODO / IN_PROGRESS / BLOCKED / DONE / DEFERRED / DEPRECATED

## شمارش رسمی ریزتسک‌ها — ACT-185

- کل ریزتسک‌های شماره‌گذاری‌شده: **204**
- DONE: **162**
- IN_PROGRESS: **28**
- TODO: **13**
- DEFERRED: **1**
- BLOCKED: **0**
- DEPRECATED: **0**

این شمارش با استخراج مستقیم تمام خطوط یکتای `TASK-*` از همین ROADMAP انجام شده است.

این شمارش از این checkpoint به‌عنوان عدد canonical استفاده می‌شود.

# PHASE-00 — Documentation Foundation — DONE
- TASK-00-001 — ساخت ساختار مستندات — DONE
- TASK-00-002 — سیستم شناسه‌گذاری — DONE
- TASK-00-003 — چرخه ثبت تغییرات — DONE
- TASK-00-004 — نقطه ادامه پروژه — DONE
- TASK-00-005 — GitHub به‌عنوان Source of Truth — DONE

# PHASE-01 — Product Discovery & Specification — DONE
- TASK-01-001 — Product Definition — DONE
- TASK-01-002 — Audience & Use Cases — DONE
- TASK-01-003 — Calendar & Historical Systems — DONE
- TASK-01-004 — Main Capabilities — DONE
- TASK-01-005 — MVP Definition — DONE
- TASK-01-006 — Non-goals & Scope Boundaries — DONE
- TASK-01-007 — Acceptance Criteria — DONE
- TASK-01-008 — Requirements v1.0 — DONE
- TASK-01-009 — Event Model — DONE
- TASK-01-010 — Person Model — DONE
- TASK-01-011 — Memory Model — DONE
- TASK-01-012 — Personal Event Model — DONE
- TASK-01-013 — Important Event & Editorial Selection — DONE
- TASK-01-014 — Timeline & Entity Relationships — DONE
- TASK-01-015 — Sources, Verification & Editorial Policy — DONE
- TASK-01-016 — Media/Asset Content Model — DONE
- TASK-01-017 — Historical Date Representation — DONE
- TASK-01-018 — Search Requirements — DONE
- TASK-01-019 — Account & Authentication Requirements — DONE
- TASK-01-020 — Personal Share Card Requirements — DONE

# PHASE-02 — Architecture & Technical Foundation — DONE
- TASK-02-001 — Stack / Runtime — DONE
- TASK-02-002 — Repository / Directory Architecture — DONE
- TASK-02-003 — Environment / Configuration — DONE
- TASK-02-004 — Dependency Policy — DONE
- TASK-02-005 — Calendar Engine Boundary — DONE
- TASK-02-006 — Domain/Data Layer — DONE
- TASK-02-007 — Application / Use-case Layer — DONE
- TASK-02-008 — Presentation/UI Boundary — DONE
- TASK-02-009 — Localization Boundary — DONE
- TASK-02-010 — Media/Content Boundary — DONE
- TASK-02-011 — Event Schema — DONE
- TASK-02-012 — Person Schema — DONE
- TASK-02-013 — Memory Schema — DONE
- TASK-02-014 — Personal Event Schema — DONE
- TASK-02-015 — Timeline/Period Schema — DONE
- TASK-02-016 — Source/Validation Schema — DONE
- TASK-02-017 — Entity Relationship Map — DONE
- TASK-02-018 — Internal Contracts/API Boundaries — DONE
- TASK-02-019 — Error/Edge-case Strategy — DONE
- TASK-02-020 — Testing Architecture — DONE
- TASK-02-021 — Data Validation Strategy — DONE
- TASK-02-022 — Architecture Review — DONE
- TASK-02-023 — ARCHITECTURE v1.0 — DONE
- TASK-02-024 — Authentication & Session Architecture — DONE
- TASK-02-025 — Share Card Architecture — DONE

# PHASE-03 — Core Backend / Domain / Calendar Engine — DONE

## 3A — Calendar Engine
- TASK-03-001 — Imperial Date Type — DONE
- TASK-03-002 — Year/Month/Day Rules — DONE
- TASK-03-003 — Month Lengths — DONE
- TASK-03-004 — Leap-Year Rules — DONE
- TASK-03-005 — Now/Today Calculation — DONE
- TASK-03-006 — Gregorian ↔ Imperial Conversion — DONE
- TASK-03-007 — Historical Date Conversion — DEFERRED
  - Gregorian exact: DONE
  - Solar Hijri exact: DONE
  - Other historical calendars/eras: TODO / require dedicated converter + policy
- TASK-03-008 — Year Boundary / Nowruz Edge Cases — DONE
- TASK-03-009 — Date Arithmetic — DONE
- TASK-03-010 — Weekday Calculation — DONE
- TASK-03-011 — Time-of-day State — DONE
- TASK-03-012 — Seasonal State — DONE

## 3B — Domain Layer
- TASK-03-013 — Event Domain — DONE
- TASK-03-014 — Person Domain — DONE
- TASK-03-015 — Personal Event Domain — DONE
- TASK-03-016 — Memory Domain — DONE
- TASK-03-017 — Timeline/Period Domain — DONE
- TASK-03-018 — Source/Editorial Domain — DONE

## 3C — Content/Data Foundation
- TASK-03-019 — Structured Event Dataset Contract — DONE
- TASK-03-020 — Seed/Fixture Data Strategy — DONE
- TASK-03-021 — Content Validation Pipeline — DONE
- TASK-03-022 — Public vs Personal Data Separation — DONE

## 3D — Tests / Quality
- TASK-03-023 — Calendar Unit Tests / CI Validation — DONE
  - unit coverage exists
  - green baseline observed at ACT-133 / run #102
  - latest-head revalidation belongs to PHASE-09
- TASK-03-024 — Conversion Tests — DONE
  - Gregorian/Imperial conversion and round-trip coverage exists
- TASK-03-025 — Edge-case Tests — DONE
  - leap/year-boundary/month-boundary regression coverage exists
  - modern leap-year matrix covers the documented break-point behavior
- TASK-03-026 — Domain Model Tests — DONE
  - Event/Person/Period/Source contract fixtures and relationship validation exist
  - personal-layer regression coverage is tracked in application/integration tests
- TASK-03-027 — Engine Review — DONE

### خروجی مورد انتظار PHASE-03
Calendar Engine + Domain foundation + test suite + CI validation قابل اعتماد و مستقل از UI.

# PHASE-04 — Application Backend / Use Cases — DONE
- TASK-04-001 — Today Query/State — DONE
- TASK-04-002 — Today's Occasions — DONE
- TASK-04-003 — Today's Historical Events — DONE
- TASK-04-004 — Today's Personal Events — DONE
- TASK-04-005 — Today's Memories — DONE
- TASK-04-006 — Time/Season Context — DONE
- TASK-04-007 — Month Query — DONE
- TASK-04-008 — Day Detail Query — DONE
- TASK-04-009 — Event Markers — DONE
- TASK-04-010 — Month Navigation — DONE
- TASK-04-011 — Event Retrieval — DONE
- TASK-04-012 — Event Detail — DONE
- TASK-04-013 — Important Events Selection — DONE
- TASK-04-014 — Timeline Queries — DONE
- TASK-04-015 — Person Queries — DONE
- TASK-04-016 — Related Entities — DONE
- TASK-04-017 — Personal Event Creation/Editing — DONE
- TASK-04-018 — Personal Person — DONE
- TASK-04-019 — Memory Creation/Editing — DONE
- TASK-04-020 — Recurrence — DONE
- TASK-04-021 — Search Index/Query — DONE
- TASK-04-022 — Search Results by Entity — DONE
- TASK-04-023 — Persian/English Data Contracts — DONE
- TASK-04-024 — RTL/LTR Direction State — DONE
- TASK-04-025 — Register/Login/Session Use Cases — DONE
- TASK-04-026 — Personal Event Share Card Data Use Case — DONE

# PHASE-05 — Frontend Architecture & Design System — DONE
- TASK-05-001 — App Shell — DONE
- TASK-05-002 — Routing/Navigation Architecture — DONE
- TASK-05-003 — State Management Strategy — DONE
- TASK-05-004 — Data Fetching/Domain Integration — DONE
- TASK-05-005 — Error/Loading/Empty States — DONE
- TASK-05-006 — Typography — DONE
- TASK-05-007 — Spacing/Grid — DONE
- TASK-05-008 — Color Tokens — DONE
- TASK-05-009 — Iconography — DONE
- TASK-05-010 — Buttons/Controls — DONE
- TASK-05-011 — Sheets/Dialogs — DONE
- TASK-05-012 — Cards/Content Surfaces — DONE
- TASK-05-013 — Mobile Touch Model — DONE
- TASK-05-014 — Swipe Patterns — DONE
- TASK-05-015 — Motion/Transitions — DONE
- TASK-05-016 — Accessibility Foundations — DONE
- TASK-05-017 — Responsive Rules — DONE
- TASK-05-018 — RTL/LTR Mirroring — DONE

# PHASE-06 — Core Frontend Product Experience — IN_PROGRESS
- TASK-06-001 — Today Page — IN_PROGRESS
- TASK-06-002 — Date Hierarchy — IN_PROGRESS
- TASK-06-003 — Occasion/Event Sections — IN_PROGRESS
- TASK-06-004 — Personal/Memory Sections — IN_PROGRESS
- TASK-06-005 — Time/Season Presentation — IN_PROGRESS
- TASK-06-006 — Month Calendar — IN_PROGRESS
- TASK-06-007 — Day Selection — IN_PROGRESS
- TASK-06-008 — Day Detail — IN_PROGRESS
- TASK-06-009 — Month Swipe/Navigation — IN_PROGRESS
- TASK-06-010 — Important Events Page — IN_PROGRESS
- TASK-06-011 — Event Detail Page — IN_PROGRESS
- TASK-06-012 — Historical Timeline — IN_PROGRESS
- TASK-06-013 — Person Page — IN_PROGRESS
- TASK-06-014 — Related Content Navigation — IN_PROGRESS
- TASK-06-015 — Personal Events UI — IN_PROGRESS
  - authenticated create flow now has E2E coverage and persistence verification; create also persists optional notes and Personal Person linkage; acceptance remains open
- TASK-06-016 — Personal Person UI — IN_PROGRESS
  - people are listed and selectable from Personal Event forms; ownership boundary is regression-tested; full UI acceptance remains open
- TASK-06-017 — Memories UI — IN_PROGRESS
  - existing CRUD path remains implemented; dedicated browser acceptance is still open
- TASK-06-018 — Recurrence UI — IN_PROGRESS
  - yearly recurrence remains wired through Personal Event creation/update; full browser acceptance remains open
- TASK-06-019 — Search UI — IN_PROGRESS
  - category/alias search enhancements may be completed here; dedicated month/date parsing remains a future extension
- TASK-06-020 — Search Result Navigation — IN_PROGRESS
- TASK-06-021 — Persian Experience — IN_PROGRESS
  - Personal form labels/types are now localized; broader RTL/product acceptance remains open
- TASK-06-022 — English Experience — IN_PROGRESS
  - Personal form labels/types now have English counterparts; broader LTR/product acceptance remains open
- TASK-06-023 — Authentication UI — IN_PROGRESS
  - register/login/logout are covered by the authenticated Personal browser flow; final acceptance remains open
- TASK-06-024 — Personal Event Share Card Experience — IN_PROGRESS
  - core pages are present; completion is gated by runtime/browser acceptance

# PHASE-07 — Visual Polish, Time/Season & App-like Experience — DONE
- TASK-07-001 — Final Visual Hierarchy — DONE
- TASK-07-002 — Spacing/Margin Consistency — DONE
- TASK-07-003 — Typography Consistency — DONE
- TASK-07-004 — Component Consistency — DONE
- TASK-07-005 — Visual Density Review — DONE
- TASK-07-006 — Morning State — DONE
- TASK-07-007 — Noon State — DONE
- TASK-07-008 — Sunset State — DONE
- TASK-07-009 — Night State — DONE
- TASK-07-010 — Seasonal Variations — DONE
- TASK-07-011 — Motion Polish — DONE
- TASK-07-012 — PWA Manifest — DONE
- TASK-07-013 — Install Experience — DONE
- TASK-07-014 — Offline Baseline — DONE
- TASK-07-015 — Mobile Safe Areas — DONE
- TASK-07-016 — Native-feeling Navigation — DONE

# PHASE-08 — Content, Editorial & Historical Dataset — IN_PROGRESS
- TASK-08-001 — Content Taxonomy — DONE
- TASK-08-002 — Historical Source Registry — DONE
- TASK-08-003 — Event Research Workflow — DONE
- TASK-08-004 — Monthly Occasion Review — IN_PROGRESS
- TASK-08-005 — Important Event Editorial Selection — IN_PROGRESS
- TASK-08-006 — Person Dataset — DONE
- TASK-08-007 — Timeline Period Dataset — DONE
- TASK-08-008 — Historical Date Conversions — DONE
- TASK-08-009 — Media/Image Metadata — TODO
- TASK-08-010 — Initial MVP Dataset — IN_PROGRESS
  - published historical event seed intentionally empty pending review and explicit approval
- TASK-08-011 — Content QA — TODO

# PHASE-09 — Integration & Full QA — IN_PROGRESS
- TASK-09-001 — Unit Test Suite — DONE
- TASK-09-002 — Integration Tests — DONE
- TASK-09-003 — Calendar Regression Tests — DONE
- TASK-09-004 — Data Validation Tests — DONE
- TASK-09-005 — Search Tests — DONE
- TASK-09-006 — Today Acceptance Test — DONE
- TASK-09-007 — Calendar Acceptance Test — DONE
- TASK-09-008 — Event Acceptance Test — TODO
- TASK-09-009 — Timeline Acceptance Test — DONE
- TASK-09-010 — Personal Layer Acceptance Test — DONE
  - authenticated Personal Event create/persistence/logout flow and Personal Person ownership regression now have automated coverage
- TASK-09-011 — Language/RTL/LTR QA — DONE
- TASK-09-012 — Mobile QA — DONE
- TASK-09-013 — Tablet/Desktop QA — DONE
- TASK-09-014 — Touch/Swipe QA — DONE
- TASK-09-015 — Accessibility QA — DONE
- TASK-09-016 — Performance QA — DONE
  - ACT-235 / CI #444: 87 tests passed; desktop navigation TTFB 40.7–83.1ms and DOMContentLoaded 85.5–203.1ms across Today, Calendar and Search baseline routes.
- TASK-09-017 — PWA QA — DONE
- TASK-09-018 — Visual Consistency QA — IN_PROGRESS
- TASK-09-019 — Critical Bug Fixes — DONE
  - All verified implementation findings from ACT-186 are closed through ACT-189..ACT-196.
  - CI #281 validates lint, typecheck, unit/integration, production build and browser smoke on the corrected HEAD.
  - The missing package-lock is tracked as a release reproducibility concern, not an unresolved application bug.
- TASK-09-020 — Release Blocker Review — DONE
  - includes final security hardening evidence (CSRF/rate limiting) and release reproducibility review
- TASK-09-021 — Final Product Review — TODO
- TASK-09-022 — E2E Dataset/Editorial Alignment — DONE
  - browser smoke follows the intentionally empty historical-event seed
  - CI run #168 and later full pipelines validate the aligned behavior

## CURRENT CHECKPOINT — ACT-231 — 2026-10-04

- Main merge commit after security/reproducibility integration: 7e7ebb4bb8f2d15175900daf54968b4792d23bad.
- PR #4 security/reproducibility CI run #406 passed end-to-end: npm ci, migration, lint, typecheck, unit/integration, production build, Chromium and browser smoke.
- Main post-merge CI run #407 passed end-to-end on the merged main commit.
- TASK-09-020 — Release Blocker Review is DONE: the hardening/reproducibility evidence was reviewed and recorded. Open blockers are documented separately.
- TASK-10-001 — Production Configuration is DONE: runtime config validation, production contract, committed lockfile and npm ci were implemented and validated.
- TASK-10-002 — Production Build is DONE: production build has passed on the main validation gates.
- Dependency reproducibility is no longer an open blocker.
- ACT-231 converged the repository documentation with the validated main state.
- Dependency security remains OPEN because the previous install reported 9 vulnerabilities (3 moderate, 6 high) and no remediation has yet been approved.
- TASK-09-018 Visual Consistency QA remains IN_PROGRESS for final human visual review.
- TASK-09-016 Performance QA remains TODO.
- TASK-09-021 Final Product Review remains TODO.
- Historical Event Acceptance remains TODO while seedEvents = [] and editorial approval is pending.
- Production Deployment Validation and PWA Production Validation remain open under PHASE-10.
- Theme B remains untouched and outside the current execution scope.
- Canonical task counts: 204 total / 162 DONE / 28 IN_PROGRESS / 13 TODO / 1 DEFERRED.

# PHASE-10 — Release & Handoff — IN_PROGRESS
- TASK-10-001 — Production Configuration — DONE
  - includes central runtime configuration validation, production environment checks and the reproducible dependency-installation strategy (including lockfile)
- TASK-10-002 — Production Build — DONE
- TASK-10-003 — Deployment Validation — TODO
- TASK-10-004 — PWA Production Validation — TODO
- TASK-10-005 — Documentation Finalization — TODO
- TASK-10-006 — CHANGELOG Release Entry — TODO
- TASK-10-007 — Release Notes — TODO
- TASK-10-008 — Version REL-1.0.0 — TODO
- TASK-10-009 — Handoff/Continuation Guide — TODO
- TASK-10-010 — Post-release Backlog — TODO

# مسیر ادامه فعلی

**PRIMARY WORKSTREAM:** PHASE-10 — Release & Handoff — IN_PROGRESS
**PRODUCT ACCEPTANCE WORKSTREAM:** PHASE-06 — remaining browser/product acceptance tasks
**CURRENT VISUAL STREAM:** PHASE-07 — Theme A — DONE
**QA GATE:** PHASE-09 — remaining final review/performance tasks
- TASK-07-001 برای Theme A بسته شده و DONE است.
- Theme B فعلاً خارج از Scope است و نباید وارد اجرای بصری فعلی شود.
- پس از شروع Taskهای باقی‌مانده PHASE-07، مسیر به PHASE-08 monthly editorial review → PHASE-09 final QA → PHASE-10 release می‌رسد.

نکته: PHASE-09 در این checkpoint «فاز جاری محصول» نیست؛ یک QA gate باز است که blocker آن باید پیش از acceptance نهایی PHASE-06 بسته شود.

قاعده: Phase فقط با implementation + tests + validation واقعی به DONE می‌رسد. QA دوباره‌کاری روی Phaseهای قبلی را با تغییرات بعدی پوشش می‌دهد.