export const USER_LOGIN = "USER_LOGIN";
export const GET_PRORDUCTS = "GET_PRORDUCTS";

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

export const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRORDUCTS:
      return { ...state, products: action.products };
    default:
      break;
  }
};
