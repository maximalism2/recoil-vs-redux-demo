import { connect } from "react-redux";

import * as ActionCreators from "../actions";
import { activeEventSelector } from "../selectors";

import { EventView } from "../components/EventView";

const mapStateToProps = (state) => ({
  event: activeEventSelector(state),
});

const actionsToBind = {
  updateEvent: ActionCreators.updateEvent,
};

const Container = ({ event, updateEvent }) => (
  <EventView
    key={event.id}
    event={event}
    updateEvent={(slice) => updateEvent(event.id, slice)}
  />
);

export const EventViewContainer = connect(
  mapStateToProps,
  actionsToBind
)(Container);
