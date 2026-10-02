# IMPORTANT-EVENTS-MODEL — مدل Important Event و Editorial Selection

Version: 1.0.0
Status: APPROVED
Task: TASK-01-013
Action: ACT-014
Last updated: 2026-10-02

## 1. جایگاه

Important Event یک Entity جدید نیست. یک public Event است که با metadata و فرآیند editorial برای نمایش در بخش «رویدادهای مهم» انتخاب شده است.

## 2. Selection

Selection باید بر اساس معیارهای قابل ثبت انجام شود:
- relevance to Iranian history/culture
- historical/cultural significance
- source availability
- editorial completeness
- date confidence
- suitability for the monthly Important Events experience

این معیارها برای انتخاب و سازمان‌دهی محتوا هستند، نه رتبه‌بندی ارزشی افراد یا گروه‌ها.

## 3. Required Presentation Metadata

برای Event منتخب:
- `featured: true`
- `heroMediaId`
- `sortOrder` یا معادل آن
- `shortTitle`
- `summary`

Hero image برای Important Event الزامی است. صفحه جزئیات می‌تواند تصاویر و اسناد بیشتری داشته باشد.

## 4. Detail Experience

صفحه Event منتخب باید بتواند نمایش دهد:
- hero
- title/date
- summary
- full narrative
- timeline
- people
- historical period
- documents/media
- sources
- related events
- link to Timeline

## 5. Editorial Status

فقط Eventهای APPROVED وارد public Important Events می‌شوند.

انتخاب editorial از status محتوایی جداست؛ featured بودن به‌تنهایی محتوای تأییدنشده را public نمی‌کند.

## 6. Monthly Selection

سیستم باید بتواند بر اساس تاریخ Event و Calendar Engine، Eventهای منتخب یک ماه را بازیابی کند.

منطق تاریخ نباید داخل UI یا selection metadata قرار گیرد.

## 7. Conceptual Shape

```ts
type ImportantEventSelection = {
  eventId: string;
  featured: true;
  heroMediaId: string;
  sortOrder?: number;
  editorialNote?: string;
};
```

این shape قرارداد مفهومی است و storage schema نهایی نیست.

## 8. Acceptance Mapping

- AC-017
- AC-018
- AC-019
- AC-016

## 9. Status

TASK-01-013: DONE
ACT-014: DONE
Next: TASK-01-014 — Timeline & Entity Relationships
