# ARCHITECTURE & IMPLEMENTATION AUDIT — 2026-10-04

Status: COMPLETE
Audit ID: ACT-186
Repository: ma5ih/gah-shomar
Branch: main

## هدف

این audit برای بررسی مستقل «آیا implementation واقعی با architecture/specification/roadmap هماهنگ است؟» انجام شد.

مبنای بررسی:
- GitHub tree و فایل‌های واقعی branch `main`
- commit history و compare بین implementation baseline و HEAD
- CI workflow و نتیجه واقعی GitHub Actions
- Calendar Engine و تست‌های regression
- Application/Data/Domain/Presentation boundaries
- E2E / integration / unit test coverage
- Product/Editorial documentation

## نتیجه کلی

پروژه از نظر مسیر معماری **درست جلو رفته است** و از یک prototype ساده عبور کرده و اکنون دارای:
- Calendar Engine واقعی و deterministic
- Domain/Application/Data/Content separation
- PostgreSQL/Drizzle persistence
- Authentication/session
- Personal Events / Personal People / Memories
- Recurrence
- Search
- Today / Calendar / Day Detail / Timeline / People / Event routes
- Persian/English + RTL/LTR
- PWA baseline
- Playwright browser smoke
- CI واقعی با migration + typecheck + unit/integration + build + browser smoke

اما پروژه **هنوز از نظر implementation contract و product acceptance کاملاً clean نیست** و PHASE-06/07/08/09 باید باز بمانند.

## Validation facts

### CI
آخرین اجرای GitHub Actions:
- workflow: CI
- run: #218
- commit: `2f8bc94aa64d2cb6cf5efb42042ba418b04ad8be`
- conclusion: SUCCESS
- job: quality / SUCCESS

Pipeline فعلی شامل:
- PostgreSQL service
- migration
- typecheck
- unit + integration tests
- production build
- Chromium install
- Playwright E2E smoke

### Implementation baseline
Compare نشان می‌دهد:
- `e3107be...` تا `d531e0a...`: 65 commit جلوتر
- `d531e0a...` تا HEAD: 19 commit جلوتر
- تمام 19 commit بعد از `d531e0a...` documentation-only هستند.

بنابراین implementation code baseline فعلی:
`d531e0a1bb3e4cbf287ad2ce25c72bf0cfa4d9e3`

HEAD فعلی:
`2f8bc94aa64d2cb6cf5efb42042ba418b04ad8be`

## بخش‌هایی که درست انجام شده‌اند

### 1. Calendar Engine
- break-point family به‌درستی جایگزین چرخهٔ ثابت ۳۳ ساله شده.
- regression matrix مدرن ۲۵۷۱ تا ۲۶۲۹ وجود دارد.
- گذار ۲۶۲۰ عادی → ۲۶۲۱ کبیسه تست می‌شود.
- conversion Gregorian ↔ Imperial مستقل از timezone است.
- Today/timezone resolution در application layer انجام می‌شود.
- historical conversion برای Gregorian و Solar Hijri exact است و برای converterهای ناموجود حدس زده نمی‌شود.
- arithmetic/weekday/time-of-day/season test coverage وجود دارد.

### 2. Data separation
public و personal repository/model جدا هستند.
Personal queries بر اساس ownerUserId محدود می‌شوند.
Personal Person ownership نیز application-level regression دارد.

### 3. Graceful degradation
خرابی personal storage نباید public Today/Calendar/Day/Search را از کار بیندازد و این رفتار regression شده است.

### 4. Editorial safety
`seedEvents = []` در checkpoint فعلی تصمیم عمدی است، نه bug.
این باعث نشده دادهٔ تاریخی تأییدنشده برای پر کردن UI وارد محصول شود.

### 5. CI/QA
CI دیگر فقط typecheck/build نیست؛ migration و browser smoke هم دارد و آخرین run واقعی SUCCESS است.

## یافته‌های قابل اصلاح

### HIGH-01 — Presentation boundary violation — IMPLEMENTATION FIXED, CI PENDING
Architecture می‌گوید Presentation باید از Application contracts استفاده کند، اما implementation فعلی در چند نقطه مستقیماً به Domain/Data متصل است:

- `app/calendar/page.tsx` → import از Calendar Domain (`monthName`)
- `src/frontend/components/event-card.tsx` → مستقیم `imperialToGregorian`
- `app/events/[slug]/page.tsx` → مستقیم `publicRepository`
- `app/people/[slug]/page.tsx` → مستقیم `publicRepository`
- `app/timeline/page.tsx` → مستقیم `publicRepository`

این با ARCHITECTURE-BOUNDARIES و import direction مصوب یکسان نیست.

**نتیجه:** معماری اسنادی درست است، implementation باید این dependency leaks را ببندد.

### HIGH-02 — Optional event slug مقابل routing contract — FIXED
`Event.slug` در domain optional است، اما:
- EventCard در نبود slug به ID لینک می‌دهد.
- Event Detail فقط `getEventBySlug()` را استفاده می‌کند.
- Search نیز برای event به slug متکی است.

