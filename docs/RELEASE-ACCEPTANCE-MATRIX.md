# RELEASE ACCEPTANCE MATRIX

Status: IN_PROGRESS
Checkpoint: ACT-221
Date: 2026-10-04

| Area | Evidence currently present | Release status |
|---|---|---|
| Calendar conversion/leap/year boundary | domain unit/regression tests + CI | OPEN until final release CI evidence |
| Today | public smoke + application tests | IN_PROGRESS |
| Calendar navigation/day selection | browser smoke + swipe/navigation tests | IN_PROGRESS |
| Event/Important Event | structural implementation + editorial empty-state tests | OPEN until approved public events exist |
| Timeline | browser smoke + timeline implementation | IN_PROGRESS |
| Person | approved seed data + Person route/search navigation test | IN_PROGRESS |
| Personal Event | authenticated browser create/update/search flow | IN_PROGRESS |
| Recurrence | authenticated browser enable/clear flow + domain tests | IN_PROGRESS |
| Memory | authenticated browser CRUD flow | IN_PROGRESS |
| Search | entity search + public approval filtering + browser empty/result tests | IN_PROGRESS |
| Persian/English + RTL/LTR | browser tests for fa/en direction and labels | IN_PROGRESS |
| Time/Season | domain tests + Theme A hooks/state presentation | IN_PROGRESS |
| PWA | manifest/icons/service worker/offline/install prompt tests | IN_PROGRESS |
| Accessibility | semantic main, landmarks, focus and keyboard checks | IN_PROGRESS |
| Mobile/tablet/desktop | Playwright profiles + overflow/navigation checks | IN_PROGRESS |
| Touch/Swipe | calendar swipe browser test | IN_PROGRESS |
| Visual consistency | Theme A CSS contract + visual task batch | IN_PROGRESS |
| Authentication | register/login/session browser flow | IN_PROGRESS |
| Auth abuse protection | PostgreSQL rate-limit implementation + integration test | OPEN until CI validation |
| Runtime configuration | centralized config validation + unit tests | OPEN until CI validation |
| Dependency reproducibility | generated package-lock artifact pipeline in progress | OPEN |
| Dependency security | current CI observed npm audit warnings/vulnerabilities | OPEN |
| Production deployment | no production evidence yet | OPEN |

## Release rule

A row is not considered PASS merely because implementation exists. Each release-critical row requires observable validation evidence or an explicitly accepted exception.

Historical public event publication remains intentionally blocked until editorial approval; tests must continue to respect the intentionally empty public event seed.
