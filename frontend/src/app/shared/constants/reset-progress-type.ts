export const ResetProgressTypes = {
  KOREADER: 'KOREADER',
  // TODO(tobyshelf-cleanup): Switch backend/API payloads to emit a real TOBYSHELF reset type and drop the BOOKLORE alias.
  TOBYSHELF: 'BOOKLORE',
  KOBO: 'KOBO'
} as const;

export type ResetProgressType = typeof ResetProgressTypes[keyof typeof ResetProgressTypes];
