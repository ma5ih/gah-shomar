import type { HistoricalDate } from "../calendar/types";
import type { LocalizedText } from "../../shared/types/localized";
import type { EditorialStatus } from "../event/types";

export type Person = {
  readonly id: string;
  readonly slug?: string;
  readonly status: EditorialStatus;
  readonly visibility: "PUBLIC";
  readonly name: LocalizedText;
  readonly displayName?: LocalizedText;
  readonly aliases: readonly LocalizedText[];
  readonly shortBio: LocalizedText;
  readonly biography?: LocalizedText;
  readonly birthDate?: HistoricalDate;
  readonly deathDate?: HistoricalDate;
  readonly tags: readonly string[];
  readonly roleTags?: readonly string[];
  readonly periodIds: readonly string[];
  readonly eventIds: readonly string[];
  readonly relatedPersonIds: readonly string[];
  readonly sourceIds: readonly string[];
  readonly mediaIds: readonly string[];
  readonly featured?: boolean;
  readonly heroMediaId?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
