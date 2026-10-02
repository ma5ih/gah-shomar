# HISTORICAL-DATE-MODEL — مدل نمایش تاریخ‌های تاریخی

Version: 1.0.0
Status: APPROVED
Task: TASK-01-017
Action: ACT-018
Last updated: 2026-10-02

## 1. هدف

HistoricalDate برای نگهداری تاریخ‌های تاریخی است که ممکن است در منبع با تقویم/فرمت متفاوت ثبت شده باشند.

این مدل باید:
- تاریخ اصلی منبع را حفظ کند.
- معادل شاهنشاهی را نگه دارد.
- uncertainty را از بین نبرد.
- با Calendar Engine سازگار باشد.

## 2. Original Date

بخش اصلی:
- `originalCalendar`
- `originalDate`
- `originalDateText` در صورت نیاز برای حفظ عبارت دقیق منبع

نمونه تقویم:
- gregorian
- julian
- hijri
- hijri_solar
- regnal/era
- unknown

در UI اصلی پروژه، تاریخ شاهنشاهی مرجع نمایش است؛ نگهداری originalCalendar به معنی نمایش آن در UI نیست.

## 3. Imperial Equivalent

`imperialDate` باید ساختار استاندارد Calendar Engine را داشته باشد:
- year
- month
- day

برای بازه:
- start
- end

## 4. Precision / Uncertainty

برای جلوگیری از دقت کاذب:
- EXACT
- APPROXIMATE
- YEAR_ONLY
- MONTH_ONLY
- RANGE
- UNKNOWN

همراه با `note` اختیاری.

## 5. Historical Negative / BCE Dates

برای تاریخ‌های پیش از میلاد باید sign/era به‌صورت صریح نگهداری شود و از تبدیل ساده string/number که باعث ابهام سال صفر یا BCE/CE شود، جلوگیری شود.

## 6. Conversion Authority

تبدیل به ImperialDate توسط Calendar Engine انجام می‌شود.

HistoricalDate نباید خودش الگوریتم تبدیل داشته باشد.

## 7. Conceptual Shape

```ts
type HistoricalDate = {
  originalCalendar: string;
  originalDate?: string;
  originalDateText?: string;
  imperialDate?: ImperialDate;
  precision: "EXACT" | "APPROXIMATE" | "YEAR_ONLY" | "MONTH_ONLY" | "RANGE" | "UNKNOWN";
  start?: HistoricalDate;
  end?: HistoricalDate;
  note?: LocalizedText;
};
```

ساختار recursive بالا صرفاً مفهومی است؛ schema نهایی بازه در Architecture تثبیت می‌شود.

## 8. Rules

- اگر conversion قابل اعتماد نیست، imperialDate نباید ساختگی تولید شود.
- original date باید حفظ شود حتی وقتی imperialDate موجود است.
- منطق UI نباید تقویم منبع را حدس بزند.
- مرز نوروز و قواعد Calendar Engine باید در conversion رعایت شوند.

## 9. Acceptance Mapping

- AC-005
- AC-006
- AC-007
- AC-035
- AC-036

## 10. Status

TASK-01-017: DONE
ACT-018: DONE
Next: TASK-01-018 — Search Requirements
