import types from "./actionTypes";
import { setCategory, setOptions } from "./newProduct";
import { fetchShop } from "./shop";
import { fetchSummary } from "./report";
import Category from "./category";
import kidsnParty from "../apis/kidsnParty";
import Product from "./product";
import Option from "./option";
import Shop from "./shop";
import Order from "./Order";

// produt actions
export const getProducts = Product.index;
export const getProduct = Product.show;
export const updateProduct = Product.update;
export const switchProductStatus = Product.switchProductStatus;
export const createNewProduct = Product.create;
export const setNewProductCategory = setCategory; //support create product
export const setNewProductOptions = setOptions; //support create product
export const removeOptionsFromNewProduct = Product.removeOption; //support create product
export const searchByName = Product.search; // search

//category actions
export const setSelectedCategory = Category.select;
export const createNewCategory = Category.create;
export const updateCategory = Category.update;
export const fetchAvaliableCategories = Category.index;

//options actions
export const fetchOptions = Option.index;
export const selectOption = Option.select;
export const createNewOption = Option.create;
export const updateOption = Option.update;

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

export const selectOrder = Order.show;
export const updateOrder = Order.update;
export const fetchSingleShop = fetchShop;
export const changeSelectedShop = Shop.patch;
export const createShop = Shop.create;
export const updateShop = Shop.update;

export const fetchReportsSummary = fetchSummary;

export const actionTypes = types;
