# MEMORY-MODEL — مدل تفصیلی Memory

Version: 1.0.0
Status: APPROVED
Task: TASK-01-011
Action: ACT-012
Last updated: 2026-10-02

## 1. جایگاه

Memory یک Entity خصوصی متعلق به کاربر است که برای ثبت یک خاطره یا یادداشت شخصی مرتبط با یک تاریخ استفاده می‌شود.

Memory با Personal Event تفاوت دارد:
- Personal Event یک رویداد شخصی ساختاریافته است.
- Memory یک محتوای خاطره/یادداشت شخصی است.

## 2. Privacy

Memory به‌صورت پیش‌فرض خصوصی است و فقط مالک آن به آن دسترسی دارد.

هیچ public feed، profile یا social graph برای Memory در MVP وجود ندارد.

## 3. Identity

- `id`
- `ownerUserId`
- `date`
- `createdAt`
- `updatedAt`

مالکیت باید در لایه data/application enforce شود، نه صرفاً در UI.

## 4. Content

فیلدهای اصلی:
- `title` اختیاری
- `text` محتوای خاطره
- `tags` اختیاری
- `mediaIds` اختیاری
- `personIds` اختیاری برای افرادی که کاربر در خاطره مرتبط می‌کند
- `eventIds` اختیاری برای اتصال به رویدادهای عمومی، بدون تبدیل Memory به محتوای عمومی

## 5. Date

هر Memory حداقل یک تاریخ اصلی دارد.

تاریخ باید با Calendar Engine نگهداری/نمایش داده شود و از منطق تقویم در UI یا Memory جلوگیری شود.

برای MVP، Memory می‌تواند به یک روز مشخص متصل باشد. بازه‌های پیچیده یا چندتاریخی خارج از این مدل پایه هستند مگر در Architecture/Requirements بعدی نیازشان اثبات شود.

## 6. Attachments

Memory می‌تواند به Media Asset متصل شود:
- عکس
- سند
- سایر assetهای مجاز

Media Asset مدل مستقل دارد.

## 7. Relationship

Memory می‌تواند به:
- Personal Event
- Person
- Public Event

متصل شود، اما این روابط صرفاً برای context شخصی هستند و سطح visibility آن‌ها را تغییر نمی‌دهند.

## 8. Deletion / Lifecycle

Memory قابل ایجاد، ویرایش و حذف توسط مالک است.

حذف نباید باعث حذف Entityهای عمومی یا Personal Eventهای دیگر شود.

## 9. Conceptual TypeScript Shape

```ts
type Memory = {
  id: string;
  ownerUserId: string;
  date: ImperialDate;
  title?: string;
  text: string;
  tags: string[];
  mediaIds: string[];
  personIds: string[];
  eventIds: string[];
  personalEventIds: string[];
  createdAt: string;
  updatedAt: string;
};
```

این shape قرارداد مفهومی است و schema/storage نهایی نیست.

## 10. Intentional Deferrals

- exact user/account ID contract
- storage schema
- media schema
- rich text policy
- encryption/at-rest details
- retention/backups
- search indexing strategy
- sync/offline conflict handling

این موارد در Architecture و Search specification تعیین می‌شوند.

## 11. Acceptance Mapping

- AC-024 — Memory
- AC-025 — Privacy separation
- AC-027 — Search
- AC-028 — Persian/English
- AC-029 — RTL/LTR

## 12. Status

TASK-01-011: DONE
ACT-012: DONE
Next: TASK-01-012 — Personal Event Model
