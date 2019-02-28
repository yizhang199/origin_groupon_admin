import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";
import { history } from "../history";

const create = file => {
  return async function(dispatch, getState) {
    const requestBody = { ...getState().form.categoryForm.values, file };
    const response = await kidsnParty.post("/categories", requestBody);
    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data
    });
  };
};
export const index = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get("/categories", {
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
    const response = await kidsnParty.put(
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
    const response = await kidsnParty.delete(`/categories/${category_id}`);
    dispatch({
      type: types.fetchAvaliableCategories,
      payload: response.data
    });
  };
};

const show = category_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/categories/${category_id}`);
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

const Category = {
  show,
  create,
  index,
  select,
  update,
  remove,
  setImage
};

export default Category;
