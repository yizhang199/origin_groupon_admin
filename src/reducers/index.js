import { combineReducers } from "redux";
import { actionTypes } from "../actions";
import { reducer as formReducer } from "redux-form";
import newProductReducer from "./newProductReducer";

const productsReducer = (products = [], action) => {
  if (action.type === actionTypes.getProducts) {
    return action.payload;
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
    return action.payload.data;
  } else if (action.type === actionTypes.updateOrder) {
    return action.payload.orders.data;
  }
  return orders;
};

const selectedOrderReducer = (selectedOrder = { order_items: [] }, action) => {
  if (action.type === actionTypes.selectOrder) {
    return action.payload;
  } else if (action.type === actionTypes.updateOrder) {
    return action.payload.order;
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

const reportSummaryReducer = (reportSummary = {}, action) => {
  if (action.type === actionTypes.fetchSummary) {
    return action.payload;
  }
  return reportSummary;
};
const selectedCategoryReducer = (selectedCategory = {}, action) => {
  if (action.type === actionTypes.selectCategory) {
    return action.payload;
  } else if (action.type === actionTypes.setSelectedCategoryImage) {
    return { ...selectedCategory, image: action.payload };
  }
  return selectedCategory;
};

const selectedOptionReducer = (selectedOption = { values: [] }, action) => {
  if (action.type === actionTypes.selectOption) {
    return action.payload;
  }
  return selectedOption;
};

const paginationParamsReducer = (paginationParams = {}, action) => {
  if (action.type === actionTypes.getOrders) {
    return action.payload;
  } else if (action.type === actionTypes.updateOrder) {
    return action.payload.orders;
  }
  return paginationParams;
};
const startDateReducer = (startDate = new Date(), action) => {
  if (action.type === actionTypes.setStartDate) {
    return action.payload;
  }
  return startDate;
};
const endDateReducer = (endDate = new Date(), action) => {
  if (action.type === actionTypes.setEndDate) {
    return action.payload;
  }
  return endDate;
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
  selectedShop: selectedShopReducer,
  reportSummary: reportSummaryReducer,
  selectedCategory: selectedCategoryReducer,
  selectedOption: selectedOptionReducer,
  paginationParams: paginationParamsReducer,
  startDate: startDateReducer,
  endDate: endDateReducer
});
