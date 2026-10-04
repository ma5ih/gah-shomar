# STATUS — وضعیت لحظه‌ای پروژه

Last updated: 2026-10-04 — ACT-253
Current documentation checkpoint: ACT-253 on main
Current implementation HEAD: 9943978a4b9fe317bdc3091ac3972a14fbe9549a
Current visual implementation: ACT-253 visual-only redesign on the original wireframe/app shell
Latest Theme A validated checkpoint before ACT-252: GitHub Actions #37161733754 — PASS
Latest CI for ACT-253 is running; final human visual/product signoff remains open
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

### ACT-253 — Visual redesign with original wireframe preserved — IN_PROGRESS
- Restored AppShell to the exact pre-ACT-252 wireframe/structure: same topbar, main content region, PWA prompt position, and bottom navigation structure.
- Kept Today/page markup unchanged; the redesign is implemented in the visual layer rather than by changing the information architecture.
- Reworked typography scale, spacing rhythm, button geometry, navigation states, cards, event rows, calendar cells, forms, surfaces and micro-interactions.
- Theme A remains Flat Geometric: flat solid fills, crisp angular forms, minimal detail, no gradients, no glassmorphism.
- Vazirmatn remains the application font.
- 2585 remains ungrouped and Gregorian formatting is explicit; no 1405 output from the Gregorian formatter.
- Today remains centered on the primary date, live clock, today's event list and personal event/memory list; count-only metrics remain removed.
- CI run #37186935157 is still running; no PASS is claimed until observed.
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