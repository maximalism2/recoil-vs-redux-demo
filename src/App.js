import { Aside, Content, Main } from "./components/Layout";
import { EventsListContainer } from "./containers/EventsList";
import { ContentContainer } from "./containers/Content";

function App() {
  return (
    <Main>
      <Aside>
        <EventsListContainer />
      </Aside>
      <Content>
        <ContentContainer />
      </Content>
    </Main>
  );
}

export default App;
