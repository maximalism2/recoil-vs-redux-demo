import { ActionTypes } from "../consts";
import { mockEvents } from "../consts/mocks";

const defaultState = {
  selectedEventId: mockEvents[0].id,
  createMode: false,
};

export function eventListReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SELECT_EVENT:
      return {
        ...state,
        selectedEventId: action.payload.eventId,
        createMode: false,
      };

    case ActionTypes.CREATE_NEW_EVENT:
      return {
        ...state,
        createMode: true,
      };

    case ActionTypes.SAVE_NEW_EVENT:
      return {
        ...state,
        selectedEventId: action.payload.eventData.id,
        createMode: false,
      };

    default:
      return state;
  }
}
