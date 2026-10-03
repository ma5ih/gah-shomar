# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-03
Implementation baseline: `d531e0a1bb3e4cbf287ad2ce25c72bf0cfa4d9e3`
Primary workstream: PHASE-06 — Core Frontend Product Experience
QA gate: PHASE-09 — Integration & QA
QA blocker: none; TASK-09-022 closed and current HEAD validated by CI #199
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

**وضعیت QA:** TASK-09-022 بسته شد. CI #199 روی HEAD فعلی سبز است؛ وابستگی اصلی اکنون runtime/browser acceptance خود PHASE-06 است.

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
| PHASE-09 | IN_PROGRESS | Automated pipeline is green on current HEAD; full device/product acceptance and final QA remain open |
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

Current HEAD:
- SHA `d531e0a1bb3e4cbf287ad2ce25c72bf0cfa4d9e3`
- CI run **#199 — PASS**
- migration: PASS
- typecheck: PASS
- unit/integration: PASS
- production build: PASS
- browser smoke: PASS

The current automated baseline is green. This does **not** mean PHASE-06 is DONE: manual/runtime product acceptance, device interaction coverage beyond the automated smoke, and the approved image-rich Event Detail presentation remain open.

## Current Phase-06 functional progress

- Personal Event authenticated create/persistence/logout flow has browser coverage.
- Personal Person is listed in the Personal UI and can be linked to a Personal Event.
- Personal Person ownership is enforced at the application boundary and regression-tested.
- Personal form labels/types are localized for Persian and English.
- No specialized visual-design work was introduced in this checkpoint.

## Known QA blocker / mismatch

No active E2E dataset mismatch remains. `seedEvents = []` is intentional and the browser smoke suite is aligned with that policy.

## Immediate next actions

1. Execute browser/runtime acceptance on desktop, tablet and mobile for fa/RTL and en/LTR.
2. Close remaining PHASE-06 functional acceptance gaps.
3. Only after PHASE-06 acceptance, move to PHASE-07 visual polish.
4. Close remaining PHASE-06 acceptance gaps.
5. Continue PHASE-07 visual polish and app-like states.
6. Start PHASE-08 month-by-month event review from the first calendar month in product order; publish only explicitly approved events and their media metadata.
7. Finish PHASE-09 release-blocker review.
8. Execute PHASE-10 release and final handoff.

## Documentation checkpoint

ACT-158 through ACT-183 cover the implementation and validation work in this checkpoint; ACT-184 is the documentation synchronization checkpoint.

## ACT / history note

There is a historical ACT-ID collision in Git commit messages:
- ACT-150 was used for two unrelated changes.
- ACT-151 was used for two unrelated changes.
- ACT-155 is not present in the current commit search result.

These historical commits are immutable and should not be rewritten. From the next checkpoint onward, new ACT IDs must never be reused.

Next fresh ACT ID: **ACT-185**

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

Next fresh ACT ID: **ACT-185**. ACT-163 through ACT-183 are recorded in CHANGELOG; ACT-184 synchronizes the final checkpoint.
