import { combineReducers } from "redux";

import { eventListReducer } from "./eventListReducer";
import { eventsReducer } from "./eventsReducer";

export const reducers = combineReducers({
  eventList: eventListReducer,
  events: eventsReducer,
});
