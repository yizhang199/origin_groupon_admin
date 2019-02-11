import types from "./actionTypes";

export const setCategory = category => {
  return {
    type: types.setNewProductCategory,
    payload: category
  };
};

export const setOptions = option => {
  return {
    type: types.setNewProductOptions,
    payload: option
  };
};
