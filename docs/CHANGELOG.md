## ACT-058 — 2026-10-02
Type: BLOCKER-RESEARCH
Status: BLOCKED

### انجام شد
- TASK-03-004 — Leap-Year Rules بررسی شد اما به‌دلیل نبود تصمیم رسمی در CALENDAR-SPEC نهایی نشد.
- شواهد پژوهشی برای یک مدل 33 ساله ثبت شد، اما بدون تبدیل آن به تصمیم قطعی محصول.
- `docs/CALENDAR-ENGINE-OPEN-QUESTION.md` ایجاد شد.

### Blocker
برای ادامه تبدیل دقیق تاریخ و تست‌های کامل Calendar Engine باید قاعده کبیسه انتخاب شود.

### Next
TASK-03-004 — Leap-Year Rules

## ACT-057 — 2026-10-02
Type: CORE-DATA
Status: DONE

### انجام شد
- TASK-03-022 — Public vs Personal Data Separation تکمیل شد.
- ownership assertion و visibility contracts در `src/data/contracts/visibility.ts` ایجاد شدند.

### Next
TASK-03-004 — Leap-Year Rules (BLOCKED)

## ACT-056 — 2026-10-02
Type: CORE-DATA
Status: DONE

### انجام شد
- TASK-03-021 — Content Validation Pipeline تکمیل شد.
- public content validation برای APPROVED visibility/status ایجاد شد.

### Next
TASK-03-022 — Public vs Personal Data Separation

## ACT-055 — 2026-10-02
Type: CORE-DATA
Status: DONE

### انجام شد
- TASK-03-020 — Seed/Fixture Data Strategy تکمیل شد.
- مسیر `src/content/` و قرارداد seed/fixture مشخص شد.
- داده تاریخی در UI hard-code نمی‌شود.

### Next
TASK-03-021 — Content Validation Pipeline

## ACT-054 — 2026-10-02
Type: CORE-DATA
Status: DONE

### انجام شد
- TASK-03-019 — Structured Event Dataset Contract تکمیل شد.
- PublicContentDataset و validation contracts در `src/content/contracts.ts` ایجاد شدند.

### Next
TASK-03-020 — Seed/Fixture Data Strategy

## ACT-053 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-018 — Source/Editorial Domain تکمیل شد.
- SourceType و Source contract پایه در `src/domain/source/types.ts` ایجاد شد.

### Next
TASK-03-004 — Leap-Year Rules

## ACT-052 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-017 — Timeline/Period Domain تکمیل شد.
- HistoricalPeriod contract در `src/domain/period/types.ts` ایجاد شد.

### Next
TASK-03-018 — Source/Editorial Domain

## ACT-051 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-016 — Memory Domain تکمیل شد.
- Memory contract خصوصی در `src/domain/personal/types.ts` ایجاد شد.

### Next
TASK-03-017 — Timeline/Period Domain

## ACT-050 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-015 — Personal Event Domain تکمیل شد.
- Personal Event و Personal Person contractها ایجاد شدند.

### Next
TASK-03-016 — Memory Domain

## ACT-049 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-014 — Person Domain تکمیل شد.
- Person contract مستقل و public ایجاد شد.

### Next
TASK-03-015 — Personal Event Domain

## ACT-048 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-013 — Event Domain تکمیل شد.
- Event، EditorialStatus و EventCategory contractها ایجاد شدند.

### Next
TASK-03-014 — Person Domain

## ACT-047 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-003 — Month Lengths تکمیل شد.
- شش ماه اول 31 روز، پنج ماه بعد 30 روز و اسپند 29/30 روز بر اساس leap flag تعریف شد.

### Next
TASK-03-004 — Leap-Year Rules

## ACT-046 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-002 — Year/Month/Day Rules تکمیل شد.
- ImperialMonth و ImperialDate contractها ایجاد شدند.

### Next
TASK-03-003 — Month Lengths

## ACT-045 — 2026-10-02
Type: DOMAIN-IMPLEMENTATION
Status: DONE

### انجام شد
- TASK-03-001 — Imperial Date Type تکمیل شد.
- ImperialDate، GregorianDate، HistoricalDate و Weekday typeها ایجاد شدند.
- Calendar constants و month helpers در `src/domain/calendar/` ایجاد شدند.

### Next
TASK-03-002 — Year/Month/Day Rules

