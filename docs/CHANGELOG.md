## ACT-160 — 2026-10-03
Type: DOCUMENTATION-CHECKPOINT
Status: DONE

- Corrected the stale next-ACT counter in docs/HANDOFF.md.
- No application, content or test behavior changed.
- Next fresh ACT ID is now ACT-161.
- Implementation baseline remains e3107be19485199f3e725a1bbc40ceb86b72f88b.

---
## ACT-159 — 2026-10-03
Type: DOCUMENTATION-CHECKPOINT
Status: DONE

- Finalized the repository continuation checkpoint after the ACT-158 reconciliation.
- Confirmed that documentation commits after implementation HEAD are documentation-only.
- Updated the handoff to distinguish the implementation baseline from later documentation commits.
- Advanced the next fresh ACT ID to ACT-160; historical ACT-150/151 collisions remain immutable.
- Final current implementation task remains TASK-09-022: align E2E/browser smoke with the intentionally empty historical-event seed.

---

## ACT-158 — 2026-10-03
Type: DOCUMENTATION-RECONCILIATION
Status: DONE

### هدف
همگام‌سازی کامل وضعیت repository با implementation واقعی و ایجاد یک نقطهٔ ادامهٔ مستقل از چت.

### ثبت شد
- `docs/HANDOFF.md` به‌عنوان continuation checkpoint مرجع اضافه شد.
- CURRENT HEAD روی `e3107be19485199f3e725a1bbc40ceb86b72f88b` ثبت شد.
- PHASE-09 به‌عنوان فاز جاری ثبت شد و وضعیت Phaseهای 00 تا 10 با implementation واقعی همگام شد.
- وضعیت فعلی public historical event seed = صفر رویداد به‌صورت صریح ثبت شد.
- قرارداد صفحهٔ Important Events و Event Detail با requirement تصویری/روایتی ثبت شد.
- وضعیت PWA، responsive browser QA، Node 24 workflow و English direction test در handoff ثبت شد.
- مغایرت E2E با event seed خالی شناسایی و به TASK-09-022 تبدیل شد.
- آخرین CI baseline قطعی ACT-133 / run #102 به‌عنوان PASS حفظ شد.
- آخرین run ثبت‌شده برای HEAD فعلی (#134 / e310...) هنوز IN_PROGRESS است و PASS اعلام نمی‌شود.
- collision تاریخی ACT-150 و ACT-151 و نبود ACT-155 در تاریخچه ثبت شد؛ از اینجا به بعد شناسه‌ها دوباره استفاده نمی‌شوند.
- `INDEX`, `PROJECT`, `PHASE-04-IMPLEMENTATION`, `PHASE-05-IMPLEMENTATION`, `PHASE-06-IMPLEMENTATION`, `EDITORIAL-EVENT-REVIEW` و content README همگام شدند.

### Reconciled recent implementation commits
- ACT-152 — tablet browser profile moved to Chromium-compatible Galaxy Tab S4.
- ACT-153 — CI actions/workflow moved to Node 24.
- ACT-154 — browser smoke selectors tightened.
- ACT-156 — English browser test now asserts document `lang="en"` and `dir="ltr"`.
- ACT-155 was not found in current commit history; no behavior is inferred for it.
- Earlier ACT-149/150/151 commit messages contain collisions; see `docs/HANDOFF.md`.

### Current next step
TASK-09-022 — align E2E/browser smoke tests with the intentionally empty public historical-event seed, then observe the full CI result.

---

## ACT-150 — 2026-10-03
Type: CONTENT-EDITORIAL-POLICY
Status: DONE

- Public historical event seed reset to an empty dataset.
- Removed event relationships from structural person/period seed records so validation remains consistent.
- Updated daily-event and Important Events application tests to expect no published historical events.
- Important Events page now has an explicit editorial-pending empty state.
- Added the month-by-month event review and user-approval workflow to `docs/EDITORIAL-EVENT-REVIEW.md`.
- Updated content foundation documentation and roadmap/status to prevent unapproved historical events from being published.

### Editorial rule
No historical event is added to `seedEvents` until it has been reviewed month-by-month and explicitly approved.

## ACT-141 — 2026-10-03
Type: DOCUMENTATION-SYNC
Status: DONE

- Synchronized CHANGELOG with the current Phase-03 through Phase-10 execution state.
- Recorded the latest CI gates, PWA baseline, sourced dataset, resilience tests and application test migration.
- Latest verified green baseline remains ACT-133; later CI runs are tracked separately until completion.

## ACT-140 — 2026-10-03
Type: ROADMAP-SYNC
Status: DONE

- PHASE-03 marked DONE with unsupported historical calendar conversion explicitly DEFERRED.
- PHASE-04 and PHASE-05 synchronized as DONE.
- PHASE-06 remains IN_PROGRESS pending runtime/device acceptance.
- PHASE-07, PHASE-08 and PHASE-09 moved to IN_PROGRESS with completed subtasks recorded.
- PHASE-10 remains TODO.

## ACT-139 — 2026-10-03
Type: STATUS-SYNC
Status: DONE

- STATUS rebuilt around the actual repository HEAD and verified CI state.
- Current phase moved to PHASE-09 Integration & QA.
- Remaining work now explicitly lists runtime/device QA, visual polish, historical dataset expansion and release.

## ACT-138 — 2026-10-03
Type: TEST-ACCEPTANCE
Status: IN_PROGRESS

- Added personal-storage failure coverage for Today, Month/Day and Search.
- Added PWA manifest acceptance test.
- CI validation pending.

## ACT-137 — 2026-10-03
Type: TEST-REGRESSION
Status: DONE

- Migrated application tests away from removed demo identifiers.
- Calendar day and public-search assertions now use sourced historical content.

## ACT-136 — 2026-10-03
Type: CONTENT-VALIDATION
Status: IN_PROGRESS

- Added relationship graph validation for events, people, periods and sources.
- Added seeded-content tests for non-demo source-backed publication.
- CI validation pending.

## ACT-135 — 2026-10-03
Type: CONTENT-DATASET
Status: DONE

- Replaced demo content with a source-backed MVP seed.
- Current seed contains 7 events, 5 people, 2 periods and 6 Encyclopaedia Iranica references.
- Unsupported historical calendars remain outside the supported conversion contract.

## ACT-134 — 2026-10-03
Type: DOCUMENTATION-CHECKPOINT
Status: SUPERSEDED
- Created an initial dataset replacement commit before the final sourced seed was corrected by ACT-135.

## ACT-133 — 2026-10-03
Type: PWA
Status: DONE

- Added installable manifest, service worker, offline route, application icon and mobile safe-area/navigation baseline.
- CI run #102 passed migration, typecheck, test suite and production build.

## ACT-083 — 2026-10-03
Type: DOMAIN-TESTS
Status: IN_PROGRESS

### انجام شد
- `tests/unit/domain-contracts.test.ts` ایجاد شد.
- قراردادهای Event، Person، HistoricalPeriod و Source با fixtureهای typed و assertionهای رابطه‌ای تست می‌شوند.
- سازگاری relationship graph و preservation تاریخ تاریخی دقیق با معادل شاهنشاهی پوشش داده شد.
- Personal Event و Memory هنوز coverage مستقل ندارند و تکمیل آن‌ها ادامه TASK-03-026 است.

### Next
TASK-03-026 — تکمیل Domain Model Tests، سپس TASK-03-027 — Engine Review.

## ACT-082 — 2026-10-03
Type: TEST-REGRESSION
Status: DONE

### انجام شد
- ماتریس regression سال‌های کبیسه مدرن گاه‌شمار شاهنشاهی از ۲۵۷۱ تا ۲۶۲۹ اضافه شد.
- توالی متناظر ۱۳۹۱ تا ۱۴۴۹ خورشیدی شامل فاصله‌های ۴ و ۵ ساله در یک تست end-to-end روی `isImperialLeapYear()` بررسی می‌شود.
- گذار مهم ۱۴۴۰ خورشیدی/۲۶۲۰ شاهنشاهی به‌عنوان سال عادی و ۱۴۴۱/۲۶۲۱ به‌عنوان سال کبیسه حفظ و تست می‌شود.
- تست‌ها هیچ استثناء دستی برای فاصله‌های پنج‌ساله اضافه نمی‌کنند؛ هدف، اعتبارسنجی خود الگوریتم break-point است.
- CI workflow هنوز run قابل مشاهده‌ای برای commit جدید گزارش نکرده است؛ بنابراین PASS فنی ثبت نشد.

### Next
TASK-03-023 — Calendar Unit Tests / CI Validation

## ACT-081 — 2026-10-03
Type: DOCUMENTATION-SYNC
Status: DONE

### انجام شد
- CHANGELOG ledger با ACT-076 تا ACT-080 نیز کامل شد.
- آخرین documentation syncها اکنون در تاریخچه قابل ردیابی هستند.

## ACT-080 — 2026-10-03
Type: REQUIREMENTS-SYNC
Status: DONE

### انجام شد
- REQUIREMENTS از v1.0.0 به v1.1.0 ارتقا یافت.
- REQ-081 و REQ-082 به نیازمندی‌های Calendar Engine و CI اضافه شدند.
- AC-035 و AC-040 وضعیت واقعی validation را صریح می‌کنند.

## ACT-079 — 2026-10-03
Type: DOCUMENTATION-INDEX
Status: DONE
- INDEX با وضعیت فعلی اسناد و Next Task هماهنگ شد.

## ACT-078 — 2026-10-03
Type: CALENDAR-DOCUMENTATION
Status: DONE
- CALENDAR-ENGINE-OPEN-QUESTION با وضعیت فعلی engine هماهنگ شد.

## ACT-077 — 2026-10-03
Type: REQUIREMENTS
Status: DONE
- REQ-081/082 و AC-040 برای Calendar Engine contracts و CI validation ثبت شدند.

## ACT-076 — 2026-10-03
Type: CHANGELOG-SYNC
Status: DONE
- documentation syncهای ACT-069 تا ACT-075 یکپارچه و قابل ردیابی شدند.

## ACT-080 — 2026-10-03
Type: REQUIREMENTS-SYNC
Status: DONE

### انجام شد
- REQUIREMENTS از v1.0.0 به v1.1.0 ارتقا یافت.
- REQ-081 و REQ-082 به نیازمندی‌های Calendar Engine و CI اضافه شدند.
- AC-035 و AC-040 وضعیت واقعی validation را صریح می‌کنند.

## ACT-075 — 2026-10-03
Type: DOCUMENTATION-SYNC
Status: DONE

### انجام شد
- ROADMAP v2.1.0 بازسازی شد و تمام Taskهای PHASE-00 تا PHASE-10 در یک ledger یکپارچه ثبت شدند.
- وضعیت دقیق TASK-03-001 تا TASK-03-027 با implementation فعلی هماهنگ شد.
- Next Task به TASK-03-023 منتقل و ترتیب ادامه تا پایان PHASE-03 مشخص شد.

## ACT-074 — 2026-10-03
Type: STATUS-SYNC
Status: DONE

### انجام شد
- STATUS به snapshot canonical تبدیل شد.
- DONE / IN_PROGRESS / TODOهای PHASE-03 به‌صورت صریح ثبت شدند.
- implementationهای Calendar Engine، تست‌ها، CI و محدودیت‌های validation مستند شدند.
- آخرین ACTها و Next Task ثبت شدند.

## ACT-073 — 2026-10-03
Type: DECISION-SYNC
Status: DONE

### انجام شد
- DEC-019: جداسازی timezone resolution از Domain.
- DEC-020: عدم جعل Historical Date conversion.
- DEC-021: CI به‌عنوان validation gate.
- Consequence هر تصمیم به Taskهای فعلی متصل شد.

## ACT-072 — 2026-10-03
Type: QUALITY-DOCUMENTATION
Status: DONE

### انجام شد
- QUALITY-ARCHITECTURE با test coverage فعلی و وضعیت واقعی CI sync شد.
- تفاوت «test موجود» با «test PASS شده» صریح شد.

## ACT-071 — 2026-10-03
Type: ARCHITECTURE-SYNC
Status: DONE

### انجام شد
- ARCHITECTURE v1.1.0 با implementation واقعی Calendar Engine sync شد.
- moduleهای conversion، Today، historical conversion، arithmetic، weekday، time و season ثبت شدند.
- وضعیت validation فعلی اضافه شد.

## ACT-070 — 2026-10-03
Type: PROJECT-SYNC
Status: DONE

### انجام شد
- PROJECT v1.2.0 با وضعیت فعلی محصول و Calendar Engine هماهنگ شد.
- وضعیت PHASEها، Next Task و محدودیت Historical Conversion به‌روزرسانی شد.

## ACT-069 — 2026-10-03
Type: README-SYNC
Status: DONE

### انجام شد
- README با PHASE-03، وضعیت Calendar Engine، CI و Next Task هماهنگ شد.

## ACT-068 — 2026-10-03
Type: QUALITY-CI
Status: DONE

### انجام شد
- `.github/workflows/ci.yml` اضافه شد.
- CI روی push به `main` و pull request اجرا می‌شود.
- Node 22، dependency installation، TypeScript typecheck، Vitest unit tests و production build در pipeline تعریف شدند.
- چون repository هنوز `package-lock.json` ندارد، CI از `npm install` استفاده می‌کند و lockfile جدیدی را از راه دور commit نمی‌کند.

### وضعیت اجرا
- برای commit ایجادشده هنوز workflow run از GitHub گزارش نشده؛ بنابراین PASS بودن typecheck/test/build فعلاً تأیید نشده است.

### Next
TASK-03-023 — Calendar Unit Tests / CI Validation

## ACT-067 — 2026-10-03
Type: CALENDAR-ENGINE-SEASON
Status: DONE

### انجام شد
- `seasonOfImperialMonth()` به Calendar Domain اضافه شد.
- چهار فصل با گروه‌بندی سه‌ماههٔ ماه‌های شاهنشاهی تعریف شد:
  - فروردین تا خرداد: بهار
  - تیر تا شهریور: تابستان
  - مهر تا آذر: پاییز
  - دی تا اسپند: زمستان
- regression test برای ابتدا و انتهای هر فصل اضافه شد.

### Next
TASK-03-023 — Calendar Unit Tests

## ACT-066 — 2026-10-03
Type: CALENDAR-ENGINE-TIME
Status: DONE

### انجام شد
- `getTimeOfDayState()` به Calendar Domain اضافه شد.
- چهار state مورد نیاز محصول: morning / noon / sunset / night.
- مرزها configurable هستند و عمداً داخل Domain hard-code نشده‌اند؛ بنابراین UI می‌تواند در آینده بر اساس policy محصول یا موقعیت زمانی کاربر آن‌ها را تعیین کند.
- validation برای ساعت، دقیقه و ترتیب مرزها اضافه شد.
- regression test برای تمام مرزهای چهار state اضافه شد.

### Next
TASK-03-012 — Seasonal State

## ACT-065 — 2026-10-03
Type: CALENDAR-ENGINE-WEEKDAY
Status: DONE

### انجام شد
- `weekdayOfImperialDate()` به Calendar Domain اضافه شد.
- روز هفته از محاسبه تقویمی و Julian Day به‌دست می‌آید و به timezone وابسته نیست.
- mapping کامل شنبه تا جمعه به قرارداد `Weekday` پروژه اضافه شد.
- regression test برای ۳ مهر ۲۵۸۵ / ۳ اکتبر ۲۰۲۶ و روز بعد آن اضافه شد.

### وضعیت تست
- testها نوشته شده‌اند؛ اجرای CI برای commitهای جدید هنوز تأیید نشده است.

### Next
TASK-03-011 — Time-of-day State

## ACT-064 — 2026-10-03
Type: CALENDAR-ENGINE-DATE-ARITHMETIC
Status: DONE

### انجام شد
- `addImperialDays()` و `differenceInImperialDays()` به Calendar Domain اضافه شدند.
- محاسبه بر پایه Julian Day انجام می‌شود تا جابه‌جایی‌های بزرگ و عبور از مرز ماه/سال بدون حلقه‌های روزبه‌روز انجام شوند.
- regression test برای مرز ماه، روز کبیسه، عبور سال و اختلاف روزها اضافه شد.
- timezone و UI همچنان خارج از این منطق باقی مانده‌اند.

### وضعیت تست
- testها نوشته شده‌اند؛ اجرای CI برای commitهای جدید هنوز تأیید نشده است.

### Next
TASK-03-010 — Weekday Calculation

## ACT-063 — 2026-10-03
Type: CALENDAR-ENGINE-HISTORICAL
Status: IN_PROGRESS

### انجام شد
- gateway تبدیل تاریخ تاریخی دقیق در `src/domain/calendar/historical-conversion.ts` اضافه شد.
- Gregorian و هجری‌شمسی دقیق پشتیبانی می‌شوند.
- برای precisionهای غیر EXACT هیچ ImperialDate ساختگی تولید نمی‌شود.
- leap state تاریخ هجری‌شمسی از همان Calendar Engine استفاده می‌کند و hard-code مستقل ندارد.
- تست‌های تاریخی و invalid-date اضافه شدند.
- regression مرز نوروز سال کبیسه ۱۴۰۳/۲۵۸۳ به suite تبدیل اضافه شد.

### محدودیت فعلی
- Julian، Hijri قمری، regnal/era و تاریخ‌های BCE هنوز نیازمند converter و policy مستقل هستند؛ تا آن زمان نباید برای آن‌ها ImperialDate حدس زده شود.

### Next
TASK-03-008 — Year Boundary / Nowruz Edge Cases

## ACT-062 — 2026-10-03
Type: CALENDAR-ENGINE-TODAY
Status: DONE

### انجام شد
- `getImperialToday()` به Calendar Domain اضافه شد.
- Today به‌صورت pure function روی یک Gregorian calendar date resolved کار می‌کند.
- timezone و clock resolution عمداً خارج از Domain نگه داشته شد تا SSR، موبایل و runtimeهای مختلف بتوانند timezone موردنظر را به‌صورت صریح تعیین کنند.
- regression test برای تاریخ فعلی پروژه و مرز ۲۰/۲۱ مارس ۲۰۲۶ اضافه شد.
- export عمومی Calendar Domain به‌روز شد.

### وضعیت تست
- testها نوشته شده‌اند؛ اجرای CI برای commitهای جدید هنوز تأیید نشده است.

### Next
TASK-03-007 — Historical Date Conversion

## ACT-061 — 2026-10-03
Type: CALENDAR-ENGINE-CONVERSION
Status: DONE

### انجام شد
- پیاده‌سازی تبدیل خالص Gregorian ↔ Imperial در `src/domain/calendar/conversion.ts`.
- تبدیل بر پایه الگوریتم Borkowski/Jalaali و همان break-pointهای تثبیت‌شده انجام می‌شود؛ شماره سال شاهنشاهی با offset برابر ۱۱۸۰ اعمال می‌شود.
- تبدیل تاریخ روزانه به Julian Day و بازگشت به Gregorian بدون وابستگی به timezone یا `Date` مرورگر انجام می‌شود.
- اعتبارسنجی تاریخ‌های Gregorian و Imperial اضافه شد.
- regression test برای نوروز ۲۵۸۵، یک جفت شناخته‌شده ۲۰۱۶/۲۵۷۵، گذار ۲۶۲۰/۲۶۲۱ و round-trip تاریخ‌های نماینده اضافه شد.
- منطق تبدیل به export عمومی Calendar Domain اضافه شد.

### وضعیت تست
- workflow برای commitهای جدید هنوز run ثبت نکرده است؛ بنابراین اجرای موفق test suite هنوز تأیید نشده است.

### Next
TASK-03-005 — Now/Today Calculation

## ACT-060 — 2026-10-02
Type: CALENDAR-ENGINE-CORRECTION
Status: DONE

### انجام شد
- مشخص شد implementation قبلی یک چرخه ۳۳ سالهٔ ثابت را به تمام تاریخ تعمیم می‌داد و در نمونه‌های تاریخی مانند ۱۴۴۰/۱۴۴۱ درست نبود.
- implementation در src/domain/calendar/leap-year.ts به الگوریتم break-point خانواده Borkowski/Jalaali اصلاح شد.
- فاصله‌های ۵ ساله دیگر به‌عنوان استثناء دستی تعریف نمی‌شوند و از خود الگوریتم به‌دست می‌آیند.
- تست‌های ۱۴۰۳، ۱۴۰۸، ۱۴۳۶، ۱۴۴۰ و ۱۴۴۱ و معادل‌های شاهنشاهی آن‌ها اضافه شدند.
- ۲۵۸۵ همچنان سال عادی، ۲۵۸۳ آخرین کبیسهٔ قبلی و ۲۵۸۸ کبیسه بعدی در بازه فعلی باقی ماندند.
- CALENDAR-SPEC، DECISIONS و CALENDAR-ENGINE-OPEN-QUESTION اصلاح شدند.

### Next
TASK-03-005 — Now/Today Calculation

## ACT-059 — 2026-10-02
Type: CALENDAR-ENGINE
Status: DONE

### انجام شد
- تصمیم رسمی برای قاعده کبیسه گاه‌شمار شاهنشاهی ثبت شد.
- مشخص شد گاه‌شمار شاهنشاهی از نظر ساختار و کبیسه‌گیری کاملاً تابع تقویم خورشیدی متناظر است و فقط شماره سال/مبدأ متفاوت است.
- توالی معاصر سال‌های کبیسه بررسی و ثبت شد: ۱۳۹۹، ۱۴۰۳، ۱۴۰۸، ۱۴۱۲، ۱۴۱۶، ۱۴۲۰، ۱۴۲۴، ۱۴۲۸.
- معادل شاهنشاهی همان توالی: ۲۵۷۹، ۲۵۸۳، ۲۵۸۸، ۲۵۹۲، ۲۵۹۶، ۲۶۰۰، ۲۶۰۴، ۲۶۰۸.
- ۲۵۸۵ شاهنشاهی به‌درستی سال عادی تعیین شد؛ آخرین کبیسه ۲۵۸۳ و کبیسه بعدی ۲۵۸۸ است.
- `src/domain/calendar/leap-year.ts` ایجاد شد.
- تست‌های leap-year به suite تقویم اضافه شدند.
- blocker قبلی ACT-058 superseded شد و TASK-03-004 به DONE منتقل شد.
- CALENDAR-SPEC، ROADMAP، STATUS، DECISIONS و INDEX همگام شدند.

### Next
TASK-03-005 — Now/Today Calculation

## DEC-016 — 2026-10-02
Status: ACCEPTED
Title: انطباق کامل کبیسه گاه‌شمار شاهنشاهی با تقویم خورشیدی

### Decision
- گاه‌شمار شاهنشاهی از نظر ساختار تقویم و کبیسه‌گیری کاملاً از تقویم خورشیدی متناظر پیروی می‌کند.
- تفاوت فقط در مبدأ و شماره سال است.
- رابطه سال‌ها: ۱۴۰۵ خورشیدی = ۲۵۸۵ شاهنشاهی و به‌طور کلی سال شاهنشاهی = سال خورشیدی + ۱۱۸۰.
- سال‌های کبیسه اطراف بازه فعلی: ۱۳۹۹، ۱۴۰۳، ۱۴۰۸، ۱۴۱۲، ۱۴۱۶، ۱۴۲۰، ۱۴۲۴ و ۱۴۲۸؛ معادل شاهنشاهی آن‌ها ۲۵۷۹، ۲۵۸۳، ۲۵۸۸، ۲۵۹۲، ۲۵۹۶، ۲۶۰۰، ۲۶۰۴ و ۲۶۰۸ هستند.
- ۲۵۸۵ شاهنشاهی سال عادی است؛ آخرین سال کبیسه ۲۵۸۳ و سال کبیسه بعدی ۲۵۸۸ است.
- TASK-03-004 از BLOCKED به DONE منتقل شد.
- ACT-058 به‌عنوان blocker superseded ثبت می‌شود و مبنای تصمیم جدید ACT-059 است.

### Consequence
Calendar Engine می‌تواند از تشخیص leap year به‌عنوان یک قاعده deterministic استفاده کند و توسعه TASK-03-005 به بعد بدون blocker کبیسه ادامه پیدا کند.

# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-02
Current phase: PHASE-03 — Core Backend / Domain / Calendar Engine
Overall status: IN_PROGRESS

## آخرین نقطه قطعی

تا این لحظه تعریف محصول، مخاطبان و use caseها، قابلیت‌های اصلی، مشخصات رسمی تقویم، محدوده MVP و مرزهای MVP با کاربر بررسی و تثبیت شده‌اند. نقشه راه نیز از صفر تا Release به‌صورت مرحله‌ای و کدگذاری‌شده بازطراحی شده است.

## وضعیت مراحل

| Phase | Status | Progress |
|---|---|---:|
| PHASE-00 Documentation | DONE | 100% |
| PHASE-01 Specification | DONE | 100% |
| PHASE-02 Architecture | DONE | 100% |
| PHASE-03 Core Backend / Calendar Engine | IN_PROGRESS | 30% |
| PHASE-04 Application Backend / Use Cases | TODO | 0% |
| PHASE-05 Frontend Architecture & Design System | TODO | 0% |
| PHASE-06 Core Frontend | TODO | 0% |
| PHASE-07 Visual Polish & PWA | TODO | 0% |
| PHASE-08 Historical Content / Editorial Dataset | TODO | 0% |
| PHASE-09 Integration & QA | TODO | 0% |
| PHASE-10 Release | TODO | 0% |

## اقدامات ثبت‌شده

- ACT-001 — ایجاد زیرساخت مستندسازی و ردیابی پروژه — DONE
- ACT-002 — تثبیت تعریف محصول و قابلیت‌های اصلی — DONE
- ACT-003 — تثبیت مخاطبان و use caseها — DONE
- ACT-004 — تثبیت Calendar Specification، تعریف MVP و بازطراحی کامل Roadmap — DONE
- ACT-005 — تثبیت Non-goals، Scope Boundaries، حساب کاربری و Share Card — DONE
- ACT-006 — تثبیت Acceptance-level Account/Auth و Personal Share Card — DONE
- ACT-007 — Documentation Sync/Audit — DONE
- ACT-008 — تعریف Acceptance Criteria برای MVP — DONE
- ACT-009 — نهایی‌سازی REQUIREMENTS v1.0 — DONE
- ACT-010 — تعریف مدل تفصیلی Event — DONE
- ACT-011 — تعریف مدل تفصیلی Person — DONE
- ACT-012 — تعریف مدل تفصیلی Memory — DONE
- ACT-013 — تعریف مدل تفصیلی Personal Event — DONE
- ACT-014 — تعریف Important Event & Editorial Selection — DONE
- ACT-015 — تعریف Timeline و روابط Entityها — DONE
- ACT-016 — تعریف Sources, Verification و Editorial Policy — DONE
- ACT-017 — تعریف Media/Asset Model — DONE
- ACT-018 — تعریف Historical Date Representation — DONE
- ACT-019 — تعریف Search Requirements — DONE
- ACT-020 — انتخاب Stack و Runtime — DONE
- ACT-021 — تعریف Repository/Directory Architecture — DONE
- ACT-022 — تعریف Environment & Configuration Strategy — DONE
- ACT-023 — تعریف Dependency Policy — DONE
- ACT-045 — پیاده‌سازی Imperial Date Type — DONE
- ACT-046 — پیاده‌سازی Year/Month/Day Rules — DONE
- ACT-047 — پیاده‌سازی Month Lengths — DONE
- ACT-048 — تعریف Event Domain — DONE
- ACT-049 — تعریف Person Domain — DONE
- ACT-050 — تعریف Personal Event Domain — DONE
- ACT-051 — تعریف Memory Domain — DONE
- ACT-052 — تعریف Timeline/Period Domain — DONE
- ACT-053 — تعریف Source/Editorial Domain — DONE
- ACT-054 — Structured Event Dataset Contract — DONE
- ACT-055 — Seed/Fixture Data Strategy — DONE
- ACT-056 — Content Validation Pipeline — DONE
- ACT-057 — Public vs Personal Data Separation — DONE
- ACT-058 — ثبت blocker قاعده کبیسه — SUPERSEDED
- ACT-059 — نهایی‌سازی و پیاده‌سازی قاعده کبیسه متناظر با تقویم خورشیدی — DONE

## تصمیم‌های محصول فعلی

- Mobile-first و App-like
- تقویم اصلی: خورشیدی با شماره‌گذاری شاهنشاهی
- نمایش سال هجری شمسی معمولی در UI: ممنوع
- میلادی: کوچک و فرعی
- نام ماه‌ها مطابق CALENDAR-SPEC
- Today به‌عنوان مرکز تجربه
- ثبت‌نام/ورود حداقلی با نام کاربری و رمز عبور
- نام کاربری unique و cross-platform-safe
- ورود برای محتوای عمومی الزامی نیست
- ثبت‌نام/ورود حداقلی با username/password
- Personal Share Card اختصاصی برای اشتراک‌گذاری رویداد شخصی
- Month Calendar و Day Detail
- Historical Events و Important Events
- Historical Timeline
- Person Entity
- Personal Events و Personal Person
- Memories
- Search
- Time-of-day و Seasonal UI
- فارسی + انگلیسی با RTL/LTR واقعی
- PWA از نسخه اول
- داده تاریخی منبع‌دار و قابل اعتبارسنجی
- معماری داده‌محور و لایه‌ای
- عدم پیچیده‌سازی غیرضروری
- Reminder/Notification، social features، user-generated public events، Admin/CMS، location/maps، export/import، calendar integrations، monetization، public API، forgot-password و account deletion خارج از MVP

## MVP تأییدشده در سطح محصول

1. تقویم شاهنشاهی و Calendar Engine
2. لایه تاریخ/رویداد ایران: Today، Events، Important Events، Timeline، Person
3. لایه شخصی: Personal Events، Personal Person، Memories

## اقدام بعدی

TASK-03-005 — Now/Today Calculation

PHASE-03 — Calendar Engine اکنون از blocker اصلی کبیسه عبور کرده است.

## Blocked

- موردی در TASK-03-004 باقی نمانده است.
- تبدیل دقیق Gregorian ↔ Imperial و edge caseهای مرز نوروز در TASK-03-006 و TASK-03-008 باید مطابق همین قاعده و regression testهای Calendar Engine پیاده‌سازی شوند.

## قانون ادامه پروژه

هر اقدام معنادار بعدی باید:
1. یک ID دریافت کند.
2. در CHANGELOG ثبت شود.
3. در صورت تغییر تصمیم/نیازمندی، DECISIONS یا REQUIREMENTS به‌روزرسانی شود.
4. وضعیت ROADMAP و STATUS را همگام کند.
5. اگر سند جدید ایجاد شد، INDEX به‌روزرسانی شود.


## ACT-103 — 2026-10-03
Type: PERSONAL-CRUD
Status: DONE
- Completed Personal Event and Memory update/delete server actions and UI.
- Added yearly recurrence controls to the Personal Event form.
- Ownership remains enforced through authenticated session context.

## ACT-104 — 2026-10-03
Type: FRONTEND-CONTEXT
Status: DONE
- Integrated authenticated personal events/memories into Today.
- Added private markers to Monthly Calendar.
- Kept public and personal visibility separate.

## ACT-105 — 2026-10-03
Type: CALENDAR-REGRESSION
Status: DONE
- Restored the previously validated Gregorian/Imperial conversion implementation after CI detected a malformed restoration.
- Preserved explicit numeric state typing for TypeScript.

## ACT-106 — 2026-10-03
Type: CALENDAR-REGRESSION
Status: DONE
- Restored canonical leap-year implementation with numeric breakpoint cursor typing.

## ACT-107 — 2026-10-03
Type: APPLICATION-CONTENT
Status: DONE
- Added public source lookup contract for richer Event Detail presentation.

## ACT-108 — 2026-10-03
Type: DOCUMENTATION-SYNC
Status: DONE
- Added PHASE-04-IMPLEMENTATION.md, PHASE-05-IMPLEMENTATION.md and PHASE-06-IMPLEMENTATION.md.
- Updated implementation handoff notes and current phase checkpoint.


## ACT-123 — 2026-10-03
Type: DATABASE-QUALITY
Status: DONE
- Added foreign keys and ownership/date indexes to the PostgreSQL schema and initial migration.

## ACT-124 — 2026-10-03
Type: RELIABILITY
Status: DONE
- Public Today/Calendar/Day/Search routes now degrade gracefully when personal storage is unavailable.

## ACT-125 — 2026-10-03
Type: ACCESSIBILITY
Status: DONE
- Added visible keyboard focus treatment and improved mobile bottom-navigation readability.

## ACT-126 — 2026-10-03
Type: CI-CHECKPOINT
Status: IN_PROGRESS
- Current main HEAD: 14aa3cef557c59195f6168cc3ce3c1b4563df826
- Current CI checkpoint: run #94 (in_progress).
- Final Phase-06 promotion remains blocked until runtime/device acceptance gaps are closed.
