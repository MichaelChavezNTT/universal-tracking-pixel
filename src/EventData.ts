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
  view?: string | null;
}

export function getEventData(event: Event): EventData {
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
    view: event.view ? event.view.location.href : null,
    ...mouseProps,
  };
}
