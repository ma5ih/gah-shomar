## ACT-064 — 2026-10-03
Type: CALENDAR-ENGINE-DATE-ARITHMETIC
Status: DONE

### انجام شد
- `addImperialDays()` و `differenceInImperialDays()` به Calendar Domain اضافه شدند.
- محاسبه بر پایه Julian Day انجام می‌شود تا جابه‌جایی‌های بزرگ و عبور از مرز ماه/سال بدون حلقه‌های روزبه‌روز انجام شوند.
- regression test برای مرز ماه، روز کبیسه، عبور سال و اختلاف روزها اضافه شد.
- timezone و UI همچنان خارج از این منطق باقی مانده‌اند.

### وضعیت تست
- testها نوشته شده‌اند؛ اجرای CI برای commitهای جدید هنوز تأیید نشده است.

### Next
TASK-03-010 — Weekday Calculation

## ACT-063 — 2026-10-03
Type: CALENDAR-ENGINE-HISTORICAL
Status: IN_PROGRESS

### انجام شد
- gateway تبدیل تاریخ تاریخی دقیق در `src/domain/calendar/historical-conversion.ts` اضافه شد.
- Gregorian و هجری‌شمسی دقیق پشتیبانی می‌شوند.
- برای precisionهای غیر EXACT هیچ ImperialDate ساختگی تولید نمی‌شود.
- leap state تاریخ هجری‌شمسی از همان Calendar Engine استفاده می‌کند و hard-code مستقل ندارد.
- تست‌های تاریخی و invalid-date اضافه شدند.
- regression مرز نوروز سال کبیسه ۱۴۰۳/۲۵۸۳ به suite تبدیل اضافه شد.

### محدودیت فعلی
- Julian، Hijri قمری، regnal/era و تاریخ‌های BCE هنوز نیازمند converter و policy مستقل هستند؛ تا آن زمان نباید برای آن‌ها ImperialDate حدس زده شود.

### Next
TASK-03-008 — Year Boundary / Nowruz Edge Cases

## ACT-062 — 2026-10-03
Type: CALENDAR-ENGINE-TODAY
Status: DONE

### انجام شد
- `getImperialToday()` به Calendar Domain اضافه شد.
- Today به‌صورت pure function روی یک Gregorian calendar date resolved کار می‌کند.
- timezone و clock resolution عمداً خارج از Domain نگه داشته شد تا SSR، موبایل و runtimeهای مختلف بتوانند timezone موردنظر را به‌صورت صریح تعیین کنند.
- regression test برای تاریخ فعلی پروژه و مرز ۲۰/۲۱ مارس ۲۰۲۶ اضافه شد.
- export عمومی Calendar Domain به‌روز شد.

### وضعیت تست
- testها نوشته شده‌اند؛ اجرای CI برای commitهای جدید هنوز تأیید نشده است.

### Next
TASK-03-007 — Historical Date Conversion

## ACT-061 — 2026-10-03
Type: CALENDAR-ENGINE-CONVERSION
Status: DONE

### انجام شد
- پیاده‌سازی تبدیل خالص Gregorian ↔ Imperial در `src/domain/calendar/conversion.ts`.
- تبدیل بر پایه الگوریتم Borkowski/Jalaali و همان break-pointهای تثبیت‌شده انجام می‌شود؛ شماره سال شاهنشاهی با offset برابر ۱۱۸۰ اعمال می‌شود.
- تبدیل تاریخ روزانه به Julian Day و بازگشت به Gregorian بدون وابستگی به timezone یا `Date` مرورگر انجام می‌شود.
- اعتبارسنجی تاریخ‌های Gregorian و Imperial اضافه شد.
- regression test برای نوروز ۲۵۸۵، یک جفت شناخته‌شده ۲۰۱۶/۲۵۷۵، گذار ۲۶۲۰/۲۶۲۱ و round-trip تاریخ‌های نماینده اضافه شد.
- منطق تبدیل به export عمومی Calendar Domain اضافه شد.

### وضعیت تست
- workflow برای commitهای جدید هنوز run ثبت نکرده است؛ بنابراین اجرای موفق test suite هنوز تأیید نشده است.

### Next
TASK-03-005 — Now/Today Calculation

## ACT-060 — 2026-10-02
Type: CALENDAR-ENGINE-CORRECTION
Status: DONE

