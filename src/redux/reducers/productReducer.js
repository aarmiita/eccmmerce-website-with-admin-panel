import { ActionTypes } from "../constants/action-type";
const { SET_PRODUCTS, SELECTED_PRODCUT, REMOVE_SELECTED_PRODUCT } = ActionTypes;

const initialState = {
  products: [{}],
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
