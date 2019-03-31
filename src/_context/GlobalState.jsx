import React, { useReducer } from "react";
import UserContext from "./user_context";
import { ProductContext } from "../app/catalog/subViews/product/_context/";

import {
  userReducer,
  productReducer,
  USER_LOGIN,
  GET_PRODUCTS,
  GET_PRODUCT
} from "./reducers";

const GlobalState = props => {
  //*user context
  const [userState, userDispatch] = useReducer(userReducer, {});

  const login = user => {
    userDispatch({ type: USER_LOGIN, user });
  };

  //*product context
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
    product: {},
    selectedProduct: {}
  });
  const getProducts = products => {
    productDispatch({ type: GET_PRODUCTS, products });
  };

  const getProduct = product => {
    productDispatch({ type: GET_PRODUCT, product });
  };

  return (
    <UserContext.Provider value={{ user: userState.user, login }}>
      <ProductContext.Provider
        value={{
          products: productState.products,
          product: productState.product,
          selectedProduct: productState.selectedProduct,
          getProducts,
          getProduct
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </UserContext.Provider>
  );
};

export default GlobalState;