## ACT-044 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-025 — Share Card Architecture تکمیل شد.
- privacy boundary، authorization، DTO، image rendering و Share Sheet flow مشخص شد.

### Next
PHASE-03 — TASK-03-001 — Imperial Date Type

## ACT-043 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-024 — Authentication & Session Architecture تکمیل شد.
- username/password، password hashing، DB-backed session، secure cookie و authorization boundary تعریف شد.

### Next
TASK-02-025 — Share Card Architecture

## ACT-042 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-023 — ARCHITECTURE v1.0 تکمیل شد.
- معماری نهایی لایه‌ای و dependency direction تثبیت شد.
- PHASE-02 architecture به baseline رسمی implementation تبدیل شد.

### Next
TASK-02-024 — Authentication & Session Architecture

## ACT-041 — 2026-10-02
Type: ARCHITECTURE-REVIEW
Status: DONE

### انجام شد
- TASK-02-022 — Architecture Review انجام شد.
- boundaryها، privacy، deferred scope، localization، source/validation و testability بررسی شدند.

### Next
TASK-02-023 — ARCHITECTURE v1.0

## ACT-040 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-021 — Data Validation Strategy تکمیل شد.
- input، domain invariant و DB constraints به‌عنوان سه لایه validation تعریف شدند.

### Next
TASK-02-022 — Architecture Review

## ACT-039 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-020 — Testing Architecture تکمیل شد.
- unit/integration/E2E/regression و traceability به Acceptance Criteria تعریف شد.

### Next
TASK-02-021 — Data Validation Strategy

## ACT-038 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-019 — Error/Edge-case Strategy تکمیل شد.
- domain/validation/auth/infrastructure errors و edge cases ثبت شدند.

### Next
TASK-02-020 — Testing Architecture

## ACT-037 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-018 — Internal Contracts/API Boundaries تکمیل شد.
- application DTO/command/result و route boundary مشخص شد.

### Next
TASK-02-019 — Error/Edge-case Strategy

## ACT-036 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-017 — Entity Relationship Map تکمیل شد.
- relationها ID-based و data privacy boundaryها ثبت شدند.

### Next
TASK-02-018 — Internal Contracts/API Boundaries

## ACT-035 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-016 — Source/Validation Schema تکمیل شد.
- Source، verification، confidence و editorial status به contracts متصل شدند.

### Next
TASK-02-017 — Entity Relationship Map

## ACT-034 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-015 — Timeline/Period Schema تکمیل شد.
- Historical Period و timeline ordering با uncertainty تعریف شد.

### Next
TASK-02-016 — Source/Validation Schema

## ACT-033 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-014 — Personal Event Schema تکمیل شد.
- ownership، recurrence و Share Card relation مشخص شد.

### Next
TASK-02-015 — Timeline/Period Schema

## ACT-032 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-013 — Memory Schema تکمیل شد.
- privacy، ownership و relations مشخص شدند.

### Next
TASK-02-014 — Personal Event Schema

## ACT-031 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-012 — Person Schema تکمیل شد.

### Next
TASK-02-013 — Memory Schema

## ACT-030 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-011 — Event Schema تکمیل شد.

### Next
TASK-02-012 — Person Schema

## ACT-029 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-010 — Media/Content Boundary تکمیل شد.

### Next
TASK-02-011 — Event Schema

## ACT-028 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-009 — Localization Boundary تکمیل شد.

### Next
TASK-02-010 — Media/Content Boundary

## ACT-027 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-008 — Presentation/UI Boundary تکمیل شد.

### Next
TASK-02-009 — Localization Boundary

## ACT-026 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-007 — Application/Use-case Layer تکمیل شد.

### Next
TASK-02-008 — Presentation/UI Boundary

## ACT-025 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-006 — Domain/Data Layer تکمیل شد.

### Next
TASK-02-007 — Application/Use-case Layer

## ACT-024 — 2026-10-02
Type: ARCHITECTURE
Status: DONE

### انجام شد
- TASK-02-005 — Calendar Engine Boundary تکمیل شد.
- Calendar Engine به‌عنوان تنها مرجع منطق تاریخ تثبیت شد.

### Next
TASK-02-006 — Domain/Data Layer

## ACT-023 — 2026-10-02
Type: ARCHITECTURE-FOUNDATION
Status: DONE

