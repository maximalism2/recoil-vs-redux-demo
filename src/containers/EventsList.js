import { EventsList } from "../components/EventsList";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createMode$, eventsSelector$, selectedEventId$ } from "../atoms";

export const EventsListContainer = () => {
  const events = useRecoilValue(eventsSelector$);
  const setSelectedEventId = useSetRecoilState(selectedEventId$);
  const setCreateMode = useSetRecoilState(createMode$);

  return (
    <EventsList
      events={events}
      onEventClick={setSelectedEventId}
      onCreateClick={() => setCreateMode(true)}
    />
  );
};
