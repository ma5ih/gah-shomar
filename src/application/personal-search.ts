import type { PersonalRepository } from "../data/contracts/repositories";
import { normalizeSearchText } from "../shared/text";

export async function searchPersonalContent(
  repository: PersonalRepository,
  userId: string,
  query: string,
) {
  const q = normalizeSearchText(query);
  if (!q || q.length < 2) return [];
  const [events, memories] = await Promise.all([
    repository.listEvents(userId),
    repository.listMemories(userId),
  ]);
  return [
    ...events.map((event) => ({
      entityType: "personalEvent" as const,
      entityId: event.id,
      title: event.title,
      context: event.notes ?? "",
      date: event.date,
    })),
    ...memories.map((memory) => ({
      entityType: "memory" as const,
      entityId: memory.id,
      title: memory.title ?? memory.text.slice(0, 60),
      context: memory.text,
      date: memory.date,
    })),
  ].map((result) => {
    const haystack = normalizeSearchText(`${result.title} ${result.context}`);
    const score = haystack === q ? 100 : haystack.startsWith(q) ? 60 : haystack.includes(q) ? 30 : 0;
    return { ...result, score };
  }).filter((result) => result.score > 0).sort((a, b) => b.score - a.score);
}
