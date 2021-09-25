import { useState } from "react";
import { EventsList } from "./components/EventsList";
import { Aside, Content, Main } from "./components/Layout";
import { bets } from "./consts";
import { EventView } from "./components/EventView";
import { getBetById } from "./utils";

function App() {
  const [selectedEventId, setSelectedEventId] = useState(bets[0].id);

  const selectEvent = ({ id }) => setSelectedEventId(id);

  const createNewEvent = () =>
    console.log("New bet is going to be created here");

  return (
    <Main>
      <Aside>
        <EventsList
          bets={bets}
          onEventClick={selectEvent}
          onCreateClick={createNewEvent}
        />
      </Aside>
      <Content>
        <EventView
          key={selectedEventId}
          bet={getBetById(selectedEventId)}
          updateBet={console.log}
        />
      </Content>
    </Main>
  );
}

export default App;
