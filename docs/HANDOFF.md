# HANDOFF — راهنمای ادامه پروژه

Project: گاه‌شمار
Repository: ma5ih/gah-shomar
Default branch: main
Checkpoint date: 2026-10-03
Implementation baseline: e3107be19485199f3e725a1bbc40ceb86b72f88b
Current phase: PHASE-09 — Integration & QA
Overall status: IN_PROGRESS

## 1. از کجا شروع کنیم؟

برای ادامه پروژه این ترتیب را بخوانید:
1. `docs/HANDOFF.md`
2. `docs/STATUS.md`
3. `docs/ROADMAP.md`
4. آخرین بخش `docs/CHANGELOG.md`
5. سند مرتبط با TASK جاری

GitHub و همین شاخهٔ `main` مرجع واقعی وضعیت هستند. چت قبلی برای ادامه‌دادن پروژه لازم نیست.

## 2. نقطه‌ای که الان واقعاً در آن هستیم

هستهٔ محصول و معماری اصلی ساخته شده‌اند:
- Calendar Engine و قراردادهای تاریخ
- لایهٔ Domain/Application/Data/Content
- Today، Calendar، Day Detail
- Events / Important Events / Event Detail
- Timeline / People
- Search
- Authentication / Personal Events / Personal Person / Memories
- Recurrence
- Personal Share Card
- Persian + English و RTL/LTR
- fallback عمومی هنگام ازکارافتادن personal storage
- PWA baseline شامل manifest، service worker، offline route و iconها
- browser smoke coverage در CI

اما Release هنوز انجام نشده است. Phase-09 به‌طور رسمی باز است و Phase-06/07/08 نیز gapهای مشخص دارند.

## 3. وضعیت Phaseها

- PHASE-00 Documentation — DONE
- PHASE-01 Specification — DONE
- PHASE-02 Architecture — DONE
- PHASE-03 Core Backend / Domain / Calendar Engine — DONE
- PHASE-04 Application Backend / Use Cases — DONE
- PHASE-05 Frontend Architecture & Design System — DONE
- PHASE-06 Core Frontend Product Experience — IN_PROGRESS
- PHASE-07 Visual Polish, Time/Season & App-like Experience — IN_PROGRESS
- PHASE-08 Content, Editorial & Historical Dataset — IN_PROGRESS
- PHASE-09 Integration & Full QA — IN_PROGRESS
- PHASE-10 Release & Handoff — TODO

تعریف مهم: DONE بودن Phaseهای 03 تا 05 به معنای تمام‌شدن scope آن فازهاست؛ تغییرات بعدی همچنان باید در Phase-09 از نظر regression و acceptance دوباره اعتبارسنجی شوند.

## 4. آخرین تغییرات واقعی قبل از این checkpoint

### Content / Editorial
- ACT-142 تا ACT-151: public historical event seed عمداً به آرایهٔ خالی برگشت.
- روابط event با people/periods نیز از seed ساختاری حذف شد.
- تست‌های application و resilience با نبود event عمومی هماهنگ شدند.
- صفحهٔ Important Events در نبود داده، حالت editorial-pending نشان می‌دهد.
- فرآیند بررسی و تأیید ماه‌به‌ماه در `docs/EDITORIAL-EVENT-REVIEW.md` ثبت شده است.
- هیچ event تاریخی جدیدی نباید بدون تأیید صریح وارد public seed شود.

### PWA / Responsive / Browser QA
- PWA baseline و iconهای استاندارد اضافه شده‌اند.
- Playwright برای desktop/tablet/mobile Chromium تعریف شده است.
- پروفایل tablet به Galaxy Tab S4 و mobile به Pixel 5 تنظیم شده است.
- GitHub Actions به Node 24 و actions/checkout@v5 و setup-node@v7 منتقل شده است.
- selectorهای browser smoke دقیق‌تر شده‌اند.
- تست English اکنون lang و dir واقعی document را assert می‌کند.

## 5. وضعیت محتوای تاریخی

در `src/content/seed.ts`:
- published historical events = 0
- public people = 5
- historical periods = 2
- reference sources = 6

People/Periods/Sources در این مرحله فقط محتوای ساختاری و source registry هستند و نباید به‌عنوان تأیید event تلقی شوند.

## 6. قرارداد قطعی Important Events

این requirement جدید نیست؛ قبلاً در مدل محصول تصویب شده و باید حفظ شود:

صفحهٔ «رویدادهای خاص» باید:
- رویدادهای مهم همان ماه را نمایش دهد.
- برای هر event تصویر شاخص داشته باشد.
- card قابل کلیک باشد.
- به صفحهٔ مستقل Event Detail برود.
- در Detail روایت/توضیح کامل‌تر، تاریخ، منابع، افراد/دوره‌های مرتبط و در صورت وجود تصاویر بیشتر را نمایش دهد.

وضعیت فعلی:
- Important Events listing و empty state پیاده شده‌اند.
- Event cards قابل کلیک هستند.
- Event Detail فعلی narrative/date/people/related/sources را دارد.
- لایهٔ تصویر/گالری برای event هنوز کامل نشده و باید همراه با dataset/media work تکمیل شود.
- چون seed فعلاً خالی است، هیچ event عمومی منتشر نمی‌شود.

## 7. مهم‌ترین gap فعلی QA

آخرین workflow تعریف‌شده شامل این مراحل است:
migration → typecheck → unit/integration tests → production build → Chromium install → browser smoke.

