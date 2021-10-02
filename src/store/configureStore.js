import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import { reducers } from "../reducers";

export const store = createStore(reducers, applyMiddleware(createLogger()));
