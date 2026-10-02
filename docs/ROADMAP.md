# ROADMAP — نقشه راه کامل پروژه

Version: 2.0.1
Last updated: 2026-10-02

این سند مرجع اجرایی پروژه از صفر تا انتشار است. ترتیب مراحل عمداً به‌گونه‌ای طراحی شده که ابتدا Product/Specification و مدل داده تثبیت شود، سپس Architecture و Backend/Core Engine ساخته شود، بعد Application Logic، سپس UI/UX و Frontend، و در پایان Integration/QA/Release انجام شود.

## وضعیت‌ها
- TODO — شروع نشده
- IN_PROGRESS — در حال انجام
- BLOCKED — متوقف به علت وابستگی/مانع
- DONE — تکمیل و ثبت‌شده
- DEFERRED — عمداً به نسخه بعد منتقل شده
- DEPRECATED — کنار گذاشته شده

## شاخص پیشرفت
پیشرفت فقط وقتی DONE می‌شود که هم implementation/تصمیم لازم انجام شده باشد و هم اسناد و وضعیت پروژه به‌روز شده باشند.

---

# PHASE-00 — Documentation Foundation — DONE

## هدف
ساخت مرجع مرکزی و قابل انتقال پروژه.

- TASK-00-001 — ساخت ساختار مستندات — DONE
- TASK-00-002 — تعریف سیستم شناسه‌گذاری — DONE
- TASK-00-003 — تعریف چرخه ثبت تغییرات — DONE
- TASK-00-004 — تعریف نقطه ادامه پروژه — DONE
- TASK-00-005 — تثبیت GitHub به‌عنوان Source of Truth — DONE

**خروجی:** repository قابل ادامه از هر اکانت، دستگاه و محیط.

---

# PHASE-01 — Product Discovery & Specification — IN_PROGRESS

## 1A — تعریف محصول و مخاطب
- TASK-01-001 — Product Definition — DONE
- TASK-01-002 — Audience & Use Cases — DONE
- TASK-01-003 — Calendar & Historical Systems — DONE
- TASK-01-004 — Main Capabilities — DONE
- TASK-01-005 — MVP Definition — DONE

## 1B — مرزبندی محصول
- TASK-01-006 — Non-goals & Scope Boundaries — DONE
- TASK-01-007 — Acceptance Criteria — DONE
- TASK-01-008 — Requirements v1.0 Finalization — TODO

## 1C — مدل‌های محتوایی
- TASK-01-009 — Event Model — TODO
- TASK-01-010 — Person Model — TODO
- TASK-01-011 — Memory Model — TODO
- TASK-01-012 — Personal Event Model — TODO
- TASK-01-013 — Important Event & Editorial Selection — TODO
- TASK-01-014 — Timeline & Entity Relationships — TODO
- TASK-01-015 — Sources, Verification & Editorial Policy — TODO
- TASK-01-016 — Media/Asset Content Model — TODO
- TASK-01-017 — Historical Date Representation — TODO
- TASK-01-018 — Search Requirements — TODO
- TASK-01-019 — Account & Authentication Requirements — DONE
- TASK-01-020 — Personal Share Card Requirements — DONE

**خروجی فاز:** Product/Requirements/Content Specification v1.0.

---

# PHASE-02 — Architecture & Technical Foundation — TODO

## 2A — تصمیم‌های فنی
- TASK-02-001 — انتخاب Stack و Runtime — TODO
- TASK-02-002 — Repository/Directory Architecture — TODO
- TASK-02-003 — Environment & Configuration Strategy — TODO
- TASK-02-004 — Dependency Policy — TODO

## 2B — معماری لایه‌ای
- TASK-02-005 — Calendar Engine Boundary — TODO
- TASK-02-006 — Domain/Data Layer — TODO
- TASK-02-007 — Application/Use-case Layer — TODO
- TASK-02-008 — Presentation/UI Boundary — TODO
- TASK-02-009 — Localization Boundary — TODO
- TASK-02-010 — Media/Content Boundary — TODO

