# PHASE-07 — Theme A Spacing / Margin Consistency

Status: DONE
Action: ACT-210 / ACT-211
Theme: Flat Geometric
Task: TASK-07-002 — Spacing/Margin Consistency

## Scope

این سند فقط اجرای بصری Theme A را پوشش می‌دهد. Theme B وارد این Task نشده است و هیچ Core/domain/application/business behavior نباید برای این Task تغییر کند.

## Theme A source of truth

همه تصمیم‌های spacing باید با brief مصوب Theme A سازگار بمانند:

> Design the app with a modern flat geometric illustration style. Use natural, recognizable shapes simplified into clean angular forms, similar to contemporary landscape/vector illustrations. Use flat solid colors, sharp edges, layered shapes, and simple straight lines, with minimal detail and no gradients or realistic textures. The overall design should feel clean, friendly, modern, and slightly playful, while remaining natural and visually balanced.

## Spacing scale

Theme A از یک scale محدود و تکرارشونده استفاده می‌کند:

| Token | Value | Intended use |
|---|---:|---|
| --fg-space-1 | 4px | micro spacing / labels |
| --fg-space-2 | 8px | compact controls / metadata |
| --fg-space-3 | 12px | section gaps / fields |
| --fg-space-4 | 16px | cards / controls / form spacing |
| --fg-space-5 | 20px | layout columns / page groups |
| --fg-space-6 | 24px | surfaces / context cards / detail |
| --fg-space-7 | 32px | hero / major surfaces |

## Applied areas

Spacing consistency is currently applied to:
- app shell and topbar
- primary content and hero layout
- event/card surfaces
- calendar surface and navigation
- form stacks and fields
- buttons and input controls
- metadata/pills/notices
- bottom navigation and mobile presentation
- desktop/tablet/mobile overrides

## Boundary

Only src/frontend/themes/flat-geometric/theme.css was changed for the implementation.

No change was made to:
- Calendar Engine
- Domain/Application/Data
- Authentication/Session
- routing
- localization contracts
- product/business behavior
- Theme B

## Validation

Static validation completed and refined in ACT-211:
- 7 spacing tokens are defined.
- Theme A selector scope remains intact.
- No gradient(...) expression exists in the Theme A stylesheet.
- Existing backdrop-filter: none guards remain for the Theme A surfaces where required by the previous visual task.

Main CI #404 provides the required real validation evidence; TASK-07-002 is DONE.

## Continuation

Validation result:
- main CI #404 — PASS;
- TASK-07-002 is DONE and later visual refinement tasks are recorded in docs/PHASE-07-THEME-A-VISUAL-POLISH.md.

No new visual language may be introduced outside the approved Theme A brief.
## ACT-211 refinement
- Remaining non-scale spacing values in the Theme A stylesheet were normalized to the approved 4/8/12/16/20/24/32px scale.
- Latest implementation commit: fa095e637e3f4d244c9b06889717d71d3dd690a0.
- TASK-07-002 remains IN_PROGRESS until independently observed CI validation.