export function getIdsFromLocalStorage(): { [key: string]: string } {
  const exIds: { [key: string]: string } = {};

  if (typeof localStorage !== 'undefined') {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        if (value !== null) {
          exIds[key] = value;
        }
      }
    }
  }

  return exIds;
}
