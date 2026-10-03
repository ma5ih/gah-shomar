# SEARCH-REQUIREMENTS — نیازمندی‌های Search

Version: 1.0.0
Status: APPROVED
Task: TASK-01-018
Action: ACT-019
Last updated: 2026-10-02

## 1. هدف

Search باید راه سریع و ساده‌ای برای پیدا کردن محتوای موجود در محصول باشد؛ بدون تبدیل‌شدن به موتور جستجوی پیچیده یا feature-heavy.

## 2. Searchable Entities

MVP:
- Event
- Person
- Historical Period
- Public occasion/category metadata (through Event category/tags)
- Month/date references as a future parser extension
- Personal Event
- Memory

## 3. Query Inputs

حداقل:
- free-text query
- language-aware normalization
- Persian/English support

جستجو باید بتواند تفاوت‌های متداول در فاصله، نیم‌فاصله و شکل حروف را تا حد منطقی normalize کند.

## 4. Result Types

نتیجه باید نوع Entity را مشخص کند:
- Event
- Person
- Period
- Personal Event
- Memory

برای هر نتیجه:
- title/name
- short context
- relevant date when available
- entity type

## 5. Privacy

نتایج public فقط از public approved content می‌آیند.

Personal Event و Memory فقط برای صاحب حساب قابل جستجو هستند.

Search نباید با تغییر query یا indexing، داده خصوصی را public کند.

## 6. Ranking

در MVP ranking ساده و قابل توضیح کافی است:
1. exact/near-exact title/name match
2. prefix/token relevance
3. normalized text relevance
4. date/category context

از ranking پیچیده و غیرقابل توضیح فعلاً اجتناب می‌شود.

## 7. Language

Search باید Persian و English را پشتیبانی کند و در صورت وجود localized aliases امکان match داشته باشد. ماه/تاریخ در این checkpoint parser مستقل ندارند و به extension اختصاصی آینده موکول شده‌اند.

RTL/LTR presentation از query engine جداست.

## 8. Empty / Error

- Empty result: پیام واضح و کوتاه
- Invalid/too-short query: رفتار مشخص و قابل فهم
- Search failure: error state استاندارد
- Loading: state مستقل از نتیجه

## 9. Date Search

Search باید بتواند ارجاع به ماه/تاریخ را در آینده و در صورت پشتیبانی parser، resolve کند؛ اما date parsing پیچیده بخشی از MVP core ranking نیست.

## 10. Conceptual Contract

```ts
type SearchResult = {
  entityType: "event" | "person" | "period" | "personalEvent" | "memory";
  entityId: string;
  title: string;
  context?: string;
  date?: ImperialDate;
  score?: number;
};
```

Score برای ranking داخلی است و لازم نیست در UI نمایش داده شود.

## 11. Acceptance Mapping

- AC-027
- AC-028
- AC-029
- AC-025

## 12. Status

TASK-01-018: DONE
ACT-019: DONE
Next: PHASE-02 — Architecture
