import { createSelector } from "reselect";

import { getEventById } from "../utils";

export const selectedEventIdSelector = (state) =>
  state.eventList.selectedEventId;

export const eventsSelector = (state) => state.events;

export const activeEventSelector = createSelector(
  eventsSelector,
  selectedEventIdSelector,
  getEventById
);
