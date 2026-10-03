# PROJECT AUDIT & CONTINUATION RECORD — 2026-10-04

Audit / Action ID: ACT-203
Repository: ma5ih/gah-shomar
Branch: main
Purpose: ثبت کامل بررسی، مغایرت‌سنجی، اصلاحات و نقطه ادامه پروژه پس از ممیزی end-to-end در این بازه.

## 1. هدف این سند

این سند خلاصه یک گفت‌وگوی موقت نیست؛ یک continuation record است. هدف آن این است که هر توسعه‌دهنده یا عامل بعدی بتواند بدون اتکا به چت قبلی بداند:
- چه اسناد و قواعدی خوانده شده‌اند.
- چه بخش‌های کد و چه تست‌هایی بررسی شده‌اند.
- چه مغایرت‌هایی پیدا شده‌اند.
- برای هر مغایرت چه تصمیمی گرفته شده است.
- چه تغییراتی واقعاً روی repository اعمال شده‌اند.
- کدام موارد عمداً برای Task/Phase آینده نگه داشته شده‌اند.
- آخرین وضعیت CI و HEAD چیست.
- دقیقاً کار بعدی از کجا باید شروع شود.

این سند «Specification جدید محصول» نیست. Source of Truth محصول همچنان اسناد APPROVED پروژه و implementation واقعی GitHub است.

## 2. نحوه بررسی

در این ممیزی:
1. repository واقعی GitHub شناسایی و به عنوان مرجع بررسی شد.
2. STATUS → ROADMAP → CHANGELOG و سپس اسناد وابسته مطالعه شدند.
3. ساختار repository و درخت فایل‌ها بررسی شد.
4. commit history اخیر و correction series بررسی شد.
5. architecture، requirements، calendar spec، data contracts، auth، search، media، timeline، editorial workflow و handoff با implementation مقایسه شدند.
6. application/domain/data/presentation code بررسی شد.
7. تست‌های unit/integration/E2E و configurationهای Vitest/Playwright بررسی شدند.
8. GitHub Actions و stepهای workflow واقعی بررسی شدند.
9. issues، pull requests، branches، releases و repository rulesets بررسی شدند.
10. هر gap به یکی از سه حالت زیر طبقه‌بندی شد:
   - باید همین حالا اصلاح شود چون تناقض یا defect فعلی است.
   - تکمیل آن در Task/Phase آینده تعریف شده است؛ فعلاً دست‌نخورده بماند.
   - نیازمند تصمیم مستقل آینده است؛ نباید با حدس به implementation اضافه شود.

## 3. وضعیت repository در پایان ممیزی

- Repository: ma5ih/gah-shomar
- Visibility: public
- Default branch: main
- Language: TypeScript
- Branches فعلی: فقط main
- Open issues: 0
- Pull requests موجود: 0
- Releases: 0
- Repository rulesets: 0
- آخرین repository HEAD در پایان این checkpoint: `f2060a1265c1ac79336364e31c69576de998e97c`
- آخرین implementation/code HEAD قبل از documentation synchronization: `a9eace682f32f6e6ff32a748fe9df53448c27692`

## 4. اسناد اصلی خوانده‌شده

در این بررسی این اسناد مستقیماً خوانده/مقایسه شدند:
- README.md
- docs/PROJECT.md
- docs/ROADMAP.md
- docs/STATUS.md
- docs/CHANGELOG.md
- docs/DECISIONS.md
- docs/REQUIREMENTS.md
- docs/ARCHITECTURE.md
- docs/ARCHITECTURE-BOUNDARIES.md
- docs/REPOSITORY-ARCHITECTURE.md
- docs/DATA-CONTRACTS.md
- docs/QUALITY-ARCHITECTURE.md
- docs/ARCHITECTURE-REVIEW.md
- docs/ARCHITECTURE-IMPLEMENTATION-AUDIT-2026-10-04.md
- docs/WORKFLOW.md
- docs/STACK.md
- docs/DEPENDENCY-POLICY.md
- docs/ENV-CONFIG.md
- docs/CALENDAR-SPEC.md
- docs/CALENDAR-ENGINE-OPEN-QUESTION.md
- docs/EVENT-MODEL.md
- docs/PERSON-MODEL.md
- docs/MEMORY-MODEL.md
- docs/PERSONAL-EVENT-MODEL.md
- docs/IMPORTANT-EVENTS-MODEL.md
- docs/TIMELINE-MODEL.md
- docs/SOURCE-EDITORIAL-MODEL.md
- docs/MEDIA-MODEL.md
- docs/HISTORICAL-DATE-MODEL.md
- docs/SEARCH-REQUIREMENTS.md
- docs/AUTH-ARCHITECTURE.md
- docs/SHARE-CARD-ARCHITECTURE.md
- docs/MVP-SPEC.md
- docs/PHASE-06-IMPLEMENTATION.md
- docs/EDITORIAL-EVENT-REVIEW.md
- docs/INDEX.md

