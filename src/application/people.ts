import { seedPeople } from "../content/seed";

export function getPersonBySlug(slug: string) {
  return seedPeople.find((person) => person.status === "APPROVED" && person.slug === slug);
}

export function getPersonById(id: string) {
  return seedPeople.find((person) => person.status === "APPROVED" && person.id === id);
}