### انجام شد
- TASK-02-004 — Dependency Policy تکمیل و DONE شد.
- سیاست dependency، نقش‌ها، version locking، security و maintenance ثبت شد.
- Core baseline شامل Next.js/React/TypeScript، PostgreSQL/Drizzle و Tailwind CSS ثبت شد.

### Next
TASK-02-005 — Calendar Engine Boundary

## ACT-022 — 2026-10-02
Type: ARCHITECTURE-FOUNDATION
Status: DONE

### انجام شد
- TASK-02-003 — Environment & Configuration Strategy تکمیل و DONE شد.
- environment classes، secret/public boundaries، core variables و validation rules ثبت شدند.

### Next
TASK-02-004 — Dependency Policy

## ACT-021 — 2026-10-02
Type: ARCHITECTURE-FOUNDATION
Status: DONE

### انجام شد
- TASK-02-002 — Repository/Directory Architecture تکمیل و DONE شد.
- domain/application/data/content/frontend boundaries و import direction تعریف شدند.

### Next
TASK-02-003 — Environment & Configuration Strategy

## ACT-020 — 2026-10-02
Type: ARCHITECTURE-FOUNDATION
Status: DONE

### انجام شد
- TASK-02-001 — Stack و Runtime تکمیل و DONE شد.
- Next.js App Router، TypeScript، PostgreSQL، Drizzle، Tailwind، Node.js LTS و npm به‌عنوان baseline انتخاب شدند.
- انتخاب auth/PWA/search/deployment به Taskهای تخصصی بعدی واگذار شد.
- DEC-014 ثبت شد.

### Next
TASK-02-002 — Repository/Directory Architecture

## ACT-019 — 2026-10-02
Type: SPECIFICATION-COMPLETION
Status: DONE

### انجام شد
- TASK-01-018 — Search Requirements تکمیل و DONE شد.
- Search entities، privacy، normalization، ranking پایه، multilingual behavior و result contract تعریف شد.
- با تکمیل ACT-014 تا ACT-019، تمام specificationهای باقیمانده PHASE-01 نهایی شدند.
- DEC-013 ثبت شد.
- ROADMAP، STATUS و INDEX همگام شدند.

### نتیجه
PHASE-01 — Product Discovery & Specification اکنون 100% و DONE است و پروژه وارد Architecture شده است.

### Next
TASK-02-001 — انتخاب Stack و Runtime

## ACT-018 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-017 — Historical Date Representation تکمیل و DONE شد.
- `docs/HISTORICAL-DATE-MODEL.md` ایجاد و APPROVED شد.
- original date/calendar، imperial equivalent، precision/uncertainty و BCE handling مشخص شد.
- Calendar Engine به‌عنوان مرجع conversion تثبیت شد.

### Next
TASK-01-018 — Search Requirements

## ACT-017 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-016 — Media/Asset Content Model تکمیل و DONE شد.
- `docs/MEDIA-MODEL.md` ایجاد و APPROVED شد.
- image/document، metadata، provenance/rights و relationshipها مشخص شدند.

### Next
TASK-01-017 — Historical Date Representation

## ACT-016 — 2026-10-02
Type: EDITORIAL-SPEC
Status: DONE

### انجام شد
- TASK-01-015 — Sources, Verification & Editorial Policy تکمیل و DONE شد.
- `docs/SOURCE-EDITORIAL-MODEL.md` ایجاد و APPROVED شد.
- Source entity، verification lifecycle، confidence و editorial rules ثبت شد.
- برای موضوعات سیاسی/معاصر، factual claims منبع‌دار و اختلاف دیدگاه‌ها نسبت‌داده‌شده باقی می‌مانند.

### Next
TASK-01-016 — Media/Asset Content Model

## ACT-015 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-014 — Timeline & Entity Relationships تکمیل و DONE شد.
- `docs/TIMELINE-MODEL.md` ایجاد و APPROVED شد.
- Historical Period و relationshipهای اصلی Entityها تعریف شدند.
- ordering بر اساس Calendar Engine و با حفظ uncertainty تعیین شد.

### Next
TASK-01-015 — Sources, Verification & Editorial Policy

## ACT-014 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-013 — Important Event & Editorial Selection تکمیل و DONE شد.
- `docs/IMPORTANT-EVENTS-MODEL.md` ایجاد و APPROVED شد.
- Important Event به‌عنوان Event + editorial selection تثبیت شد.
- hero image برای Eventهای منتخب الزامی شد.
- public selection فقط از APPROVED Eventها انجام می‌شود.

