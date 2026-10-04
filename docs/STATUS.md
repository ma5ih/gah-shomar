# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-04 — ACT-252
Current documentation checkpoint: ACT-252 on main
Current implementation HEAD: b552a7b1ad93715f718f7b345772e02592315287
Current visual implementation: ACT-252 full visual-system replacement + no-page-scroll app shell
Latest Theme A validated checkpoint before ACT-252: GitHub Actions #37161733754 — PASS
Latest CI for ACT-252 is running; final human visual/product signoff remains open
Overall status: IN_PROGRESS
Next fresh ACT ID: ACT-253

## شمارش رسمی ریزتسک‌ها

- کل: 204
- DONE: 193
- IN_PROGRESS: 4
- TODO: 6
- DEFERRED: 1
- BLOCKED: 0
- DEPRECATED: 0

این شمارش canonical مستقیماً از ledger فعلی ROADMAP خوانده شده است.

## آخرین اقدام

### ACT-252 — Full visual-system replacement / app shell — IN_PROGRESS
- AppShell now uses a fixed viewport and an internal route stage; browser-level page scrolling is disabled.
- Today route explicitly disables route-stage scrolling and is sized to the available app viewport.
- Replaced the previous design language rather than iterating on the prior skin: typography hierarchy, surfaces, navigation, controls, event rows, calendar cells and motion were rebuilt.
- Mobile navigation is now a compact app dock with SVG icons and a dedicated active state.
- Theme A is reduced to the approved Flat Geometric visual language: solid fills, angular landscape/vector layers, no gradients, no glassmorphism.
- Vazirmatn is loaded through next/font and is the application font.
- 2585 remains ungrouped and Gregorian formatting is explicit; no 1405 output from the Gregorian formatter.
- Today remains centered on the primary date, live clock, today's event list and personal event/memory list; count-only metrics remain removed.
- CI is running on the latest implementation; no final PASS is claimed until observed.
- Human visual/product signoff remains a release gate.

## Visual Theme state

- Theme A: src/frontend/themes/flat-geometric/ — active and substantially rebuilt in ACT-252.
- Theme B: src/frontend/themes/modern-flat-vector/ — untouched / outside current scope.
- Visual source of truth: docs/VISUAL-DESIGN-SEPARATION-WARNING.md.

## Release gates

- explicit editorial approval/public historical event seed
- final human visual signoff
- final human product signoff
- real production/staging deployment validation
- real PWA production validation
- final release version/tag after those gates close