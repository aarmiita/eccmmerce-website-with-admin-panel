import { ActionTypes } from "../constants/action-type";
const {
  SET_PRODUCTS,
  SELECTED_PRODCUT,
  REMOVE_SELECTED_PRODUCT,
  SET_NEWPRODUCTS,
} = ActionTypes;

const initialState = {
  products: [{}],
  selectedProduct: {},
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_NEWPRODUCTS:
      return { ...state, products: [...state.products, payload] };
    case SELECTED_PRODCUT:
      return { ...state, selectedProduct: payload };
    default:
      return state;
  }
};