### Next
TASK-01-014 — Timeline & Entity Relationships

## ACT-013 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-012 — Personal Event Model تکمیل و DONE شد.
- `docs/PERSONAL-EVENT-MODEL.md` ایجاد و APPROVED شد.
- مالکیت خصوصی، CRUD، نوع‌های birthday/anniversary/custom، recurrence، Personal Person و رابطه با Share Card مشخص شد.
- DEC-012 به‌عنوان تصمیم تجمیعی مدل‌های Person/Memory/Personal Event ثبت شد.
- ROADMAP، STATUS و INDEX همگام شدند.

### نتیجه
Personal Event اکنون قرارداد تفصیلی مستقلی دارد و از public Event جداست.

### Next
TASK-01-013 — Important Event & Editorial Selection

## ACT-012 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-011 — Memory Model تکمیل و DONE شد.
- `docs/MEMORY-MODEL.md` ایجاد و APPROVED شد.
- Memory به‌عنوان داده خصوصی مالک تعریف شد و از Personal Event جدا نگه داشته شد.
- روابط اختیاری با Person، Event و Personal Event مشخص شد.
- حذف/ویرایش در سطح مالکیت تعریف شد.

### نتیجه
Memory اکنون مدل مستقل و قابل استفاده برای لایه شخصی دارد.

### Next
TASK-01-012 — Personal Event Model

## ACT-011 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-010 — Person Model تکمیل و DONE شد.
- `docs/PERSON-MODEL.md` ایجاد و APPROVED شد.
- هویت، محتوای چندزبانه، تاریخ‌های تولد/درگذشت، روابط، منابع، رسانه و وضعیت editorial برای Person مشخص شد.
- Person به‌عنوان Entity مستقل و قابل جستجو تثبیت شد.

### نتیجه
مدل Person اکنون پایه رسمی صفحات مستقل افراد و روابط تاریخی پروژه است.

### Next
TASK-01-011 — Memory Model

## ACT-010 — 2026-10-02
Type: DOMAIN-SPEC
Status: DONE

### انجام شد
- TASK-01-009 — Event Model تکمیل و DONE شد.
- مدل تفصیلی Event در `docs/EVENT-MODEL.md` ایجاد و APPROVED شد.
- مرز Event عمومی و Personal Event تثبیت شد.
- ساختار هویت، متن چندزبانه، تاریخ، دسته‌بندی، روابط، منابع، رسانه، recurrence و metadata نمایشی تعریف شد.
- مشخص شد Important Event یک Entity جدا نیست و از Event + editorial selection تشکیل می‌شود.
- وابستگی‌های تخصصی مانند Historical Date Representation، Source/Validation، Media و Search برای Taskهای مستقل بعدی نگه داشته شدند.
- DEC-011 ثبت شد.
- ROADMAP، STATUS و INDEX همگام شدند.

### نتیجه
مدل محتوایی Event اکنون یک قرارداد تفصیلی و قابل استفاده برای Person/Timeline/Source/Media و سپس Architecture دارد.

### Next
TASK-01-010 — Person Model

## ACT-009 — 2026-10-02
Type: REQUIREMENTS-FINALIZATION
Status: DONE

### انجام شد
- TASK-01-008 — Requirements v1.0 Finalization تکمیل و DONE شد.
- REQUIREMENTS.md از نسخه draft به `1.0.0` و Status = APPROVED منتقل شد.
- محدوده محصول، MVP، Acceptance Criteria، Account/Auth و Personal Share Card در سطح Product Requirements نهایی شدند.
- مشخص شد که مدل‌های تفصیلی Event، Person، Memory، Personal Event، Important Event، Timeline، Sources، Media، Historical Date Representation و Search ادامه PHASE-01 هستند و «ناتمام بودن Requirements v1.0» محسوب نمی‌شوند.
- DEC-010 برای نهایی‌سازی Requirements ثبت شد.
- ROADMAP، STATUS، INDEX، PROJECT و README با نقطه جدید همگام شدند.
- عبارت قدیمی Share Card در PROJECT.md اصلاح شد تا Share Card فقط برای Personal Event تعریف شود.

### نتیجه
Product Requirements نسخه 1.0 اکنون یک baseline رسمی و APPROVED برای Architecture و implementation است.

### Next
TASK-01-009 — Event Model

