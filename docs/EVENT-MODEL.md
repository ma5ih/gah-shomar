# EVENT MODEL — مدل تفصیلی Event

Version: 1.0.0
Status: APPROVED
Task: TASK-01-009
Action: ACT-010
Last updated: 2026-10-02

## 1. هدف

Event یک Entity محتوایی مستقل برای رویدادها و مناسبت‌های عمومی گاه‌شمار است. این مدل باید بتواند رویدادهای تاریخی، ملی، فرهنگی، تمدنی، دودمانی، سلطنتی، شخصیتی و معاصر را بدون وابستگی به UI نگهداری و به Entityهای دیگر متصل کند.

**مرز مهم:** Personal Event یک Entity جداست و نباید با Event عمومی در یک مدل دسترسی/مالکیت ادغام شود.

## 2. هویت و وضعیت

هر Event باید حداقل این مفاهیم را داشته باشد:
- `id` — شناسه پایدار و یکتا
- `slug` — شناسه قابل استفاده برای route/URL در صورت نیاز
- `status` — وضعیت انتشار/اعتبار محتوا
- `visibility` — وضعیت عمومی/خصوصی؛ Event عمومی در MVP عمومی است
- `createdAt`
- `updatedAt`

### Editorial status

چرخه محتوای تاریخی:
`PROPOSED → RESEARCHING → VERIFIED → APPROVED`

و در صورت نیاز:
`REJECTED`

فقط محتوای مناسب برای انتشار عمومی و دارای وضعیت `APPROVED` وارد تجربه عمومی MVP می‌شود.

## 3. عنوان و متن

Event باید از محتوای ساختاریافته پشتیبانی کند:
- `title`
- `shortTitle` اختیاری
- `summary`
- `description` یا متن کامل
- `tags`

عنوان و متن باید قابلیت فارسی و انگلیسی داشته باشند؛ قرارداد دقیق Localization در specification مربوط به Localization و Architecture تثبیت می‌شود.
UI نباید متن اصلی Event را hard-code کند.

## 4. تاریخ

Event باید بتواند یک یا چند تاریخ مرتبط داشته باشد.

در سطح مدل:
- `date` یا مجموعه تاریخ‌های Event
- امکان `startDate` / `endDate` برای رویدادهای دارای بازه
- پشتیبانی از تاریخ تکرارشونده/سالانه در صورت نیاز
- امکان نگهداری تاریخ اصلی تاریخی و معادل شاهنشاهی

جزئیات دقیق نوع Date، تبدیل تقویمی و edge caseها در `CALENDAR-SPEC.md` و `TASK-01-017 — Historical Date Representation` تثبیت می‌شوند؛ Event Model نباید منطق تبدیل تقویم را داخل خود نگه دارد.

## 5. دسته‌بندی

Event باید حداقل یک category داشته باشد و در صورت نیاز چند tag.

دسته‌های محصول:
- `national`
- `patriotic`
- `historical`
- `cultural`
- `tradition`
- `civilizational`
- `dynastic`
- `royal`
- `personality`
- `contemporary`
- `protest_movement`

این دسته‌بندی descriptive است و به‌تنهایی نباید ادعای ارزشی درباره یک رویداد ایجاد کند.

## 6. Entity Relationships

Event می‌تواند به Entityهای زیر متصل شود:
- Person
- Historical Period / Timeline
- Related Event
- Source
- Media Asset
- Occasion/Category metadata

رابطه‌ها باید با ID پایدار انجام شوند و اطلاعات تکراری در چند محل ذخیره نشود.

## 7. مکان

Event می‌تواند metadata مکانی داشته باشد، اما:
- Map/Location experience در MVP وجود ندارد.
- وجود فیلد مکان به معنی فعال شدن قابلیت نقشه نیست.
- مکان در صورت وجود می‌تواند در قالب متن/structured metadata نگهداری شود تا در آینده قابل توسعه باشد.

## 8. منابع و اعتبارسنجی

Event تاریخی مهم باید بتواند به یک یا چند Source متصل شود.

