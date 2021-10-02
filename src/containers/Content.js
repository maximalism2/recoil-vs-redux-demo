import { EventViewContainer } from "./EventView";
import { CreateEventViewContainer } from "./CreateEventView";
import { ContentWrapper } from "../components/ContentWrapper";
import { useRecoilValue } from "recoil";
import { createMode$ } from "../atoms";

export const ContentContainer = () => {
  const createMode = useRecoilValue(createMode$);

  return (
    <ContentWrapper
      // TODO: think about pending state
      syncPending={false}
    >
      {createMode ? <CreateEventViewContainer /> : <EventViewContainer />}
    </ContentWrapper>
  );
};
