## DEC-012 — 2026-10-02
Status: ACCEPTED
Title: تثبیت مدل‌های Person، Memory و Personal Event

### Decision
- Person به‌عنوان Entity عمومی و مستقل از Event تثبیت شد؛ Eventها از طریق ID به Person متصل می‌شوند.
- Person می‌تواند اطلاعات هویتی، معرفی، تاریخ‌های تولد/درگذشت در صورت وجود، روابط، منابع و رسانه داشته باشد؛ منطق تقویم و schemaهای تخصصی به لایه‌های بعدی واگذار شد.
- Memory به‌عنوان Entity خصوصی متعلق به کاربر تثبیت شد و از Personal Event جدا باقی می‌ماند.
- Personal Event به‌عنوان Entity خصوصی و مستقل از public Event تثبیت شد و برای birthday، anniversary و custom event استفاده می‌شود.
- Personal Event می‌تواند به Personal Person متصل شود و منبع داده Share Card باشد.
- مالکیت و حریم خصوصی باید در data/application layer enforce شوند و صرفاً به UI وابسته نباشند.
- Reminder/Notification همچنان خارج از MVP باقی می‌ماند.

### Consequence
TASK-01-010، TASK-01-011 و TASK-01-012 تکمیل شدند. نقطه ادامه رسمی پروژه TASK-01-013 — Important Event & Editorial Selection است.

## DEC-011 — 2026-10-02
Status: ACCEPTED
Title: تثبیت مدل تفصیلی Event

### Decision
- Event به‌عنوان Entity مستقل برای محتوای عمومی تعریف شد.
- Personal Event عمداً Entity جدا از Event عمومی باقی می‌ماند تا مالکیت، حریم خصوصی و دسترسی با محتوای عمومی مخلوط نشود.
- Event شامل هویت پایدار، عنوان/متن چندزبانه، تاریخ/بازه تاریخ، category، tags، روابط Entity، منابع، رسانه و metadata نمایشی است.
- Important Event یک Event مستقل نیست؛ یک Event با editorial selection/featured metadata است.
- منطق Calendar Engine، تبدیل تاریخ، recurrence grammar، Source schema، Media schema و Search indexing داخل Event Model پیاده‌سازی نمی‌شوند و در specificationهای تخصصی بعدی/Architecture تعیین خواهند شد.
- محتوای تاریخی APPROVED باید مسیر source/validation داشته باشد.

### Consequence
TASK-01-009 تکمیل شد. نقطه ادامه رسمی پروژه TASK-01-010 — Person Model است.

## DEC-010 — 2026-10-02
Status: ACCEPTED
Title: نهایی‌سازی REQUIREMENTS v1.0

### Decision
- REQUIREMENTS.md به نسخه 1.0.0 ارتقا یافت و Status آن APPROVED شد.
- Product scope، MVP، Acceptance Criteria، Account/Auth و Personal Share Card در سطح نیازمندی محصول نهایی تلقی می‌شوند.
- مدل‌های تفصیلی Event، Person، Memory، Personal Event، Important Event، Timeline، Sources، Media، Historical Date Representation و Search به‌عنوان specificationهای مستقل در ادامه PHASE-01 باقی می‌مانند و به معنی باز بودن Requirements v1.0 نیستند.
- تغییر requirements نهایی‌شده فقط با Decision/Requirement جدید و ثبت‌شده انجام می‌شود و نسخه سند باید در صورت تغییر معنادار به‌روزرسانی شود.

### Consequence
TASK-01-008 تکمیل می‌شود و نقطه ادامه بعدی TASK-01-009 — Event Model است. پس از تکمیل specificationهای باقی‌مانده، PHASE-02 بر اساس Requirements v1.0 و مدل‌های تفصیلی آغاز می‌شود.

## DEC-009 — 2026-10-02
Status: ACCEPTED
Title: تعریف Acceptance Criteria برای MVP

