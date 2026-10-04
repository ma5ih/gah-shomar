# RELEASE DEPLOYMENT VALIDATION

Status: IMPLEMENTED / EXTERNAL VALIDATION PENDING
Action: ACT-240
Date: 2026-10-04

## Purpose

This repository now contains a repeatable production/staging smoke harness. It does not invent a hosting provider or credentials.

## Automated workflow

.github/workflows/release-validation.yml is manually triggered with a real base_url.

The workflow runs:
- npm ci
- scripts/release-validation.mjs

## Runtime checks

The validator checks:
- /
- /calendar?lang=en&year=2465&month=5
- /timeline?lang=en
- /search?lang=en&q=Reżā Shah Pahlavi
- /manifest.webmanifest
- /sw.js
- /icon-192.png
- /icon-512.png

For the manifest it requires:
- display = standalone
- lang = fa
- dir = rtl
- at least two icons

For the service worker it verifies the response is present and contains cache handling.

## Release rule

TASK-10-003 and TASK-10-004 remain open until this workflow is executed against the actual production/staging URL and the result is recorded in the release acceptance matrix.

No host, URL, credential or deployment result is fabricated.
