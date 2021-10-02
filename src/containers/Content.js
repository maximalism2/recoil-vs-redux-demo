import { connect } from "react-redux";
import { EventViewContainer } from "./EventView";
import { CreateEventViewContainer } from "./CreateEventView";
import { ContentWrapper } from "../components/ContentWrapper";

const mapStateToProps = (state) => ({
  isCreateMode: state.eventList.createMode,
  syncPending: state.syncing.pending,
});

const Container = ({ isCreateMode, syncPending }) => (
  <ContentWrapper syncPending={syncPending}>
    {isCreateMode ? <CreateEventViewContainer /> : <EventViewContainer />}
  </ContentWrapper>
);

export const ContentContainer = connect(mapStateToProps)(Container);
