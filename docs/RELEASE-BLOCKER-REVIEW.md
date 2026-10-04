# RELEASE BLOCKER REVIEW

Status: IN_PROGRESS
Checkpoint: ACT-221
Date: 2026-10-04

## Current blockers

### 1. Dependency reproducibility — OPEN
- Repository currently has no committed package-lock.json.
- CI uses npm install, so the resolved dependency graph can drift between runs.
- Release requires a reproducible dependency installation strategy and lockfile review.

### 2. Dependency security audit — OPEN
- A current GitHub Actions npm install run reported 9 vulnerabilities: 3 moderate and 6 high.
- The exact advisory set must be reviewed before release; no blanket npm audit fix --force is being applied automatically.

### 3. Authentication abuse protection — IMPLEMENTED, VALIDATION PENDING
- PostgreSQL-backed rate limiting is implemented for login/register.
- Policy: 5 attempts per 10 minutes per normalized account identity.
- Integration test covers threshold, blocking and reset.
- CI validation is still required.

### 4. Runtime configuration validation — IMPLEMENTED, VALIDATION PENDING
- Central runtime config validates NODE_ENV, APP_URL, APP_TIMEZONE and PostgreSQL DATABASE_URL.
- Production config requires NODE_ENV=production and database configuration.
- CI validation is still required.

### 5. CSRF / state-changing request review — OPEN
- Product mutations are implemented through Next.js Server Actions rather than ad-hoc JSON mutation endpoints.
- Final release review must verify the framework/request boundary plus any future direct endpoints before shipping.
- No claim of complete security sign-off is made here.

### 6. Production deployment evidence — OPEN
- Production environment configuration, deployment validation and final PWA production validation remain under PHASE-10.
- No production credentials or infrastructure assumptions are fabricated in the repository.

## Current decision

TASK-09-020 and TASK-10-001 remain IN_PROGRESS.

Release must not be marked ready until the blockers above have explicit evidence or an accepted documented exception.
