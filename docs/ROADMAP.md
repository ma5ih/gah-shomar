# ROADMAP — نقشه راه کامل پروژه

Version: 2.1.0
Last updated: 2026-10-03

این سند مرجع اجرایی پروژه از صفر تا Release است. وضعیت Taskها باید با implementation و validation واقعی هماهنگ باشد.

## وضعیت‌ها
TODO / IN_PROGRESS / BLOCKED / DONE / DEFERRED / DEPRECATED

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

# PHASE-03 — Core Backend / Domain / Calendar Engine — IN_PROGRESS

## 3A — Calendar Engine
- TASK-03-001 — Imperial Date Type — DONE
- TASK-03-002 — Year/Month/Day Rules — DONE
- TASK-03-003 — Month Lengths — DONE
- TASK-03-004 — Leap-Year Rules — DONE
- TASK-03-005 — Now/Today Calculation — DONE
- TASK-03-006 — Gregorian ↔ Imperial Conversion — DONE
- TASK-03-007 — Historical Date Conversion — IN_PROGRESS
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
- TASK-03-023 — Calendar Unit Tests / CI Validation — IN_PROGRESS
  - unit tests exist
  - CI exists
  - successful CI run not yet observed
- TASK-03-024 — Conversion Tests — IN_PROGRESS
  - Gregorian/Imperial regression exists
  - round-trip coverage exists
  - CI validation pending
- TASK-03-025 — Edge-case Tests — IN_PROGRESS
  - leap/year boundary/month boundary cases exist
  - broader regression matrix and CI validation pending
- TASK-03-026 — Domain Model Tests — TODO
- TASK-03-027 — Engine Review — TODO

### خروجی مورد انتظار PHASE-03
Calendar Engine + Domain foundation + test suite + CI validation قابل اعتماد و مستقل از UI.

# PHASE-04 — Application Backend / Use Cases — TODO
- TASK-04-001 — Today Query/State — TODO
- TASK-04-002 — Today's Occasions — TODO
- TASK-04-003 — Today's Historical Events — TODO
- TASK-04-004 — Today's Personal Events — TODO
- TASK-04-005 — Today's Memories — TODO
- TASK-04-006 — Time/Season Context — TODO
- TASK-04-007 — Month Query — TODO
- TASK-04-008 — Day Detail Query — TODO
- TASK-04-009 — Event Markers — TODO
- TASK-04-010 — Month Navigation — TODO
- TASK-04-011 — Event Retrieval — TODO
- TASK-04-012 — Event Detail — TODO
- TASK-04-013 — Important Events Selection — TODO
- TASK-04-014 — Timeline Queries — TODO
- TASK-04-015 — Person Queries — TODO
- TASK-04-016 — Related Entities — TODO
- TASK-04-017 — Personal Event Creation/Editing — TODO
- TASK-04-018 — Personal Person — TODO
- TASK-04-019 — Memory Creation/Editing — TODO
- TASK-04-020 — Recurrence — TODO
- TASK-04-021 — Search Index/Query — TODO
- TASK-04-022 — Search Results by Entity — TODO
- TASK-04-023 — Persian/English Data Contracts — TODO
- TASK-04-024 — RTL/LTR Direction State — TODO
- TASK-04-025 — Register/Login/Session Use Cases — TODO
- TASK-04-026 — Personal Event Share Card Data Use Case — TODO

# PHASE-05 — Frontend Architecture & Design System — TODO
- TASK-05-001 — App Shell — TODO
- TASK-05-002 — Routing/Navigation Architecture — TODO
- TASK-05-003 — State Management Strategy — TODO
- TASK-05-004 — Data Fetching/Domain Integration — TODO
- TASK-05-005 — Error/Loading/Empty States — TODO
- TASK-05-006 — Typography — TODO
- TASK-05-007 — Spacing/Grid — TODO
- TASK-05-008 — Color Tokens — TODO
- TASK-05-009 — Iconography — TODO
- TASK-05-010 — Buttons/Controls — TODO
- TASK-05-011 — Sheets/Dialogs — TODO
- TASK-05-012 — Cards/Content Surfaces — TODO
- TASK-05-013 — Mobile Touch Model — TODO
- TASK-05-014 — Swipe Patterns — TODO
- TASK-05-015 — Motion/Transitions — TODO
- TASK-05-016 — Accessibility Foundations — TODO
- TASK-05-017 — Responsive Rules — TODO
- TASK-05-018 — RTL/LTR Mirroring — TODO

