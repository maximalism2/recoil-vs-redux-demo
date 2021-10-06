import { EventsList } from "../components/EventsList";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  createMode$,
  eventIds$,
  eventsSelector$,
  selectedEventId$,
  useSyncEventStateEffect,
} from "../atoms";

export const EventsListContainer = () => {
  const eventIds = useRecoilValue(eventIds$);
  const events = useRecoilValue(eventsSelector$);
  const setSelectedEventId = useSetRecoilState(selectedEventId$);
  const setCreateMode = useSetRecoilState(createMode$);

  useSyncEventStateEffect(eventIds);

  return (
    <EventsList
      events={events}
      onEventClick={(eventId) => {
        setSelectedEventId(eventId);
        setCreateMode(false);
      }}
      onCreateClick={() => setCreateMode(true)}
    />
  );
};
