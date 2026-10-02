import type { Event } from "../domain/event/types";
import type { Person } from "../domain/person/types";
import type { HistoricalPeriod } from "../domain/period/types";
import type { Source } from "../domain/source/types";

export type PublicContentDataset = {
  readonly events: readonly Event[];
  readonly people: readonly Person[];
  readonly periods: readonly HistoricalPeriod[];
  readonly sources: readonly Source[];
};

export type ContentValidationIssue = {
  readonly path: string;
  readonly code: string;
  readonly message: string;
};

export type ContentValidationResult = {
  readonly valid: boolean;
  readonly issues: readonly ContentValidationIssue[];
};
