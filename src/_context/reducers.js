export const USER_LOGIN = "USER_LOGIN";

const login = (user, state) => {
  return { ...state, user };
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return login(action.user, state);
    default:
      return state;
  }
};

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";

export const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case GET_PRODUCT:
      return { ...state, selectedProduct: action.product };
    default:
      break;
  }
};
