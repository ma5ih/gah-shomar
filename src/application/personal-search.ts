import type { PersonalRepository } from "../data/contracts/repositories";
import { normalizeSearchText } from "../shared/text";

export async function searchPersonalContent(
  repository: PersonalRepository,
  userId: string,
  query: string,
) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery || normalizedQuery.length < 2) {
    return [];
  }

  const [events, memories] = await Promise.all([
    repository.listEvents(userId),
    repository.listMemories(userId),
  ]);

  const results = [
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
  ];

  return results
    .map((result) => {
      const haystack = normalizeSearchText(`${result.title} ${result.context}`);
      const score =
        haystack === normalizedQuery
          ? 100
          : haystack.startsWith(normalizedQuery)
            ? 60
            : haystack.includes(normalizedQuery)
              ? 30
              : 0;

      return { ...result, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);
}
