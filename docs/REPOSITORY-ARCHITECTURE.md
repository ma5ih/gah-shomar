# REPOSITORY-ARCHITECTURE — معماری Repository و Directory

Version: 1.0.0
Status: APPROVED
Task: TASK-02-002
Action: ACT-021
Last updated: 2026-10-02

## Target Structure

/
- app/ — Next.js routes, layouts, route handlers
- src/domain/ — calendar, event, person, period, memory, personal-event, source
- src/application/ — today, calendar, events, timeline, people, personal, search, auth
- src/data/ — db, repositories, queries
- src/content/ — structured public content
- src/i18n/ — localization
- src/shared/ — types, errors, utils, validation
- src/frontend/ — components, features, navigation, state
- tests/ — unit, integration, fixtures
- public/
- drizzle/
- docs/
- .env.example
- drizzle.config.ts
- next.config.*
- package.json
- tsconfig.json

## Boundary Rules

### app/
فقط route/layout/loading/error/metadata و route composition. Business logic اینجا نوشته نمی‌شود.

### src/domain/
قواعد core و Calendar Engine. نباید به React، Next.js یا DB وابسته باشد.

### src/application/
Use case orchestration، authorization checks و mapping به DTO. UI ندارد.

### src/data/
Persistence، Drizzle schema، repositories و DB queries.

### src/content/
Public structured seed/content؛ داده تاریخی در UI hard-code نمی‌شود.

### src/frontend/
Presentation و client interaction. Calendar calculation اینجا ممنوع است.

### tests/
Unit/integration/fixture layers.

## Import Direction

app → application → domain
app → frontend
application → domain + data contracts
data → domain
content → domain contracts
frontend → application contracts + shared

Dependency cycle مجاز نیست.

## Status

TASK-02-002: DONE
ACT-021: DONE
Next: TASK-02-003 — Environment & Configuration Strategy
