import { connect } from "react-redux";
import { EventViewContainer } from "./EventView";
import { CreateEventViewContainer } from "./CreateEventView";

const mapStateToProps = (state) => ({
  isCreateMode: state.eventList.createMode,
});

const Container = ({ isCreateMode }) =>
  isCreateMode ? <CreateEventViewContainer /> : <EventViewContainer />;

export const ContentContainer = connect(mapStateToProps)(Container);
