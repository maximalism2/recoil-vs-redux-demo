import { ActionTypes } from "../consts";

export const apiMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {
    case ActionTypes.UPDATE_EVENT:
    case ActionTypes.DELETE_EVENT:
    case ActionTypes.SAVE_NEW_EVENT:
      console.log("will sync the state");
      break;
  }
};
