# PHASE-04 IMPLEMENTATION NOTE

Status: DONE
Last updated: 2026-10-03

## Implemented
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
- Graceful degradation of public queries when personal storage fails

## Validation
- Domain/application tests exist.
- Database migration, typecheck, unit/integration tests and production build had a verified green baseline at ACT-133 / run #102.
- Later changes are revalidated in PHASE-09 rather than reopening the application architecture.

## Boundaries
- `src/content/seed.ts` is content wiring, not an editorial source of truth.
- Curated historical content belongs to PHASE-08.
- Reminder/notification remains outside MVP.
- Public event data cannot be treated as approved merely because the application can render it.
