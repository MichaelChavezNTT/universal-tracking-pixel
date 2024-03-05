interface UtmRecord {
  [key: string]: string;
}

export function getUTMParameters(): UtmRecord {
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const utmParams: UtmRecord = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || ''
    };

    return utmParams;
  }
  
  return {};
}

