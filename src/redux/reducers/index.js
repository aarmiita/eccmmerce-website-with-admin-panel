import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";
export const reducers = combineReducers({
  allProducts: ProductReducer,
});
