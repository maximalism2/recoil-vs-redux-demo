import { useRecoilValue } from "recoil";

import { ContentWrapper } from "../components/ContentWrapper";
import { EventViewContainer } from "./EventView";
import { CreateEventViewContainer } from "./CreateEventView";
import { createMode$, syncing$ } from "../atoms";

export const ContentContainer = () => {
  const createMode = useRecoilValue(createMode$);
  const syncing = useRecoilValue(syncing$);

  return (
    <ContentWrapper syncPending={syncing}>
      {createMode ? <CreateEventViewContainer /> : <EventViewContainer />}
    </ContentWrapper>
  );
};
