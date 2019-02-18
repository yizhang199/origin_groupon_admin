import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

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

const update = category_id => {
  return async function(dispatch, getState) {
    const requestBody = getState().form.categoryForm.values;
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

const Category = {
  create,
  index,
  select,
  update
};

export default Category;
