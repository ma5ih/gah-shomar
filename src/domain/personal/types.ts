import type { ImperialDate } from "../calendar/types";

export type PersonalEventType = "birthday" | "anniversary" | "custom";

export type PersonalRecurrence = {
  readonly frequency: "yearly";
  readonly interval: 1;
};

export type PersonalPerson = {
  readonly id: string;
  readonly ownerUserId: string;
  readonly name: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type PersonalEvent = {
  readonly id: string;
  readonly ownerUserId: string;
  readonly type: PersonalEventType;
  readonly title: string;
  readonly date: ImperialDate;
  readonly recurrence?: PersonalRecurrence;
  readonly personalPersonId?: string;
  readonly notes?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type Memory = {
  readonly id: string;
  readonly ownerUserId: string;
  readonly date: ImperialDate;
  readonly title?: string;
  readonly text: string;
  readonly tags: readonly string[];
  readonly mediaIds: readonly string[];
  readonly personIds: readonly string[];
  readonly eventIds: readonly string[];
  readonly personalEventIds: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
};
