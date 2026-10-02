# PERSONAL-EVENT-MODEL — مدل تفصیلی Personal Event

Version: 1.0.0
Status: APPROVED
Task: TASK-01-012
Action: ACT-013
Last updated: 2026-10-02

## 1. جایگاه

Personal Event یک Entity خصوصی و متعلق به کاربر است. این Entity عمداً از public Event جداست.

نمونه‌ها:
- birthday
- anniversary
- custom event

## 2. Ownership & Privacy

هر Personal Event باید دارای `ownerUserId` باشد.

دسترسی:
- فقط مالک در MVP می‌تواند آن را مشاهده/ایجاد/ویرایش/حذف کند.
- Personal Event به public content تبدیل نمی‌شود.
- هیچ public event suggestion workflow در MVP وجود ندارد.

## 3. Identity

- `id`
- `ownerUserId`
- `type`
- `title`
- `date`
- `createdAt`
- `updatedAt`

## 4. Type

MVP حداقل این نوع‌ها را پشتیبانی می‌کند:
- `birthday`
- `anniversary`
- `custom`

برای آینده می‌توان typeهای بیشتری افزود بدون اینکه public Event model تغییر کند.

## 5. Date & Recurrence

Personal Event دارای تاریخ اصلی است و می‌تواند recurrence داشته باشد.

برای birthday/anniversary، recurrence سالانه مورد نیاز است.

منطق recurrence و date arithmetic در Calendar Engine/Application Layer قرار می‌گیرد و نباید داخل UI پیاده‌سازی شود.

## 6. Personal Person

Personal Event می‌تواند به یک Personal Person متصل شود.

Personal Person از public Person جداست و برای داده‌هایی مانند:
- نام فرد
- birthday
- anniversary relationship

استفاده می‌شود.

در MVP لازم نیست Personal Person یک public profile یا Person page داشته باشد.

## 7. Share Card

Personal Event منبع داده Share Card است.

Share Card باید بتواند از Personal Event:
- تاریخ شاهنشاهی
- روز هفته
- میلادی کوچک
- اطلاعات رویداد
- theme مرتبط

را دریافت کند.

Share Card Entity مستقل از Personal Event نیست؛ artifact تولیدشده/قابل اشتراک‌گذاری از داده Personal Event است.

## 8. Lifecycle

مالک می‌تواند:
- Create
- Read
- Update
- Delete

انجام دهد.

حذف Personal Event نباید Memory یا public Event مرتبط را حذف کند.

## 9. Conceptual TypeScript Shape

```ts
type PersonalEvent = {
  id: string;
  ownerUserId: string;
  type: "birthday" | "anniversary" | "custom";
  title: string;
  date: ImperialDate;
  recurrence?: PersonalRecurrence;
  personalPersonId?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};
```

این قرارداد مفهومی است و schema/storage نهایی نیست.

## 10. Intentional Deferrals

- exact Account/User schema
- Personal Person detailed model
- recurrence grammar
- storage schema
- authorization implementation
- Share Card rendering implementation
- notification/reminder behavior

Reminder/Notification عمداً خارج از MVP است.

## 11. Acceptance Mapping

- AC-021 — Public vs private
- AC-022 — Personal Event CRUD
- AC-023 — Recurrence
- AC-026 — Personal Share Card
- AC-027 — Search
- AC-031 — Authentication
- AC-032 — Session

## 12. Status

TASK-01-012: DONE
ACT-013: DONE
Next: TASK-01-013 — Important Event & Editorial Selection
