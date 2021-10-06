import { EventView } from "../components/EventView";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import {
  eventIds$,
  eventsFamily$,
  selectedEventId$,
  useSyncEventState,
} from "../atoms";

export const EventViewContainer = () => {
  const selectedEventId = useRecoilValue(selectedEventId$);
  const [event, setEvent] = useRecoilState(eventsFamily$(selectedEventId));
  const eventIds = useRecoilValue(eventIds$);
  const syncEventState = useSyncEventState();

  const deleteEvent = useRecoilCallback(({ set, reset }) => (eventId) => {
    const filteredEventIds = eventIds.filter((id) => id !== eventId);
    if (filteredEventIds.length > 0) {
      set(selectedEventId$, filteredEventIds[0]);
    }
    set(eventIds$, filteredEventIds);
    reset(eventsFamily$(eventId));
  });

  const updateEvent = (slice) => {
    setEvent({ ...event, ...slice });
    syncEventState();
  };

  if (!event) {
    return null;
  }

  return (
    <EventView
      key={event.id}
      event={event}
      updateEvent={updateEvent}
      removeEvent={deleteEvent}
    />
  );
};
