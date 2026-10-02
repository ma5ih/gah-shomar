# DEPENDENCY-POLICY — سیاست Dependency

Version: 1.0.0
Status: APPROVED
Task: TASK-02-004
Action: ACT-023
Last updated: 2026-10-02

## اصول

هر dependency باید نقش مشخص داشته باشد: framework/runtime، data/persistence، domain utility، validation/security، testing، build/development یا presentation.

## Rules

- dependency جدید باید دلیل مشخص داشته باشد.
- برای قابلیت ساده داخلی dependency اضافه نشود.
- dependency بدون maintenance قابل اتکا وارد core نشود.
- license و security بررسی شود.
- versionها در lockfile تثبیت شوند.
- upgrade بزرگ با test/build verification همراه باشد.
- domain layer به UI dependency وابسته نشود.
- client-side dependencies تا حد امکان محدود بمانند.

## Core Baseline

- Next.js / React / TypeScript
- PostgreSQL / Drizzle
- Tailwind CSS
- test tooling که در TASK-02-020 انتخاب می‌شود

Auth/PWA/Search-specific packages هنوز baseline اجباری نیستند.

## Security

Dependency vulnerability باید در CI یا review workflow قابل شناسایی باشد.

## Status

TASK-02-004: DONE
ACT-023: DONE
Next: TASK-02-005 — Calendar Engine Boundary
