import { ActionTypes } from "../consts";

export const syncingReducer = (state = { pending: false }, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_EVENT:
    case ActionTypes.SAVE_NEW_EVENT:
    case ActionTypes.DELETE_EVENT:
      return { pending: true };
    case ActionTypes.UPDATE_SUCCESSFUL:
    case ActionTypes.SAVE_SUCCESSFUL:
    case ActionTypes.DELETE_SUCCESSFUL:
      return { pending: false };
    default:
      return state;
  }
};
