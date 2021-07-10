import { ActionTypes } from "../constants/action-type";
const { SET_PRODUCTS, SELECTED_PRODCUT, REMOVE_SELECTED_PRODUCT } = ActionTypes;
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODCUT,
    payload: product,
  };
};
