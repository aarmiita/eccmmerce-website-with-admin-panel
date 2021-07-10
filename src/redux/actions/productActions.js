import { ActionTypes } from "../constants/action-type";
import { getAllProducts, getAProductById } from "../../api/products";
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
export const getProducts = () => async (dispatch, getState) => {
  const res = await getAllProducts();
  dispatch(setProducts(res.data));
};

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  // console.log(res.data);
  dispatch(selectedProduct(res.data));
};
