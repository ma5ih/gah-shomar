import type { ImperialDate } from "../domain/calendar/types";
import { getMonthQuery,getDayQuery,shiftMonth } from "./calendar";
import { getTodayState } from "./today";
import { getEventBySlug,listImportantEvents,listEventsForDate } from "./events";
import { getPersonBySlug } from "./people";
import { getTimeline } from "./timeline";
import { searchPublicContent } from "./search";
import { personalUseCases } from "./personal";
import { searchPersonalContent } from "./personal-search";
import { buildShareCardDto } from "./share-card";
import type { PersonalRepository } from "../data/contracts/repositories";
import type { PersonalEvent } from "../domain/personal/types";

export const application={
  today:getTodayState,month:getMonthQuery,day:getDayQuery,shiftMonth,eventsForDate:listEventsForDate,
  importantEvents:listImportantEvents,eventBySlug:getEventBySlug,personBySlug:getPersonBySlug,timeline:getTimeline,publicSearch:searchPublicContent,
  personal(repository:PersonalRepository){return personalUseCases(repository);},
  async searchAll(repository:PersonalRepository,userId:string|null,query:string){
    const publicResults=searchPublicContent(query);if(!userId)return publicResults;
    return [...publicResults,...await searchPersonalContent(repository,userId,query)];
  },
  shareCard(userId:string,event:PersonalEvent){return buildShareCardDto(userId,event);},
  async validateDate(date:ImperialDate){return (await getDayQuery(date)).date;},
};
