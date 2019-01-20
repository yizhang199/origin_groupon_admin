import types from "./actionTypes";

import kidsnParty from "../apis/kidsnParty";

export const getProducts = () => {
  return function(dispatch, getState) {
    const promise = kidsnParty.get("/products/1");

    return {
      type: types.getProducts,
      payload: promise
    };
  };
};
