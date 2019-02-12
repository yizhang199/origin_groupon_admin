import types from "./actionTypes";
import { setCategory, setOptions } from "./newProduct";
import { fetchShop, createNewShop } from "./shop";
import { fetchSummary } from "./report";
import Category from "./category";
import kidsnParty from "../apis/kidsnParty";
import Product from "./product";

export const getProducts = Product.index;

export const getProduct = Product.show;

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

export const fetchOptions = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get("/options");
    dispatch({ type: types.fetchOptions, payload: response.data.options });
  };
};

export const fetchAvaliableCategories = Category.index;
export const setNewProductCategory = setCategory;
export const setNewProductOptions = setOptions;
export const fetchSingleShop = fetchShop;
export const createShop = createNewShop;

export const fetchReportsSummary = fetchSummary;

export const createNewCategory = Category.create;
export const actionTypes = types;
