import { ActionTypes } from "../constants/action-type";
const {
  SET_PRODUCTS,
  SELECTED_PRODCUT,
  REMOVE_SELECTED_PRODUCT,
  SET_NEWPRODUCTS,
  CHANGE_STATE,
  COMPELETED_CARTS,
  UNCOMPELETED_CARTS,
  SAVED_PRODUCTS,
  SET_PRODUCTS_BY_CATEGORY,
} = ActionTypes;

const initialState = {
  products: [{}],
  selectedProduct: {},
  showButton: false,
  compeletedCarts: [
    {
      id: 8,
      userId: 8,
      date: "2020-03-02",
      compeleted: true,
      orders: [
        {
          productId: 1,
          title: "Fjallraven ",
          price: 98778978,
          quantity: 4,
        },
        {
          productId: 2,
          title: "Slim Fit T-Shirts ",
          price: 200000,
          quantity: 5,
        },
        {
          productId: 3,
          title: "Mens Cotton Jacket",
          price: 120000,
          quantity: 6,
        },
      ],
      information: {
        customerName: "ali sahabi",
        address: "Iran,Tehran",
        phoneNumber: 98922222222,
        deliveryTime: "2020-03-05",
        "Order time": "2020-03-02",
      },
    },
  ],
  unCompeletedCarts: [
    {
      id: 1,
      userId: 1,
      date: "2020-03-02",
      compeleted: false,
      orders: [
        {
          productId: 1,
          title: "Fjallraven ",
          price: 98778978,
          quantity: 4,
        },
        {
          productId: 2,
          title: "Slim Fit T-Shirts ",
          price: 200000,
          quantity: 5,
        },
        {
          productId: 3,
          title: "Mens Cotton Jacket",
          price: 120000,
          quantity: 6,
        },
      ],
      information: {
        customerName: "ali sahabi",
        address: "Iran,Tehran",
        phoneNumber: 98922222222,
        deliveryTime: "2020-03-05",
        "Order time": "2020-03-02",
      },
    },
  ],
  productsByCategory: {},
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
    case COMPELETED_CARTS:
      return {
        ...state,
        compeletedCarts: payload.filter((order) => order.compeleted === true),
      };
    case UNCOMPELETED_CARTS:
      return {
        ...state,
        unCompeletedCarts: payload.filter(
          (order) => order.compeleted === false
        ),
      };
    case SET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: state.products.filter(
          (item) => item.category === payload
        ),
      };
    default:
      return state;
  }
};
