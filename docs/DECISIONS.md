# DECISIONS — دفتر تصمیم‌ها

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
