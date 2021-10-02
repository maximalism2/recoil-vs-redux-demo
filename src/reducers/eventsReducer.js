import { mockEvents } from "../consts/mocks";
import { ActionTypes } from "../consts";
import { getEventById } from "../utils";

export function eventsReducer(state = mockEvents, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_EVENT: {
      const { eventId, slice } = action.payload;
      const selectedEventIndex = state.findIndex((e) => e.id === eventId);
      const selectedEvent = getEventById(state, eventId);

      return [
        ...state.slice(0, selectedEventIndex),
        { ...selectedEvent, ...slice },
        ...state.slice(selectedEventIndex + 1),
      ];
    }

    case ActionTypes.SAVE_NEW_EVENT:
      return state.concat(action.payload.eventData);

    default:
      return state;
  }
}