## ACT-008 — 2026-10-02
Type: ACCEPTANCE-SPEC
Status: DONE

### انجام شد
- TASK-01-007 — Acceptance Criteria به‌صورت کامل در سطح MVP تعریف و DONE شد.
- معیارهای AC-001 تا AC-039 برای Calendar Engine، Today/Calendar، Historical/Event/Timeline، Personal Layer، Search/Localization، Authentication/PWA و Quality/Scope ثبت شدند.
- معیارهای Acceptance به‌عنوان مرجع PASS/FAIL برای تست و QA تعیین شدند.
- DEC-009 برای تثبیت این معیارها ثبت شد.
- ROADMAP، STATUS، INDEX، REQUIREMENTS و MVP-SPEC همگام شدند.
- عبارت قدیمی Share Card در MVP-SPEC اصلاح شد تا Share Card فقط برای Personal Event تعریف شود.

### نتیجه
مرحله Product Acceptance اکنون قابل ردیابی و تست‌پذیر است و پروژه وارد آخرین گام Product Specification می‌شود.

### Next
TASK-01-008 — Requirements v1.0 Finalization

# CHANGELOG — دفتر ثبت اقدامات

## ACT-007 — 2026-10-02
Type: DOCUMENTATION-SYNC
Status: DONE

### انجام شد
- CHANGELOG، STATUS، ROADMAP و INDEX با آخرین تصمیم‌های محصول تطبیق داده شدند.
- TASK-01-019 — Account & Authentication Requirements به DONE منتقل شد.
- آخرین اقدام پروژه در STATUS و INDEX روی ACT-006 همگام شد.
- ثبت شد که تعریف قبلی Share Card در ACT-005 توسط تصمیم دقیق‌تر ACT-006 supersede شده است: Share Card فقط برای Personal Event است، نه برای یک روز عمومی.

### نتیجه
ردیابی تصمیم‌ها و وضعیت پروژه با Source of Truth فعلی GitHub همگام شد.

### Next
TASK-01-007 — Acceptance Criteria

## ACT-006 — 2026-10-02
Type: ACCEPTANCE-SPEC
Status: DONE

### انجام شد
- Authentication به‌صورت اختیاری برای Public Content و لازم برای Personal Layer تثبیت شد.
- ثبت‌نام و ورود به حداقل Username + Password محدود شد.
- Username policy نهایی شد؛ Password حداقل ۸ کاراکتر است.
- Forgot Password و Account Deletion از MVP خارج شدند.
- Session تا Logout کاربر به‌عنوان رفتار مورد انتظار ثبت شد؛ جزئیات امنیتی به Architecture واگذار شد.
- Share Card از «اشتراک‌گذاری روز» به «اشتراک‌گذاری Personal Event» تغییر یافت.
- Share Card به‌صورت تصویر مستقل با Share Sheet سیستم‌عامل/مرورگر تعریف شد.
- اطلاعات کارت شامل تاریخ شاهنشاهی، روز هفته، میلادی کوچک و اطلاعات رویداد شخصی است.
- Theme کارت براساس نوع/انتخاب Personal Event خواهد بود؛ برای «سایر» یک طرح ساده، شیک و متمایز تعیین شد.
- برای Important Eventها استفاده از تصویر شاخص باکیفیت و امکان تصاویر بیشتر در صفحه جزئیات تأیید شد.

### نتیجه
معیارهای اصلی Account/Auth و Personal Share Card در سطح محصول تثبیت شد.

### Next
TASK-01-007 — Acceptance Criteria

## ACT-005 — 2026-10-02
Type: PRODUCT-SCOPE
Status: DONE

### انجام شد
- Non-goals و Scope Boundaries با کاربر تثبیت شد.
- ثبت‌نام و ورود ساده با username/password به MVP اضافه شد.
- سیاست username به‌صورت cross-platform-safe تعریف شد و جزئیات فنی به Architecture موکول شد.
- Reminder/Notification از MVP خارج شد.
- social features، user-generated public events، Admin/CMS، maps/location، export/import، calendar integrations، monetization و public API از Scope خارج شدند.
- صفحه مستقل Important Events به‌عنوان محل تصاویر باکیفیت و شاخص تأیید شد.
- قابلیت Share برای یک روز مشخص به‌صورت یک Share Card مستقل و اختصاصی به MVP اضافه شد.
- اصل «آماده‌بودن معماری برای قابلیت‌های آینده بدون فعال‌سازی آن‌ها» تأیید شد.

