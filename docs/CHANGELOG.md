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
