# PHASE-04 IMPLEMENTATION NOTE

Status: IN_PROGRESS
Last updated: 2026-10-03

Implemented:
- Today/time context application layer
- Month and day query contracts
- Public event/person/period retrieval
- Important event retrieval
- Timeline queries
- Public + personal search orchestration
- Persian/English locale and direction contract
- Personal Event / Personal Person / Memory application orchestration
- PostgreSQL/Drizzle schema and repository contracts
- Username/password registration/login/session
- Yearly personal recurrence
- Personal Share Card DTO

Validation:
- Unit contract tests are present.
- CI typecheck has passed on recent validation.
- Full CI test/build gate is still pending on latest snapshot.
- DB-backed runtime integration requires DATABASE_URL.

Boundaries:
- src/content/seed.ts is demo wiring only.
- Curated historical data belongs to PHASE-08.
- Reminder/notification remains outside MVP.