### نتیجه
TASK-01-006 — Non-goals & Scope Boundaries تکمیل و DONE شد.

### Next
TASK-01-007

## ACT-004 — 2026-10-02
Type: PROJECT-UPDATE
Status: DONE

### انجام شد
- مشخصات رسمی سیستم تقویم در CALENDAR-SPEC.md تثبیت شد.
- مبدأ تقویم شاهنشاهی به‌صورت فنی/تاریخی ثبت شد: ۵۵۹ پیش از میلاد، آغاز پادشاهی کوروش بزرگ.
- قواعد شماره‌گذاری، ماه‌ها، نمایش تاریخ و تبدیل‌های موردنیاز مستند شد.
- تصمیم MVP بر اساس تمام قابلیت‌ها و مشخصات قبلی جمع‌بندی و ثبت شد.
- MVP در سه ستون اصلی تعریف شد: Calendar Engine، Historical/Event Experience و Personal Layer.
- ترتیب توسعه پروژه از Product → Specification → Models → Architecture → Core Backend → Application Logic → Frontend Architecture → Frontend → Polish/PWA → Content → QA → Release بازطراحی شد.
- ROADMAP.md از یک نقشه راه سطح‌بالا به برنامه اجرایی کدگذاری‌شده از PHASE-00 تا PHASE-10 تبدیل شد.
- STATUS.md با وضعیت واقعی پروژه همگام شد.
- قانون ثبت مداوم همه اقدامات و همگام‌سازی اسناد تثبیت شد.

### نتیجه
PHASE-01 از نظر تعریف محصول و تقویم و MVP جلو رفت؛ مرحله بعدی تعریف Non-goals و Acceptance Criteria است.

### Next
TASK-01-006

## ACT-003 — 2026-10-02
Type: PRODUCT-SPECIFICATION
Status: DONE

### انجام شد
- تعریف و ثبت مخاطبان اصلی محصول
- تعریف مخاطب ثانویه برای آشنایی غیرایرانیان با فرهنگ و تاریخ ایران
- تثبیت کاربرد اصلی: تقویم ایرانی همراه با رویدادها و مناسبت‌های ملی و تاریخی
- تثبیت الگوی استفاده آزاد و مشابه اپلیکیشن‌های تقویم معمولی
- ثبت اصل «عدم پیچیده‌سازی غیرضروری محصول»

### نتیجه
TASK-01-002 — مخاطبان و سناریوهای استفاده تکمیل و DONE شد.

### Next
TASK-01-003

## ACT-002 — 2026-10-02
Type: PRODUCT-SPECIFICATION
Status: DONE

### انجام شد
- تبدیل تعریف اولیه محصول به سند جامع آشنایی و توضیحات پروژه در PROJECT.md
- ثبت قابلیت‌های تأییدشده در REQUIREMENTS.md
- اضافه شدن Event Entity
- اضافه شدن Person Entity
- اضافه شدن Personal Events
- اضافه شدن Memories
- اضافه شدن Historical Timeline
- اضافه شدن Search
- اضافه شدن Time-of-day و Seasonal UI
- تثبیت فارسی/انگلیسی و RTL/LTR واقعی
- تثبیت PWA به‌عنوان هدف
- تعریف صفحه مستقل «رویدادهای مهم»
- تعریف صفحه کامل و تصویری هر رویداد
- توسعه roadmap برای مدل‌های داده و قابلیت‌های جدید

### نتیجه
تعریف محصول از یک ایده کلی به یک specification سطح‌بالای قابل توسعه تبدیل شد.

### Next
TASK-01-002

## ACT-001 — 2026-10-02
Type: PROJECT-BOOTSTRAP
Status: DONE

### انجام شد
- ایجاد ساختار مرکزی مستندات
- ایجاد شناسنامه پروژه
- ایجاد roadmap کلان و جزئی
- ایجاد status
- ایجاد changelog
- ایجاد decisions
- ایجاد requirements
- ایجاد workflow
- تعریف سیستم شناسه‌گذاری

### نتیجه
پروژه اکنون یک نقطه حقیقت قابل انتقال بین اکانت‌ها و محیط‌های کاری دارد.

### Next
TASK-01-002

---

هر رکورد یک شناسه یکتا دارد و حذف نمی‌شود. اصلاحات با رکورد جدید ثبت می‌شوند.
