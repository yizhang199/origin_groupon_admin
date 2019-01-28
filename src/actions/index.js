import types from "./actionTypes";

import kidsnParty from "../apis/kidsnParty";

export const getProducts = () => {
  return async function(dispatch, getState) {
    const response = await kidsnParty.get("/products/2");

    dispatch({ type: types.getProducts, payload: response });
  };
};

export const actionTypes = types;
