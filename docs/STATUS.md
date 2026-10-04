# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-04 — ACT-229
Current documentation checkpoint: ACT-229 on main
Current implementation HEAD: b0d5267b66ec48dfd1e27ed31d87e1ed38e85e2f
Current implementation checkpoint: ACT-229 — post-merge validation
Latest completed Theme A validation: GitHub Actions #37161733754 — PASS (ACT-208)
Current visual state: PHASE-07 DONE — Theme A visual batch validated
Current app-like state: TASK-07-013 DONE — Install Experience validated
Primary workstream: PHASE-06 — Core Frontend Product Experience
Current visual stream: PHASE-07 — Theme A refinement
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: ACT-211

## شمارش رسمی ریزتسک‌ها

- کل: 204
- DONE: 159
- IN_PROGRESS: 28
- TODO: 16
- DEFERRED: 1
- BLOCKED: 0
- DEPRECATED: 0

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
| PHASE-07 | DONE | Theme A visual polish, time/season, motion, PWA install experience validated |
| PHASE-08 | IN_PROGRESS | Editorial review and historical dataset remain |
| PHASE-09 | IN_PROGRESS | Automated pipeline green; final QA remains |
| PHASE-10 | TODO | Release |

## آخرین اقدامات

### ACT-217..220 — QA/data reconciliation — DONE
- Mobile/tablet/touch/accessibility/visual QA coverage expanded.
- Public Person and Search-to-Person navigation covered.
- PWA install state made hydration-safe.
- Personal Share Card visibility covered.
- Person/Period datasets promoted to DONE based on existing approved data and validation coverage.
- Several Phase-09 QA tasks promoted from TODO to IN_PROGRESS; historical Event acceptance remains blocked by intentional empty seed.

### ACT-208 — Theme A visual hierarchy validation — DONE
- TASK-07-001 — Final Visual Hierarchy برای Theme A بسته شد.
- Theme A با brief مصوب تطبیق داده شد.
- GitHub Actions #37161733754 با success کامل شد.

### ACT-209 — Documentation convergence — DONE

### ACT-211 — Theme A spacing normalization refinement — IN_PROGRESS
- STATUS/ROADMAP/INDEX/PROJECT/HANDOFF و اسناد continuation همگام شدند.
- شمارش canonical واقعی Roadmap اصلاح و ثبت شد.
- Next task به TASK-07-002 منتقل شد.

### ACT-210 — Theme A spacing implementation — DONE (implementation checkpoint)
- TASK-07-002 آغاز شد.
- spacing scale اختصاصی Theme A با ۷ گام 4/8/12/16/20/24/32px اضافه شد.
- shell، topbar، content، hero، cards، calendar، forms، controls، metadata و mobile navigation روی همان scale یکدست شدند.
- تغییر فقط در src/frontend/themes/flat-geometric/theme.css انجام شد.
- static validation: scale tokenها حاضرند، selectorهای Theme A حفظ شده‌اند و gradient count = 0 باقی مانده است.
- نتیجهٔ مستقل CI برای commit اولیه ACT-210 از connector قابل مشاهده نشد؛ validation اجرای بعدی نیز به محیط شبکه‌ای محلی وابسته بود.
- Theme B هیچ تغییری نکرده است.
- Core و product behavior هیچ تغییری نکرده‌اند.

### ACT-229 — Post-merge main validation — DONE
- PR #1 merged as b0d5267b66ec48dfd1e27ed31d87e1ed38e85e2f.
- Main CI #404 passed end-to-end, including browser smoke.
- Theme A visual batch TASK-07-002..011 and TASK-07-013 are validated and DONE.
- Phase-09 acceptance tasks covered by automated main QA were promoted to DONE.
- Security/reproducibility remains on PR #4 and is not yet part of main.

## Visual Theme state

- Theme A: src/frontend/themes/flat-geometric/ — active refinement.
- Theme B: src/frontend/themes/modern-flat-vector/ — untouched / outside current scope.
- TASK-07-001: DONE.
- TASK-07-002 through TASK-07-011: DONE.
- TASK-07-013: DONE.
- Latest Theme A/PWA implementation head: 48a42d82083af949783b6aa6319e30e40834f9a0.
- Operational spacing record: docs/PHASE-07-THEME-A-SPACING.md.
- Permanent separation rules: docs/VISUAL-DESIGN-SEPARATION-WARNING.md.

## Editorial state

seedEvents = [] عمداً خالی است. هیچ historical event عمومی بدون editorial approval وارد محصول نشده است.

## مسیر بعدی قطعی

- Validate latest Theme A + PWA branch head.
- Merge validated visual/app-like batch.
- Continue release-readiness/configuration and security/reproducibility.
- Keep editorial event publication blocked until explicit approval.

TASK-07-002 — Spacing/Margin Consistency — IN_PROGRESS

Main validation is green. Remaining release gates are security/reproducibility integration, performance QA, visual human review, editorial event approval and production deployment evidence.

Theme B همچنان خارج از Scope است.

## قانون ادامه پروژه

هر اقدام معنادار باید:
1. یک ACT ID یکتا داشته باشد.
2. در CHANGELOG ثبت شود.
3. Task و STATUS را به‌روز کند.
4. در صورت ارتباط ROADMAP/DECISIONS/REQUIREMENTS را همگام کند.
5. اگر ساختار سندی تغییر کرد، INDEX را sync کند.