اما در `tests/e2e/public-smoke.spec.ts` هنوز assertionهایی وجود دارد که event قدیمی «صدور فرمان مشروطیت» و route مربوط به آن را انتظار دارند، در حالی که public event seed عمداً خالی شده است.

نتیجه:
- current HEAD را نباید green/QA-passed اعلام کرد.
- اول باید browser smoke با سیاست seed خالی همگام شود.
- بعد CI کامل روی HEAD فعلی دوباره بررسی شود.
- سپس browser/runtime acceptance واقعی اجرا و ثبت شود.

آخرین CI baseline قطعی:
- ACT-133 / run #102: PASS برای migration، typecheck، tests و production build.

آخرین CI ثبت‌شده برای HEAD فعلی در snapshot پروژه:
- run #134
- SHA: e3107be19485199f3e725a1bbc40ceb86b72f88b
- status: IN_PROGRESS
بنابراین تا مشاهدهٔ نتیجهٔ نهایی، PASS رسمی ثبت نشود.

## 8. مسیر ادامه، به ترتیب

### گام 1 — QA test/data alignment
browser smoke و هر تستی که هنوز event demo/approved قدیمی را انتظار دارد با seed خالی و editorial policy همگام شود.

### گام 2 — CI revalidation
migration، typecheck، unit/integration، build و E2E روی HEAD جدید اجرا و نتیجهٔ واقعی ثبت شود.

### گام 3 — Runtime/browser acceptance
حداقل این سناریوها بررسی شوند:
- Today
- Calendar
- Day Detail
- Important Events
- Event Detail
- Timeline
- People
- Search
- Login/Register
- Personal Event / Memory / Share Card
- fa/RTL و en/LTR
- desktop / tablet / mobile
- touch/swipe
- no unexpected horizontal overflow
- loading/error/empty states
- PWA manifest/service worker/offline baseline

### گام 4 — PHASE-06 closure
پس از acceptance واقعی، gapهای Core Frontend بسته و Phase-06 فقط در صورت evidence به DONE منتقل شود.

### گام 5 — PHASE-07 visual polish
hierarchy، spacing، typography، component consistency، density، motion، time-of-day، seasonal states و install UX تکمیل شوند.

### گام 6 — PHASE-08 editorial content
بررسی ماه‌به‌ماه را از اولین ماه تقویمی در ترتیب محصول شروع کنید:
- candidate events
- date/title/summary/type
- source verification
- uncertainty/dispute flags
- presentation to user
- explicit approval
- only then seed insertion
- image/hero/media metadata
- content + relationship validation

تا قبل از تأیید، هیچ event وارد public seed نشود.

### گام 7 — PHASE-09 final QA
content QA، accessibility، performance، PWA، visual consistency و release blocker review.

### گام 8 — PHASE-10 release
production configuration، deployment validation، production PWA check، final docs، release notes، versioning و handoff.

## 9. وضعیت شناسه‌های ACT

در تاریخچهٔ commitها دو collision تاریخی ثبت شده است:
- ACT-150 یک‌بار برای browser/mobile profile و یک‌بار برای editorial event hold استفاده شده.
- ACT-151 یک‌بار برای responsive/PWA browser QA و یک‌بار برای resilience alignment استفاده شده.
- ACT-155 در commit history فعلی پیدا نشد.

این collisionها immutable هستند و نباید با بازنویسی تاریخچهٔ Git اصلاح شوند.

قاعدهٔ جدید:
- از checkpoint بعدی فقط شناسه‌های جدید استفاده شود.
- شناسهٔ بعدی: ACT-157
- هیچ ACT قدیمی دوباره استفاده نشود.
- برای ارجاع به collisionهای قدیمی، از توضیح توصیفی و SHA commit استفاده شود.

## 10. قراردادهای مهمی که نباید شکسته شوند

- سال شاهنشاهی در UI اصلی است؛ Solar Hijri ordinary year نباید به‌عنوان سال اصلی نمایش داده شود.
- Gregorian فرعی است.
- Calendar Engine تنها source of truth برای منطق تقویم است.
- unsupported historical conversion نباید حدس زده شود.
- public و personal data جدا هستند.
- personal storage failure نباید public Today/Calendar/Day/Search را از کار بیندازد.
- public event بدون source/validation مناسب منتشر نشود.
- event تاریخی بدون approval صریح publish نشود.
- content تاریخی در UI hard-code نشود.
- هر تغییر معنادار ACT ID + changelog + status/roadmap sync + validation لازم دارد.
- CI result بدون مشاهدهٔ اجرای واقعی PASS اعلام نشود.

## 11. آخرین نقطهٔ شروع عملی

اولین کار بعد از این checkpoint:
**TASK-09-019 / browser-smoke alignment با editorial-empty dataset، سپس CI revalidation.**

بعد از سبزشدن CI و ثبت acceptance واقعی، تازه به visual polish و سپس editorial month-by-month content بروید.

## 12. اصل انتقال‌پذیری

هیچ‌کس نباید برای فهم وضعیت پروژه به چت قبلی وابسته باشد. اگر این فایل، STATUS، ROADMAP و CHANGELOG با هم سازگار باشند، پروژه باید از همین commit قابل ادامه باشد.


## 13. Documentation checkpoint note

ACT-158 performed the main reconciliation. ACT-159 finalizes the checkpoint after all documentation synchronization commits. The implementation baseline remains `e3107be19485199f3e725a1bbc40ceb86b72f88b`; later commits in this checkpoint are documentation-only unless explicitly listed otherwise.
