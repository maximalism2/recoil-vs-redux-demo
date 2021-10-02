import { eventIds$, eventsFamily$, selectedEventId$ } from "../atoms";
import { mockEvents } from "../consts/mocks";

export default function initializeState({ set }) {
  set(
    eventIds$,
    mockEvents.map((e) => e.id)
  );

  set(selectedEventId$, mockEvents[0].id);

  mockEvents.forEach((event) => {
    set(eventsFamily$(event.id), event);
  });
}