حداقل metadata مورد انتظار:
- source ID/reference
- source type
- citation/reference detail
- verification state
- confidence در صورت نیاز
- editorial note در صورت نیاز

مدل کامل Source/Validation در `TASK-01-015` تعریف می‌شود.

## 9. رسانه

Event می‌تواند به Media Asset متصل شود:
- hero image
- additional images
- documents

Media باید با ID/reference نگهداری شود و فایل/URL یا منطق نمایش نباید در Event به‌صورت hard-code تکرار شود.
مدل کامل Media در `TASK-01-016` تعریف می‌شود.

## 10. Recurrence

Event عمومی می‌تواند برای مناسبت‌های سالانه یا رویدادهای تکرارشونده metadata recurrence داشته باشد.
قواعد recurrence باید از Calendar Engine استفاده کنند و نباید منطق تاریخ داخل Event ذخیره شود.
Recurrence دقیق در مدل و use caseهای بعدی تکمیل می‌شود.

## 11. Presentation metadata

Event می‌تواند metadata لازم برای تجربه محصول داشته باشد، از جمله:
- `shortTitle`
- `heroMediaId`
- `featured`
- `sortOrder` در صورت نیاز editorial
- `tags`

این metadata نباید جایگزین منطق Editorial Selection شود؛ انتخاب Important Events در `TASK-01-013` مشخص خواهد شد.

## 12. نمونه مفهومی

نمونه زیر قرارداد مفهومی است، نه schema نهایی دیتابیس:

```ts
type Event = {
  id: string;
  slug?: string;
  status: "PROPOSED" | "RESEARCHING" | "VERIFIED" | "APPROVED" | "REJECTED";
  title: LocalizedText;
  shortTitle?: LocalizedText;
  summary: LocalizedText;
  description?: LocalizedText;

  dates: EventDate[];
  category: EventCategory;
  tags: string[];

  personIds: string[];
  periodIds: string[];
  relatedEventIds: string[];
  sourceIds: string[];
  mediaIds: string[];

  place?: EventPlace;
  recurrence?: EventRecurrence;

  featured?: boolean;
  heroMediaId?: string;

  createdAt: string;
  updatedAt: string;
};
```

`LocalizedText`، `EventDate`، `EventPlace` و `EventRecurrence` در specification/Architecture مربوط به خودشان نهایی می‌شوند.

## 13. قواعد مهم

1. Event عمومی و Personal Event دو Entity متفاوت هستند.
2. Event نباید منطق Calendar Engine را داخل خود اجرا کند.
3. Event نباید به UI وابسته باشد.
4. Event تاریخی مهم بدون source/validation مناسب نباید وارد محتوای APPROVED شود.
5. رابطه‌ها با ID انجام می‌شوند.
6. رسانه‌ها reference-based هستند.
7. فارسی/انگلیسی از ابتدا در مدل محتوا در نظر گرفته می‌شوند.
8. Important Event یک Event با editorial selection است، نه Entity کاملاً جدا.
9. Map/Location UI در MVP فعال نیست.
10. هر تغییر در مدل Event که روی requirements اثر بگذارد باید با REQ/DEC جدید ثبت شود.

## 14. مواردی که عمداً هنوز نهایی نشده‌اند

- schema دقیق ذخیره‌سازی
- Historical Date Representation
- Source/Validation schema
- Media Asset schema
- Search indexing fields
- Timeline/Period relationship details
- recurrence rule grammar
- localization contract
- database-specific constraints

## 15. Acceptance Mapping

- AC-015 — Event ساختاریافته و data-driven
- AC-016 — source metadata و validation
- AC-017 — Important Events و hero media
- AC-018 — Event Detail و اطلاعات ساختاریافته
- AC-019 — اتصال به Timeline
- AC-020 — اتصال به Person
- AC-038 — عدم ورود قابلیت خارج از Scope

## 16. وضعیت

TASK-01-009: DONE
ACT-010: DONE
Next: TASK-01-010 — Person Model