## 2C — مدل داده و قراردادها
- TASK-02-011 — Event Schema — TODO
- TASK-02-012 — Person Schema — TODO
- TASK-02-013 — Memory Schema — TODO
- TASK-02-014 — Personal Event Schema — TODO
- TASK-02-015 — Timeline/Period Schema — TODO
- TASK-02-016 — Source/Validation Schema — TODO
- TASK-02-017 — Entity Relationship Map — TODO
- TASK-02-018 — Internal Contracts/API Boundaries — TODO

## 2D — کیفیت معماری
- TASK-02-019 — Error/Edge-case Strategy — TODO
- TASK-02-020 — Testing Architecture — TODO
- TASK-02-021 — Data Validation Strategy — TODO
- TASK-02-022 — Architecture Review — TODO
- TASK-02-023 — ARCHITECTURE v1.0 — TODO
- TASK-02-024 — Authentication & Session Architecture — TODO
- TASK-02-025 — Share Card Architecture — TODO

**خروجی فاز:** معماری فنی تثبیت‌شده و قابل پیاده‌سازی.

---

# PHASE-03 — Core Backend / Domain / Calendar Engine — TODO

این فاز منطق اصلی محصول را بدون وابستگی به ظاهر نهایی می‌سازد.

## 3A — Calendar Engine
- TASK-03-001 — Imperial Date Type — TODO
- TASK-03-002 — Year/Month/Day Rules — TODO
- TASK-03-003 — Month Lengths — TODO
- TASK-03-004 — Leap-Year Rules — TODO
- TASK-03-005 — Now/Today Calculation — TODO
- TASK-03-006 — Gregorian ↔ Imperial Conversion — TODO
- TASK-03-007 — Historical Date Conversion — TODO
- TASK-03-008 — Year Boundary / Nowruz Edge Cases — TODO
- TASK-03-009 — Date Arithmetic — TODO
- TASK-03-010 — Weekday Calculation — TODO
- TASK-03-011 — Time-of-day State — TODO
- TASK-03-012 — Seasonal State — TODO

## 3B — Domain Layer
- TASK-03-013 — Event Domain — TODO
- TASK-03-014 — Person Domain — TODO
- TASK-03-015 — Personal Event Domain — TODO
- TASK-03-016 — Memory Domain — TODO
- TASK-03-017 — Timeline/Period Domain — TODO
- TASK-03-018 — Source/Editorial Domain — TODO

## 3C — Content/Data foundation
- TASK-03-019 — Structured Event Dataset Contract — TODO
- TASK-03-020 — Seed/Fixture Data Strategy — TODO
- TASK-03-021 — Content Validation Pipeline — TODO
- TASK-03-022 — Public vs Personal Data Separation — TODO

## 3D — Tests
- TASK-03-023 — Calendar Unit Tests — TODO
- TASK-03-024 — Conversion Tests — TODO
- TASK-03-025 — Edge-case Tests — TODO
- TASK-03-026 — Domain Model Tests — TODO
- TASK-03-027 — Engine Review — TODO

**خروجی فاز:** هسته قابل اعتماد و مستقل از UI.

---

# PHASE-04 — Application Backend / Use Cases — TODO

## 4A — Today
- TASK-04-001 — Today Query/State — TODO
- TASK-04-002 — Today's Occasions — TODO
- TASK-04-003 — Today's Historical Events — TODO
- TASK-04-004 — Today's Personal Events — TODO
- TASK-04-005 — Today's Memories — TODO
- TASK-04-006 — Time/Season Context — TODO

## 4B — Calendar
- TASK-04-007 — Month Query — TODO
- TASK-04-008 — Day Detail Query — TODO
- TASK-04-009 — Event Markers — TODO
- TASK-04-010 — Month Navigation — TODO

