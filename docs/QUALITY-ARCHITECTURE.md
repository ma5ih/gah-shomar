# QUALITY-ARCHITECTURE — Error، Testing و Validation

Version: 1.0.0
Status: APPROVED
Tasks: TASK-02-019 تا TASK-02-021
Actions: ACT-038 تا ACT-040
Last updated: 2026-10-04

## Error Strategy

خطاها به چهار گروه تقسیم می‌شوند:
- Domain Error
- Validation Error
- Authorization Error
- Infrastructure Error

هر لایه فقط error contract مناسب خود را expose می‌کند.

## Edge Cases

Calendar edge cases:
- Nowruz boundary
- leap year
- month boundary
- year boundary
- BCE/historical uncertainty
- invalid dates

Personal edge cases:
- wrong owner
- duplicate username
- invalid recurrence
- deleted related entity

## Testing Architecture

- Unit: domain/calendar
- Integration: application + DB
- E2E: critical user journeys
- Regression: acceptance criteria

## Data Validation

Validation در دو سطح:
1. Input validation
2. Domain invariant validation

DB constraints لایه سوم دفاع هستند، نه جایگزین domain validation.

## Acceptance

AC-001 تا AC-039 باید در QA قابل trace باشند.

## Calendar Engine Quality Status

Calendar unit/regression tests اکنون برای month rules، leap-year، conversion، historical conversion، Today، date arithmetic، weekday، time-of-day و season وجود دارند. ماتریس leap-year مدرن نیز تا Imperial 2629 / Solar Hijri 1449 پوشش داده شده و گذار 2620/2621 را به‌صورت regression صریح بررسی می‌کند. CI workflow نیز typecheck، Vitest و production build را تعریف کرده است.

### Validation status
- Test code: PRESENT
- CI configuration: PRESENT
- GitHub workflow result: PASS — run #281
- Therefore: هیچ PASS رسمی تا مشاهده run موفق ثبت نمی‌شود.

## Result
TASK-02-019 تا TASK-02-021 DONE.

Current quality gate: PHASE-09. Automated CI is green on current HEAD (#281), including migration, lint, typecheck, unit/integration, production build and browser smoke. The ACT-186 implementation correction queue is closed; broader runtime/product acceptance and release reproducibility remain open.
