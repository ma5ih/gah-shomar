# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-03
Current phase: PHASE-09 — Integration & QA
Overall status: IN_PROGRESS

| Phase | Status | خلاصه |
|---|---|---|
| PHASE-00 | DONE | Documentation |
| PHASE-01 | DONE | Product specification |
| PHASE-02 | DONE | Architecture |
| PHASE-03 | DONE | Calendar engine + domain; unsupported historical calendars explicitly deferred |
| PHASE-04 | DONE | Application use-cases, auth, personal layer, recurrence, search |
| PHASE-05 | DONE | Frontend architecture, design system, RTL/LTR, responsive/accessibility foundations |
| PHASE-06 | IN_PROGRESS | Core product implemented; runtime/device acceptance remains |
| PHASE-07 | IN_PROGRESS | Visual polish + PWA baseline implemented; final polish remains |
| PHASE-08 | IN_PROGRESS | 7 events, 5 people, 2 periods, 6 sourced references; dataset expansion remains |
| PHASE-09 | IN_PROGRESS | Automated coverage strengthened; full product/device QA remains |
| PHASE-10 | TODO | Release |

## Current HEAD
`6dfe546a189267726f8a5ebb8e0ee0b92281a123` — ACT-147.

## Latest event-content decision
- Public historical event seed is intentionally empty.
- Daily event sections and the Important Events page remain implemented and safely render an editorial-pending empty state.
- Events will be researched and reviewed month by month; only explicitly approved items will be published.

## Verified CI
- ACT-133 / run #102: PASS — migration, typecheck, tests, production build.
- ACT-132 / run #101: PASS.
- ACT-134 / run #103: PASS.
- ACT-135 / run #104: FAILED because old application tests still asserted removed demo IDs; fixed by ACT-137.
- ACT-136 / run #105: FAILED for the same stale demo assertions; ACT-137 fixed them.
- ACT-137 / run #106: pending at snapshot time.
- ACT-138 / run #107: pending at snapshot time.

## Recent implementation
- Resilient public Today/Calendar/Day/Search when personal storage fails.
- PWA manifest, service worker, offline page, app icon and safe-area/mobile navigation polish.
- Real source-backed historical seed replacing demo data.
- Relationship/source validation tests.
- Application tests migrated from demo content.
- PWA and personal-storage resilience acceptance tests.

## Remaining work
1. Verify the CI runs triggered by ACT-142 through ACT-147.
2. Complete browser/runtime and mobile/tablet/desktop acceptance.
3. Finish Phase-07 visual polish, time/season visual states and install UX.
4. Run the monthly event-review workflow; publish only user-approved events, then expand historical content and editorial/media QA.
5. Complete Phase-09 release-blocker review and final QA.
6. Execute Phase-10 production/release/handoff.

## Continuation rule
Every meaningful change gets an ACT ID, changelog entry, tests/validation and synchronized STATUS/ROADMAP.
