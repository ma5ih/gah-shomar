## DEC-025 — 2026-10-04
Status: ACCEPTED
Title: آغاز اجرای بصری Theme A بدون تغییر Core

### Decision
- اجرای اصلی TASK-07-001 فقط برای Theme A — Flat Geometric آغاز می‌شود.
- تمام قواعد بصری اجرای Theme A در docs/PHASE-07-THEME-A-FLAT-GEOMETRIC.md ثبت می‌شوند و باید داخل brief مصوب Theme A باقی بمانند.
- stylesheet و presentation مربوط به Theme A داخل src/frontend/themes/flat-geometric/ نگهداری می‌شود.
- Theme B در این checkpoint هیچ تغییری نمی‌کند.
- Core مشترک، Domain، Application، Data، Calendar Engine، Auth/Session، routing، localization contracts و business behavior نباید برای این طراحی تغییر کنند.

### Consequence
- Theme A می‌تواند ظاهر خود را مستقل از Theme B توسعه دهد.
- same data + same state + same product behavior برای Theme A حفظ می‌شود.
- TASK-07-001 تا زمان validation واقعی across core pages و responsive states DONE نمی‌شود.

## DEC-024 — 2026-10-04
Status: ACCEPTED
Title: جداسازی کامل دو Visual Theme با Core مشترک

### Decision
- از این checkpoint، دو Visual Theme مستقل برای محصول نگهداری می‌شوند:
  - `src/frontend/themes/flat-geometric/`
  - `src/frontend/themes/modern-flat-vector/`
- هر دو Theme باید همان Core موجود را مصرف کنند: Calendar Engine، Domain، Data، Application، Auth/Session، Localization contracts، routing/product behavior و persistence.
- هیچ Theme مجاز نیست منطق domain/application، repository، calendar calculation، auth، data contract یا business rule را کپی یا تغییر دهد.
- تفاوت Themeها فقط در presentation است: visual tokens، typography choices، colors، surfaces، shapes، illustration treatment، component styling، motion و visual composition.
- صفحه‌ها و use caseهای مشترک باید از قراردادهای پایه تغذیه شوند؛ Theme-specific implementation فقط داخل پوشه Theme خودش قرار می‌گیرد.
- هر Theme باید بتواند بدون انتقال فایل‌های Theme دیگر فعال/غیرفعال یا جایگزین شود.
- فایل `docs/VISUAL-DESIGN-SEPARATION-WARNING.md` قرارداد اجرایی و هشدار دائمی این مرز است.

### Consequence
- دو مسیر طراحی می‌توانند مستقل و موازی تکامل پیدا کنند بدون اینکه Core پروژه دو شاخه شود.
- تست‌های domain/application و منطق محصول بین دو Theme مشترک می‌مانند.
- هر تغییر ظاهری باید ابتدا در Theme مربوطه انجام شود و فقط در صورت نیاز واقعی به abstraction مشترک، به لایه مشترک منتقل شود.
- ورود به طراحی اصلی از TASK-07-001 انجام می‌شود؛ این checkpoint فقط مرزبندی و scaffolding را ثبت می‌کند.

## DEC-023 — 2026-10-04
Status: ACCEPTED
Title: Server Composition Root برای binding persistence

### Decision
- Presentation و `app/` route/actionها نباید concrete repository را مستقیماً مصرف کنند.
- binding بین Application Use Cases و concrete persistence adapterها در `src/application/server.ts` انجام می‌شود.
- Application contractهای قابل تست همچنان dependency injection را حفظ می‌کنند؛ composition root فقط wiring محیط واقعی server را انجام می‌دهد.

### Consequence
- dependency leakهای Presentation کاهش می‌یابند.
- unit/integration tests می‌توانند repositoryهای fake/injected را حفظ کنند.
- TASK-09-019 باید این boundary را قبل از release دوباره با import audit و CI تأیید کند.

## DEC-019 — 2026-10-03
Status: ACCEPTED
Title: تفکیک Timezone Resolution از Calendar Domain

### Decision
- Calendar Domain نباید مستقیماً clock/timezone سیستم یا browser `Date` را مالک شود.
- Runtime/application ابتدا تاریخ و زمان محلی موردنظر را resolve می‌کند.
- Domain فقط داده تقویمی resolve‌شده را دریافت و محاسبه می‌کند.
- هدف deterministic بودن SSR، تست و محیط‌های مختلف است.

### Consequence
TASK-03-005 به‌صورت pure Today calculation پیاده‌سازی شده و resolution واقعی timezone برای Application layer باقی می‌ماند.

## DEC-020 — 2026-10-03
Status: ACCEPTED
Title: عدم جعل تبدیل تاریخ تاریخی