# PHASE-06 — Core Frontend Product Experience — TODO
- TASK-06-001 — Today Page — TODO
- TASK-06-002 — Date Hierarchy — TODO
- TASK-06-003 — Occasion/Event Sections — TODO
- TASK-06-004 — Personal/Memory Sections — TODO
- TASK-06-005 — Time/Season Presentation — TODO
- TASK-06-006 — Month Calendar — TODO
- TASK-06-007 — Day Selection — TODO
- TASK-06-008 — Day Detail — TODO
- TASK-06-009 — Month Swipe/Navigation — TODO
- TASK-06-010 — Important Events Page — TODO
- TASK-06-011 — Event Detail Page — TODO
- TASK-06-012 — Historical Timeline — TODO
- TASK-06-013 — Person Page — TODO
- TASK-06-014 — Related Content Navigation — TODO
- TASK-06-015 — Personal Events UI — TODO
- TASK-06-016 — Personal Person UI — TODO
- TASK-06-017 — Memories UI — TODO
- TASK-06-018 — Recurrence UI — TODO
- TASK-06-019 — Search UI — TODO
- TASK-06-020 — Search Result Navigation — TODO
- TASK-06-021 — Persian Experience — TODO
- TASK-06-022 — English Experience — TODO
- TASK-06-023 — Authentication UI — TODO
- TASK-06-024 — Personal Event Share Card Experience — TODO

# PHASE-07 — Visual Polish, Time/Season & App-like Experience — TODO
- TASK-07-001 — Final Visual Hierarchy — TODO
- TASK-07-002 — Spacing/Margin Consistency — TODO
- TASK-07-003 — Typography Consistency — TODO
- TASK-07-004 — Component Consistency — TODO
- TASK-07-005 — Visual Density Review — TODO
- TASK-07-006 — Morning State — TODO
- TASK-07-007 — Noon State — TODO
- TASK-07-008 — Sunset State — TODO
- TASK-07-009 — Night State — TODO
- TASK-07-010 — Seasonal Variations — TODO
- TASK-07-011 — Motion Polish — TODO
- TASK-07-012 — PWA Manifest — TODO
- TASK-07-013 — Install Experience — TODO
- TASK-07-014 — Offline Baseline — TODO
- TASK-07-015 — Mobile Safe Areas — TODO
- TASK-07-016 — Native-feeling Navigation — TODO

# PHASE-08 — Content, Editorial & Historical Dataset — TODO
- TASK-08-001 — Content Taxonomy — TODO
- TASK-08-002 — Historical Source Registry — TODO
- TASK-08-003 — Event Research Workflow — TODO
- TASK-08-004 — Monthly Occasion Review — TODO
- TASK-08-005 — Important Event Editorial Selection — TODO
- TASK-08-006 — Person Dataset — TODO
- TASK-08-007 — Timeline Period Dataset — TODO
- TASK-08-008 — Historical Date Conversions — TODO
- TASK-08-009 — Media/Image Metadata — TODO
- TASK-08-010 — Initial MVP Dataset — TODO
- TASK-08-011 — Content QA — TODO

# PHASE-09 — Integration & Full QA — TODO
- TASK-09-001 — Unit Test Suite — TODO
- TASK-09-002 — Integration Tests — TODO
- TASK-09-003 — Calendar Regression Tests — TODO
- TASK-09-004 — Data Validation Tests — TODO
- TASK-09-005 — Search Tests — TODO
- TASK-09-006 — Today Acceptance Test — TODO
- TASK-09-007 — Calendar Acceptance Test — TODO
- TASK-09-008 — Event Acceptance Test — TODO
- TASK-09-009 — Timeline Acceptance Test — TODO
- TASK-09-010 — Personal Layer Acceptance Test — TODO
- TASK-09-011 — Language/RTL/LTR QA — TODO
- TASK-09-012 — Mobile QA — TODO
- TASK-09-013 — Tablet/Desktop QA — TODO
- TASK-09-014 — Touch/Swipe QA — TODO
- TASK-09-015 — Accessibility QA — TODO
- TASK-09-016 — Performance QA — TODO
- TASK-09-017 — PWA QA — TODO
- TASK-09-018 — Visual Consistency QA — TODO
- TASK-09-019 — Critical Bug Fixes — TODO
- TASK-09-020 — Release Blocker Review — TODO
- TASK-09-021 — Final Product Review — TODO

# PHASE-10 — Release & Handoff — TODO
- TASK-10-001 — Production Configuration — TODO
- TASK-10-002 — Production Build — TODO
- TASK-10-003 — Deployment Validation — TODO
- TASK-10-004 — PWA Production Validation — TODO
- TASK-10-005 — Documentation Finalization — TODO
- TASK-10-006 — CHANGELOG Release Entry — TODO
- TASK-10-007 — Release Notes — TODO
- TASK-10-008 — Version REL-1.0.0 — TODO
- TASK-10-009 — Handoff/Continuation Guide — TODO
- TASK-10-010 — Post-release Backlog — TODO

# مسیر ادامه قطعی

**CURRENT:** PHASE-03 — IN_PROGRESS

**NEXT:** TASK-03-023 — Calendar Unit Tests / CI Validation

پس از آن:
TASK-03-024 → TASK-03-025 → TASK-03-026 → TASK-03-027 → پایان PHASE-03 → PHASE-04.

قاعده: تا وقتی validation فنی PHASE-03 بسته نشده، وارد polish یا frontend product build نمی‌شویم.
