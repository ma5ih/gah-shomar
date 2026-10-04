# RELEASE BLOCKER REVIEW

Status: DONE
Checkpoint: ACT-246
Date: 2026-10-04

## Resolved

### 1. Core automated quality gate
- Main CI #404 is green end-to-end.
- Migration, lint, typecheck, unit/integration tests, production build, Chromium install and browser smoke all passed on merged main.
- Theme A visual batch and PWA install experience are validated.

### 2. Phase-07 visual/app-like work
- TASK-07-002..011 and TASK-07-013 are DONE.
- PHASE-07 is DONE.
- Theme B is untouched.

## Current blockers

### 3. Security hardening integration — RESOLVED
- Persistent PostgreSQL-backed auth rate limiting is implemented on PR #4.
- Runtime configuration validation is implemented on PR #4.
- PR #4 completed its full CI validation and is merged to main.
- A dedicated CI browser-server fix adds APP_URL=http://127.0.0.1:3000 to the test environment so production-mode next start satisfies the central runtime configuration contract.
- PR #4 CI #406 passed end-to-end and the branch is merged to main; main CI #407 also passed.

### 4. Dependency reproducibility — RESOLVED
- package-lock.json is committed on PR #4.
- CI uses npm ci on PR #4.
- Main now contains the committed lockfile and npm ci strategy; PR #4 CI #406 and main CI #407 validated the strategy.

### 5. Dependency security — OPEN
- A prior GitHub Actions dependency install reported 9 vulnerabilities: 3 moderate and 6 high.
- No blind npm audit fix --force has been applied.
- Exact advisory review and remediation remain release work.

### 6. Visual human review — OPEN
- Automated Theme A contract and browser acceptance are green.
- Final human visual review remains separate from automated CSS/E2E evidence.

### 7. Performance evidence — OPEN
- No production-like performance measurement has been accepted yet.

### 8. Historical editorial publication — OPEN by policy
- seedEvents = [] remains intentional.
- Event Acceptance cannot be closed by inventing public historical content.
- Each month requires source review and explicit approval before publication.

### 9. Production deployment evidence — OPEN
- Real production environment, deployment validation and final PWA production validation remain under PHASE-10.
- No credentials or hosting assumptions are fabricated.

## Security boundary review

Repository scan found no custom route.ts mutation handlers using POST/PUT/PATCH/DELETE; current mutations are implemented through Next.js Server Actions and still require their own authorization checks.

Next.js documents Server Actions as POST-based and same-origin checked by default, with explicit allowed-origin configuration available for proxy deployments. The production deployment topology must still be verified before declaring security sign-off.

## Decision

Do not tag Release 1.0 yet. All core technical/browser/performance/security gates are green. The remaining release-critical gates are external: editorial approval/public historical content, human visual signoff, human end-to-end product signoff, and real production/PWA validation against a deployed URL.