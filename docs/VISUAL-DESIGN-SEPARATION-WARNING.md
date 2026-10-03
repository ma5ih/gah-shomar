# VISUAL DESIGN SEPARATION WARNING

**Status: APPROVED**  
**Established: ACT-205 — 2026-10-04**

> ⚠️ **هشدار دائمی پروژه:** از نقطه شروع طراحی اصلی، دو مسیر بصری مستقل وجود دارند؛ اما پروژه دو Core ندارد. فقط Presentation / Visual System جدا می‌شود.

## 1. نقطه جداسازی دقیق

جداسازی رسمی از:

**TASK-07-001 — Final Visual Hierarchy**

شروع می‌شود.

قبل از این نقطه، تمام product logic و foundation مشترک است. ایجاد پوشه‌های Theme در ACT-205 فقط scaffolding و ثبت مرز معماری است و به معنای شروع طراحی نهایی نیست.

## 2. ساختار رسمی

```text
gah-shomar
│
├── src/
│   ├── domain/                         ← SHARED
│   ├── application/                   ← SHARED
│   ├── data/                          ← SHARED
│   ├── content/                       ← SHARED
│   │
│   └── frontend/
│       └── themes/
│           ├── flat-geometric/        ← THEME A
│           └── modern-flat-vector/    ← THEME B
│
├── app/                               ← shared product routes / behavior
│
└── docs/
    └── VISUAL-DESIGN-SEPARATION-WARNING.md
```

## 3. چه چیزهایی حتماً مشترک می‌مانند؟

این موارد فقط یک نسخه دارند و بین هر دو Theme مشترک‌اند:

- Calendar Engine و تمام منطق تقویم
- Imperial Date و Gregorian/Imperial conversion
- leap-year، date arithmetic، weekday، Today، time-of-day و season logic
- Domain models و invariantها
- Event / Person / Period / Memory / Personal Event
- Application use cases
- Repository contracts و persistence
- Authentication و Session
- Authorization و ownership rules
- Search behavior و application contracts
- Localization contracts و locale/direction state
- Public/Personal data separation
- Content validation و editorial policy
- Routing و semantic product behavior
- API / server composition boundaries
- تست‌های domain، application، integration و business behavior

**هیچ‌کدام از موارد بالا نباید برای Theme A یا Theme B کپی شوند.**

## 4. چه چیزهایی جدا می‌شوند؟

هر Theme مالک presentation خودش است، از جمله:

- visual hierarchy
- color tokens
- typography choices
- spacing presentation
- surface treatment
- card treatment
- border/radius choices
- icon treatment
- illustration language
- decorative geometry
- visual density
- motion styling
- component skin
- hero composition
- background treatment
- visual states for morning/noon/sunset/night
- seasonal visual variations
- other purely visual composition decisions

## 5. Theme A — Flat Geometric / Natural Angular Illustration

این مسیر باید بر اساس brief زیر طراحی شود:

> Modern flat geometric illustration style. Natural, recognizable shapes simplified into clean angular forms, contemporary landscape/vector feel, flat solid colors, sharp edges, layered shapes, simple straight lines, minimal detail, no gradients, no realistic textures. Clean, friendly, modern, slightly playful, natural and visually balanced.

مسیر:

`src/frontend/themes/flat-geometric/`

## 6. Theme B — Modern Flat Vector Illustration

این مسیر با هویت مستقل خود و بر پایه:

**Modern Flat Vector Illustration**

طراحی می‌شود.

مسیر:

`src/frontend/themes/modern-flat-vector/`

جزئیات بصری Theme B نباید به Theme A نشت کند و برعکس.

## 7. قوانین سخت جداسازی

### ممنوع

- کپی کردن Calendar Engine برای یک Theme
- کپی کردن Application use caseها
- کپی کردن repositoryها
- ایجاد business rule داخل Theme
- گذاشتن conversion/leap/calendar logic داخل component بصری
- import مستقیم database/repository از Theme
- ایجاد مدل داده موازی فقط برای یک Theme
- تغییر data contract برای زیباتر شدن یک Theme
- وابسته کردن Theme A به Theme B
- وابسته کردن Theme B به Theme A
- import کردن فایل‌های styling یا visual token یک Theme داخل Theme دیگر
- ساختن یک Theme به‌عنوان fork کامل UI و نگهداری Core دوم

### مجاز

- import از shared semantic contracts
- استفاده مشترک از domain/application DTOها
- داشتن componentهای visual مخصوص همان Theme
- داشتن tokenهای کاملاً جدا
- داشتن illustration/asset pipeline جدا
- داشتن motion و transitionهای جدا
- داشتن visual variants مخصوص هر Theme

## 8. قانون تغییرات آینده

هر تغییر بصری جدید باید ابتدا سؤال زیر را پاسخ دهد:

**«این تغییر semantic/product behavior است یا purely visual؟»**

اگر purely visual است:
- فقط در Theme مربوط به آن قرار بگیرد.

اگر semantic/product behavior است:
- در Core/shared layer حل شود تا هر دو Theme همان رفتار را دریافت کنند.

اگر یک abstraction واقعاً بین هر دو Theme مشترک است:
- فقط abstraction semantic و بدون وابستگی به ظاهر به shared layer منتقل شود.

## 9. قانون فعال‌سازی Theme

فعال کردن Theme A یا Theme B نباید باعث تغییر در:

- تاریخ فعلی
- محاسبات Calendar Engine
- داده رویدادها
- داده شخصی
- authentication
- session
- search semantics
- persistence
- authorization
- business rules

شود.

فقط presentation باید تغییر کند.

## 10. تست و QA

تست‌های Core بین هر دو Theme مشترک‌اند.

تست‌های مخصوص visual behavior می‌توانند جدا باشند.

در QA باید ثابت شود:

**same data + same state + different Theme = different appearance, same product behavior**

## 11. مرجع قطعی

این سند همراه با:

- `docs/DECISIONS.md` → DEC-024
- `docs/ARCHITECTURE-BOUNDARIES.md`
- `docs/ROADMAP.md` → TASK-07-001

مرجع رسمی جداسازی Themeها است.

## 12. وضعیت فعلی

ACT-205 فقط:

- مرز را ثبت کرده،
- پوشه‌ها را ساخته،
- قرارداد را مستند کرده است.

**طراحی اصلی هنوز شروع نشده است.**

نقطه شروع طراحی:

**TASK-07-001 — Final Visual Hierarchy**
