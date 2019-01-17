import { combineReducers } from "redux";

const productsReducer = (products = [], actions) => {
  return [
    {
      category_id: 1,
      category_name: "主食",
      products: [
        { product_id: 1, product_name: "米饭", price: "2.00" },
        { product_id: 2, product_name: "面条", price: "5.00" },
        { product_id: 3, product_name: "包子", price: "6.00" }
      ]
    }
  ];
};

export default combineReducers({
  products: productsReducer
});
