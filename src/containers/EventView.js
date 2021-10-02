import { connect } from "react-redux";

import * as ActionCreators from "../actions";
import { activeEventSelector } from "../selectors";

import { EventView } from "../components/EventView";

const mapStateToProps = (state) => ({
  event: activeEventSelector(state),
});

const actionsToBind = {
  updateEvent: ActionCreators.updateEvent,
  deleteEvent: ActionCreators.deleteEvent,
};

const Container = ({ event, updateEvent, deleteEvent }) =>
  !event ? null : (
    <EventView
      key={event.id}
      event={event}
      updateEvent={(slice) => updateEvent(event.id, slice)}
      removeEvent={deleteEvent}
    />
  );

export const EventViewContainer = connect(
  mapStateToProps,
  actionsToBind
)(Container);
