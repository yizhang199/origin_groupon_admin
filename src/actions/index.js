import types from "./actionTypes";

import kidsnParty from "../apis/kidsnParty";

export const getProducts = () => {
  return async function(dispatch, getState) {
    const response = await kidsnParty.get("/products", {
      params: { language_id: 2 }
    });

    dispatch({ type: types.getProducts, payload: response });
  };
};

export const getProduct = () => {
  return async function(dispatch, id) {
    const response = await kidsnParty.get(`/product/${id}`);

    dispatch({ type: types.getProduct, payload: response.data });
  };
};

export const initApp = () => {
  return async function(dispatch) {
    const language_id = localStorage.getItem("Aupos_language_id");
    const response = await kidsnParty.get(`/init/${language_id}`);

    dispatch({ type: types.initApp, payload: response.data });
  };
};

export const getShops = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/locations`);
    dispatch({ type: types.getShops, payload: response.data.locations });
  };
};

export const getOrders = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`);
    dispatch({ type: types.getOrders, payload: response.data.orders });
  };
};

export const selectOrder = order_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/orders/${order_id}`);

    dispatch({ type: types.selectOrder, payload: response.data.order });
  };
};
export const actionTypes = types;
