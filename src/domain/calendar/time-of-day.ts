export type TimeOfDayState = "morning" | "noon" | "sunset" | "night";

export type TimeOfDayBoundaries = {
  readonly morningStartHour: number;
  readonly noonStartHour: number;
  readonly sunsetStartHour: number;
  readonly nightStartHour: number;
};

function validateHour(hour: number): void {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new RangeError("Hour must be an integer from 0 to 23.");
  }
}

function validateMinute(minute: number): void {
  if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
    throw new RangeError("Minute must be an integer from 0 to 59.");
  }
}

function validateBoundaries(boundaries: TimeOfDayBoundaries): void {
  const values = [
    boundaries.morningStartHour,
    boundaries.noonStartHour,
    boundaries.sunsetStartHour,
    boundaries.nightStartHour,
  ];

  if (values.some((value) => !Number.isInteger(value) || value < 0 || value > 23)) {
    throw new RangeError("Time-of-day boundaries must be integer hours from 0 to 23.");
  }

  if (
    boundaries.morningStartHour >= boundaries.noonStartHour ||
    boundaries.noonStartHour >= boundaries.sunsetStartHour ||
    boundaries.sunsetStartHour >= boundaries.nightStartHour
  ) {
    throw new RangeError("Time-of-day boundaries must be strictly increasing.");
  }
}

export function getTimeOfDayState(
  hour: number,
  minute: number,
  boundaries: TimeOfDayBoundaries,
): TimeOfDayState {
  validateHour(hour);
  validateMinute(minute);
  validateBoundaries(boundaries);

  if (hour >= boundaries.nightStartHour || hour < boundaries.morningStartHour) {
    return "night";
  }
  if (hour >= boundaries.sunsetStartHour) {
    return "sunset";
  }
  if (hour >= boundaries.noonStartHour) {
    return "noon";
  }
  return "morning";
}
