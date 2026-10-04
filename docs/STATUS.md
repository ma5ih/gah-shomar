# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-04 — ACT-251
Current documentation checkpoint: ACT-251 on main
Current implementation HEAD: a6a1956ef9446fc37b6cd339d874b4cfd4ebc768
Latest completed Theme A validation before this redesign: GitHub Actions #37161733754 — PASS
Current visual implementation: ACT-251 major Theme A / AppShell redesign, awaiting fresh CI completion and final human visual signoff
Current app-like state: viewport-locked AppShell with hidden browser scroll and controlled internal content scrolling
Primary workstream: PHASE-10 — Release & Handoff
QA gate: PHASE-09 — Integration & Full QA
Overall status: IN_PROGRESS
Next fresh ACT ID: ACT-252

## شمارش رسمی ریزتسک‌ها

- کل: 204
- DONE: 193
- IN_PROGRESS: 4
- TODO: 6
- DEFERRED: 1
- BLOCKED: 0
- DEPRECATED: 0

این شمارش canonical مستقیماً از ledger فعلی ROADMAP خوانده شده است.

## آخرین اقدام

### ACT-251 — Major UI / Theme A redesign — IN_PROGRESS
- AppShell از حالت صفحه‌محور وب به viewport-locked، mobile-first و app-like تبدیل شد.
- اسکرول مرورگر حذف شد؛ ناحیه محتوای داخلی AppShell در صورت نیاز به‌صورت کنترل‌شده scroll می‌شود و scrollbar بصری ندارد.
- Today از حالت شمارنده‌محور خارج شد و روی تاریخ اصلی، ساعت، مناسبت‌های امروز و رویدادهای شخصی امروز تمرکز کرد.
- شمارنده تعداد مناسبت‌های عمومی و تعداد داده‌های شخصی از Today حذف شدند.
- ساعت محلی به‌صورت زنده و هماهنگ با timezone runtime نمایش داده می‌شود.
- نمایش سال شاهنشاهی بدون grouping اصلاح شد؛ ۲۵۸۵ به‌صورت «۲۵۸۵» نمایش داده می‌شود.
- نمایش ناخواسته سال هجری شمسی در formatter Gregorian اصلاح شد؛ formatter اکنون صریحاً از calendar=gregory استفاده می‌کند.
- Vazirmatn فونت اصلی UI شد.
- Theme A از نو روی brief مصوب Flat Geometric اجرا شد: رنگ‌های تخت، فرم‌های زاویه‌ای/لایه‌ای، landscape/vector shapes، بدون gradient و بدون glassmorphism.
- mobile bottom navigation با آیکن‌های SVG بازطراحی شد.
- کنترل‌های تقویم و عناصر فرم با همین visual language هماهنگ شدند.
- حرکت‌ها، active/hover/press states و reduced-motion handling در shared UI foundation بازسازی شدند.
- CI برای commitهای این اقدام اجرا شده و نتیجه نهایی latest head هنوز در حال تکمیل است.
- human visual/product signoff همچنان release gate است و با این اقدام به‌صورت خودکار PASS تلقی نمی‌شود.

## Visual Theme state

- Theme A: src/frontend/themes/flat-geometric/ — active implementation scope.
- Theme B: src/frontend/themes/modern-flat-vector/ — untouched / outside current scope.
- Visual source of truth remains docs/VISUAL-DESIGN-SEPARATION-WARNING.md.
- ACT-251 is a substantial implementation refresh, not a new Theme B or a Core fork.

## Release gates

Remaining release-critical gates are unchanged:
- explicit editorial approval/public historical event seed
- final human visual signoff
- final human product signoff
- real production/staging deployment validation
- real PWA production validation
- final release version/tag after those gates close

## مسیر بعدی قطعی

اول نتیجه CI روی latest head بررسی می‌شود. پس از آن human visual/product signoff و release gates ادامه پیدا می‌کنند. Theme B همچنان دست‌نخورده می‌ماند.