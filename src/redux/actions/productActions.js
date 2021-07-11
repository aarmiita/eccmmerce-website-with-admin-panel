import { ActionTypes } from "../constants/action-type";
import {
  getAllProducts,
  getAProductById,
  addAProduct,
} from "../../api/products";
const {
  SET_PRODUCTS,
  SELECTED_PRODCUT,
  REMOVE_SELECTED_PRODUCT,
  SET_NEWPRODUCTS,
} = ActionTypes;
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const setNewProduct = (product) => {
  return {
    type: SET_NEWPRODUCTS,
    payload: product,
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
export const addProduct = (product) => async (dispatch) => {
  let res = await addAProduct(product);
  dispatch(setNewProduct(res.data));
};
