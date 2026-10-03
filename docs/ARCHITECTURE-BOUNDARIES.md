# ARCHITECTURE-BOUNDARIES — Boundaryهای معماری

Version: 1.0.0
Status: APPROVED
Tasks: TASK-02-005 تا TASK-02-010
Actions: ACT-024 تا ACT-029
Last updated: 2026-10-04

## Calendar Engine Boundary
Calendar Engine تنها مرجع:
- ImperialDate
- month/year rules
- leap rules
- Gregorian ↔ Imperial conversion
- historical conversion
- date arithmetic
- weekday
- time-of-day
- season

UI، DB و Event entity حق ندارند الگوریتم تقویم مستقل داشته باشند.

## Domain/Data Boundary
Domain مدل‌ها و invariantهای Event، Person، Period، Memory و Personal Event را تعریف می‌کند. Data layer فقط persistence و mapping را انجام می‌دهد.

## Application Boundary
Application use caseها را orchestrate می‌کند و تنها boundary مجاز برای اتصال domain به persistence و authorization است.

## Presentation Boundary
Frontend داده را از application contracts می‌گیرد. UI نباید مستقیماً DB یا Calendar Engine internals را صدا بزند.

### Server Composition Boundary
Binding بین Application Use Cases و concrete persistence adapters در `src/application/server.ts` انجام می‌شود. Route/page/actionهای `app/` نباید concrete repository را مستقیماً import کنند.

## Localization Boundary
LocalizedText و locale-aware formatting در یک boundary مشترک قرار می‌گیرد. Domain data نباید به direction یا CSS وابسته باشد.

## Media/Content Boundary
Content structured و Media Asset مستقل از UI نگهداری می‌شوند. UI فقط presentation metadata و application DTO را مصرف می‌کند.

## Result
TASK-02-005 تا TASK-02-010 DONE.
