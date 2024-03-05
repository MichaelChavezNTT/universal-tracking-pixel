export function getTimestamp(): string {
  const now: Date = new Date();
  const timestamp: string = now.toISOString(); // ISO 8601 format
  return timestamp;
}
