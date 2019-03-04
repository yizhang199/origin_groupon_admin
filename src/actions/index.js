import types from "./actionTypes";
import { setCategory, setOptions } from "./newProduct";
import { fetchShop } from "./shop";
import Report from "./report";
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
export const setProductImage = Product.setImage; //support upload image
export const setNewProductCategory = setCategory; //support create product
export const setNewProductOptions = setOptions; //support create product
export const removeOptionsFromNewProduct = Product.removeOption; //support create product
export const searchByName = Product.search; // search

//category actions
export const setSelectedCategory = Category.select;
export const createNewCategory = Category.create;
export const updateCategory = Category.update;
export const fetchAvaliableCategories = Category.index;
export const deleteCategory = Category.remove;
export const fetchSingleCategory = Category.show;
export const setSelectCategoryImage = Category.setImage;

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

// order actions
export const getOrders = Order.index;

export const selectOrder = Order.show;
export const updateOrder = Order.update;

export const updateOrderStatus = Order.patch;
export const markingOrder = Order.marking;
export const fetchOrdersByStore = Order.fetchByStore;
export const onCustomerOrderListPageChange = Order.onPageChange;

// shop actions
export const fetchSingleShop = fetchShop;
export const changeSelectedShop = Shop.patch;
export const createShop = Shop.create;
export const updateShop = Shop.update;
export const handleDateChange = Shop.handleDateChange;

// reports actions
export const fetchReportsSummary = Report.fetchSummary;
export const setStartDate = Report.setStartDate;
export const setEndDate = Report.setEndDate;
export const fetchReportDetails = Report.show;
export const setReportCategory = Report.setCategory;
export const sortReportDetails = Report.sortDetails;

export const actionTypes = types;
