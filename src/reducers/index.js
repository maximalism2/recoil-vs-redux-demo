import { combineReducers } from "redux";

import { eventListReducer } from "./eventListReducer";
import { eventsReducer } from "./eventsReducer";
import { syncingReducer } from "./syncingReducer";

export const reducers = combineReducers({
  eventList: eventListReducer,
  events: eventsReducer,
  syncing: syncingReducer,
});
