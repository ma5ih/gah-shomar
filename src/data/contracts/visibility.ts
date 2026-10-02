export type PublicVisibility = "PUBLIC";
export type PersonalVisibility = "PRIVATE";

export type OwnedRecord = {
  readonly ownerUserId: string;
};

export function assertOwnership(
  record: OwnedRecord,
  currentUserId: string,
): void {
  if (record.ownerUserId !== currentUserId) {
    throw new Error("AUTHORIZATION_DENIED");
  }
}