پس Event approved بدون slug می‌تواند لینک 404 بسازد.

**راه اصلاح:** slug را برای published Event اجباری کنیم یا retrieval route را با ID fallback پشتیبانی کنیم. انتخاب نهایی باید قبل از publication dataset تثبیت شود.

### HIGH-03 — Period/day containment bug — FIXED + REGRESSION
در `getDayQuery()` period فقط با year-range بررسی می‌شود:
- startDate با ماه/روز مقایسه نمی‌شود.
- بنابراین periodی که در میانهٔ یک سال شروع می‌شود، ممکن است از ابتدای همان سال برای day query نمایش داده شود.

**راه اصلاح:** comparison کامل ImperialDate برای start/end.

### MEDIUM-01 — Personal Person قابل unlink نیست — OPEN
در update:
- فرم خالی `personalPersonId` را به `undefined` تبدیل می‌کند.
- repository/application، `undefined` را به معنای «بدون تغییر» تفسیر می‌کنند.

نتیجه: بعد از link کردن یک Personal Person، کاربر نمی‌تواند آن را با انتخاب «—» حذف کند.

### MEDIUM-02 — Recurrence قابل خاموش‌کردن نیست — OPEN
همان الگوی patch semantics برای recurrence وجود دارد:
- unchecked → undefined
- undefined → preserve existing

در نتیجه recurrence موجود را نمی‌توان از UI خاموش کرد.

### MEDIUM-03 — Notes/optional fields نیز ممکن است پاک نشوند — OPEN
برای notes و برخی optional fields همان تفاوت «undefined = preserve» و «empty = clear» وجود دارد.
Update command باید clear semantics صریح داشته باشد.

### MEDIUM-04 — Public search status filtering ناقص — FIXED IN ACT-187
`publicRepository.search()` events را از `events()` فیلتر می‌کند، اما people/periods را مستقیماً از seed می‌گیرد.
فعلاً همه APPROVED هستند، ولی اگر record غیرApproved وارد seed شود، search می‌تواند آن را expose کند.

### MEDIUM-05 — Ranged Event support ناقص در date queries — FIXED IN ACT-187
`dateMatches()` فقط start date رویداد را بررسی می‌کند.
EventDate دارای start/end است، اما event range در Day/Month query به‌طور کامل پوشش داده نمی‌شود.

### MEDIUM-06 — Timeline implementation فعلاً period-centric است
`getTimeline()` فقط periods را برمی‌گرداند.
Event nodes/chronology هنوز عملاً وارد Timeline query نشده‌اند.
با seedEvents خالی این gap طبیعی است، ولی برای محصول نهایی باید با Timeline Model دوباره بررسی شود.

### MEDIUM-07 — Share Card theme در renderer کامل اعمال نشده — OPEN
DTO theme دارد، اما Canvas renderer تقریباً یک visual treatment ثابت استفاده می‌کند.
Requirement برای birthday و سایر event types theme متمایز تعریف کرده است.

### MEDIUM-08 — E2E coverage هنوز acceptance کامل نیست
CI سبز است، اما coverage فعلی عمدتاً smoke است.
موارد زیر هنوز acceptance کامل ندارند:
- full English personal flow
- recurrence browser behavior
- memory browser create/update/delete
- share-card browser/device behavior
- full swipe behavior
- accessibility audit
- manual visual acceptance

### MEDIUM-09 — Lint gate وجود ندارد — OPEN
`package.json` script به نام `lint` دارد، اما repository:
- dependency صریح ESLint ندارد
- config ESLint ندارد
- CI lint اجرا نمی‌کند

پس lint در حال حاضر quality gate واقعی نیست.

### MEDIUM-10 — Lockfile وجود ندارد — OPEN
CI از `npm install` استفاده می‌کند و lockfile در repository وجود ندارد.
این برای prototype قابل قبول است، اما برای reproducible production build باید قبل از release اصلاح شود.

### LOW-01 — Session lastSeenAt update نشده
schema فیلد `lastSeenAt` دارد ولی validateSessionToken آن را refresh نمی‌کند.
فعلاً security expiry بر مبنای آن فعال نشده، اما architecture field بدون lifecycle implementation است.

### LOW-02 — assertOwnership error type عمومی است
`assertOwnership()` در visibility contract به‌جای AuthorizationError یک Error عمومی throw می‌کند.
فعلاً این helper مسیر اصلی authorization نیست، ولی بهتر است با error strategy هماهنگ شود.

### LOW-03 — Memory relationship ownership validation
Memory می‌تواند IDهای person/event/personalEvent بگیرد، ولی application validation فعلی برای این relationshipها owner/reference validity را enforce نمی‌کند.
در UI فعلی این فیلدها عملاً از فرم user input نمی‌گیرند، اما قبل از فعال‌کردن linkage باید validate شوند.

## چیزهایی که BUG محسوب نمی‌شوند

