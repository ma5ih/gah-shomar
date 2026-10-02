# SOURCE-EDITORIAL-MODEL — Sources, Verification و Editorial Policy

Version: 1.0.0
Status: APPROVED
Task: TASK-01-015
Action: ACT-016
Last updated: 2026-10-02

## 1. Source Entity

Source یک Entity مستقل برای ثبت منشأ اطلاعات تاریخی/محتوایی است.

فیلدهای پایه:
- `id`
- `title`
- `author` اختیاری
- `publisher` اختیاری
- `sourceType`
- `url` اختیاری
- `publicationDate` اختیاری
- `accessedAt` اختیاری
- `referenceDetail`
- `language`
- `notes`

## 2. Source Types

نمونه taxonomy:
- primary_document
- archival_record
- book
- academic_work
- institutional_source
- reputable_reference
- contemporary_report
- interview/oral_history
- other

Taxonomy قابل توسعه است.

## 3. Verification

محتوا باید وضعیت زیر را داشته باشد:
- PROPOSED
- RESEARCHING
- VERIFIED
- APPROVED
- REJECTED

VERIFIED یعنی شواهد کافی برای بررسی داخلی وجود دارد؛ APPROVED تصمیم editorial برای انتشار است.

## 4. Confidence

برای ادعاها/تاریخ‌های نامطمئن، confidence باید ثبت شود:
- HIGH
- MEDIUM
- LOW

Confidence جایگزین source نیست.

## 5. Editorial Policy

- داده تاریخی مهم بدون source وارد production نشود.
- ادعاهای متعارض باید به‌صورت منصفانه و منبع‌دار مدیریت شوند.
- درباره موضوعات سیاسی/معاصر، factual claims باید source-backed باشند و دیدگاه‌ها/تفسیرهای مورد اختلاف به منبع یا گوینده نسبت داده شوند.
- نباید از زبان تبلیغاتی، تحریک‌آمیز یا تحریف‌کننده برای تبدیل داده تاریخی به پیام سیاسی استفاده شود.
- تاریخ نامطمئن نباید به تاریخ دقیقِ ظاهری تبدیل شود.
- source نباید صرفاً به‌دلیل وجود یک ادعا به معنی صحت قطعی آن تلقی شود.

## 6. Editorial Note

هر Entity می‌تواند editorial note داخلی داشته باشد تا:
- دلیل انتخاب source
- اختلاف منابع
- ابهام تاریخ
- نیاز به بررسی بیشتر

ثبت شود. Editorial note برای public UI نیست.

## 7. Conceptual Shape

```ts
type Source = {
  id: string;
  title: string;
  author?: string;
  publisher?: string;
  sourceType: string;
  url?: string;
  publicationDate?: string;
  accessedAt?: string;
  referenceDetail: string;
  language?: string;
  notes?: string;
};
```

## 8. Acceptance Mapping

- AC-016
- AC-035
- AC-036
- AC-039

## 9. Status

TASK-01-015: DONE
ACT-016: DONE
Next: TASK-01-016 — Media/Asset Content Model
