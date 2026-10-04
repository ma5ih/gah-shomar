# QUALITY-ARCHITECTURE — Error، Testing و Validation

Version: 1.1.0
Status: APPROVED
Tasks: TASK-02-019 تا TASK-02-021
Actions: ACT-038 تا ACT-040، ACT-221
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

Security/Release edge cases:
- repeated authentication attempts
- invalid runtime configuration
- missing production database configuration
- release reproducibility / dependency-lock drift

## Testing Architecture

- Unit: domain/calendar
- Integration: application + DB
- E2E: critical user journeys
- Regression: acceptance criteria
- Release hardening: runtime configuration and authentication abuse controls

## Data Validation

Validation در دو سطح:
1. Input validation
2. Domain invariant validation

DB constraints لایه سوم دفاع هستند، نه جایگزین domain validation.

## Acceptance

AC-001 تا AC-039 باید در QA قابل trace باشند.

## Calendar Engine Quality Status

Calendar unit/regression tests اکنون برای month rules، leap-year، conversion، historical conversion، Today، date arithmetic، weekday، time-of-day و season وجود دارند. ماتریس leap-year مدرن نیز تا Imperial 2629 / Solar Hijri 1449 پوشش داده شده و گذار 2620/2621 را به‌صورت regression صریح بررسی می‌کند. CI workflow نیز typecheck، Vitest و production build را تعریف کرده است.

## Release hardening status

- Central runtime configuration validation: implementation checkpoint ACT-216 on the release-readiness branch.
- Persistent authentication rate limiting: implementation checkpoint ACT-221 on the security-hardening branch.
- Real CI validation is required before these implementation checkpoints are promoted to DONE.
- package-lock reproducibility remains open.
- final release blocker review remains TASK-09-020.

## Result

TASK-02-019 تا TASK-02-021: DONE

Current quality gate: PHASE-09. Automated CI remains the mandatory validation gate; broader runtime/product acceptance and release reproducibility/security hardening remain open until evidence is observed.