### Editorial-empty dataset
`seedEvents = []` عمداً تصمیم شده و تست‌ها نیز همین policy را enforce می‌کنند.

### Historical converter limitation
پشتیبانی‌نشدن Julian/Qamari/BCE/eraهای خاص فعلاً intentional است و با DEC-020 سازگار است.

### PHASE-07 polish not complete
تعدادی visual state ابتدایی در CSS وجود دارد، اما acceptance کامل polish هنوز TODO است؛ بنابراین نگه‌داشتن PHASE-07 در IN_PROGRESS درست است.

## ارزیابی مسیر پروژه

**بله، مسیر اصلی درست بوده است.**
به‌خصوص:
1. architecture قبل از frontend build تعریف شد.
2. Calendar Engine قبل از product UI تثبیت شد.
3. leap-year blocker به‌درستی اصلاح شد و تست regression گرفت.
4. backend/application/personal layer قبل از polish جلو رفت.
5. CI و E2E قبل از release وارد مسیر شدند.
6. editorial content عمداً متوقف نگه داشته شد تا دادهٔ تأییدنشده وارد محصول نشود.

اما از این checkpoint به بعد نباید صرفاً feature اضافه کنیم. اول باید HIGH findings و quality gaps بسته شوند، بعد runtime acceptance، سپس visual polish و بعد editorial dataset.

## اولویت پیشنهادی اصلاح

1. HIGH-01 — بستن dependency leaks
2. HIGH-02 — تثبیت slug contract
3. HIGH-03 — اصلاح period date containment
4. MEDIUM-01/02/03 — اصلاح update clear semantics
5. MEDIUM-04/05 — سخت‌کردن public search و ranged events
6. MEDIUM-07 — تکمیل Share Card themes
7. MEDIUM-09 — lint gate
8. MEDIUM-10 — lockfile
9. سپس runtime/browser acceptance
10. سپس PHASE-07 polish
11. سپس PHASE-08 editorial monthly dataset
12. سپس final PHASE-09/10 release QA

## Checkpoint after ACT-187 / ACT-188

- HIGH-01 implementation refactor is on HEAD and CI #246 PASS.
- HIGH-02 and HIGH-03 are implemented; CI #244 passed after HIGH-02/HIGH-03 regression fixes.
- Medium/Low findings remain intentionally open for TASK-09-019.

## Final audit verdict

- Architecture direction: **SOUND**
- Calendar Engine: **SOUND for current supported contract; regression validated**
- Backend/Application foundation: **GOOD, with update/edge-case gaps**
- Frontend architecture: **IMPLEMENTED but has boundary violations**
- Product frontend: **SUBSTANTIALLY BUILT, not acceptance-complete**
- Editorial content: **SAFE but intentionally incomplete**
- QA/CI: **GREEN automated baseline**
- Release readiness: **NOT YET**

این audit به‌معنای DONE شدن هیچ Taskی نیست؛ فقط وضعیت واقعی و gapهای verified را ثبت می‌کند.


## Follow-up status — ACT-197

### Current implementation checkpoint
- Current repository HEAD: `f206ef0040271acd36ca1341d3bdbb1688b6c4a4`
Last implementation HEAD: `1f28a0306c446beb89f279a69a382814090d4e7a`
- CI run: **#281 — SUCCESS**
- Pipeline: migration, lint, typecheck, unit/integration, production build, Chromium install, browser smoke — all PASS.

### Finding closure
- HIGH-01: CLOSED — Presentation/Data access now flows through Application/server composition boundaries.
- HIGH-02: CLOSED — Event detail resolves slug or ID.
- HIGH-03: CLOSED — Period/day containment uses full ImperialDate comparison.
- MEDIUM-01: CLOSED — Personal Person can be explicitly cleared.
- MEDIUM-02: CLOSED — recurrence can be explicitly disabled.
- MEDIUM-03: CLOSED — nullable patch semantics support clearing optional fields.
- MEDIUM-04: CLOSED — public search uses approved/public repository views.
- MEDIUM-05: CLOSED — ranged events are handled in day/month queries.
- MEDIUM-06: CLOSED — timeline contains period and event nodes.
- MEDIUM-07: CLOSED — Share Card renderer applies distinct birthday treatment.
- MEDIUM-09: CLOSED — ESLint is a real CI gate using native Flat Config.
- LOW-01: CLOSED — session lastSeenAt is refreshed on active token lookup.
- LOW-02: CLOSED — ownership violations use AuthorizationError.
- LOW-03: CLOSED — Memory public/private relationship references are validated.

### Remaining non-bug gaps
- MEDIUM-08 remains open as broader product acceptance coverage.
- MEDIUM-10 remains open as release reproducibility work because `package-lock.json` is still absent.
These do not invalidate the current application correction gate; they remain PHASE-09/PHASE-10 work.

### Updated verdict
The ACT-186 correction gate is **closed for implementation defects**. The project is ready to continue into PHASE-06 runtime/browser acceptance, not yet ready for final release.
