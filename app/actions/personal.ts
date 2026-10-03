"use server";
import { revalidatePath } from "next/cache";
import { getCurrentSession } from "@/application/session";
import { personalRepository } from "@/data/db/repositories";
import { application } from "@/application/use-cases";

function readDate(formData: FormData) {
  return {
    year: Number(formData.get("year")),
    month: Number(formData.get("month")) as 1|2|3|4|5|6|7|8|9|10|11|12,
    day: Number(formData.get("day")),
  };
}

export async function createPersonalEventAction(formData: FormData) {
  const session = await getCurrentSession();
  if (!session) throw new Error("SIGN_IN_REQUIRED");
  await application.personal(personalRepository).createEvent(session.userId, {
    type: String(formData.get("type") ?? "custom") as "birthday"|"anniversary"|"custom",
    title: String(formData.get("title") ?? ""),
    date: readDate(formData),
    notes: String(formData.get("notes") ?? "") || undefined,
  });
  revalidatePath("/personal");
}

export async function createMemoryAction(formData: FormData) {
  const session = await getCurrentSession();
  if (!session) throw new Error("SIGN_IN_REQUIRED");
  await application.personal(personalRepository).createMemory(session.userId, {
    date: readDate(formData),
    title: String(formData.get("title") ?? "") || undefined,
    text: String(formData.get("text") ?? ""),
    tags: [],
    mediaIds: [],
    personIds: [],
    eventIds: [],
    personalEventIds: [],
  });
  revalidatePath("/personal");
}
