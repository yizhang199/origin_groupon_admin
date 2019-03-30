import types from "./actionTypes";
import { kidsnparty } from "../_apis";
import { history } from "../_helpers";

const create = file => {
  return async function(dispatch, getState) {
    const requestBody = { ...getState().form.categoryForm.values, file };
    const response = await kidsnparty.post("/categories", requestBody);
    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data
    });
  };
};
export const index = () => {
  return async function(dispatch) {
    const response = await kidsnparty.get("/categories", {
      params: { language_id: 2 }
    });
    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data.categories
    });
  };
};

export const select = category => {
  return {
    type: types.selectCategory,
    payload: category
  };
};

const update = (category_id, file) => {
  return async function(dispatch, getState) {
    const requestBody = { ...getState().form.categoryForm.values, file };
    const response = await kidsnparty.put(
      `/categories/${category_id}`,
      requestBody
    );

    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data
    });
  };
};

const remove = category_id => {
  return async function(dispatch) {
    const response = await kidsnparty.delete(`/categories/${category_id}`);
    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data
    });
  };
};

const show = category_id => {
  return async function(dispatch) {
    const response = await kidsnparty.get(`/categories/${category_id}`);
    dispatch({
      type: types.selectCategory,
      payload: response.data
    });
    history.push(`${process.env.PUBLIC_URL}/categories/update/${category_id}`);
  };
};

const setImage = value => {
  return {
    type: types.setSelectedCategoryImage,
    payload: value
  };
};
const active = category_id => {
  return async function(dispatch) {
    const response = await kidsnparty.patch(`/categories/${category_id}`);
    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data
    });
  };
};

const Category = {
  show,
  create,
  index,
  select,
  update,
  remove,
  active,
  setImage
};

export default Category;
