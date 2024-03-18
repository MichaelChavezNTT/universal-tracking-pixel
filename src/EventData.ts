interface EventData {
  eventType: string;
  eventTimeStamp: number;
  clientX?: number;
  clientY?: number;
  pageX?: number;
  pageY?: number;
  srcElement: EventTarget | null;
  viewUrl: string;
  outerHTML?: string | null;
  outerText?: string | null;
  targetId?: string | null;
  className?: string | null;
  view?: string | null; // Keep this as an optional property
}

export function getEventData(event: Event): EventData {
  // Use a type guard to check if the event is an instance of UIEvent
  const viewUrl = event instanceof UIEvent && event.view ? event.view.location.href : '';
  
  const target = event.target instanceof HTMLElement ? event.target : null;

  let mouseProps = {};
  if (event instanceof MouseEvent) {
    mouseProps = {
      clientX: event.clientX,
      clientY: event.clientY,
      pageX: event.pageX,
      pageY: event.pageY,
    };
  }

  return {
    eventType: event.type,
    eventTimeStamp: event.timeStamp,
    srcElement: event.srcElement ? event.srcElement : null,
    viewUrl,
    outerHTML: target ? target.outerHTML : null,
    outerText: target ? target.outerText : null,
    targetId: target ? target.id : null,
    className: target ? target.className : null,
    // Access 'view' property safely after checking the event is an instance of UIEvent
    view: event instanceof UIEvent && event.view ? event.view.location.href : null,
    ...mouseProps,
  };
}
