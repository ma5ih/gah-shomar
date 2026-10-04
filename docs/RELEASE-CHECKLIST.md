# RELEASE CHECKLIST

Current checkpoint: ACT-249
Original checklist action: ACT-246
Last reconciled: 2026-10-04

## DONE

- Documentation synchronization / final handoff guide (TASK-10-005 / TASK-10-009)
- Release CHANGELOG entry + release-candidate notes (TASK-10-006 / TASK-10-007)
- Post-release backlog (TASK-10-010)

- Calendar engine and conversion/regression suite
- Core application/use cases
- PHASE-06 browser/product acceptance
- PHASE-07 Theme A / PWA baseline
- Authentication and rate limiting
- Reproducible dependency installation
- Production dependency security: 0 high/critical vulnerabilities in production graph
- Performance baseline
- Main CI quality pipeline
- Deployment/PWA validation harness
- Editorial candidate queue preparation

## OPEN

- Explicit editorial approval for public historical events and initial seed
- Final human visual signoff
- Final human end-to-end product signoff
- Execution of production/staging validation workflow against a real BASE_URL
- Final version/tag only after the above gates
- TASK-10-006, TASK-10-007 and TASK-10-010 are now DONE; REL-1.0.0 remains blocked while any release-critical item is OPEN

Release 1.0 must not be tagged while any release-critical OPEN item remains.
