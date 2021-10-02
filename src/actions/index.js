import { ActionTypes } from "../consts";

export function selectEvent(eventId) {
  return {
    type: ActionTypes.SELECT_EVENT,
    payload: {
      eventId,
    },
  };
}

export function createNewEvent() {
  return {
    type: ActionTypes.CREATE_NEW_EVENT,
  };
}

export function updateEvent(eventId, slice) {
  return {
    type: ActionTypes.UPDATE_EVENT,
    payload: {
      eventId,
      slice,
    },
  };
}

export function saveNewEvent(eventData) {
  return {
    type: ActionTypes.SAVE_NEW_EVENT,
    payload: {
      eventData,
    },
  };
}
