import { ActionTypes } from "../constants/action-type";
const {
  SET_PRODUCTS,
  SELECTED_PRODCUT,
  REMOVE_SELECTED_PRODUCT,
  SET_NEWPRODUCTS,
  CHANGE_STATE,
} = ActionTypes;

const initialState = {
  products: [{}],
  selectedProduct: {},
  showButton: false,
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_NEWPRODUCTS:
      return { ...state, products: [...state.products, payload] };
    case SELECTED_PRODCUT:
      return { ...state, selectedProduct: payload };
    case REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case CHANGE_STATE:
      return { ...state, showButton: true };
    default:
      return state;
  }
};
