import type { LocalizedText } from "../../shared/types/localized";

export type MediaAsset = {
  readonly id: string;
  readonly type: "image" | "document";
  readonly storageKey: string;
  readonly mimeType: string;
  readonly fileName?: string;
  readonly size?: number;
  readonly width?: number;
  readonly height?: number;
  readonly altText?: LocalizedText;
  readonly caption?: LocalizedText;
  readonly credit?: string;
  readonly sourceId?: string;
  readonly focalPoint?: { readonly x: number; readonly y: number };
  readonly createdAt: string;
  readonly updatedAt: string;
};
