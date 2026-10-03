import type { ImperialMonth } from "./types";

export type Season = "spring" | "summer" | "autumn" | "winter";

export function seasonOfImperialMonth(month: ImperialMonth): Season {
  if (month <= 3) return "spring";
  if (month <= 6) return "summer";
  if (month <= 9) return "autumn";
  return "winter";
}
