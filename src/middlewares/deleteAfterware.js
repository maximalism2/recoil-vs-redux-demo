import { ActionTypes } from "../consts";
import { eventsSelector } from "../selectors";
import { selectEvent } from "../actions";

export const deleteAfterware = (store) => (next) => (action) => {
  next(action);

  if (action.type === ActionTypes.DELETE_EVENT) {
    const resultedEvents = eventsSelector(store.getState());

    if (resultedEvents.length > 0) {
      store.dispatch(selectEvent(resultedEvents[0].id));
    }
  }
};
