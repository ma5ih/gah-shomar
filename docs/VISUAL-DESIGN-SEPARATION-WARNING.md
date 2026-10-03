# VISUAL DESIGN SEPARATION WARNING

**Status: APPROVED**
**Established: ACT-205 — 2026-10-04**

> ⚠️ **هشدار دائمی پروژه:** پروژه یک Core مشترک دارد و دو Visual Theme مستقل. از TASK-07-001 به بعد، مسیر طراحی هر Theme کاملاً جداست. هیچ طراحی یا تصمیم بصری خارج از brief ثبت‌شده همان Theme مجاز نیست.

## 1. نقطه جداسازی

جداسازی طراحی از **TASK-07-001 — Final Visual Hierarchy** شروع می‌شود.

پوشه‌های Theme در ACT-205 فقط مرزبندی و scaffolding هستند؛ طراحی اصلی هنوز از TASK-07-001 آغاز می‌شود.

## 2. ساختار

```
src/
├── domain/                         ← SHARED
├── application/                   ← SHARED
├── data/                          ← SHARED
├── content/                       ← SHARED
└── frontend/
    └── themes/
        ├── flat-geometric/        ← THEME A
        └── modern-flat-vector/    ← THEME B
```

## 3. Core مشترک

این موارد بین هر دو Theme یکی هستند و نباید کپی یا fork شوند:

- Calendar Engine و تمام منطق تقویم
- Domain models و business rules
- Data / repositories / persistence
- Application / use cases
- Authentication / Session / Authorization
- Search semantics
- Localization contracts
- Public / Personal separation
- Content validation / editorial rules
- Routing و product behavior
- server composition و API contracts
- domain/application/integration/business tests

## 4. Theme A — Flat Geometric

**مسیر:** `src/frontend/themes/flat-geometric/`

**Visual Brief — SOURCE OF TRUTH:**

> Design the app with a modern flat geometric illustration style. Use natural, recognizable shapes simplified into clean angular forms, similar to contemporary landscape/vector illustrations. Use flat solid colors, sharp edges, layered shapes, and simple straight lines, with minimal detail and no gradients or realistic textures. The overall design should feel clean, friendly, modern, and slightly playful, while remaining natural and visually balanced.

**قانون:** تمام طراحی Theme A باید در محدوده همین brief بماند. اضافه کردن زبان بصری متناقض با آن، حتی اگر از نظر زیبایی مناسب باشد، مجاز نیست.

## 5. Theme B — Modern Flat Vector Illustration

**مسیر:** `src/frontend/themes/modern-flat-vector/`

**Visual Brief — SOURCE OF TRUTH:**

> Use a Modern Flat Vector Illustration style throughout the app. Use clean, simple 2D shapes, flat solid colors, minimal visual detail, and a polished modern aesthetic. Illustrations should feel friendly, approachable, and slightly playful, with smooth simplified forms and clear visual hierarchy. Avoid realistic rendering, gradients, heavy textures, 3D effects, and excessive geometric or polygonal shapes. The overall design should feel lightweight, clean, contemporary, and suitable for a modern digital product.

**قانون:** تمام طراحی Theme B باید در محدوده همین brief بماند. اضافه کردن زبان بصری متناقض با آن، حتی اگر از نظر زیبایی مناسب باشد، مجاز نیست.

## 6. جداسازی بصری

Theme A و Theme B می‌توانند مستقلانه این موارد را تعیین کنند:

- visual hierarchy
- color tokens
- typography choices
- spacing presentation
- surfaces
- cards
- borders / radius
- icons
- illustrations
- decorative elements
- visual density
- motion styling
- component skin
- hero composition
- backgrounds
- visual time/season states

اما این تصمیم‌ها باید با **brief همان Theme** سازگار باشند.

## 7. ممنوعیت‌های معماری

- کپی کردن Core برای یک Theme
- business logic داخل Theme
- calendar logic داخل Theme
- repository/database access مستقیم از Theme
- تغییر data contract برای یک Theme
- وابستگی Theme A به Theme B
- وابستگی Theme B به Theme A
- import کردن visual tokens/styles/assets یک Theme در Theme دیگر
- ساختن یک Theme به‌صورت fork کامل محصول

## 8. قانون تشخیص تغییر

اگر تغییر **purely visual** است → فقط در Theme مربوطه.

اگر تغییر **semantic/product behavior** است → در Core/shared layer.

اگر abstraction بین هر دو Theme لازم است → فقط abstraction semantic و بدون وابستگی به ظاهر وارد shared layer شود.

## 9. تست

برای هر دو Theme باید این اصل برقرار باشد:

**same data + same state + different Theme = different appearance, same product behavior**

## 10. مرجع قطعی

این سند، همراه با `docs/DECISIONS.md` (DEC-024)، `docs/ARCHITECTURE-BOUNDARIES.md` و TASK-07-001، مرجع جداسازی Themeها است.

**هیچ تصمیم طراحی نباید خارج از دو Visual Brief بالا گرفته شود.**

## 11. وضعیت جاری

- ACT-205: boundary/scaffolding — DONE
- ACT-207: Theme A visual execution — DONE
- ACT-208: Theme A validation / TASK-07-001 closure — DONE
- ACT-209: documentation convergence — DONE
- Theme A اکنون baseline بصری اجرایی دارد.
- Theme B همچنان فقط در سطح boundary/scaffolding است و طراحی اصلی آن شروع نشده است.
- گام بعدی بصری: TASK-07-002 — Spacing/Margin Consistency — فقط برای Theme A در scope فعلی.