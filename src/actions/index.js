import { ActionTypes } from "../consts";

export const selectEvent = (eventId) => ({
  type: ActionTypes.SELECT_EVENT,
  payload: {
    eventId,
  },
});

export const createNewEvent = () => ({
  type: ActionTypes.CREATE_NEW_EVENT,
});

export const updateEvent = (eventId, slice) => ({
  type: ActionTypes.UPDATE_EVENT,
  payload: {
    eventId,
    slice,
  },
});

export const saveNewEvent = (eventData) => ({
  type: ActionTypes.SAVE_NEW_EVENT,
  payload: {
    eventData,
  },
});

export const deleteEvent = (eventId) => ({
  type: ActionTypes.DELETE_EVENT,
  payload: {
    eventId,
  },
});
