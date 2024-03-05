export function getCurrentHostName(): string {
  let hostname = '';

  if (typeof window !== 'undefined' && window.location && window.location.hostname) {
    hostname = window.location.hostname;
  }

  return hostname;
}
