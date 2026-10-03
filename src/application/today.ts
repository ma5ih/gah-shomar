import type { TodayState } from "./types";
import { resolveTimeContext } from "./time-context";
import { publicRepository } from "../data/public/repository";
import type { PersonalRepository } from "../data/contracts/repositories";
import type { PersonalEvent, Memory } from "../domain/personal/types";
import { personalEventOccursOn } from "./personal-calendar";

export async function getTodayState(options:{now?:Date;timeZone?:string;userId?:string;personalRepository?:PersonalRepository}={}):Promise<TodayState>{
  const context=resolveTimeContext(options.now,options.timeZone);
  const events=publicRepository.listEventsForDate(context.imperialDate.year,context.imperialDate.month,context.imperialDate.day);
  const importantEvents=publicRepository.listImportantEvents(context.imperialDate.year,context.imperialDate.month);
  const ids=new Set(events.flatMap(e=>e.periodIds));
  const periods=publicRepository.listPeriods().filter(p=>ids.has(p.id));
  const people=[...new Set(events.flatMap(e=>e.personIds))]
    .map(id=>publicRepository.getPersonById(id))
    .filter((p):p is NonNullable<typeof p>=>Boolean(p));

  let personalEvents: readonly PersonalEvent[] = [];
  let memories: readonly Memory[] = [];
  if(options.userId&&options.personalRepository){
    try { const [allEvents,allMemories]=await Promise.all([
      options.personalRepository.listEvents(options.userId),
      options.personalRepository.listMemoriesForDate(options.userId,context.imperialDate),
    ]);
      personalEvents=allEvents.filter(event=>personalEventOccursOn(event,context.imperialDate));
      memories=allMemories;
    } catch { personalEvents=[]; memories=[]; }
  }
  return{context,events,importantEvents,periods,people,personalEvents,memories};
}
