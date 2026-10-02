import type { HistoricalDate } from "../calendar/types";
import type { LocalizedText } from "../../shared/types/localized";
import type { EditorialStatus } from "../event/types";

export type HistoricalPeriod = {
  readonly id: string;
  readonly slug: string;
  readonly name: LocalizedText;
  readonly summary: LocalizedText;
  readonly description?: LocalizedText;
  readonly startDate: HistoricalDate;
  readonly endDate?: HistoricalDate;
  readonly eventIds: readonly string[];
  readonly personIds: readonly string[];
  readonly parentPeriodId?: string;
  readonly sourceIds: readonly string[];
  readonly mediaIds: readonly string[];
  readonly status: EditorialStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
};
