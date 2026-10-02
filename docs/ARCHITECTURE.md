# ARCHITECTURE — معماری فنی پروژه

Version: 1.0.0
Status: APPROVED
Task: TASK-02-023
Action: ACT-042
Last updated: 2026-10-02

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
Data implements persistence boundaries. Domain has no dependency on Next.js, React or database.

## Calendar Engine
Single source of truth for imperial calendar, conversions, date arithmetic, weekday, time-of-day and season state.

## Public vs Personal
Public: Event, Person, Period, Source, Media.
Private: User, Personal Event, Personal Person, Memory, Share Card artifact.

## Data Flow
Request → Route/Server boundary → Application use case → Domain/Data → DTO → Presentation.

## Content
Historical content requires source/verification. Only APPROVED public content is exposed.

## Localization
Domain stores localized content. Presentation determines locale and direction. Persian is RTL; English is LTR.

## Search
Search is an application capability with simple explainable ranking. External search engine is not required for MVP.

## Testing
Calendar/domain unit tests are first-class. Application integration and critical E2E paths are required before release.

## Deferred
Notifications, social features, public event submission, maps, export/import, integrations, monetization, public API and advanced analytics remain outside MVP.

## Authentication
Minimal username/password authentication with DB-backed sessions is defined in AUTH-ARCHITECTURE.md.

## Share Card
Private Personal Event share-card generation is defined in SHARE-CARD-ARCHITECTURE.md.

## Status
TASK-02-023: DONE
ACT-042: DONE
Next: TASK-02-024 — Authentication & Session Architecture
