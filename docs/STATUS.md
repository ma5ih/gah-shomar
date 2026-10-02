# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-02
Current phase: PHASE-01 — Product Discovery & Specification
Overall status: IN_PROGRESS

## آخرین نقطه قطعی

تا این لحظه تعریف محصول، مخاطبان و use caseها، قابلیت‌های اصلی، مشخصات رسمی تقویم، محدوده MVP و مرزهای MVP با کاربر بررسی و تثبیت شده‌اند. نقشه راه نیز از صفر تا Release به‌صورت مرحله‌ای و کدگذاری‌شده بازطراحی شده است.

## وضعیت مراحل

| Phase | Status | Progress |
|---|---|---:|
| PHASE-00 Documentation | DONE | 100% |
| PHASE-01 Specification | IN_PROGRESS | 80% |
| PHASE-02 Architecture | TODO | 0% |
| PHASE-03 Core Backend / Calendar Engine | TODO | 0% |
| PHASE-04 Application Backend / Use Cases | TODO | 0% |
| PHASE-05 Frontend Architecture & Design System | TODO | 0% |
| PHASE-06 Core Frontend | TODO | 0% |
| PHASE-07 Visual Polish & PWA | TODO | 0% |
| PHASE-08 Historical Content / Editorial Dataset | TODO | 0% |
| PHASE-09 Integration & QA | TODO | 0% |
| PHASE-10 Release | TODO | 0% |

## اقدامات ثبت‌شده

- ACT-001 — ایجاد زیرساخت مستندسازی و ردیابی پروژه — DONE
- ACT-002 — تثبیت تعریف محصول و قابلیت‌های اصلی — DONE
- ACT-003 — تثبیت مخاطبان و use caseها — DONE
- ACT-004 — تثبیت Calendar Specification، تعریف MVP و بازطراحی کامل Roadmap — DONE
- ACT-005 — تثبیت Non-goals، Scope Boundaries، حساب کاربری و Share Card — DONE
- ACT-006 — تثبیت Acceptance-level Account/Auth و Personal Share Card — DONE

## تصمیم‌های محصول فعلی

- Mobile-first و App-like
- تقویم اصلی: خورشیدی با شماره‌گذاری شاهنشاهی
- نمایش سال هجری شمسی معمولی در UI: ممنوع
- میلادی: کوچک و فرعی
- نام ماه‌ها مطابق CALENDAR-SPEC
- Today به‌عنوان مرکز تجربه
- ثبت‌نام/ورود حداقلی با نام کاربری و رمز عبور
- نام کاربری unique و cross-platform-safe
- ورود برای محتوای عمومی الزامی نیست
- ثبت‌نام/ورود حداقلی با username/password
- Personal Share Card اختصاصی برای اشتراک‌گذاری رویداد شخصی
- Month Calendar و Day Detail
- Historical Events و Important Events
- Historical Timeline
- Person Entity
- Personal Events و Personal Person
- Memories
- Search
- Time-of-day و Seasonal UI
- فارسی + انگلیسی با RTL/LTR واقعی
- PWA از نسخه اول
- داده تاریخی منبع‌دار و قابل اعتبارسنجی
- معماری داده‌محور و لایه‌ای
- عدم پیچیده‌سازی غیرضروری
- Reminder/Notification، social features، user-generated public events، Admin/CMS، location/maps، export/import، calendar integrations، monetization، public API، forgot-password و account deletion خارج از MVP

## MVP تأییدشده در سطح محصول

1. تقویم شاهنشاهی و Calendar Engine
2. لایه تاریخ/رویداد ایران: Today، Events، Important Events، Timeline، Person
3. لایه شخصی: Personal Events، Personal Person، Memories

## اقدام بعدی

TASK-01-007 — تعریف Acceptance Criteria

پس از آن:
TASK-01-008 → Requirements v1.0
سپس PHASE-02 — Architecture

## Blocked

فعلاً موردی ثبت نشده است.

## قانون ادامه پروژه

هر اقدام معنادار بعدی باید:
1. یک ID دریافت کند.
2. در CHANGELOG ثبت شود.
3. در صورت تغییر تصمیم/نیازمندی، DECISIONS یا REQUIREMENTS به‌روزرسانی شود.
4. وضعیت ROADMAP و STATUS را همگام کند.
5. اگر سند جدید ایجاد شد، INDEX به‌روزرسانی شود.
