# PHASE-07 — Theme A Visual Execution

Status: DONE
Action: ACT-208 (validated) / ACT-209 (documentation convergence)
Theme: Flat Geometric
Task: TASK-07-001 — Final Visual Hierarchy

## Scope
This document operationalizes the approved Theme A visual brief. It does not create a new visual brief and does not modify Theme B.

### Theme A source of truth
> Design the app with a modern flat geometric illustration style. Use natural, recognizable shapes simplified into clean angular forms, similar to contemporary landscape/vector illustrations. Use flat solid colors, sharp edges, layered shapes, and simple straight lines, with minimal detail and no gradients or realistic textures. The overall design should feel clean, friendly, modern, and slightly playful, while remaining natural and visually balanced.

## Visual hierarchy
1. The Today hero is the primary visual anchor.
2. The main Imperial date is the strongest typographic element.
3. Supporting Gregorian date, weekday, season, and time-of-day remain secondary.
4. Calendar, events, personal content, search, and detail surfaces use a consistent flat surface system.
5. Navigation and controls remain visually subordinate to content.

## Execution rules
- Surfaces use flat, opaque solid colors.
- Theme A uses no gradients.
- Large rounded/glass surfaces are replaced with simpler angular/compact forms.
- Decorative illustration uses a small number of layered solid shapes.
- Hero decoration uses straight edges and angular landscape-like layers.
- Visual detail stays minimal; no realistic texture is introduced.
- Borders, simple lines, and restrained elevation separate content without recreating glassmorphism.
- Interaction feedback remains lightweight and does not change product behavior.

## Theme A tokens
- Base background: #efe9dc
- Surface: #f7f2e7
- Strong surface: #fbf7ed
- Primary ink: #24322c
- Muted ink: #6b7069
- Accent: #8f5b3b
- Green supporting accent: #687f68
- Blue supporting accent: #657b87

## Time-of-day
The existing time state remains authoritative. Theme A changes appearance only:
- Morning: light sand surface with green/ochre landscape layers.
- Noon: lighter neutral/green surface with stronger daylight palette.
- Sunset: warm solid surface with terracotta/ochre landscape layers.
- Night: dark solid hero surface with muted green/ochre layers and light text.

## Seasons
The existing season state remains authoritative. Theme A uses it only for subtle accent shifts:
- Spring: green accent.
- Summer: ochre/earth accent.
- Autumn: deeper ochre/terracotta accent.
- Winter: muted blue accent.

## Motion
- Short hover/focus transitions.
- Small vertical lift for interactive cards/buttons.
- No continuous decorative animation.
- prefers-reduced-motion remains respected.

## Mobile and localization
- Mobile remains app-like and touch-friendly.
- RTL/LTR remains driven by the existing locale boundary.
- Theme A does not duplicate localization or application logic.
- Same data + same state = same product behavior.

## Prohibited
- Gradients
- Realistic rendering
- Realistic textures
- Heavy visual detail
- 3D visual treatment
- Any dependency on Theme B
- Any duplicated Core/domain/application/business logic

## Validation result — ACT-208
- TASK-07-001 completed for Theme A.
- Theme A stylesheet is isolated at src/frontend/themes/flat-geometric/theme.css.
- No gradient or glass/backdrop treatment remains in the Theme A visual system.
- Time-of-day and seasonal states affect appearance only.
- Theme B received no presentation changes in this execution.
- GitHub Actions run #37161733754 completed successfully; the quality job also succeeded.

## Continuation
TASK-07-001 is closed. The next planned Theme A visual task is:
**TASK-07-002 — Spacing/Margin Consistency — TODO**

No new visual language may be introduced outside the approved Theme A brief.
