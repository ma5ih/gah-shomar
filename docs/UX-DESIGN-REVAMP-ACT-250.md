# UX / Visual Redesign — ACT-250

Date: 2026-10-04

## Scope

Major visual refresh of Theme A and the shared responsive UI foundation based on the requested product direction: modern, smooth, mobile-first, Flat Geometric, and explicitly not glassmorphism / gradient-heavy / legacy web styling.

## Implemented

- Rebuilt `app/globals.css` as a modern responsive design foundation.
- Rebuilt Theme A in `src/frontend/themes/flat-geometric/theme.css`.
- Removed gradient and glass-style treatment from the shared visual system.
- Added solid-color geometric layered hero shapes using angular `clip-path` forms.
- Added consistent spacing, sizing, radii, borders, shadows, focus states, active states, and touch targets.
- Added page-entry and micro-interaction motion with `prefers-reduced-motion` support.
- Hardened mobile sizing with explicit min-width handling, clipped horizontal overflow, stacked search controls, single-column forms, compact calendar cells, and a stable mobile bottom navigation.
- Switched mobile navigation from text glyph icons to inline SVG icons.
- Refined calendar navigation controls with SVG chevrons.
- Added Vazirmatn through the project stylesheet and made it the primary application font.
- Styled PWA install prompt and form checkbox controls inside the new design system.
- Updated layout and PWA theme colors to the refreshed palette.

## Design Contract

Theme A remains:

- Flat geometric
- Solid fills
- Angular layered shapes
- Minimal visual detail
- Restrained shadow
- No gradients
- No glassmorphism / backdrop blur

## Validation Status

GitHub Actions CI was triggered by the final UX commit and is currently queued/in progress.

Automated CI does not replace the remaining human visual/product signoff. Mobile testing should use at least 320px, 360px, and 390px viewport widths.

## User Sync

After pulling the latest `main`, restart the Next.js dev server and hard-refresh the browser so the new CSS is loaded.
