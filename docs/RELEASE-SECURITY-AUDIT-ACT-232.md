# RELEASE SECURITY AUDIT — ACT-232

Date: 2026-10-04
Status: PRODUCTION SECURITY RESOLVED / DEV-ONLY EXCEPTION DOCUMENTED
Evidence: GitHub Actions CI run #438, artifact `dependency-security-audit`

## Audit result

The reproducible CI audit reported:

- 9 total vulnerabilities
- 6 high
- 3 moderate
- 0 critical
- 0 low

## Findings

| Package | Severity | Scope | Finding | Planned action |
|---|---|---|---|---|
| drizzle-orm <0.45.2 | HIGH | production dependency | SQL injection via improperly escaped SQL identifiers | Upgrade to 0.45.3 and rerun full validation |
| @next/eslint-plugin-next / fast-glob / micromatch / braces | HIGH | development/tooling dependency chain | uncontrolled recursion / stack-exhaustion risk in braces | keep under review; upstream currently has no patched braces release |
| vitest <4.1.11 | MODERATE | development/test dependency | path traversal / arbitrary file read in mock redirect handling | Upgrade Vitest to 5.0.3 + coverage package and rerun full validation |

The exact audit artifact also records the transitive effects and advisory identifiers.

## Security-release rule

Production dependency vulnerabilities at high or critical severity block Release 1.0.

Development-only findings without an available upstream patch do not block runtime deployment by themselves, but they must remain documented and the affected tooling must not be used as an untrusted-input runtime service.

## Final status

- CI #454 main production audit: 0 vulnerabilities with npm audit --omit=dev --audit-level=high.
- Full audit retains 5 high dev-only findings in the eslint/fast-glob/micromatch/braces chain.
- The dev-only chain remains documented as a tooling exception pending a safe upstream patch.

## Next

ACT-234 applies the safe direct upgrades first. After the lockfile is regenerated and all CI validation passes, a fresh full audit must be run. Release sign-off requires zero high/critical production vulnerabilities.
