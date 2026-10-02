# SHARE-CARD-ARCHITECTURE — معماری Personal Share Card

Version: 1.0.0
Status: APPROVED
Task: TASK-02-025
Action: ACT-044
Last updated: 2026-10-02

## Scope

Share Card فقط برای Personal Event است و social system نیست.

## Data Flow

Personal Event → authorization → Share Card DTO → image renderer → PNG/image response → OS/browser Share Sheet.

## Privacy

قبل از render:
- current user session verify می‌شود.
- Personal Event ownership verify می‌شود.
- public event data به‌تنهایی مجوز تولید کارت خصوصی نیست.

## Contents

- Imperial date
- weekday
- small Gregorian date
- personal event details
- selected/theme-derived visual treatment

## Rendering

Image باید artifact واقعی باشد، نه screenshot UI.

Next.js امکان تولید image پویا با ImageResponse را دارد و این قابلیت می‌تواند برای renderer کارت استفاده شود.

## Theme

- birthday: birthday theme
- anniversary/custom: elegant/simple distinct theme
- future themes قابل اضافه‌شدن هستند.

## Share

- Web Share API / browser Share Sheet در صورت پشتیبانی
- fallback save/download در صورت نبود Share API

این قابلیت public feed یا profile sharing ایجاد نمی‌کند.

## Status

TASK-02-025: DONE
ACT-044: DONE
Next: PHASE-03 — Core Backend / Domain / Calendar Engine
