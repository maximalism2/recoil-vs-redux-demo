import { connect } from "react-redux";

import { CreateEventView } from "../components/CreateEventView";

import * as ActionCreators from "../actions";

const Container = ({ saveNewEvent }) => (
  <CreateEventView saveNewEvent={saveNewEvent} />
);

const actionsToBind = {
  saveNewEvent: ActionCreators.saveNewEvent,
};

export const CreateEventViewContainer = connect(
  () => ({}),
  actionsToBind
)(Container);
