export function getExIdsFromCookie(): { [key: string]: string } {
  const exIds: { [key: string]: string } = {};

  if (typeof document !== 'undefined') {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';').map(cookie => cookie.trim());

    cookies.forEach(cookie => {
      const [key, value] = cookie.split('=');
      exIds[key.trim()] = value;
    });
  }

  return exIds;
}
