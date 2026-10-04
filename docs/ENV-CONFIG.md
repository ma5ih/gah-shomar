# ENV-CONFIG — Environment و Configuration Strategy

Version: 1.1.0
Status: APPROVED
Task: TASK-02-003
Action: ACT-022
Last updated: 2026-10-04 — ACT-221

## اصول

- Secretها هرگز در Git commit نمی‌شوند.
- .env.example فقط نام متغیرها و مقدارهای نمونه غیرحساس دارد.
- Runtime config از environment خوانده می‌شود.
- Configuration در یک boundary مشخص validate می‌شود.
- Domain logic مستقیماً process.env را نمی‌خواند.

## Environment Classes

- Development
- Test
- Production

## Core Variables

- DATABASE_URL
- APP_URL
- AUTH_SECRET یا معادل نهایی پس از انتخاب auth strategy
- NODE_ENV

Provider-specific variables بعداً اضافه می‌شوند.

## Public vs Secret

Public config: locale defaults، public app URL و feature flags client-safe.

Secret: database credentials، auth/session secrets، storage credentials و private API keys.

هیچ secret به Client Component منتقل نمی‌شود.

## Validation

`src/application/runtime-config.ts` اکنون boundary مرکزی validation است و required variables، type/format و IANA timezone را validate می‌کند. Production configuration نیز database requirement را enforce می‌کند.

## Feature Flags

Feature flag فقط برای rollout واقعی استفاده می‌شود؛ نه برای پنهان‌کردن scope یا feature نیمه‌کاره.

## Status

TASK-02-003: DONE
ACT-022: DONE
Release-readiness implementation checkpoint: ACT-221
TASK-10-001 remains IN_PROGRESS until real CI validation and dependency reproducibility/lockfile evidence are complete.