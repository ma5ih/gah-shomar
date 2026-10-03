"use server";
import { revalidatePath } from "next/cache";
import { getCurrentSession } from "@/application/session";
import { personalRepository } from "@/data/db/repositories";
import { application } from "@/application/use-cases";

function date(fd:FormData){
  return {
    year:Number(fd.get("year")),
    month:Number(fd.get("month")) as 1|2|3|4|5|6|7|8|9|10|11|12,
    day:Number(fd.get("day")),
  };
}
async function sessionOrThrow(){
  const s=await getCurrentSession();
  if(!s) throw new Error("SIGN_IN_REQUIRED");
  return s;
}
export async function createPersonalEventAction(fd:FormData){
  const s=await sessionOrThrow();
  await application.personal(personalRepository).createEvent(s.userId,{
    type:String(fd.get("type")??"custom") as "birthday"|"anniversary"|"custom",
    title:String(fd.get("title")??"").trim(),
    date:date(fd),
    notes:String(fd.get("notes")??"")||undefined,
    recurrence:fd.get("recurrence")==="yearly"?{frequency:"yearly",interval:1}:undefined,
  });
  revalidatePath("/personal"); revalidatePath("/");
}
export async function updatePersonalEventAction(fd:FormData){
  const s=await sessionOrThrow();
  await application.personal(personalRepository).updateEvent(s.userId,String(fd.get("id")??""),{
    type:String(fd.get("type")??"custom") as "birthday"|"anniversary"|"custom",
    title:String(fd.get("title")??"").trim(),
    date:date(fd),
    notes:String(fd.get("notes")??"")||undefined,
    recurrence:fd.get("recurrence")==="yearly"?{frequency:"yearly",interval:1}:undefined,
  });
  revalidatePath("/personal"); revalidatePath("/");
}
export async function deletePersonalEventAction(fd:FormData){
  const s=await sessionOrThrow();
  await application.personal(personalRepository).deleteEvent(s.userId,String(fd.get("id")??""));
  revalidatePath("/personal"); revalidatePath("/");
}
export async function createPersonalPersonAction(fd:FormData){
  const s=await sessionOrThrow();
  await personalRepository.createPerson(s.userId,{name:String(fd.get("name")??"").trim()});
  revalidatePath("/personal");
}
export async function createMemoryAction(fd:FormData){
  const s=await sessionOrThrow();
  await application.personal(personalRepository).createMemory(s.userId,{
    date:date(fd),
    title:String(fd.get("title")??"")||undefined,
    text:String(fd.get("text")??""),
    tags:[],mediaIds:[],personIds:[],eventIds:[],personalEventIds:[],
  });
  revalidatePath("/personal"); revalidatePath("/");
}
export async function updateMemoryAction(fd:FormData){
  const s=await sessionOrThrow();
  await application.personal(personalRepository).updateMemory(s.userId,String(fd.get("id")??""),{
    date:date(fd),
    title:String(fd.get("title")??"")||undefined,
    text:String(fd.get("text")??""),
  });
  revalidatePath("/personal"); revalidatePath("/");
}
export async function deleteMemoryAction(fd:FormData){
  const s=await sessionOrThrow();
  await application.personal(personalRepository).deleteMemory(s.userId,String(fd.get("id")??""));
  revalidatePath("/personal"); revalidatePath("/");
}
