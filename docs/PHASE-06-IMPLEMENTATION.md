# PHASE-06 IMPLEMENTATION NOTE

Status: IN_PROGRESS
Last updated: 2026-10-03
Implementation baseline: `d531e0a1bb3e4cbf287ad2ce25c72bf0cfa4d9e3`

## Implemented product surfaces
- Today and current date hierarchy
- Month Calendar + navigation
- Day Detail
- Important Events
- Event Detail
- People / Timeline
- Search
- Authentication
- Personal Events / Personal Person / Memories
- Authenticated Personal Event create/persistence/logout browser flow
- Personal Person listing + event linkage
- Personal Person ownership-boundary regression
- Yearly recurrence
- Personal Share Card
- Persian/English + RTL/LTR
- Public/personal data separation
- Graceful public fallback when personal storage is unavailable
- Empty/loading/error boundaries

## Important Events / Event Detail contract
The approved product design requires:
- monthly important-event cards
- hero image per published important event
- click-through to dedicated Event Detail
- fuller narrative/context
- sources
- people/period/related entities
- additional images/documents where available

Current implementation:
- listing, clickable card and dedicated Detail route exist;
- Detail currently renders date, narrative/summary, people, related events and sources;
- hero/gallery image presentation is still not implemented;
- public event seed is intentionally empty pending editorial approval.

## Automated baseline
- ACT-165 / run #168: full quality + browser smoke PASS (24/24 assertions across desktop/tablet/mobile).
- ACT-166 / run #173: full quality + browser smoke PASS after historical-content notice correction.
- ACT-175 / run #189: full quality + browser smoke PASS after authenticated Personal Event flow coverage.
- ACT-199 / run #199: full quality + browser smoke PASS after Personal Person linkage/ownership work.

## Current acceptance gap
- E2E smoke is aligned with the intentionally empty event seed and is green in CI.
- Current HEAD automated pipeline is green.
- Browser/runtime interaction QA remains open for product acceptance beyond automated smoke.
- Mobile/tablet/desktop visual QA remains open.
- Final responsive/accessibility review remains open.

Do not move PHASE-06 to DONE until runtime/product acceptance has evidence. No specialized visual-design work has been started in this checkpoint.