## 4C — Historical Content
- TASK-04-011 — Event Retrieval — TODO
- TASK-04-012 — Event Detail — TODO
- TASK-04-013 — Important Events Selection — TODO
- TASK-04-014 — Timeline Queries — TODO
- TASK-04-015 — Person Queries — TODO
- TASK-04-016 — Related Entities — TODO

## 4D — Personal Layer
- TASK-04-017 — Personal Event Creation/Editing — TODO
- TASK-04-018 — Personal Person — TODO
- TASK-04-019 — Memory Creation/Editing — TODO
- TASK-04-020 — Recurrence — TODO

## 4E — Search & Localization
- TASK-04-021 — Search Index/Query — TODO
- TASK-04-022 — Search Results by Entity — TODO
- TASK-04-023 — Persian/English Data Contracts — TODO
- TASK-04-024 — RTL/LTR Direction State — TODO
- TASK-04-025 — Register/Login/Session Use Cases — TODO
- TASK-04-026 — Personal Event Share Card Data Use Case — TODO

**خروجی فاز:** use caseهای محصول مستقل از UI و قابل مصرف توسط frontend.

---

# PHASE-05 — Frontend Architecture & Design System — TODO

این فاز قبل از polish بصری، ساختار frontend را تثبیت می‌کند.

## 5A — Frontend Foundation
- TASK-05-001 — App Shell — TODO
- TASK-05-002 — Routing/Navigation Architecture — TODO
- TASK-05-003 — State Management Strategy — TODO
- TASK-05-004 — Data Fetching/Domain Integration — TODO
- TASK-05-005 — Error/Loading/Empty States — TODO

## 5B — Design System
- TASK-05-006 — Typography — TODO
- TASK-05-007 — Spacing/Grid — TODO
- TASK-05-008 — Color Tokens — TODO
- TASK-05-009 — Iconography — TODO
- TASK-05-010 — Buttons/Controls — TODO
- TASK-05-011 — Sheets/Dialogs — TODO
- TASK-05-012 — Cards/Content Surfaces — TODO

## 5C — Interaction System
- TASK-05-013 — Mobile Touch Model — TODO
- TASK-05-014 — Swipe Patterns — TODO
- TASK-05-015 — Motion/Transitions — TODO
- TASK-05-016 — Accessibility Foundations — TODO
- TASK-05-017 — Responsive Rules — TODO
- TASK-05-018 — RTL/LTR Mirroring — TODO

**خروجی فاز:** frontend foundation آماده برای ساخت صفحات.

---

# PHASE-06 — Core Frontend Product Experience — TODO

## 6A — Today
- TASK-06-001 — Today Page — TODO
- TASK-06-002 — Date Hierarchy — TODO
- TASK-06-003 — Occasion/Event Sections — TODO
- TASK-06-004 — Personal/Memory Sections — TODO
- TASK-06-005 — Time/Season Presentation — TODO

## 6B — Calendar
- TASK-06-006 — Month Calendar — TODO
- TASK-06-007 — Day Selection — TODO
- TASK-06-008 — Day Detail — TODO
- TASK-06-009 — Month Swipe/Navigation — TODO

## 6C — Historical Experience
- TASK-06-010 — Important Events Page — TODO
- TASK-06-011 — Event Detail Page — TODO
- TASK-06-012 — Historical Timeline — TODO
- TASK-06-013 — Person Page — TODO
- TASK-06-014 — Related Content Navigation — TODO

## 6D — Personal Experience
- TASK-06-015 — Personal Events UI — TODO
- TASK-06-016 — Personal Person UI — TODO
- TASK-06-017 — Memories UI — TODO
- TASK-06-018 — Recurrence UI — TODO

## 6E — Search & Language
- TASK-06-019 — Search UI — TODO
- TASK-06-020 — Search Result Navigation — TODO
- TASK-06-021 — Persian Experience — TODO
- TASK-06-022 — English Experience — TODO
- TASK-06-023 — Authentication UI — TODO
- TASK-06-024 — Personal Event Share Card Experience — TODO

---

# PHASE-07 — Visual Polish, Time/Season & App-like Experience — TODO

