import { describe, expect, it } from "vitest";
import type { Memory, PersonalEvent, PersonalPerson } from "../../src/domain/personal/types";

const ownerUserId = "user-1";

const person: PersonalPerson = {
  id: "personal-person-1",
  ownerUserId,
  name: "Sample person",
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
};

const event: PersonalEvent = {
  id: "personal-event-1",
  ownerUserId,
  type: "birthday",
  title: "Birthday",
  date: { year: 2585, month: 7, day: 11 },
  recurrence: { frequency: "yearly", interval: 1 },
  personalPersonId: person.id,
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
};

const memory: Memory = {
  id: "memory-1",
  ownerUserId,
  date: { year: 2585, month: 7, day: 11 },
  title: "A memory",
  text: "A private memory attached to the same date.",
  tags: ["sample"],
  mediaIds: [],
  personIds: [],
  eventIds: [],
  personalEventIds: [event.id],
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
};

describe("personal domain contract fixtures", () => {
  it("keeps ownership explicit across personal entities", () => {
    expect(person.ownerUserId).toBe(ownerUserId);
    expect(event.ownerUserId).toBe(ownerUserId);
    expect(memory.ownerUserId).toBe(ownerUserId);
  });

  it("keeps Personal Event and Personal Person linked without merging public entities", () => {
    expect(event.personalPersonId).toBe(person.id);
    expect(event.type).toBe("birthday");
    expect(event.recurrence).toEqual({ frequency: "yearly", interval: 1 });
  });

  it("keeps Memory contextual links private and non-destructive", () => {
    expect(memory.personalEventIds).toContain(event.id);
    expect(memory.eventIds).toEqual([]);
    expect(memory.mediaIds).toEqual([]);
  });
});