## 5. وضعیت محصول که تأیید شد

Phaseهای 00 تا 05 از نظر roadmap در DONE هستند.
PHASE-06 — Core Frontend Product Experience — جریان اصلی فعلی و IN_PROGRESS است.
PHASE-07 — Visual Polish / App-like Experience — IN_PROGRESS است.
PHASE-08 — Editorial/Historical Dataset — IN_PROGRESS است.
PHASE-09 — Integration & Full QA — IN_PROGRESS و QA gate است.
PHASE-10 — Release — TODO است.

Ledger canonical فعلی:
- Total: 204
- DONE: 134
- IN_PROGRESS: 32
- TODO: 37
- DEFERRED: 1
- BLOCKED: 0
- DEPRECATED: 0

## 6. یافته‌های architecture / implementation

### 6.1 Calendar Engine — PASS

موارد بررسی‌شده:
- ImperialDate و month rules
- month lengths
- leap-year break-point algorithm
- Gregorian ↔ Imperial conversion
- Nowruz/year boundary
- date arithmetic
- weekday
- Today
- time-of-day
- season
- historical conversion boundary

قرارداد فعلی:
- Imperial year = Solar Hijri + 1180
- year 2585 current project year
- 2585 common year
- 2583 و 2588 leap
- 2620 common و 2621 leap
- چرخه 33 ساله ثابت استفاده نمی‌شود.
- converterهای unsupported حدس زده نمی‌شوند.

Regression testهای واقعی وجود دارند، از جمله:
- tests/unit/calendar-month.test.ts
- tests/unit/calendar-conversion.test.ts
- tests/unit/calendar-today.test.ts
- tests/unit/calendar-date-arithmetic.test.ts
- tests/unit/calendar-historical-conversion.test.ts
- tests/unit/calendar-weekday.test.ts
- tests/unit/calendar-time-of-day.test.ts
- tests/unit/calendar-season.test.ts

نتیجه: Calendar Engine با قرارداد فعلی sound است و نباید در UI دوباره پیاده‌سازی شود.

### 6.2 Public / Personal separation — PASS

بررسی شد:
- public repository
- personal DB repositories
- ownerUserId filtering
- Personal Person ownership
- Memory relationship validation
- personal storage failure fallback

نتیجه:
public و personal از نظر مدل و query ownership جدا هستند و resilience regression وجود دارد.

### 6.3 Application / Presentation boundary — اصلاح شد

مغایرت اولیه:
`app/day/[year]/[month]/[day]/page.tsx` مستقیماً `personalRepository` را import می‌کرد؛ این با DEC-023 و ARCHITECTURE-BOUNDARIES ناسازگار بود.

اصلاح ACT-199:
- `getServerDayQuery()` به `src/application/server.ts` اضافه شد.
- Day page به آن composition boundary منتقل شد.
- import مستقیم concrete repository از Day page حذف شد.

### 6.4 Personal Event create persistence — defect واقعی و اصلاح شد

مغایرت:
فرم Personal Event فیلدهای note و Personal Person داشت، ولی create action در payload فقط type/title/date را می‌فرستاد و `notes` و `personalPersonId` در create از دست می‌رفتند.

اصلاح ACT-199:
- create payload اکنون `notes` را فقط در صورت وجود ارسال می‌کند.
- `personalPersonId` نیز فقط در صورت وجود ارسال می‌شود.
- recurrence برای birthday/anniversary یا checkbox yearly حفظ می‌شود.
- update semantics قبلی برای null-clearing حفظ شدند.

این defect اکنون با E2E regression پوشش داده شده است.

### 6.5 Personal update clear semantics — PASS

در correction series قبلی:
- Personal Person قابل unlink شد.
- recurrence قابل خاموش‌شدن شد.
- notes/optional fields semantics صریح شد.
- Memory title قابل clear شد.

tests/unit/personal-update-semantics.test.ts این behavior را پوشش می‌دهد.

### 6.6 Personal ownership / relationship validation — PASS

Application validation اکنون:
- Personal Person را متعلق به user فعلی بررسی می‌کند.
- Memory public person/event reference را بررسی می‌کند.
- Personal Event reference را از نظر ownership بررسی می‌کند.
- authorization errors از `AuthorizationError` استفاده می‌کنند.

### 6.7 Session — PASS برای lifecycle فعلی

- session token hash می‌شود.
- password plaintext ذخیره نمی‌شود.
- lastSeenAt در active session lookup refresh می‌شود.
- logout session را revoke می‌کند.

این بخش برای security expiry آینده هنوز جای hardening دارد، ولی defect ثبت‌شده قبلی بسته شده است.

