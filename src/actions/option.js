import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

const index = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get("/options");
    dispatch({ type: types.fetchOptions, payload: response.data.options });
  };
};

const select = option => {
  return { type: types.selectOption, payload: option };
};

const create = ({ type, option_values }) => {
  return async function(dispatch, getState) {
    const { chinese_name, english_name } = getState().form.optionForm.values;

    const option_description = { chinese_name, english_name };
    const requestBody = { type, option_values, option_description };
    const response = await kidsnParty.post("/options", requestBody);
    dispatch({ type: types.fetchOptions, payload: response.data.options });
  };
};
const update = ({ type, option_values }) => {
  return async function(dispatch, getState) {
    const { chinese_name, english_name } = getState().form.optionForm.values;
    const { option_id } = getState().selectedOption;
    const option_description = { chinese_name, english_name };
    const requestBody = { type, option_values, option_description };

    const response = await kidsnParty.put(`/options/${option_id}`, requestBody);

    dispatch({ type: types.fetchOptions, payload: response.data.options });
  };
};
export default {
  index,
  select,
  create,
  update
};
