# MEDIA-MODEL — مدل Media / Asset

Version: 1.0.0
Status: APPROVED
Task: TASK-01-016
Action: ACT-017
Last updated: 2026-10-02

## 1. جایگاه

Media Asset یک Entity مستقل برای فایل‌های تصویری و اسناد مرتبط با Event، Person، Period و Memory است.

Media از Entity محتوایی جداست تا یک asset بتواند بدون کپی‌شدن، در چند context استفاده شود.

## 2. Asset Types

MVP:
- image
- document

برای آینده می‌توان audio/video را اضافه کرد بدون تغییر مدل محتوایی اصلی.

## 3. Identity

- `id`
- `type`
- `storageKey` یا reference
- `mimeType`
- `fileName` اختیاری
- `size` اختیاری
- `createdAt`
- `updatedAt`

## 4. Image Metadata

برای image:
- width
- height
- altText
- caption
- credit
- sourceId
- focalPoint اختیاری

Hero image باید بتواند metadata لازم برای نمایش حرفه‌ای داشته باشد.

## 5. Documents

برای document:
- title
- description
- sourceId
- file metadata

## 6. Relationships

Media می‌تواند به:
- Event
- Person
- Historical Period
- Memory
- Personal Event Share Card artifact

متصل شود.

داده خصوصی Memory نباید با public media access قاطی شود.

## 7. Rights / Provenance

برای هر asset مهم:
- source/provenance
- credit
- rights/license note در صورت وجود

باید قابل ثبت باشد.

## 8. Conceptual Shape

```ts
type MediaAsset = {
  id: string;
  type: "image" | "document";
  storageKey: string;
  mimeType: string;
  fileName?: string;
  size?: number;
  width?: number;
  height?: number;
  altText?: LocalizedText;
  caption?: LocalizedText;
  credit?: string;
  sourceId?: string;
  focalPoint?: { x: number; y: number };
  createdAt: string;
  updatedAt: string;
};
```

## 9. Acceptance Mapping

- AC-017
- AC-018
- AC-024
- AC-026

## 10. Status

TASK-01-016: DONE
ACT-017: DONE
Next: TASK-01-017 — Historical Date Representation
