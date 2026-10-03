# AUTH-ARCHITECTURE — Authentication و Session

Version: 1.0.0
Status: APPROVED
Task: TASK-02-024
Action: ACT-043
Last updated: 2026-10-02

## Scope

MVP authentication:
- register
- login
- logout
- current session

Forgot Password و Account Deletion خارج MVP هستند.

## Account

User:
- id
- username
- normalizedUsername
- passwordHash
- createdAt
- updatedAt

Username:
- unique
- case-insensitive uniqueness
- cross-platform-safe
- chars: a-z, A-Z, 0-9, _ and .
- no spaces/emoji/special characters

Password:
- minimum 8 characters
- plaintext never stored

## Password Security

Password hash در implementation فعلی با `scrypt` به‌صورت salted/adaptive ذخیره می‌شود. تغییر به Argon2id فقط با تصمیم امنیتی/وابستگی مستقل انجام می‌شود.

## Session

Session DB-backed:
- id
- userId
- tokenHash
- createdAt
- lastSeenAt
- revokedAt

Browser فقط session token را در Secure + HttpOnly + SameSite cookie نگه می‌دارد.

Session تا Logout یا explicit revocation معتبر می‌ماند؛ security controls می‌توانند session را revoke کنند.

## Authorization

Personal use caseها userId را از trusted session context می‌گیرند، نه از client input.

## Public Access

Public content بدون login قابل مشاهده است.

## Abuse Protection

State-changing requests باید CSRF-safe باشند و login/register rate limiting برای release hardening پیگیری می‌شود؛ evidence نهایی در `TASK-09-020` بررسی می‌شود.

## Status

TASK-02-024: DONE
ACT-043: DONE
Next: TASK-02-025 — Share Card Architecture