### 6.8 Search — implementation جزئی و عمدی

Search فعلی واقعاً:
- Event
- Person
- Period
- Personal Event
- Memory

را جستجو می‌کند.

اما موارد زیر هنوز کامل نیستند:
- month/date parser مستقل
- localized alias matching کامل
- category/tag search به‌عنوان query dimension مستقل

تصمیم:
این‌ها به‌عنوان gap آینده نگه داشته شده‌اند و نباید با حدس به core فعلی اضافه شوند. در ROADMAP مسیر Search UI/acceptance باز است.

### 6.9 Editorial content — عمدی و صحیح

`seedEvents = []` یک defect نیست.

Policy رسمی:
- هیچ event عمومی بدون review/approval منتشر نمی‌شود.
- Important Events بدون editorial approval نمایش داده نمی‌شوند.
- Eventهای تاریخی باید source-backed باشند.
- hero/media برای published Important Event موردنیاز است.

در نتیجه خالی بودن event seed در این checkpoint intentional است.

### 6.10 Timeline — foundation موجود

Timeline اکنون از Period و Event node تشکیل می‌شود و ordering بر اساس Imperial date انجام می‌شود.

چون public event seed فعلاً خالی است، تعداد event nodeهای فعلی محدود است؛ این با editorial policy تناقض ندارد.

### 6.11 Share Card — core موجود، acceptance کامل هنوز باز است

DTO، ownership check، تاریخ شاهنشاهی/میلادی و theme birthday وجود دارد.
Renderer فعلی یک PNG مستقل می‌سازد و از Web Share API در صورت پشتیبانی استفاده می‌کند و fallback download دارد.

اما acceptance گسترده browser/device و visual QA هنوز در PHASE-06/09 باز است.

## 7. مغایرت‌های documentation با implementation که اصلاح شدند

### Stack

قبلاً docs ادعا می‌کردند Tailwind CSS جزء implementation است، ولی repository فعلی از global CSS / CSS custom properties استفاده می‌کند و Tailwind dependency ندارد.

تصمیم:
implementation تغییر نکرد؛ documentation با reality sync شد.

### Auth

Architecture قبلی Argon2id را به‌صورت preferred implementation توضیح می‌داد، ولی code فعلی salted scrypt دارد.

تصمیم:
code بدون دلیل امنیتی مستقل تغییر نکرد؛ docs current implementation را صریحاً scrypt ثبت کردند.

### Configuration

ENV-CONFIG یک central validation boundary را تعریف می‌کند، اما implementation فعلی هنوز module مرکزی validation ندارد.

تصمیم:
این مورد در current code با یک نیمه‌راه‌حل جدید خراب نشد؛ به `TASK-10-001 — Production Configuration` سپرده شد.

### Search

Specification کامل‌تر از implementation است.

تصمیم:
قسمت‌های آینده در docs به‌عنوان future extension روشن شدند؛ چیزی به implementation اضافه نشد.

## 8. مواردی که عمداً اصلاح نشدند

این‌ها «جاافتادگی» هستند ولی برایشان مسیر آینده وجود دارد:

1. PHASE-06 runtime/browser acceptance
   - Today
   - Calendar
   - Day Detail
   - Event/Important Event
   - Timeline/People
   - Search
   - Personal layer
   - fa/RTL و en/LTR
   - mobile/tablet/desktop
   - swipe
   - accessibility
   - broader visual acceptance

2. PHASE-07
   - visual hierarchy
   - spacing/typography/component consistency
   - time-of-day polish
   - seasonal variations
   - motion polish
   - install UX

3. PHASE-08
   - monthly editorial review
   - Important Event selection
   - person/timeline datasets
   - media metadata
   - initial approved event dataset
   - content QA

4. PHASE-09
   - final acceptance suites
   - mobile/tablet/desktop QA
   - accessibility
   - performance
   - PWA QA
   - visual consistency
   - release blocker review

5. PHASE-10 / TASK-10-001
   - centralized production config validation
   - production environment checks
   - reproducible dependency installation

6. TASK-09-020
   - final CSRF/rate-limiting/security hardening evidence
   - reproducibility/release blocker review

7. TASK-03-007
   - unsupported historical calendar/era converters beyond current exact supported calendars

## 9. Test inventory reviewed

Unit:
- calendar-month
- calendar-conversion
- calendar-today
- calendar-date-arithmetic
- calendar-historical-conversion
- calendar-weekday
- calendar-time-of-day
- calendar-season
- application
- content-validation
- domain-contracts
- domain-personal-contracts
- personal-calendar
- personal-update-semantics
- personal-storage-resilience
- phase4-use-cases
- pwa

Integration:
- db-schema
- personal-repository

E2E:
- public-smoke.spec.ts
- personal-flow.spec.ts

