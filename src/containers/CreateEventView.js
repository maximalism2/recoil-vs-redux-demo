import { useRecoilTransaction_UNSTABLE as useRecoilTransaction } from "recoil";

import {
  createMode$,
  eventIds$,
  eventsFamily$,
  selectedEventId$,
} from "../atoms";

import { CreateEventView } from "../components/CreateEventView";

export const CreateEventViewContainer = () => {
  const saveNewEvent = useRecoilTransaction(({ get, set }) => (eventData) => {
    set(eventIds$, get(eventIds$).concat(eventData.id));
    set(eventsFamily$(eventData.id), eventData);
    set(selectedEventId$, eventData.id);
    set(createMode$, false);
  });

  return <CreateEventView saveNewEvent={saveNewEvent} />;
};
