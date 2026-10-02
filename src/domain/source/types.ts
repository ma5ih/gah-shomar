export type SourceType =
  | "primary_document"
  | "archival_record"
  | "book"
  | "academic_work"
  | "institutional_source"
  | "reputable_reference"
  | "contemporary_report"
  | "interview_or_oral_history"
  | "other";

export type Source = {
  readonly id: string;
  readonly title: string;
  readonly author?: string;
  readonly publisher?: string;
  readonly sourceType: SourceType;
  readonly url?: string;
  readonly publicationDate?: string;
  readonly accessedAt?: string;
  readonly referenceDetail: string;
  readonly language?: string;
  readonly notes?: string;
};
