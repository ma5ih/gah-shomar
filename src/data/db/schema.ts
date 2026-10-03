import { integer, jsonb, pgTable, text, timestamp, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: varchar("username", { length: 64 }).notNull(),
  normalizedUsername: varchar("normalized_username", { length: 64 }).notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  normalizedUsernameUnique: uniqueIndex("users_normalized_username_unique").on(table.normalizedUsername),
}));

export const sessions = pgTable("sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull(),
  tokenHash: text("token_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  lastSeenAt: timestamp("last_seen_at", { withTimezone: true }).defaultNow().notNull(),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
}, (table) => ({
  tokenHashUnique: uniqueIndex("sessions_token_hash_unique").on(table.tokenHash),
}));

export const personalPeople = pgTable("personal_people", {
  id: uuid("id").defaultRandom().primaryKey(),
  ownerUserId: uuid("owner_user_id").notNull(),
  name: varchar("name", { length: 160 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const personalEvents = pgTable("personal_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  ownerUserId: uuid("owner_user_id").notNull(),
  type: varchar("type", { length: 32 }).notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  year: integer("year").notNull(), month: integer("month").notNull(), day: integer("day").notNull(),
  recurrence: jsonb("recurrence"),
  personalPersonId: uuid("personal_person_id"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const memories = pgTable("memories", {
  id: uuid("id").defaultRandom().primaryKey(),
  ownerUserId: uuid("owner_user_id").notNull(),
  year: integer("year").notNull(), month: integer("month").notNull(), day: integer("day").notNull(),
  title: varchar("title", { length: 200 }),
  text: text("text").notNull(),
  tags: text("tags").array().notNull().default([]),
  mediaIds: text("media_ids").array().notNull().default([]),
  personIds: text("person_ids").array().notNull().default([]),
  eventIds: text("event_ids").array().notNull().default([]),
  personalEventIds: text("personal_event_ids").array().notNull().default([]),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
