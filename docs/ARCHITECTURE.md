# ARCHITECTURE — معماری فنی پروژه

Version: 1.1.0
Status: APPROVED
Last updated: 2026-10-04

## Stack
Next.js App Router, React, TypeScript, PostgreSQL, Drizzle ORM, Tailwind CSS, Node.js LTS, npm.

## Layers
1. Presentation — app/frontend
2. Application — use cases
3. Domain — Calendar Engine + Entities
4. Data — PostgreSQL/Drizzle
5. Content — structured public data
6. Infrastructure — external services/config

## Dependency Rule
Presentation → Application → Domain.
Data implements persistence boundaries. Domain has no dependency on Next.js, React or database. ACT-186 identified presentation-layer dependency leaks; ACT-188 moved concrete repository binding to `src/application/server.ts` so app routes/actions consume the application composition boundary.

## Calendar Engine — current implementation
Calendar Engine is the single source of truth for:
- Imperial date types and validation
- month/year rules
- leap years
- Gregorian ↔ Imperial conversion
- historical-date conversion gateway
- Today calculation
- date arithmetic
- weekday
- time-of-day state
- seasonal state

Implementation is under `src/domain/calendar/`.

Key modules:
- `leap-year.ts`
- `conversion.ts`
- `historical-conversion.ts`
- `today.ts`
- `date-arithmetic.ts`
- `weekday.ts`
- `time-of-day.ts`
- `season.ts`

Timezone resolution is outside Domain. Domain receives an already-resolved calendar date/time input.

## Historical conversion boundary
Exact Gregorian and Solar Hijri dates can be converted to Imperial. Other calendars/eras are intentionally not guessed; they require a dedicated converter and editorial policy.

## Public vs Personal
Public: Event, Person, Period, Source, Media.
Private: User, Personal Event, Personal Person, Memory, Share Card artifact.

## Data Flow
Request → Route/Server boundary → Application composition (`src/application/server.ts`) → Use Case → Domain/Data → DTO → Presentation.

## Localization
Domain stores localized content. Presentation determines locale and direction. Persian is RTL; English is LTR.

## Testing
Calendar/domain unit tests are first-class. The current suite also contains application, integration and browser smoke coverage. CI currently runs migration, typecheck, unit/integration tests, production build and Playwright browser smoke; ACT-187 checkpoint #244 is SUCCESS; ACT-188 checkpoint #246 is in progress at browser setup.

## Deferred
Notifications, social features, public event submission, maps, export/import, integrations, monetization, public API and advanced analytics remain outside MVP.

## Authentication
Minimal username/password authentication with DB-backed sessions is defined in AUTH-ARCHITECTURE.md.

## Share Card
Private Personal Event share-card generation is defined in SHARE-CARD-ARCHITECTURE.md.

## Current phase
PHASE-06 — IN_PROGRESS (QA gate: PHASE-09)

**Next:** TASK-09-019 — remaining correction gaps identified by ACT-186, after CI #246 validation
