import { EEventStatus } from "../consts";

export const toggleStatus = (status) =>
  status === EEventStatus.Active ? EEventStatus.Suspended : EEventStatus.Active;

export const getEventById = (events, selectedEventId) =>
  events.find(({ id }) => id === selectedEventId);

let idCounter = 1;

export const uniqueID = () => idCounter++;

export const generateEmptyEvent = () => ({
  id: uniqueID(),
  title: "",
  status: EEventStatus.Suspended,
  startDate: new Date(),
});
