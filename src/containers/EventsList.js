import { connect } from "react-redux";

import { eventsSelector } from "../selectors";
import * as actionCreators from "../actions";

import { EventsList } from "../components/EventsList";

const mapStateToProps = (state) => ({
  events: eventsSelector(state),
});

const Container = ({ events, createNewEvent, selectEvent }) => (
  <EventsList
    events={events}
    onEventClick={selectEvent}
    onCreateClick={createNewEvent}
  />
);

export const EventsListContainer = connect(mapStateToProps, {
  createNewEvent: actionCreators.createNewEvent,
  selectEvent: actionCreators.selectEvent,
})(Container);
