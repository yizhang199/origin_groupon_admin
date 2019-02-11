import { combineReducers } from "redux";
import { actionTypes } from "../actions";
import { reducer as formReducer } from "redux-form";
import newProductReducer from "./newProductReducer";

const productsReducer = (products = [], action) => {
  if (action.type === actionTypes.getProducts) {
    return action.payload.data;
  }
  return products;
};

const productReducer = (product = {}, action) => {
  if (action.type === actionTypes.getProduct) {
    return action.payload;
  }
  return product;
};

const appSettingReducer = (appSetting = {}, action) => {
  if (action.type === actionTypes.initApp) {
    return action.payload;
  }
  return appSetting;
};

const shopsReducer = (shops = [], action) => {
  if (action.type === actionTypes.getShops) {
    return action.payload;
  }

  return shops;
};

const ordersReducer = (orders = [], action) => {
  if (action.type === actionTypes.getOrders) {
    return action.payload;
  }
  return orders;
};

const selectedOrderReducer = (selectedOrder = { order_items: [] }, action) => {
  if (action.type === actionTypes.selectOrder) {
    return action.payload;
  }
  return selectedOrder;
};
const optionsReducer = (options = [], action) => {
  if (action.type === actionTypes.fetchOptions) {
    return action.payload;
  }

  return options;
};
const avaliableCategoriesReducer = (avaliableCategories = [], action) => {
  if (action.type === actionTypes.fetchAvaliableCategories) {
    return action.payload;
  }
  return avaliableCategories;
};

const selectedShopReducer = (selectedShop = {}, action) => {
  if (action.type === actionTypes.fetchSingleShop) {
    return action.payload;
  }
  return selectedShop;
};

export default combineReducers({
  products: productsReducer,
  form: formReducer,
  product: productReducer,
  appSetting: appSettingReducer,
  shops: shopsReducer,
  orders: ordersReducer,
  selectedOrder: selectedOrderReducer,
  options: optionsReducer,
  avaliableCategories: avaliableCategoriesReducer,
  newProduct: newProductReducer,
  selectedShop: selectedShopReducer
});
