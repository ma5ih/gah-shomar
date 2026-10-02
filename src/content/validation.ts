import type { PublicContentDataset, ContentValidationResult } from "./contracts";

export function validatePublicContent(
  dataset: PublicContentDataset,
): ContentValidationResult {
  const issues: Array<{ path: string; code: string; message: string }> = [];

  dataset.events.forEach((event, index) => {
    if (event.status !== "APPROVED") {
      issues.push({
        path: `events[${index}].status`,
        code: "PUBLIC_CONTENT_NOT_APPROVED",
        message: "Public event content must be APPROVED.",
      });
    }
    if (event.visibility !== "PUBLIC") {
      issues.push({
        path: `events[${index}].visibility`,
        code: "PUBLIC_CONTENT_VISIBILITY",
        message: "Public event content must have PUBLIC visibility.",
      });
    }
  });

  dataset.people.forEach((person, index) => {
    if (person.status !== "APPROVED") {
      issues.push({
        path: `people[${index}].status`,
        code: "PUBLIC_CONTENT_NOT_APPROVED",
        message: "Public person content must be APPROVED.",
      });
    }
  });

  return {
    valid: issues.length === 0,
    issues,
  };
}