Playwright:
- Chromium desktop profile
- Chromium tablet profile (Galaxy Tab S4)
- Chromium mobile profile (Pixel 5)

Vitest runs tests under tests/**/*.test.ts.

## 10. CI validation

Workflow `.github/workflows/ci.yml` فعلی شامل:
1. PostgreSQL service
2. Checkout
3. Node 24
4. npm install
5. database migration
6. ESLint
7. TypeScript typecheck
8. unit + integration tests
9. production build
10. Chromium installation
11. Playwright browser smoke

نتایج مهم:
- CI #281: PASS
- CI #283: PASS
- CI #287 — روی implementation HEAD `a9eace682f32f6e6ff32a748fe9df53448c27692`: PASS
- CI #288 — روی documentation HEAD `f2060a1265c1ac79336364e31c69576de998e97c`: PASS
- latest run #292 — روی همان repository HEAD `f2060a1265c1ac79336364e31c69576de998e97c`: PASS

برای #287 و #292، تمام stepهای quality job تا migration، lint، typecheck، unit/integration، build، Chromium و browser smoke موفق بودند.

بنابراین correction فعلی دارای validation واقعی CI است؛ دیگر صرفاً «تغییر ثبت‌شده ولی تست‌نشده» نیست.

## 11. History / correction series

ACT-186 — independent implementation/architecture audit
- مسیر معماری کلی درست تشخیص داده شد.
- HIGH/medium/low findings ثبت شدند.

ACT-187
- event slug-or-id retrieval
- exact period date containment
- approved public search filtering
- ranged event support
- presentation/application helper improvements

ACT-188
- server composition root
- concrete repository binding از presentation جدا شد
- migration/typecheck/unit/integration/build/browser smoke در CI validation شد.

ACT-189
- clear semantics
- lastSeenAt
- ownership validation
- timeline event nodes
- share card birthday treatment
- lint gate
- public filtering corrections

ACT-190
- AuthorizationError consistency

ACT-191
- native ESLint Flat Config

ACT-192
- Personal page typing and simplification

ACT-193
- lint regression cleanup

ACT-194
- GregorianDate type contract restoration

ACT-195
- exactOptionalPropertyTypes compatibility
- locale typing correction

ACT-196
- create/update Personal Event contract split

ACT-197
- checkpoint synchronization

ACT-198
- repository HEAD metadata correction

ACT-199
- fixed Personal Event create metadata persistence
- fixed remaining Day presentation repository dependency
- strengthened Personal Event E2E

ACT-200/201/202
- documentation synchronization and contract cleanup after the ACT-199 correction.

ACT-203
- this continuation record.

Historical ACT collision notes remain immutable; old history must not be rewritten.

## 12. Operational notes from this audit

- Some broad GitHub connector reads timed out. They were replaced with smaller, deterministic file/commit reads; no repository behavior was inferred from a failed read.
- A first low-level Git tree write attempt used an invalid base-tree identifier and was rejected; it produced no repository mutation.
- Subsequent changes were written through normal repository file updates/commits and verified through GitHub.
- No force-push or history rewrite was used.

## 13. Current exact continuation point

Repository:
`ma5ih/gah-shomar`

Current HEAD:
`f2060a1265c1ac79336364e31c69576de998e97c`

Current implementation correction HEAD:
`a9eace682f32f6e6ff32a748fe9df53448c27692`

Current product phase:
PHASE-06 — IN_PROGRESS

Current QA gate:
PHASE-09 — IN_PROGRESS

Current editorial state:
`seedEvents = []` intentionally.

Current release state:
NOT RELEASED.

Next fresh ACT ID after this record:
**ACT-204**

## 14. Next work — do not skip the order

1. Treat `docs/STATUS.md`, `docs/ROADMAP.md`, `docs/CHANGELOG.md` and this document as the continuation context.
2. Re-open the current PHASE-06 runtime/browser acceptance gap.
3. Do not start historical editorial seeding before the required product acceptance gates.
4. Do not move PHASE-06 to DONE based only on code existence.
5. Keep PHASE-07 visual polish after the runtime acceptance gate.
6. Continue PHASE-08 editorial dataset only after its review workflow.
7. Perform PHASE-09 final QA before PHASE-10 release.

## 15. Final verdict

At the end of this audit:
- overall architecture direction: SOUND
- Calendar Engine: SOUND for supported contract
- public/personal separation: PASS
- current correction gate: PASS and CI-validated
- documentation/implementation synchronization: substantially reconciled
- current product frontend: substantially implemented, not acceptance-complete
- editorial dataset: intentionally incomplete and safely gated
- release readiness: NOT READY

Most importantly: there is no reason to reopen already-closed architectural corrections unless new evidence appears. The next team/agent should continue from PHASE-06 runtime/browser acceptance, not restart architecture or redo the historical correction series.
