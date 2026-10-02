# TIMELINE-MODEL — مدل Timeline و روابط Entityها

Version: 1.0.0
Status: APPROVED
Task: TASK-01-014
Action: ACT-015
Last updated: 2026-10-02

## 1. Timeline

Timeline یک ساختار مستقل برای نمایش دوره‌ها و توالی رویدادهای تاریخی ایران است.

دو Entity اصلی:
- Historical Period
- Event

Person نیز می‌تواند به Period و Event متصل شود.

## 2. Historical Period

Period باید حداقل داشته باشد:
- `id`
- `slug`
- `name`
- `summary`
- `description` اختیاری
- `startDate`
- `endDate` اختیاری
- `eventIds`
- `personIds`
- `parentPeriodId` اختیاری
- `sourceIds`
- `mediaIds`
- `status`
- `createdAt`
- `updatedAt`

تاریخ‌ها از Historical Date Representation استفاده می‌کنند.

## 3. Relationship Types

در MVP رابطه‌ها باید ساده و ID-based باشند:
- Person → Event
- Person → Period
- Person → Person
- Event → Event
- Event → Period
- Period → Period

رابطه Person ↔ Person می‌تواند metadata توصیفی مانند `relationType` داشته باشد، ولی taxonomy کامل آن به مرور و با نیاز واقعی تثبیت می‌شود.

## 4. Related Events

Related Event فقط برای ارتباط محتوایی است و به معنی یکی‌بودن، علیت قطعی یا تأیید یک روایت خاص نیست.

## 5. Timeline Ordering

ترتیب Timeline بر اساس تاریخ‌های نرمال‌شده Calendar Engine انجام می‌شود.

برای تاریخ‌های تقریبی یا دارای عدم قطعیت، uncertainty باید حفظ شود و ordering نباید دقت کاذب ایجاد کند.

## 6. Public Visibility

فقط Period/Event/Personهای APPROVED در public Timeline نمایش داده می‌شوند.

## 7. Conceptual Shape

```ts
type HistoricalPeriod = {
  id: string;
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  description?: LocalizedText;
  startDate: HistoricalDate;
  endDate?: HistoricalDate;
  eventIds: string[];
  personIds: string[];
  parentPeriodId?: string;
  sourceIds: string[];
  mediaIds: string[];
  status: EditorialStatus;
  createdAt: string;
  updatedAt: string;
};
```

## 8. Acceptance Mapping

- AC-019
- AC-020
- AC-015
- AC-016

## 9. Status

TASK-01-014: DONE
ACT-015: DONE
Next: TASK-01-015 — Sources, Verification & Editorial Policy