### Decision
- معیارهای پذیرش MVP با شناسه‌های AC-001 تا AC-039 و در گروه‌های Calendar Engine، Today/Calendar، Historical/Event/Timeline، Personal Layer، Search/Localization، Authentication/PWA و Quality/Scope ثبت شدند.
- Acceptance Criterion مرجع مشترک تست و QA است و هر معیار باید با شواهد اجرایی یا تستی قابل PASS/FAIL باشد.
- تکمیل کد یا ظاهر صفحه به‌تنهایی برای پذیرش کافی نیست.
- معیارهای تعریف‌شده باید به‌صورت مستقل از UI قابل ردیابی باشند و در مراحل QA به تست‌های متناظر نگاشت شوند.

### Consequence
TASK-01-007 تکمیل می‌شود و مرحله بعدی، Requirements v1.0 Finalization است. مدل‌های دامنه و معماری بعد از آن بر اساس همین معیارها تثبیت خواهند شد.

# DECISIONS — دفتر تصمیم‌ها

## DEC-008 — 2026-10-02
Status: ACCEPTED
Title: معیارهای حساب کاربری و Personal Share Card

### Decision
- مشاهده تقویم و محتوای عمومی بدون ورود مجاز است.
- ثبت‌نام و ورود حداقلی و بسیار ساده با username/password انجام می‌شود.
- Username با قوانین cross-platform-safe ثبت‌شده در requirements اجرا می‌شود.
- Password حداقل ۸ کاراکتر دارد.
- Forgot Password و Account Deletion در MVP وجود ندارند.
- کاربر پس از ورود تا Logout در Session می‌ماند؛ جزئیات امنیتی و انقضای Session در Architecture تعیین می‌شود.
- Share Card فقط برای Personal Event کاربر تولید می‌شود، نه برای هر روز یا رویداد عمومی.
- Share Card به‌صورت تصویر مستقل ساخته می‌شود و شامل تاریخ شاهنشاهی، روز هفته، میلادی کوچک و اطلاعات رویداد شخصی است.
- تم کارت براساس نوع/انتخاب Personal Event تعیین می‌شود؛ «سایر» طراحی ساده، شیک و متمایز دارد.
- Share از طریق Share Sheet سیستم‌عامل/مرورگر انجام می‌شود.

### Consequence
Public browsing از Authentication مستقل می‌ماند، اما Personal Layer به Account وابسته است. Personal Share Card نیز به‌عنوان یک artifact خصوصی و قابل اشتراک‌گذاری باقی می‌ماند و social graph ایجاد نمی‌کند.

## DEC-007 — 2026-10-02
Status: ACCEPTED
Title: مرزبندی MVP، حساب کاربری و Share Card

### Decision
- MVP ثبت‌نام و ورود ساده با نام کاربری و رمز عبور دارد.
- نام کاربری باید unique و cross-platform-safe باشد؛ قوانین اجرایی دقیق آن در Architecture تثبیت می‌شود.
- Reminder/Notification، social features، ایجاد/پیشنهاد Event عمومی توسط کاربر، Admin/CMS، نقشه/Location، Export/Import، اتصال به تقویم‌های دیگر، مدل درآمدی و Public API فعلاً خارج از Scope هستند.
- Important Events صفحه‌ای مستقل از تقویم دارند و برای هر رویداد مهم، تصویر باکیفیت/شاخص در نظر گرفته می‌شود.
- قابلیت Share فقط برای اشتراک‌گذاری یک روز مشخص با یک Share Card اختصاصی فعال است؛ این قابلیت social system محسوب نمی‌شود.
- معماری می‌تواند برای قابلیت‌های آینده آماده باشد، اما قابلیت‌های Deferred تا زمان تصمیم مستقل نباید فعال یا در UI ارائه شوند.

### Consequence
Account/Authentication به‌عنوان زیرساخت مشترک MVP طراحی می‌شود و Personal Layer روی آن سوار خواهد شد. Share Card نیز به‌صورت یک artifact مستقل از UI روز ساخته می‌شود. هیچ‌کدام باعث ورود social graph یا admin system به MVP نمی‌شوند.

## DEC-006 — 2026-10-02
Status: ACCEPTED
Title: تعریف MVP و ترتیب توسعه end-to-end

