import { useState } from "react";
import { EventsList } from "./components/EventsList";
import { Aside, Content, Main } from "./components/Layout";
import { mockEvents } from "./consts";
import { EventView } from "./components/EventView";
import { getEventById } from "./utils";
import { CreateEventView } from "./components/CreateEventView";

const updateById = (selectedEventId, slice) => (events) => {
  const selectedEventIndex = events.findIndex((e) => e.id === selectedEventId);
  const selectedEvent = getEventById(events, selectedEventId);

  return [
    ...events.slice(0, selectedEventIndex),
    { ...selectedEvent, ...slice },
    ...events.slice(selectedEventIndex + 1),
  ];
};

function App() {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEventId, setSelectedEventId] = useState(mockEvents[0].id);
  const [isCreateView, setIsCreateView] = useState(false);

  const selectEvent = (id) => {
    setIsCreateView(false);
    setSelectedEventId(id);
  };

  const updateEvent = (slice) => {
    setEvents(updateById(selectedEventId, slice));
  };

  const createNewEvent = () => setIsCreateView(true);

  const saveNewEvent = (event) => {
    setEvents((prevEvents) => prevEvents.concat(event));
    selectEvent(event.id);
  };

  return (
    <Main>
      <Aside>
        <EventsList
          events={events}
          onEventClick={selectEvent}
          onCreateClick={createNewEvent}
        />
      </Aside>
      <Content>
        {isCreateView ? (
          <CreateEventView saveNewEvent={saveNewEvent} />
        ) : (
          <EventView
            key={selectedEventId}
            event={getEventById(events, selectedEventId)}
            updateEvent={updateEvent}
          />
        )}
      </Content>
    </Main>
  );
}

export default App;
