# PHASE-07 — Theme A Visual Polish Execution

Status: IN_PROGRESS
Action: ACT-212
Theme: Flat Geometric
Tasks: TASK-07-002 through TASK-07-011

## Scope

This execution continues Theme A only. It operationalizes the already approved Flat Geometric brief and does not create a new visual language.

## Approved Theme A brief

> Design the app with a modern flat geometric illustration style. Use natural, recognizable shapes simplified into clean angular forms, similar to contemporary landscape/vector illustrations. Use flat solid colors, sharp edges, layered shapes, and simple straight lines, with minimal detail and no gradients or realistic textures. The overall design should feel clean, friendly, modern, and slightly playful, while remaining natural and visually balanced.

## TASK-07-002 — Spacing/Margin Consistency

Implemented through a dedicated scale:
4px / 8px / 12px / 16px / 20px / 24px / 32px.

Applied to shell, topbar, page groups, hero, cards, calendar, forms, controls, metadata and mobile navigation.

## TASK-07-003 — Typography Consistency

Implemented a restrained type scale inside Theme A for:
- overline/eyebrow
- navigation chips
- section headings
- card titles/body copy
- metadata
- context values
- controls and form fields

Hierarchy remains led by the Imperial date in the hero.

## TASK-07-004 — Component Consistency

Implemented consistent component skinning:
- compact radii for controls
- restrained radii for cards/surfaces
- shared border treatment
- flat opaque surfaces
- no glass effect
- buttons/controls keep simple shapes and no decorative shadows

## TASK-07-005 — Visual Density Review

Normalized repeated gaps and padding so the interface remains lightweight and breathable without becoming sparse or decorative.

## TASK-07-006..009 — Time-of-day States

Theme A has explicit appearance-only treatment for:
- Morning
- Noon
- Sunset
- Night

The application/domain time state remains authoritative. Theme A only maps that state to solid surface, landscape-layer and accent presentation.

## TASK-07-010 — Seasonal Variations

Theme A uses subtle accent shifts:
- Spring → green
- Summer → ochre/earth
- Autumn → deeper ochre/terracotta
- Winter → muted blue

Season selection remains data-driven and does not change product behavior.

## TASK-07-011 — Motion Polish

Interaction motion remains restrained:
- short transitions for controls/cards
- small vertical lift for hover
- no continuous decorative animation
- reduced-motion preference is respected

## Boundary

Only presentation files under Theme A are changed for this execution. No Theme B file is part of this batch.

Shared Core remains untouched:
- Calendar Engine
- Domain
- Data / repositories
- Application / use cases
- Auth / Session / Authorization
- routing
- localization contracts
- business rules
- tests and product semantics

## Static validation

- 7 spacing tokens are defined.
- Theme A selectors remain scoped to html[data-theme="flat-geometric"].
- Theme A stylesheet contains 0 gradient(...) expressions.
- Time-of-day selectors for all four states are present.
- Seasonal selectors for all four seasons are present.
- Reduced-motion handling remains present.

## Current status

TASK-07-002 through TASK-07-011 are implemented in the Theme A stylesheet but remain pending independently observed CI/runtime visual evidence before being promoted to DONE.

Theme B remains untouched and outside the current execution scope.
## TASK-07-013 — Install Experience

The app shell now exposes a browser-native install prompt when the platform emits beforeinstallprompt.
The flow supports:
- Install action
- Later/dismiss action with persistent localStorage state
- appinstalled handling
- Persian/English copy
- Theme A visual styling
- service-worker precache for offline page, manifest and standard icons
- unit and browser acceptance coverage

This feature is product behavior with Theme A-only presentation styling. Theme B remains untouched.