### Decision
MVP گاه‌شمار سه ستون اصلی دارد:
1. تقویم شاهنشاهی و Calendar Engine
2. تجربه تاریخ و رویدادهای ایران شامل Today، Historical/Important Events، Timeline و Person
3. لایه شخصی شامل Personal Events، Personal Person و Memories

قابلیت‌های Search، فارسی/انگلیسی، RTL/LTR و PWA نیز از پایه در معماری MVP در نظر گرفته می‌شوند.

### Development order
ترتیب اصلی توسعه:
Product Specification → Scope/Acceptance → Content/Domain Models → Architecture → Core Backend/Calendar Engine → Application Use Cases → Frontend Architecture/Design System → Core Frontend → Visual Polish/PWA → Historical Content/Editorial Dataset → Integration/QA → Release

### Consequence
ظاهر نهایی قبل از تثبیت منطق و معماری ساخته نمی‌شود. هر مرحله باید خروجی قابل بررسی داشته باشد و وضعیت آن در ROADMAP، STATUS و CHANGELOG ثبت شود.

## DEC-005 — 2026-10-02
Status: ACCEPTED
Title: مخاطبان هدف و سطح پیچیدگی محصول

### Decision
مخاطبان اصلی گاه‌شمار به‌صورت مشخص تعریف شدند: ایرانیان، پادشاهی‌خواهان، ملی‌گرایان، علاقه‌مندان به شیر و خورشید، طرفداران شاهزاده رضا پهلوی و طرفداران پادشاهی و خاندان پهلوی. افراد غیرایرانی نیز به‌عنوان مخاطب ثانویه برای آشنایی با فرهنگ و تاریخ ایران در نظر گرفته می‌شوند.

### Product behavior
کاربرد اصلی، یک تقویم ایرانی با رویدادها و مناسبت‌های ملی و تاریخی است. کاربر باید بتواند آزادانه و مانند اپلیکیشن‌های تقویم معمولی از محصول استفاده کند؛ بدون اینکه مجبور به الگوی خاصی از دفعات یا مدت استفاده باشد.

### Consequence
محصول برای یک جامعه مخاطب مشخص بهینه می‌شود و لازم نیست با قابلیت‌های عجیب یا رفتارهای پیچیده، خاص بودن خود را ثابت کند. تفاوت اصلی باید از هویت تقویم، محتوا و کیفیت تجربه حاصل شود.

## DEC-002 — 2026-10-02
Status: ACCEPTED
Title: گاه‌شمار به‌عنوان یک محصول App-like و تاریخی/فرهنگی

### Decision
گاه‌شمار صرفاً یک تقویم نیست؛ محصولی app-like برای ترکیب تقویم، تاریخ ایران، رویدادها، حافظه و داده‌های شخصی است.

### Consequence
معماری، مدل داده و UI باید فراتر از Month Grid طراحی شوند.

## DEC-003 — 2026-10-02
Status: ACCEPTED
Title: صفحه مستقل رویدادهای مهم

### Decision
«رویدادهای مهم» یک بخش مستقل از تقویم خواهد بود و در هر ماه مجموعه‌ای از رویدادهای منتخب را با ارائه بصری و صفحه جزئیات کامل نمایش می‌دهد.

### Consequence
Important Event و Editorial Selection باید در مدل داده و roadmap لحاظ شوند.

## DEC-004 — 2026-10-02
Status: ACCEPTED
Title: Entity مستقل برای Person و Memory

### Decision
افراد و حافظه‌ها به‌صورت Entityهای مستقل طراحی می‌شوند و رویدادها می‌توانند به آنها متصل شوند.

### Consequence
مدل داده از ابتدا باید linked و قابل توسعه باشد.

## DEC-001 — 2026-10-02
Status: ACCEPTED
Title: GitHub به‌عنوان مرجع اصلی پروژه

### Decision
تمام اطلاعات ضروری برای ادامه پروژه باید در repository ثبت شود.

### Reason
کار روی چند اکانت و محیط نباید باعث از دست رفتن context شود.

### Consequence
هر تغییر معنادار باید با شناسه و تاریخ ثبت شود و اسناد مرتبط را به‌روز کند.
