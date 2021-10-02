import { ActionTypes } from "../consts";
import { saveSuccessful, deleteSuccessful, updateSuccessful } from "../actions";

function syncEventState() {
  const randomDuration = Math.floor(Math.random() * 500 + 500);
  return new Promise((res) => setTimeout(res, randomDuration));
}

export const apiMiddleware = (store) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case ActionTypes.UPDATE_EVENT:
      syncEventState().then(() => {
        store.dispatch(updateSuccessful());
      });
      break;
    case ActionTypes.DELETE_EVENT:
      syncEventState().then(() => {
        store.dispatch(deleteSuccessful());
      });
      break;
    case ActionTypes.SAVE_NEW_EVENT:
      syncEventState().then(() => {
        store.dispatch(saveSuccessful());
      });
      break;
  }
};
