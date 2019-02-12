import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

const create = () => {
  return async function(dispatch, getState) {
    const requestBody = getState().form.categoryForm.values;

    const response = await kidsnParty.post("/categories", requestBody);
    dispatch({
      type: types.createNewCategory,
      payload: response.data.category
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

const Category = {
  create,
  index,
  select
};

export default Category;
