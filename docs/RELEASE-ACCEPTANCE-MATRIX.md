# RELEASE ACCEPTANCE MATRIX

Status: IN_PROGRESS
Checkpoint: ACT-231
Date: 2026-10-04

| Area | Current evidence | Status |
|---|---|---|
| Calendar conversion / leap / year boundary | domain regression suite + main CI #404 | PASS |
| Today | application tests + browser smoke | PASS |
| Calendar navigation / Day selection | browser navigation + swipe + Day Detail | PASS |
| Event / Important Event | structural implementation + editorial empty-state; no approved public event seed | OPEN |
| Timeline | implementation + browser smoke | PASS |
| Person | approved seed data + route/search navigation browser acceptance | PASS |
| Personal Event | authenticated browser create/persistence/search | PASS |
| Recurrence | authenticated browser enable/clear + domain regression | PASS |
| Memory | authenticated browser CRUD | PASS |
| Search | entity search + approval filtering + browser acceptance | PASS |
| Persian / English + RTL / LTR | browser language/direction coverage | PASS |
| Time / Season | domain tests + Theme A state hooks/browser coverage | PASS |
| PWA manifest / offline baseline | manifest/service worker/icons + tests | PASS |
| PWA install experience | install prompt E2E + main CI #404 | PASS |
| Accessibility | semantic landmarks + focus/keyboard + main CI #404 | PASS |
| Mobile / Tablet / Desktop | Playwright profiles + overflow/navigation checks | PASS |
| Touch / Swipe | calendar swipe browser acceptance | PASS |
| Visual consistency | Theme A contract + main CI #407 | IN_PROGRESS — final human visual review remains |
| Authentication | register/login/session browser flow | PASS |
| Auth abuse protection | PostgreSQL rate limit + integration test + PR #4 CI #406 + main CI #407 | PASS |
| Runtime configuration | central config + unit tests + PR #4 CI #406 + main CI #407 | PASS |
| Dependency reproducibility | committed package-lock + npm ci + PR #4 CI #406 + main CI #407 | PASS |
| Dependency security | previous install audit reported 9 vulnerabilities (3 moderate, 6 high) | OPEN — exact advisory audit/remediation is the next release gate |
| Performance | CI #444 desktop baseline: 87 tests passed; Today/Calendar/Search TTFB 40.7–83.1ms, DOMContentLoaded 85.5–203.1ms | PASS |
| Production Configuration | runtime config + reproducible install strategy + CI evidence | PASS |
| Production Build | main CI #407 production build | PASS |
| Production deployment | no production infrastructure evidence yet | OPEN |
| Editorial historical dataset | intentionally empty until explicit approval | OPEN |

## Release rule

A release-critical row is not PASS merely because implementation exists. Observable validation evidence is required.

Historical public events remain intentionally unpublished while seedEvents = []; no synthetic content may be added just to satisfy an acceptance test.

Theme B remains outside current execution scope and is not a release dependency for Theme A work.