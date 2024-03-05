export function convertToPST(isoTimestamp: string): string {
  const dateObj: Date = new Date(isoTimestamp);
  const pstTimestamp: string = dateObj.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'});
  return pstTimestamp;
}
