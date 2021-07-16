import { ActionTypes } from "../constants/action-type";
import {
  getAllProducts,
  getAProductById,
  addAProduct,
  changeAProduct,
  deleteProduct,
} from "../../api/products";
const {
  SET_PRODUCTS,
  SELECTED_PRODCUT,
  REMOVE_SELECTED_PRODUCT,
  SET_NEWPRODUCTS,
  CHANGE_STATE,
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
export const SetselectedProduct = (product) => {
  return {
    type: SELECTED_PRODCUT,
    payload: product,
  };
};
export const deleteSelectedProduct = (id) => {
  return {
    type: SELECTED_PRODCUT,
    payload: id,
  };
};
export const changeState = () => {
  return {
    type: CHANGE_STATE,
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////
export const getProducts = () => async (dispatch, getState) => {
  const res = await getAllProducts();
  dispatch(setProducts(res.data));
};

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  dispatch(SetselectedProduct(res.data));
};
export const addProduct = (product) => async (dispatch) => {
  let res = await addAProduct(product);
  dispatch(setNewProduct(res.data));
};
export const ChangeAProductById = (id, product) => async (dispatch) => {
  let res = await changeAProduct(id, product);
};
export const deleteAProduct = (id) => async (dispatch) => {
  await deleteProduct(id);
  dispatch(deleteSelectedProduct(id));
};
