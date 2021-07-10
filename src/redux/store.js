import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
const middlewareEnhancer = applyMiddleware(logger, ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const store = createStore(
  reducers,
  undefined,
  composedEnhancers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
