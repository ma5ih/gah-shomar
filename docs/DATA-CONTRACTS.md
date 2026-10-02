# DATA-CONTRACTS — Schema و Internal Contract Foundation

Version: 1.0.0
Status: APPROVED
Tasks: TASK-02-011 تا TASK-02-018
Actions: ACT-030 تا ACT-037
Last updated: 2026-10-02

## اصول
Storage schema از conceptual model جداست. Entity contracts ابتدا در domain تعریف و سپس به DB mapping می‌شوند.

## Core Schemas
Event, Person, Memory, Personal Event، Historical Period، Source و Media هرکدام schema مستقل دارند.

## IDs
تمام relationها ID-based هستند. Entity کامل داخل Entity دیگر embed نمی‌شود مگر برای DTO/query projection.

## Event/Person
public entities دارای editorial status و source relation هستند.

## Personal Data
Memory و Personal Event دارای ownerUserId هستند و ownership در application/data layer enforce می‌شود.

## Historical Date
HistoricalDate شامل original calendar/date، imperial equivalent و precision/uncertainty است.

## Internal Contracts
Application خروجی‌ها را به DTOهای read/write جدا تقسیم می‌کند:
- Query DTO
- Command Input
- Command Result
- Error contract

DB row type مستقیماً به UI export نمی‌شود.

## API Boundary
Route Handler یا Server Function فقط application use case را فراخوانی می‌کند.

## Result
TASK-02-011 تا TASK-02-018 DONE.