### انجام شد
- مشخص شد implementation قبلی یک چرخه ۳۳ سالهٔ ثابت را به تمام تاریخ تعمیم می‌داد و در نمونه‌های تاریخی مانند ۱۴۴۰/۱۴۴۱ درست نبود.
- implementation در src/domain/calendar/leap-year.ts به الگوریتم break-point خانواده Borkowski/Jalaali اصلاح شد.
- فاصله‌های ۵ ساله دیگر به‌عنوان استثناء دستی تعریف نمی‌شوند و از خود الگوریتم به‌دست می‌آیند.
- تست‌های ۱۴۰۳، ۱۴۰۸، ۱۴۳۶، ۱۴۴۰ و ۱۴۴۱ و معادل‌های شاهنشاهی آن‌ها اضافه شدند.
- ۲۵۸۵ همچنان سال عادی، ۲۵۸۳ آخرین کبیسهٔ قبلی و ۲۵۸۸ کبیسه بعدی در بازه فعلی باقی ماندند.
- CALENDAR-SPEC، DECISIONS و CALENDAR-ENGINE-OPEN-QUESTION اصلاح شدند.

### Next
TASK-03-005 — Now/Today Calculation

## ACT-059 — 2026-10-02
Type: CALENDAR-ENGINE
Status: DONE

### انجام شد
- تصمیم رسمی برای قاعده کبیسه گاه‌شمار شاهنشاهی ثبت شد.
- مشخص شد گاه‌شمار شاهنشاهی از نظر ساختار و کبیسه‌گیری کاملاً تابع تقویم خورشیدی متناظر است و فقط شماره سال/مبدأ متفاوت است.
- توالی معاصر سال‌های کبیسه بررسی و ثبت شد: ۱۳۹۹، ۱۴۰۳، ۱۴۰۸، ۱۴۱۲، ۱۴۱۶، ۱۴۲۰، ۱۴۲۴، ۱۴۲۸.
- معادل شاهنشاهی همان توالی: ۲۵۷۹، ۲۵۸۳، ۲۵۸۸، ۲۵۹۲، ۲۵۹۶، ۲۶۰۰، ۲۶۰۴، ۲۶۰۸.
- ۲۵۸۵ شاهنشاهی به‌درستی سال عادی تعیین شد؛ آخرین کبیسه ۲۵۸۳ و کبیسه بعدی ۲۵۸۸ است.
- `src/domain/calendar/leap-year.ts` ایجاد شد.
- تست‌های leap-year به suite تقویم اضافه شدند.
- blocker قبلی ACT-058 superseded شد و TASK-03-004 به DONE منتقل شد.
- CALENDAR-SPEC، ROADMAP، STATUS، DECISIONS و INDEX همگام شدند.

### Next
TASK-03-005 — Now/Today Calculation

## DEC-016 — 2026-10-02
Status: ACCEPTED
Title: انطباق کامل کبیسه گاه‌شمار شاهنشاهی با تقویم خورشیدی

### Decision
- گاه‌شمار شاهنشاهی از نظر ساختار تقویم و کبیسه‌گیری کاملاً از تقویم خورشیدی متناظر پیروی می‌کند.
- تفاوت فقط در مبدأ و شماره سال است.
- رابطه سال‌ها: ۱۴۰۵ خورشیدی = ۲۵۸۵ شاهنشاهی و به‌طور کلی سال شاهنشاهی = سال خورشیدی + ۱۱۸۰.
- سال‌های کبیسه اطراف بازه فعلی: ۱۳۹۹، ۱۴۰۳، ۱۴۰۸، ۱۴۱۲، ۱۴۱۶، ۱۴۲۰، ۱۴۲۴ و ۱۴۲۸؛ معادل شاهنشاهی آن‌ها ۲۵۷۹، ۲۵۸۳، ۲۵۸۸، ۲۵۹۲، ۲۵۹۶، ۲۶۰۰، ۲۶۰۴ و ۲۶۰۸ هستند.
- ۲۵۸۵ شاهنشاهی سال عادی است؛ آخرین سال کبیسه ۲۵۸۳ و سال کبیسه بعدی ۲۵۸۸ است.
- TASK-03-004 از BLOCKED به DONE منتقل شد.
- ACT-058 به‌عنوان blocker superseded ثبت می‌شود و مبنای تصمیم جدید ACT-059 است.

### Consequence
Calendar Engine می‌تواند از تشخیص leap year به‌عنوان یک قاعده deterministic استفاده کند و توسعه TASK-03-005 به بعد بدون blocker کبیسه ادامه پیدا کند.

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
- ACT-059 — نهایی‌سازی و پیاده‌سازی قاعده کبیسه متناظر با تقویم خورشیدی — DONE

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

