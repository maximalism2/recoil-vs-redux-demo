import { EEventStatus } from "../consts";

export function toggleStatus(status) {
  return status === EEventStatus.Active
    ? EEventStatus.Suspended
    : EEventStatus.Active;
}

export function getEventById(events, selectedEventId) {
  return events.find(({ id }) => id === selectedEventId);
}

let idCounter = 1;

export const uniqueID = () => idCounter++;

export const generateEmptyEvent = () => ({
  id: uniqueID(),
  title: "",
  status: EEventStatus.Suspended,
  startDate: new Date(),
});
