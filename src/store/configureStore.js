import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import { reducers } from "../reducers";
import { deleteAfterware, apiMiddleware } from "../middlewares";

export const store = createStore(
  reducers,
  applyMiddleware(createLogger(), deleteAfterware, apiMiddleware)
);
