# STACK — Stack و Runtime

Version: 1.0.0
Status: APPROVED
Task: TASK-02-001
Action: ACT-020
Last updated: 2026-10-02

## تصمیم

Stack پایه پروژه:
- Next.js App Router
- React
- TypeScript با strict mode
- PostgreSQL
- Drizzle ORM
- Tailwind CSS برای styling/design tokens
- Node.js LTS به‌عنوان runtime baseline
- npm به‌عنوان package manager baseline

Next.js App Router برای route/layout و full-stack capabilities انتخاب شد. مستندات رسمی فعلی App Router را مسیر اصلی مدرن Next.js معرفی می‌کنند. 

Drizzle + PostgreSQL برای data layer انتخاب شد؛ Drizzle اتصال native به PostgreSQL و tooling مربوط به schema/migration دارد.

## دلیل انتخاب

- Next.js: مناسب public content + authenticated personal layer و PWA/full-stack.
- TypeScript: قرارداد صریح و testable برای domain و Calendar Engine.
- PostgreSQL: مناسب relation، ownership، privacy و indexing.
- Drizzle: type-safe و migration-oriented و نزدیک به SQL.
- Tailwind: مناسب mobile-first و design tokens؛ جزئیات visual system در PHASE-05.

## Deferred

فعلاً این موارد در Taskهای بعدی نهایی می‌شوند:
- authentication/session strategy
- PWA implementation/package
- external search engine
- object storage provider
- hosting/deployment provider
- analytics
- email provider

## Runtime Rule

Calendar Engine و domain logic باید تا حد ممکن pure و مستقل از Next.js/DB باشند.

## Status

TASK-02-001: DONE
ACT-020: DONE
Next: TASK-02-002 — Repository/Directory Architecture
