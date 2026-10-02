# PERSON-MODEL — مدل تفصیلی Person

Version: 1.0.0
Status: APPROVED
Task: TASK-01-010
Action: ACT-011
Last updated: 2026-10-02

## 1. جایگاه

Person یک Entity مستقل برای نمایش و نگهداری اطلاعات افراد مرتبط با تاریخ، فرهنگ و رویدادهای پروژه است. Person با Event رابطه دارد اما بخشی از Event نیست.

Person عمومی است و با Personal Person که برای لایه شخصی کاربر استفاده می‌شود تفاوت دارد.

## 2. اهداف

- ساخت هویت پایدار برای هر فرد
- جلوگیری از تکرار اطلاعات یک فرد در Eventهای متعدد
- امکان صفحه مستقل فرد
- اتصال فرد به Event، Period و افراد مرتبط
- پشتیبانی از فارسی و انگلیسی
- فراهم‌کردن پایه مناسب برای Search و Timeline

## 3. Identity

هر Person باید داشته باشد:
- `id`: شناسه پایدار و یکتا
- `slug`: شناسه قابل استفاده در URL، در صورت نیاز
- `status`: وضعیت محتوایی
- `visibility`: وضعیت نمایش
- `createdAt`
- `updatedAt`

برای MVP محتوای عمومی قابل نمایش باید APPROVED باشد.

## 4. Content

فیلدهای اصلی:
- `name`: نام اصلی
- `displayName`: نام مناسب نمایش
- `aliases`: نام‌ها/املای جایگزین
- `shortBio`: معرفی کوتاه
- `biography`: معرفی کامل، در صورت وجود
- `tags`

متن‌های قابل نمایش باید از قرارداد localization استفاده کنند و جزئیات LocalizedText در Architecture نهایی می‌شود.

## 5. Dates

در صورت وجود داده معتبر:
- `birthDate`
- `deathDate`
- امکان ثبت عدم قطعیت یا تقریبی‌بودن تاریخ
- امکان نگهداری تاریخ اصلی منبع و معادل شاهنشاهی

منطق تبدیل تاریخ داخل Person نیست و باید توسط Calendar Engine انجام شود.

## 6. Historical Context

Person می‌تواند به این موارد متصل شود:
- `periodIds`
- `eventIds`
- `relatedPersonIds`

روابط باید ID-based باشند و از کپی‌کردن Entity کامل داخل Person جلوگیری شود.

## 7. Media

Person می‌تواند:
- یک تصویر شاخص
- تصاویر اضافی
- اسناد مرتبط

داشته باشد. Media Asset مدل مستقل خود را در TASK-01-016 خواهد داشت.

## 8. Sources & Editorial

Person باید قابلیت اتصال به:
- `sourceIds`
- وضعیت verification
- confidence
- editorial note

را داشته باشد.

جزئیات Source/Verification در TASK-01-015 تعیین می‌شود.

## 9. Categories / Roles

Person می‌تواند metadata توصیفی درباره نقش یا حوزه فعالیت داشته باشد؛ مانند:
- historical
- cultural
- political
- royal
- military
- artistic
- scientific
- literary
- religious
- other

این برچسب‌ها توصیفی‌اند و به‌خودی‌خود ارزش‌گذاری یا تأیید یک دیدگاه محسوب نمی‌شوند.

## 10. Relationships

روابط مجاز:
- Person ↔ Event
- Person ↔ Person
- Person ↔ Historical Period
- Person ↔ Source
- Person ↔ Media

نوع دقیق relationship بین افراد در TASK-01-014 مشخص خواهد شد.

## 11. Status

برای محتوای عمومی:
`PROPOSED → RESEARCHING → VERIFIED → APPROVED`
و در صورت نیاز:
`REJECTED`

تنها APPROVED در public MVP قابل نمایش است.

## 12. Conceptual TypeScript Shape

```ts
type Person = {
  id: string;
  slug?: string;
  status: PersonStatus;
  visibility: "PUBLIC";
  name: LocalizedText;
  displayName?: LocalizedText;
  aliases: LocalizedText[];
  shortBio: LocalizedText;
  biography?: LocalizedText;
  birthDate?: HistoricalDate;
  deathDate?: HistoricalDate;
  tags: string[];
  periodIds: string[];
  eventIds: string[];
  relatedPersonIds: string[];
  sourceIds: string[];
  mediaIds: string[];
  roleTags?: string[];
  featured?: boolean;
  heroMediaId?: string;
  createdAt: string;
  updatedAt: string;
};
```

این TypeScript صرفاً قرارداد مفهومی است و schema/storage نهایی نیست.

## 13. Intentional Deferrals

در این سند نهایی نشده:
- database schema
- exact HistoricalDate structure
- exact relationship types
- Source schema
- Media schema
- Search index fields
- localization implementation
- storage constraints

این موارد در Taskهای تخصصی بعدی یا Architecture تعیین می‌شوند.

## 14. Acceptance Mapping

- AC-015 — Structured historical data
- AC-016 — Source/validation
- AC-020 — Person page
- AC-027 — Search
- AC-028 — Persian/English
- AC-029 — RTL/LTR

## 15. Status

TASK-01-010: DONE
ACT-011: DONE
Next: TASK-01-011 — Memory Model
