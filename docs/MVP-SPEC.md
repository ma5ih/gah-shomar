# MVP-SPEC — مشخصات MVP

Version: 1.0.0
Status: APPROVED
Last updated: 2026-10-02

## هدف

MVP باید یک محصول واقعی و قابل استفاده از «گاه‌شمار» باشد؛ نه صرفاً نمونه UI یا Month Grid.

## سه ستون MVP

### MVP-CORE-01 — Calendar
- Calendar Engine
- تاریخ خورشیدی شاهنشاهی
- نمایش فقط سال شاهنشاهی در تاریخ اصلی
- میلادی به‌صورت فرعی
- ماه‌ها و قواعد ثبت‌شده در CALENDAR-SPEC
- Today
- Monthly Calendar
- Day Detail
- محاسبات و تبدیل‌های قابل تست

### MVP-CORE-02 — Iranian History & Events
- Today's historical/cultural content
- Event Entity
- Important Events
- Event Detail
- Historical Timeline
- Person Entity
- Source/validation metadata

### MVP-CORE-03 — Personal Layer
- Personal Events
- Personal Person
- Memories
- Recurrence پایه

## قابلیت‌های همراه MVP

- Search
- فارسی + انگلیسی
- RTL/LTR واقعی
- Time-of-day state
- Seasonal state
- PWA baseline

## خارج از MVP اولیه

موارد زیر تا زمانی که هسته محصول پایدار نشده‌اند، جزو MVP ضروری نیستند:
- search ranking بسیار پیشرفته
- شبکه روابط تاریخی بسیار پیچیده
- offline کامل و چندلایه
- سیستم editorial چندکاربره
- analytics پیچیده
- قابلیت‌های اجتماعی
- قابلیت‌های gamification
- هر featureی که صرفاً پیچیدگی را زیاد کند بدون اینکه use case اصلی را بهتر کند

## معیار کلی پذیرش MVP

MVP زمانی آماده است که:
1. تاریخ و تبدیل‌های اصلی درست و تست‌شده باشند.
2. Today و Month Calendar قابل استفاده باشند.
3. Event/Person/Timeline داده‌محور و linked باشند.
4. Personal Events و Memories کار کنند.
5. Search قابل استفاده باشد.
6. فارسی/انگلیسی و RTL/LTR پایه درست باشند.
7. PWA baseline کار کند.
8. UI از نظر ساختار app-like باشد.
9. داده تاریخی مهم source-backed و قابل validation باشد.
10. تست‌های اصلی و QA blockerها بسته شده باشند.
