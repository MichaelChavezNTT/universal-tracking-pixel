interface EventData {
  eventType: string;
  eventTimeStamp: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  srcElement: EventTarget | null;
  viewUrl: string;
  outerHTML: string;
  outerText: string;
  targetId: string;
  className: string;
}

export function getEventData(event: MouseEvent): EventData {
  const viewUrl = event.view ? event.view.location.href : '';
  
  return {
    eventType: event.type,
    eventTimeStamp: event.timeStamp,
    clientX: event.clientX,
    clientY: event.clientY,
    pageX: event.pageX,
    pageY: event.pageY,
    srcElement: event.srcElement,
    viewUrl,
    outerHTML: event.target.outerHTML,
    outerText: event.target.outerText,
    targetId: event.target.id,
    className: event.target.className
  };
}
