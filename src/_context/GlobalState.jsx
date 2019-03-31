import React, { useState } from "react";
import UserContext from "./user_context";
import ShopContext from "./shop_context";

const GlobalState = props => {
  const [products] = useState([
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ]);

  const [cart, setCart] = useState([]);
  //   const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const [user, setUserState] = useState({});
  //   const addProductToCart = product => {
  //     dispatch({ type: addProduct, product });
  //   };
  //   const removeProductFromCart = productId => {
  //     dispatch({ type: removeProduct, productId });
  //   };
  const setUser = user => {
    setUserState(user);
  };
  return (
    <ShopContext.Provider
      value={{
        products,
        cart: cart
        // addProductToCart,
        // removeProductFromCart
      }}
    >
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    </ShopContext.Provider>
  );
};

export default GlobalState;
