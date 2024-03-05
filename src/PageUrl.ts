export function getCurrentPageURL(): string {
  let url = '';

  if (typeof window !== 'undefined' && window.location && window.location.href) {
    url = window.location.href;
  }

  return url;
}