## 7A — Visual consistency
- TASK-07-001 — Final Visual Hierarchy — TODO
- TASK-07-002 — Spacing/Margin Consistency — TODO
- TASK-07-003 — Typography Consistency — TODO
- TASK-07-004 — Component Consistency — TODO
- TASK-07-005 — Visual Density Review — TODO

## 7B — Living interface
- TASK-07-006 — Morning State — TODO
- TASK-07-007 — Noon State — TODO
- TASK-07-008 — Sunset State — TODO
- TASK-07-009 — Night State — TODO
- TASK-07-010 — Seasonal Variations — TODO
- TASK-07-011 — Motion Polish — TODO

## 7C — App-like/PWA
- TASK-07-012 — PWA Manifest — TODO
- TASK-07-013 — Install Experience — TODO
- TASK-07-014 — Offline Baseline — TODO
- TASK-07-015 — Mobile Safe Areas — TODO
- TASK-07-016 — Native-feeling Navigation — TODO

**خروجی فاز:** تجربه بصری نهایی و منسجم، بدون تبدیل محصول به «وب‌سایت تقویم».

---

# PHASE-08 — Content, Editorial & Historical Dataset — TODO

این فاز پس از تثبیت مدل داده و engine انجام می‌شود تا محتوا روی ساختار درست قرار گیرد.

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

**اصل:** هیچ داده تاریخی مهمی بدون source/validation وارد production نشود.

---

# PHASE-09 — Integration & Full QA — TODO

## 9A — Technical QA
- TASK-09-001 — Unit Test Suite — TODO
- TASK-09-002 — Integration Tests — TODO
- TASK-09-003 — Calendar Regression Tests — TODO
- TASK-09-004 — Data Validation Tests — TODO
- TASK-09-005 — Search Tests — TODO

## 9B — Product QA
- TASK-09-006 — Today Acceptance Test — TODO
- TASK-09-007 — Calendar Acceptance Test — TODO
- TASK-09-008 — Event Acceptance Test — TODO
- TASK-09-009 — Timeline Acceptance Test — TODO
- TASK-09-010 — Personal Layer Acceptance Test — TODO
- TASK-09-011 — Language/RTL/LTR QA — TODO

## 9C — UX/Device QA
- TASK-09-012 — Mobile QA — TODO
- TASK-09-013 — Tablet/Desktop QA — TODO
- TASK-09-014 — Touch/Swipe QA — TODO
- TASK-09-015 — Accessibility QA — TODO
- TASK-09-016 — Performance QA — TODO
- TASK-09-017 — PWA QA — TODO
- TASK-09-018 — Visual Consistency QA — TODO

## 9D — Final fixes
- TASK-09-019 — Critical Bug Fixes — TODO
- TASK-09-020 — Release Blocker Review — TODO
- TASK-09-021 — Final Product Review — TODO

---

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

---

# مسیر اجرایی اصلی

1. Product Specification
2. MVP / Scope / Acceptance
3. Content & Domain Models
4. Architecture
5. Calendar Engine + Core Backend
6. Application Use Cases
7. Frontend Architecture + Design System
8. Core Frontend Pages
9. Visual Polish + PWA
10. Historical/Editorial Dataset
11. Integration + QA
12. Release

**قاعده مهم:** هیچ مرحله‌ای صرفاً به خاطر جلو رفتن ظاهر، مرحله قبلی را نادیده نمی‌گیرد. هر مرحله باید خروجی قابل بررسی و ثبت‌شده داشته باشد.

## وضعیت فعلی

**PHASE-01 — IN_PROGRESS**

آخرین کارهای قطعی:
- Non-goals & Scope Boundaries — DONE
- Account/Auth & Personal Share Card — APPROVED
- Product Definition — DONE
- Audience & Use Cases — DONE
- Calendar Specification — DONE
- Main Capabilities — DONE
- MVP Definition — DONE

**اقدام بعدی:** TASK-01-008 — Requirements v1.0 Finalization
