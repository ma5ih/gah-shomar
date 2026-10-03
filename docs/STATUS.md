# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-03
Current phase: PHASE-03 — Core Backend / Domain / Calendar Engine
Overall status: IN_PROGRESS

## وضعیت کلی

| Phase | Status | Progress |
|---|---|---:|
| PHASE-00 Documentation | DONE | 100% |
| PHASE-01 Specification | DONE | 100% |
| PHASE-02 Architecture | DONE | 100% |
| PHASE-03 Core Backend / Calendar Engine | IN_PROGRESS | 75% |
| PHASE-04 Application Backend / Use Cases | TODO | 0% |
| PHASE-05 Frontend Architecture & Design System | TODO | 0% |
| PHASE-06 Core Frontend | TODO | 0% |
| PHASE-07 Visual Polish & PWA | TODO | 0% |
| PHASE-08 Historical Content / Editorial Dataset | TODO | 0% |
| PHASE-09 Integration & QA | TODO | 0% |
| PHASE-10 Release | TODO | 0% |

## نقطه دقیق فعلی

Calendar Engine از blocker اصلی کبیسه عبور کرده و اجزای اصلی محاسباتی آن ساخته شده‌اند.

### DONE در PHASE-03

#### Calendar Engine
- TASK-03-001 — Imperial Date Type
- TASK-03-002 — Year/Month/Day Rules
- TASK-03-003 — Month Lengths
- TASK-03-004 — Leap-Year Rules
- TASK-03-005 — Now/Today Calculation
- TASK-03-006 — Gregorian ↔ Imperial Conversion
- TASK-03-008 — Year Boundary / Nowruz Edge Cases
- TASK-03-009 — Date Arithmetic
- TASK-03-010 — Weekday Calculation
- TASK-03-011 — Time-of-day State
- TASK-03-012 — Seasonal State

#### Domain / Content Foundation
- TASK-03-013 تا TASK-03-022 — DONE

### IN_PROGRESS

- TASK-03-007 — Historical Date Conversion
  - Gregorian exact conversion: DONE
  - Solar Hijri exact mapping: DONE
  - unsupported historical calendars: intentionally deferred until converter/policy exists
  - current status: IN_PROGRESS because the full historical-date contract is not closed yet.
- TASK-03-023 — Calendar Unit Tests / CI Validation
- TASK-03-024 — Conversion Tests
- TASK-03-025 — Edge-case Tests

### TODO
- TASK-03-026 — Domain Model Tests
- TASK-03-027 — Engine Review

## دقیقاً چه چیزی ساخته شده؟

### Leap Year
Implementation از break-pointهای خانواده Borkowski/Jalaali استفاده می‌کند؛ چرخه ۳۳ ساله ثابت نیست.

نمونه‌های regression:
- ۱۴۰۳ → ۲۵۸۳: کبیسه
- ۱۴۰۸ → ۲۵۸۸: کبیسه
- ۱۴۳۶ → ۲۶۱۶: کبیسه
- ۱۴۴۰ → ۲۶۲۰: عادی
- ۱۴۴۱ → ۲۶۲۱: کبیسه

سال فعلی:
- ۲۵۸۵: عادی
- اسپند ۲۵۸۵: ۲۹ روز

### Conversion
`src/domain/calendar/conversion.ts`
- Gregorian → Imperial
- Imperial → Gregorian
- JDN-based
- timezone-independent
- validation
- round-trip regression

### Today
`src/domain/calendar/today.ts`
- pure function
- runtime timezone را خودش تعیین نمی‌کند
- مرز نوروز را از conversion engine می‌گیرد

### Historical Conversion
`src/domain/calendar/historical-conversion.ts`
- Gregorian exact
- Solar Hijri exact
- preservation of original date
- عدم تولید ImperialDate جعلی برای precision غیر EXACT

### Date Arithmetic
`src/domain/calendar/date-arithmetic.ts`
- add days
- signed difference
- عبور ماه/سال/روز کبیسه
- JDN-based

### Weekday
`src/domain/calendar/weekday.ts`
- شنبه تا جمعه
- timezone-independent

### Time / Season
- `time-of-day.ts`: morning / noon / sunset / night
- `season.ts`: spring / summer / autumn / winter

## تست و CI

Test files برای calendar/month/leap/conversion/historical/today/arithmetic/weekday/time/season ثبت شده‌اند.

`.github/workflows/ci.yml` شامل:
1. checkout
2. Node 22
3. npm install
4. TypeScript typecheck
5. Vitest
6. production build

**مهم:** GitHub هنوز workflow run موفقی برای این CI گزارش نکرده است. بنابراین وضعیت فنی فعلی «configured / not yet verified» است، نه PASS.

## اسناد همگام‌شده اخیر

- README.md
- docs/PROJECT.md
- docs/ROADMAP.md
- docs/STATUS.md
- docs/CHANGELOG.md
- docs/DECISIONS.md
- docs/REQUIREMENTS.md
- docs/ARCHITECTURE.md
- docs/QUALITY-ARCHITECTURE.md
- docs/INDEX.md
- docs/CALENDAR-SPEC.md
- docs/CALENDAR-ENGINE-OPEN-QUESTION.md

## آخرین اقدامات

- ACT-060 — Leap-Year correction — DONE
- ACT-061 — Gregorian ↔ Imperial conversion — DONE
- ACT-062 — Today calculation — DONE
- ACT-063 — Historical conversion gateway — IN_PROGRESS
- ACT-064 — Date arithmetic — DONE
- ACT-065 — Weekday — DONE
- ACT-066 — Time-of-day — DONE
- ACT-067 — Season — DONE
- ACT-068 — CI workflow — DONE
- ACT-069 — README sync — DONE
- ACT-070 — PROJECT sync — DONE
- ACT-071 — ARCHITECTURE sync — DONE
- ACT-072 — QUALITY-ARCHITECTURE sync — DONE
- ACT-073 — Decisions sync — DONE
- ACT-074 — Canonical status rebuild — DONE
- ACT-075 — Canonical roadmap/task ledger — DONE
- ACT-076 — Complete changelog sync — DONE
- ACT-077 — Quality/calendar requirements sync — DONE
- ACT-078 — Calendar Engine resolution note sync — DONE
- ACT-079 — Documentation index sync — DONE
- ACT-080 — Requirements version sync — DONE

## Next Task — دقیقاً از اینجا ادامه بده

**TASK-03-023 — Calendar Unit Tests / CI Validation**

ترتیب پیشنهادی بعدی:
1. مشاهده اولین CI run
2. رفع type/test/build errors در صورت وجود
3. تکمیل regression suite
4. بستن TASK-03-023
5. بستن TASK-03-024
6. بستن TASK-03-025
7. TASK-03-026 Domain Model Tests
8. TASK-03-027 Engine Review
9. پایان PHASE-03
10. ورود به PHASE-04 — Application Backend / Use Cases

## قانون ادامه
هیچ task را صرفاً به دلیل وجود کد DONE نکن؛ implementation + tests + documentation + validation باید با هم وضعیت را تعیین کنند.
