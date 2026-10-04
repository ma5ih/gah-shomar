# UX / PRODUCT CONSISTENCY AUDIT — ACT-249

Date: 2026-10-04
Status: AUTOMATED/STATIC AUDIT COMPLETE — HUMAN SIGNOFF EXCLUDED BY SCOPE

## Contract checks

- Imperial calendar remains the single primary date system.
- Gregorian remains secondary.
- Today remains the central entry experience.
- Public and personal data remain separated.
- Theme A remains the only active visual theme.
- Theme B remains outside scope.
- PWA and authentication remain part of the MVP.
- Historical public content remains intentionally gated behind editorial approval.

## Objective UX issues found and fixed

### 1. Language switch lost the user's current route
The header language control previously navigated to /, discarding the active route and query state.

Fixed: locale switching now preserves the current pathname and current query parameters while replacing only lang.

### 2. Calendar interaction hint was not localized
The calendar always displayed Swipe even in Persian.

Fixed: Persian and English swipe guidance is now localized.

### 3. Calendar month title was not localized
The calendar heading used the domain month name directly, so English mode could display Persian month names.

Fixed: month headings now use locale-aware month labels.

### 4. Calendar query parameters could cause avoidable runtime errors
Malformed/out-of-range year or month query parameters could reach the month query layer.

Fixed: invalid calendar query values fall back to the current date context.

### 5. Calendar day accessibility labels were incomplete
Day cells had grid semantics but did not expose the full date as an accessible label.

Fixed: the grid and each date cell now expose localized labels.

### 6. New personal records used a hard-coded date
The Personal page used a fixed sample date for new memories/events.

Fixed: new personal records now default to the actual current Imperial date.

### 7. Personal page exposed an internal-looking user ID
The personal hero displayed the first characters of the internal user ID.

Fixed: it now presents a product-level Personal space / فضای شخصی heading.

### 8. Post-auth next action was unclear
Successful authentication displayed a message without a direct destination.

Fixed: the success state now contains a direct link to the Personal area.

## Remaining release gates

The following are deliberately not closed by this audit:

- historical editorial approval/public seed;
- human visual signoff;
- human end-to-end product signoff;
- real production/staging deployment and PWA validation without a supplied URL.

No human approval is claimed by this audit.
