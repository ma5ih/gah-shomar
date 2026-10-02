# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-02
Current phase: PHASE-03 — Core Backend / Domain / Calendar Engine
Overall status: IN_PROGRESS

## آخرین نقطه قطعی

تا این لحظه تعریف محصول، مخاطبان و use caseها، قابلیت‌های اصلی، مشخصات رسمی تقویم، محدوده MVP و مرزهای MVP با کاربر بررسی و تثبیت شده‌اند. نقشه راه نیز از صفر تا Release به‌صورت مرحله‌ای و کدگذاری‌شده بازطراحی شده است.

## وضعیت مراحل

| Phase | Status | Progress |
|---|---|---:|
| PHASE-00 Documentation | DONE | 100% |
| PHASE-01 Specification | DONE | 100% |
| PHASE-02 Architecture | DONE | 100% |
| PHASE-03 Core Backend / Calendar Engine | IN_PROGRESS | 30% |
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
- ACT-007 — Documentation Sync/Audit — DONE
- ACT-008 — تعریف Acceptance Criteria برای MVP — DONE
- ACT-009 — نهایی‌سازی REQUIREMENTS v1.0 — DONE
- ACT-010 — تعریف مدل تفصیلی Event — DONE
- ACT-011 — تعریف مدل تفصیلی Person — DONE
- ACT-012 — تعریف مدل تفصیلی Memory — DONE
- ACT-013 — تعریف مدل تفصیلی Personal Event — DONE
- ACT-014 — تعریف Important Event & Editorial Selection — DONE
- ACT-015 — تعریف Timeline و روابط Entityها — DONE
- ACT-016 — تعریف Sources, Verification و Editorial Policy — DONE
- ACT-017 — تعریف Media/Asset Model — DONE
- ACT-018 — تعریف Historical Date Representation — DONE
- ACT-019 — تعریف Search Requirements — DONE
- ACT-020 — انتخاب Stack و Runtime — DONE
- ACT-021 — تعریف Repository/Directory Architecture — DONE
- ACT-022 — تعریف Environment & Configuration Strategy — DONE
- ACT-023 — تعریف Dependency Policy — DONE
- ACT-045 — پیاده‌سازی Imperial Date Type — DONE
- ACT-046 — پیاده‌سازی Year/Month/Day Rules — DONE
- ACT-047 — پیاده‌سازی Month Lengths — DONE
- ACT-048 — تعریف Event Domain — DONE
- ACT-049 — تعریف Person Domain — DONE
- ACT-050 — تعریف Personal Event Domain — DONE
- ACT-051 — تعریف Memory Domain — DONE
- ACT-052 — تعریف Timeline/Period Domain — DONE
- ACT-053 — تعریف Source/Editorial Domain — DONE
- ACT-054 — Structured Event Dataset Contract — DONE
- ACT-055 — Seed/Fixture Data Strategy — DONE
- ACT-056 — Content Validation Pipeline — DONE
- ACT-057 — Public vs Personal Data Separation — DONE
- ACT-058 — ثبت blocker قاعده کبیسه — SUPERSEDED
- ACT-059 — نهایی‌سازی اولیه قاعده کبیسه متناظر با تقویم خورشیدی — SUPERSEDED
- ACT-060 — اصلاح الگوریتم کبیسه برای چرخه‌های غیرثابت — DONE

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

TASK-03-005 — Now/Today Calculation

PHASE-03 — Calendar Engine اکنون از blocker اصلی کبیسه عبور کرده است.

## Blocked

- موردی در TASK-03-004 باقی نمانده است.
- تبدیل دقیق Gregorian ↔ Imperial و edge caseهای مرز نوروز در TASK-03-006 و TASK-03-008 باید مطابق همین قاعده و regression testهای Calendar Engine پیاده‌سازی شوند.

## قانون ادامه پروژه

هر اقدام معنادار بعدی باید:
1. یک ID دریافت کند.
2. در CHANGELOG ثبت شود.
3. در صورت تغییر تصمیم/نیازمندی، DECISIONS یا REQUIREMENTS به‌روزرسانی شود.
4. وضعیت ROADMAP و STATUS را همگام کند.
5. اگر سند جدید ایجاد شد، INDEX به‌روزرسانی شود.

