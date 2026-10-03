# PHASE-06 IMPLEMENTATION NOTE

Status: IN_PROGRESS
Last updated: 2026-10-03

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
- ACT-133 / run #102: migration, typecheck, unit/integration tests and production build PASS.
- Later test/data changes require current HEAD revalidation.

## Current acceptance gap
- E2E smoke still contains assertions for the removed demo event.
- Browser/runtime interaction QA remains open.
- Mobile/tablet/desktop visual QA remains open.
- Final responsive/accessibility review remains open.

Do not move PHASE-06 to DONE until these gaps have evidence.
