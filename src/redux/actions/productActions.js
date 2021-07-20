import { ActionTypes } from "../constants/action-type";
import {
  getAllProducts,
  getAProductById,
  addAProduct,
  changeAProduct,
  deleteProduct,
} from "../../api/products";
import { changeACart } from "../../api/cart";
import { getAllCart } from "../../api/cart";
const {
  SET_PRODUCTS,
  SELECTED_PRODCUT,
  SET_NEWPRODUCTS,
  CHANGE_STATE,
  COMPELETED_CARTS,
  UNCOMPELETED_CARTS,
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
export const setCompeletedCarts = (carts) => {
  return {
    type: COMPELETED_CARTS,
    payload: carts,
  };
};
export const setUncompeletedCarts = (carts) => {
  return {
    type: UNCOMPELETED_CARTS,
    payload: carts,
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
  dispatch(getProducts());
};
export const deleteAProduct = (id) => async (dispatch) => {
  await deleteProduct(id);
  dispatch(deleteSelectedProduct(id));
};
export const getCarts = () => async (dispatch) => {
  const res = await getAllCart();
  let response = res.data.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1));

  dispatch(setCompeletedCarts(response));
  dispatch(setUncompeletedCarts(response));
};
export const changeCart = (id, order) => async (dispatch) => {
  await changeACart(id, order);
  dispatch(getCarts());
};
