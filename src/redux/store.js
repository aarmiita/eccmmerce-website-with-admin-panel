import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
// import { loadState, saveState } from "../utils/LocalStorage";
// const persistedState = loadState();
const middlewareEnhancer = applyMiddleware(ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const store = createStore(
  reducers,
  undefined,
  composedEnhancers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => {
//   saveState({
//     allProducts: store.getState().temporaryCart,
//   });
// });

export default store;
