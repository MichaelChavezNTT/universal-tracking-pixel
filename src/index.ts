import { getUTMParameters } from './UtmFields';
import { getExIdsFromCookie } from './ExIds';
import { getIdsFromLocalStorage } from './LocalStorageIds';
import { getSystemInfo } from './SystemInfo';
import { getReferrer } from './Referrer';
import { getTimestamp } from './Timestamp';
import { convertToPST } from './ConvertToPST';
import { getPageTitle } from './PageTitle';
import { getCurrentPageURL } from './PageUrl';
import { getCurrentHostName } from './HostName';
import { getEventData } from './EventData';
import { getFormDataFromLocalStorageIds } from './FormData';

interface JsonPayload {
  [key: string]: any;
}

export async function reportEvent(event: any, eventName: string, payload: JsonPayload) {
  const apiUrl = 'https://eventex5.apps.nextthing.tech/api/events';
   
  const utmParams = getUTMParameters();
  const exIds = getExIdsFromCookie();
  const systemInfo = getSystemInfo();
  const referrer = getReferrer();
  const created_at = getTimestamp();
  const created_at_pst = convertToPST(created_at);
  const localStorageIds = getIdsFromLocalStorage();
  const page_title = getPageTitle();
  const page_url = getCurrentPageURL();
  const host_name = getCurrentHostName();
  const eventData = getEventData(event);
  const formData = getFormDataFromLocalStorageIds(localStorageIds)

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          event_name: eventName,
          properties: {
            a: 1,
            b: 2,
            ...payload,
            ...utmParams,
            ...exIds,
            ...systemInfo,
            referrer,
            created_at,
            created_at_pst,
            ...localStorageIds,
            page_title,
            page_url,
            host_name,
            ...eventData,
            ...formData
          }
        }
      })
    });

    if (!response.ok) {
      console.log("ℹ️ response: ", response)
      throw new Error('Failed to send event message');
    }

    const responseData = await response.json();
    console.log('Event message sent successfully:', responseData);
  } catch (error) {
    console.error('Error sending event message:', error);
  }
}
