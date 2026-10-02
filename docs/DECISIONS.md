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
