import { and, desc, eq } from "drizzle-orm";
import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { getDb } from "./client";
import { memories, personalEvents, personalPeople, sessions, users } from "./schema";
import type { PersonalRepository, SessionRecord, UserRecord, UserRepository } from "../contracts/repositories";
import type { ImperialDate } from "../../domain/calendar/types";
import type { Memory, PersonalEvent, PersonalPerson, PersonalRecurrence } from "../../domain/personal/types";
import { AuthorizationError, InfrastructureError, ValidationError } from "../../shared/errors";

const scrypt = promisify(scryptCallback);

export function normalizeUsername(username: string) { return username.trim().toLowerCase(); }
export function validateUsername(username: string) {
  if (!/^[A-Za-z0-9._]{3,64}$/.test(username)) throw new ValidationError("Username must be 3-64 characters using letters, numbers, dot or underscore.");
}
export function validatePassword(password: string) {
  if (password.length < 8) throw new ValidationError("Password must contain at least 8 characters.");
}
export async function hashPassword(password: string) {
  validatePassword(password);
  const salt = randomBytes(16).toString("hex");
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt:${salt}:${derived.toString("hex")}`;
}
export async function verifyPassword(password: string, encoded: string) {
  const [, salt, expectedHex] = encoded.split(":");
  if (!salt || !expectedHex) return false;
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  const expected = Buffer.from(expectedHex, "hex");
  return expected.length === derived.length && timingSafeEqual(expected, derived);
}
export function hashSessionToken(token: string) { return createHash("sha256").update(token).digest("hex"); }

const mapDate = (row: { year: number; month: number; day: number }): ImperialDate =>
  ({ year: row.year, month: row.month as ImperialDate["month"], day: row.day });

const mapEvent = (row: typeof personalEvents.$inferSelect): PersonalEvent => ({
  id: row.id, ownerUserId: row.ownerUserId, type: row.type as PersonalEvent["type"], title: row.title,
  date: mapDate(row), recurrence: row.recurrence as PersonalRecurrence | undefined,
  personalPersonId: row.personalPersonId ?? undefined, notes: row.notes ?? undefined,
  createdAt: row.createdAt.toISOString(), updatedAt: row.updatedAt.toISOString(),
});
const mapPerson = (row: typeof personalPeople.$inferSelect): PersonalPerson => ({
  id: row.id, ownerUserId: row.ownerUserId, name: row.name,
  createdAt: row.createdAt.toISOString(), updatedAt: row.updatedAt.toISOString(),
});
const mapMemory = (row: typeof memories.$inferSelect): Memory => ({
  id: row.id, ownerUserId: row.ownerUserId, date: mapDate(row), title: row.title ?? undefined,
  text: row.text, tags: row.tags, mediaIds: row.mediaIds, personIds: row.personIds,
  eventIds: row.eventIds, personalEventIds: row.personalEventIds,
  createdAt: row.createdAt.toISOString(), updatedAt: row.updatedAt.toISOString(),
});

export const userRepository: UserRepository = {
  async findByNormalizedUsername(normalizedUsername) {
    const db = getDb();
    return (await db.select().from(users).where(eq(users.normalizedUsername, normalizedUsername)).limit(1))[0] ?? null;
  },
  async createUser(input) {
    const db = getDb();
    const row = (await db.insert(users).values(input).returning())[0];
    if (!row) throw new InfrastructureError("Failed to create user.");
    return row as UserRecord;
  },
  async createSession(userId, tokenHash) {
    const db = getDb();
    const row = (await db.insert(sessions).values({ userId, tokenHash }).returning())[0];
    if (!row) throw new InfrastructureError("Failed to create session.");
    return row as SessionRecord;
  },
  async getActiveSessionByTokenHash(tokenHash) {
    const db = getDb();
    const row = (await db.select().from(sessions).where(eq(sessions.tokenHash, tokenHash)).limit(1))[0];
    return row && !row.revokedAt ? row as SessionRecord : null;
  },
  async revokeSession(sessionId) {
    await getDb().update(sessions).set({ revokedAt: new Date() }).where(eq(sessions.id, sessionId));
  },
};

export const personalRepository: PersonalRepository = {
  async listEvents(userId) {
    const rows = await getDb().select().from(personalEvents).where(eq(personalEvents.ownerUserId, userId)).orderBy(desc(personalEvents.year), desc(personalEvents.month), desc(personalEvents.day));
    return rows.map(mapEvent);
  },
  async listEventsForDate(userId, date) {
    const rows = await getDb().select().from(personalEvents).where(and(eq(personalEvents.ownerUserId, userId), eq(personalEvents.year, date.year), eq(personalEvents.month, date.month), eq(personalEvents.day, date.day)));
    return rows.map(mapEvent);
  },
  async createEvent(userId, input) {
    const row = (await getDb().insert(personalEvents).values({
      ownerUserId: userId, type: input.type, title: input.title,
      year: input.date.year, month: input.date.month, day: input.date.day,
      recurrence: input.recurrence, personalPersonId: input.personalPersonId, notes: input.notes,
    }).returning())[0];
    if (!row) throw new InfrastructureError("Failed to create personal event.");
    return mapEvent(row);
  },
  async updateEvent(userId, id, input) {
    const current = (await getDb().select().from(personalEvents).where(and(eq(personalEvents.id, id), eq(personalEvents.ownerUserId, userId))).limit(1))[0];
    if (!current) throw new AuthorizationError("Personal event not found.");
    const date = input.date ?? mapDate(current);
    const row = (await getDb().update(personalEvents).set({
      type: input.type ?? current.type, title: input.title ?? current.title,
      year: date.year, month: date.month, day: date.day,
      recurrence: input.recurrence === undefined ? current.recurrence : input.recurrence,
      personalPersonId: input.personalPersonId === undefined ? current.personalPersonId : input.personalPersonId,
      notes: input.notes === undefined ? current.notes : input.notes, updatedAt: new Date(),
    }).where(and(eq(personalEvents.id, id), eq(personalEvents.ownerUserId, userId))).returning())[0];
    if (!row) throw new InfrastructureError("Failed to update personal event.");
    return mapEvent(row);
  },
  async deleteEvent(userId, id) {
    await getDb().delete(personalEvents).where(and(eq(personalEvents.id, id), eq(personalEvents.ownerUserId, userId)));
  },
  async listPeople(userId) {
    const rows = await getDb().select().from(personalPeople).where(eq(personalPeople.ownerUserId, userId)).orderBy(desc(personalPeople.createdAt));
    return rows.map(mapPerson);
  },
  async createPerson(userId, input) {
    const row = (await getDb().insert(personalPeople).values({ ownerUserId: userId, name: input.name }).returning())[0];
    if (!row) throw new InfrastructureError("Failed to create personal person.");
    return mapPerson(row);
  },
  async listMemories(userId) {
    const rows = await getDb().select().from(memories).where(eq(memories.ownerUserId, userId)).orderBy(desc(memories.year), desc(memories.month), desc(memories.day));
    return rows.map(mapMemory);
  },
  async listMemoriesForDate(userId, date) {
    const rows = await getDb().select().from(memories).where(and(eq(memories.ownerUserId, userId), eq(memories.year, date.year), eq(memories.month, date.month), eq(memories.day, date.day)));
    return rows.map(mapMemory);
  },
  async createMemory(userId, input) {
    const row = (await getDb().insert(memories).values({
      ownerUserId: userId, year: input.date.year, month: input.date.month, day: input.date.day,
      title: input.title, text: input.text, tags: [...input.tags], mediaIds: [...input.mediaIds],
      personIds: [...input.personIds], eventIds: [...input.eventIds], personalEventIds: [...input.personalEventIds],
    }).returning())[0];
    if (!row) throw new InfrastructureError("Failed to create memory.");
    return mapMemory(row);
  },
  async updateMemory(userId, id, input) {
    const current = (await getDb().select().from(memories).where(and(eq(memories.id, id), eq(memories.ownerUserId, userId))).limit(1))[0];
    if (!current) throw new AuthorizationError("Memory not found.");
    const date = input.date ?? mapDate(current);
    const row = (await getDb().update(memories).set({
      year: date.year, month: date.month, day: date.day,
      title: input.title === undefined ? current.title : input.title,
      text: input.text ?? current.text, tags: input.tags ? [...input.tags] : current.tags,
      mediaIds: input.mediaIds ? [...input.mediaIds] : current.mediaIds,
      personIds: input.personIds ? [...input.personIds] : current.personIds,
      eventIds: input.eventIds ? [...input.eventIds] : current.eventIds,
      personalEventIds: input.personalEventIds ? [...input.personalEventIds] : current.personalEventIds,
      updatedAt: new Date(),
    }).where(and(eq(memories.id, id), eq(memories.ownerUserId, userId))).returning())[0];
    if (!row) throw new InfrastructureError("Failed to update memory.");
    return mapMemory(row);
  },
  async deleteMemory(userId, id) {
    await getDb().delete(memories).where(and(eq(memories.id, id), eq(memories.ownerUserId, userId)));
  },
};
