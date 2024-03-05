export function getPageTitle(): string {
  let title = '';

  if (typeof document !== 'undefined' && document.title) {
    title = document.title;
  }

  return title;
}
