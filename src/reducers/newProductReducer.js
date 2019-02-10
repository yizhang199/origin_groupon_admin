import { actionTypes } from "../actions";

const newProductReducer = (newProduct = {}, action) => {
  if (action.type === actionTypes.setNewProductCategory) {
    return { ...newProduct, category: action.payload };
  }
  return newProduct;
};

export default newProductReducer;
