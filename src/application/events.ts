import { publicRepository } from "../data/public/repository";

export function listImportantEvents(year: number, month: number) {
  return publicRepository.listImportantEvents(year, month);
}

export function getEventBySlugOrId(routeKey: string) {
  return publicRepository.getEventBySlug(routeKey) ?? publicRepository.getEventById(routeKey);
}

export function getEventById(id: string) {
  return publicRepository.getEventById(id);
}

export function getSourceById(id: string) {
  return publicRepository.getSourceById(id);
}

export function listEventsForDate(year: number, month: number, day: number) {
  return publicRepository.listEventsForDate(year, month, day);
}
