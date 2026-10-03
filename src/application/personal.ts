import { isImperialDateValid } from "../domain/calendar/conversion";
import type { ImperialDate } from "../domain/calendar/types";
import type { Memory,PersonalEvent,PersonalEventType,PersonalPerson } from "../domain/personal/types";
import type { PersonalRepository } from "../data/contracts/repositories";
import { AuthorizationError, ValidationError } from "../shared/errors";

export function assertUser(userId:string){
  if(!userId) throw new ValidationError("A signed-in user is required.");
}

export function validatePersonalDate(date:ImperialDate){
  if(!Number.isInteger(date.year)||!Number.isInteger(date.month)||!Number.isInteger(date.day)||!isImperialDateValid(date)){
    throw new ValidationError("Invalid Imperial date.");
  }
}

export function validatePersonalEventInput(input:Pick<PersonalEvent,"type"|"title"|"date">){
  validatePersonalDate(input.date);
  if(!["birthday","anniversary","custom"].includes(input.type as PersonalEventType)){
    throw new ValidationError("Invalid personal event type.");
  }
  if(!input.title.trim()) throw new ValidationError("Personal event title is required.");
}

export function validateMemoryInput(input:Pick<Memory,"text"|"date">){
  validatePersonalDate(input.date);
  if(!input.text.trim()) throw new ValidationError("Memory text is required.");
}

export function validatePersonalPersonName(name:string){
  if(!name.trim()) throw new ValidationError("Personal person name is required.");
}

export function personalUseCases(repository:PersonalRepository){
  return {
    listOverview:async(userId:string)=>{
      assertUser(userId);
      const [events,people,memories]=await Promise.all([repository.listEvents(userId),repository.listPeople(userId),repository.listMemories(userId)]);
      return {events,people,memories};
    },
    listForDate:async(userId:string,date:ImperialDate)=>{
      assertUser(userId); validatePersonalDate(date);
      const [events,memories]=await Promise.all([repository.listEventsForDate(userId,date),repository.listMemoriesForDate(userId,date)]);
      return {events,memories};
    },
    createPerson:async(userId:string,input:Pick<PersonalPerson,"name">)=>{assertUser(userId);validatePersonalPersonName(input.name);return repository.createPerson(userId,input)},
    createEvent:async(userId:string,input:Omit<PersonalEvent,"id"|"ownerUserId"|"createdAt"|"updatedAt">)=>{
      assertUser(userId); validatePersonalEventInput(input);
      if(input.personalPersonId && !(await repository.listPeople(userId)).some(person=>person.id===input.personalPersonId)) throw new AuthorizationError("Personal person not found.");
      return repository.createEvent(userId,input);
    },
    updateEvent:async(userId:string,id:string,input:Parameters<PersonalRepository["updateEvent"]>[2])=>{
      assertUser(userId);
      if(!id) throw new ValidationError("Personal event id is required.");
      if(input.personalPersonId && !(await repository.listPeople(userId)).some(person=>person.id===input.personalPersonId)) throw new AuthorizationError("Personal person not found.");
      if(input.type!==undefined&&!["birthday","anniversary","custom"].includes(input.type)) throw new ValidationError("Invalid personal event type.");
      if(input.title!==undefined&&!input.title.trim()) throw new ValidationError("Personal event title is required.");
      if(input.date) validatePersonalDate(input.date);
      return repository.updateEvent(userId,id,input);
    },
    deleteEvent:async(userId:string,id:string)=>{
      assertUser(userId); if(!id) throw new ValidationError("Personal event id is required."); return repository.deleteEvent(userId,id);
    },
    createMemory:async(userId:string,input:Omit<Memory,"id"|"ownerUserId"|"createdAt"|"updatedAt">)=>{
      assertUser(userId); validateMemoryInput(input); return repository.createMemory(userId,input);
    },
    updateMemory:async(userId:string,id:string,input:Parameters<PersonalRepository["updateMemory"]>[2])=>{
      assertUser(userId); if(!id) throw new ValidationError("Memory id is required.");
      if(input.date) validatePersonalDate(input.date);
      if(input.text!==undefined&&!input.text.trim()) throw new ValidationError("Memory text is required.");
      return repository.updateMemory(userId,id,input);
    },
    deleteMemory:async(userId:string,id:string)=>{
      assertUser(userId); if(!id) throw new ValidationError("Memory id is required."); return repository.deleteMemory(userId,id);
    }
  };
}
