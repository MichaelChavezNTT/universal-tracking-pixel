interface FormData {
  id: number;
  email: string;
  fullName: string;
  // Add other properties as needed
}

export function getFormDataFromLocalStorageIds(localStorageIds: { [key: string]: string }): FormData | null {
  const formDataString = localStorageIds && localStorageIds['formData'];
  if (formDataString) {
    try {
      const formData = JSON.parse(formDataString);
      return formData;
    } catch (error) {
      console.error("Error parsing formData from localStorage:", error);
    }
  }
  return null;
}