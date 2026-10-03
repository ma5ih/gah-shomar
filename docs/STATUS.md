# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-03
Implementation baseline: `7512b433d1396029ae30625c466008e9e2453a35`
Primary workstream: PHASE-06 — Core Frontend Product Experience
QA gate: PHASE-09 — Integration & QA
QA blocker: none; TASK-09-022 closed by CI #168
Overall status: IN_PROGRESS

## شمارش رسمی ریزتسک‌ها — ACT-162

- کل: **193**
- DONE: **134**
- IN_PROGRESS: **31**
- TODO: **27**
- DEFERRED: **1**
- BLOCKED: **0**
- DEPRECATED: **0**

**نقطه فعلی اجرا:** PHASE-06 — Core Frontend Product Experience.

**وضعیت QA:** TASK-09-022 بسته شد؛ CI #168 سبز است. اکنون وابستگی اصلی، runtime/browser acceptance خود PHASE-06 است.

## وضعیت فازها

| Phase | Status | وضعیت واقعی |
|---|---|---|
| PHASE-00 | DONE | Documentation foundation |
| PHASE-01 | DONE | Product specification and acceptance contracts |
| PHASE-02 | DONE | Architecture and technical boundaries |
| PHASE-03 | DONE | Calendar Engine + Domain + core regression coverage |
| PHASE-04 | DONE | Application use-cases, auth, personal layer, recurrence, search |
| PHASE-05 | DONE | Frontend architecture, design system, RTL/LTR, responsive/accessibility foundations |
| PHASE-06 | IN_PROGRESS | Core product pages implemented; runtime/browser acceptance and image-rich event presentation remain |
| PHASE-07 | IN_PROGRESS | PWA baseline exists; final visual polish, time/season states and install UX remain |
| PHASE-08 | IN_PROGRESS | Editorial workflow is defined; published historical event dataset intentionally empty |
| PHASE-09 | IN_PROGRESS | Automated coverage exists, but latest HEAD is not formally green and full device acceptance is open |
| PHASE-10 | TODO | Release / production / final handoff |

## Current product state

Implemented structure:
- Today
- Monthly Calendar
- Day Detail
- Important Events
- Event Detail
- Timeline
- People
- Search
- Login / Register
- Personal Events
- Personal Person
- Memories
- Recurrence
- Personal Share Card
- Persian + English
- RTL + LTR
- Public/personal separation
- Public fallbacks when personal storage is unavailable
- PWA baseline: manifest, service worker, offline route, standard icons
- Playwright smoke coverage for desktop/tablet/mobile Chromium

## Historical content state

`src/content/seed.ts` currently has:
- `seedEvents = []`
- 5 public people
- 2 historical periods
- 6 reference sources

This empty event seed is intentional. No public historical event may be inserted until the month-by-month editorial review is completed and the user explicitly approves the final candidate list.

## Important Events product contract

The intended experience is already part of the approved requirements:
1. Show important events for the selected/current Imperial month.
2. Each published important event has a suitable hero image.
3. Event card is clickable.
4. Click opens a dedicated Event Detail page.
5. Detail provides fuller narrative/context plus date, people, period, related events and sources.
6. Additional images/documents can be shown when available.

Current implementation:
- monthly Important Events listing exists;
- empty editorial-pending state exists;
- cards link to Event Detail;
- Event Detail currently renders date, narrative/summary, people, related events and sources;
- image/hero/gallery presentation is not complete yet;
- no historical event is currently published.

## Latest CI truth

Confirmed green baseline:
- ACT-133 / run #102: migration + typecheck + unit/integration tests + production build PASS.

Latest recorded run for current HEAD:
- run #134
- SHA `e3107be19485199f3e725a1bbc40ceb86b72f88b`
- status recorded as `IN_PROGRESS`

Therefore:
- current HEAD must not be called CI-green or release-ready;
- a successful run after the latest test/data changes must be observed before recording PASS.

## Known QA blocker / mismatch

`tests/e2e/public-smoke.spec.ts` still contains assertions for the removed demo event:
- route `/events/constitutional-decree-1906`
- title `صدور فرمان مشروطیت`
- search result for `فرمان مشروطیت`

ACT-163 این assertions را با editorial rule فعلی که `seedEvents` خالی است همگام کرد.

CI #168 این mismatch را با 24/24 browser smoke assertions در desktop/tablet/mobile و تمام مراحل قبلی pipeline با موفقیت اعتبارسنجی کرد.

## Immediate next actions

1. Align E2E/browser-smoke expectations with the editorial-empty event dataset.
2. Re-run/observe the complete CI pipeline on the resulting HEAD.
3. Execute browser/runtime acceptance on desktop, tablet and mobile for fa/RTL and en/LTR.
4. Close remaining PHASE-06 acceptance gaps.
5. Continue PHASE-07 visual polish and app-like states.
6. Start PHASE-08 month-by-month event review from the first calendar month in product order; publish only explicitly approved events and their media metadata.
7. Finish PHASE-09 release-blocker review.
8. Execute PHASE-10 release and final handoff.

## Documentation checkpoint

ACT-158 and ACT-159 synchronized the project ledger, roadmap, handoff and implementation notes. The commits after implementation baseline `e3107be...` in this checkpoint are documentation-only.

## ACT / history note

There is a historical ACT-ID collision in Git commit messages:
- ACT-150 was used for two unrelated changes.
- ACT-151 was used for two unrelated changes.
- ACT-155 is not present in the current commit search result.

These historical commits are immutable and should not be rewritten. From the next checkpoint onward, new ACT IDs must never be reused.

Next fresh ACT ID: **ACT-164**

## Continuation rule

A meaningful change requires:
- a fresh ACT ID;
- CHANGELOG entry;
- synchronized STATUS/ROADMAP;
- DECISIONS/REQUIREMENTS update when policy changes;
- validation evidence before claiming PASS/DONE.

GitHub `main` and these documents are the source of truth for continuation; the previous chat is not required.


## Current branch note

The code implementation baseline for this checkpoint is `e3107be19485199f3e725a1bbc40ceb86b72f88b`. Subsequent checkpoint commits only synchronize documentation; use the Git history and this file to identify any future code change separately.


## Final checkpoint note

ACT-160 changed documentation only. Implementation baseline remains e3107be19485199f3e725a1bbc40ceb86b72f88b. Next fresh ACT ID: **ACT-163**.


## Final continuation counter

Next fresh ACT ID: **ACT-164**. ACT-163 aligned public E2E expectations with the intentionally empty historical-event seed.
