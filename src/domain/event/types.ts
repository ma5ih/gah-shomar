import type { HistoricalDate } from "../calendar/types";
import type { LocalizedText } from "../../shared/types/localized";

export type EditorialStatus =
  | "PROPOSED"
  | "RESEARCHING"
  | "VERIFIED"
  | "APPROVED"
  | "REJECTED";

export type EventCategory =
  | "national"
  | "patriotic"
  | "historical"
  | "cultural"
  | "tradition"
  | "civilizational"
  | "dynastic"
  | "royal"
  | "personality"
  | "contemporary"
  | "protest_movement";

export type EventDate = {
  readonly start: HistoricalDate;
  readonly end?: HistoricalDate;
};

export type Event = {
  readonly id: string;
  readonly slug?: string;
  readonly status: EditorialStatus;
  readonly visibility: "PUBLIC";
  readonly title: LocalizedText;
  readonly shortTitle?: LocalizedText;
  readonly summary: LocalizedText;
  readonly description?: LocalizedText;
  readonly dates: readonly EventDate[];
  readonly category: EventCategory;
  readonly tags: readonly string[];
  readonly personIds: readonly string[];
  readonly periodIds: readonly string[];
  readonly relatedEventIds: readonly string[];
  readonly sourceIds: readonly string[];
  readonly mediaIds: readonly string[];
  readonly featured?: boolean;
  readonly heroMediaId?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
