# Content Foundation

Public historical content is structured data and must pass validation before publication.

## Current checkpoint dataset

The repository currently contains:
- 0 published historical events
- 5 public people
- 2 historical periods
- 6 reference sources

The event dataset is intentionally empty while historical events are reviewed month by month and explicitly approved for publication.

People, periods and sources currently provide structural context and source registry only; their presence is not event approval.

## Editorial rules
- Public historical records are APPROVED-only and PUBLIC.
- Published events must reference at least one known source.
- Event/person/period/source relationship IDs are validated.
- Historical dates preserve their original calendar metadata.
- Unsupported historical calendar conversions are never fabricated.
- Important Events publication requires a suitable hero image and the corresponding media/provenance metadata.
- Event Detail may expose additional images/documents once approved media assets exist.
- Demo data must never be used to satisfy a test or UI placeholder once the editorial-empty policy is active.

## Review gate

Suggested ≠ approved.

Until explicit approval:
- event is not inserted into `seedEvents`;
- it is not featured;
- it is not exposed through public Day/Important Events/Search/Timeline;
- it does not become part of release content.