### Decision
- برای HistoricalDate فقط تقویم‌هایی که converter دقیق و policy مشخص دارند ImperialDate تولید می‌شود.
- Gregorian و Solar Hijri فعلاً exact conversion دارند.
- Julian، قمری، BCE/eraهای خاص و موارد مشابه تا تعریف converter مستقل نباید به‌صورت حدسی تبدیل شوند.
- original date/calendar همیشه حفظ می‌شوند.

### Consequence
TASK-03-007 فعلاً IN_PROGRESS باقی می‌ماند و کامل‌شدن آن به معنای پوشش همه تقویم‌های تاریخی نیست؛ بلکه پوشش converterهای مصوب و قرارداد دقیق Historical Date است.

## DEC-021 — 2026-10-03
Status: ACCEPTED
Title: CI به‌عنوان دروازه اعتبارسنجی فنی

### Decision
- CI باید حداقل typecheck، unit tests و production build را اجرا کند.
- تا زمانی که GitHub workflow run موفق مشاهده نشده، test/build به‌عنوان PASS ثبت نمی‌شود.
- repository فعلاً lockfile ندارد؛ CI از `npm install` استفاده می‌کند.

### Consequence
TASK-03-023 تا TASK-03-025 تا مشاهده و رفع خطاهای احتمالی CI در وضعیت IN_PROGRESS باقی می‌مانند.

## DEC-018 — 2026-10-03
Status: ACCEPTED
Title: تبدیل Gregorian ↔ Imperial در Calendar Engine

### Decision
- تبدیل روزانه باید deterministic و مستقل از timezone مرورگر باشد.
- مبنای تبدیل، الگوریتم Borkowski/Jalaali و break-pointهای مصوب DEC-017 است.
- سال شاهنشاهی در خروجی با رابطه Solar Hijri + 1180 محاسبه می‌شود.
- Calendar Engine باید round-tripهای Gregorian → Imperial → Gregorian و Imperial → Gregorian → Imperial را برای تاریخ‌های معتبر حفظ کند.
- مرز نوروز بخشی از منطق تبدیل است و نباید با جمع/تفریق سادهٔ سال‌ها جایگزین شود.

### Consequence
TASK-03-006 implementation complete است و TASK-03-005 می‌تواند روی conversion contract موجود بنا شود.

## DEC-017 — 2026-10-02
Status: ACCEPTED
Title: عدم تکرار مکانیکی چرخه ۳۳ ساله در محاسبه کبیسه

### Decision
- گاه‌شمار شاهنشاهی از همان قواعد تقویم خورشیدی متناظر پیروی می‌کند و فقط شماره سال آن ۱۱۸۰ واحد جلوتر است.
- کبیسه‌گیری نباید با یک چرخه ۳۳ سالهٔ ثابت و تکرارشونده روی تمام تاریخ محاسبه شود.
- Calendar Engine از الگوریتم break-point خانواده Borkowski/Jalaali برای حفظ تغییرات ۴ و ۵ ساله استفاده می‌کند.
- نمونه‌های اجباری:
  - ۱۴۴۰ خورشیدی = ۲۶۲۰ شاهنشاهی → سال عادی
  - ۱۴۴۱ خورشیدی = ۲۶۲۱ شاهنشاهی → سال کبیسه
  - ۱۴۰۳ خورشیدی = ۲۵۸۳ شاهنشاهی → سال کبیسه
  - ۱۴۰۸ خورشیدی = ۲۵۸۸ شاهنشاهی → سال کبیسه
- ACT-059 superseded شد و ACT-060 به‌عنوان اصلاح implementation ثبت می‌شود.

### Consequence
Calendar Engine باید برای regression testها هم سال‌های مدرن و هم نمونه‌های تاریخی دارای فاصله ۵ ساله را پوشش دهد.

## DEC-016 — 2026-10-02
Status: SUPERSEDED
Title: انطباق کامل کبیسه گاه‌شمار شاهنشاهی با تقویم خورشیدی

اصل DEC-016 پابرجاست، اما فرض implementation قبلی درباره تکرار ثابت یک چرخه ۳۳ ساله با ACT-060 اصلاح شد.

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



## DEC-022 — 2026-10-03
Status: ACCEPTED
Title: Yearly Personal Recurrence on Non-Leap Esfand

Decision:
- MVP yearly recurrence supports frequency=yearly and interval=1.
- A recurring 30 Esfand date in a non-leap Imperial year resolves to day 29 of Esfand for that occurrence.
- Recurrence logic stays in Domain/Application and is never duplicated in UI.

Consequence:
- Personal birthday/anniversary recurrence remains deterministic across leap/common year transitions.
- Regression coverage is required for 30 Esfand recurrence.
