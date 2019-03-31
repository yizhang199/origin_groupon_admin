import React, { useReducer } from "react";
import UserContext from "./user_context";
import ProductContext from "./product_context";

import {
  userReducer,
  productReducer,
  USER_LOGIN,
  GET_PRORDUCTS
} from "./reducers";

const GlobalState = props => {
  //*user context
  const [userState, userDispatch] = useReducer(userReducer, {});

  const login = user => {
    userDispatch({ type: USER_LOGIN, user });
  };

  //*product context
  const [productState, productDispatch] = useReducer(productReducer, {});
  const getProducts = products => {
    productDispatch({ type: GET_PRORDUCTS, products });
  };

  return (
    <UserContext.Provider value={{ user: userState.user, login }}>
      <ProductContext.Provider
        value={{
          products: productState.products,
          getProducts
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </UserContext.Provider>
  );
};

export default GlobalState;
