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

export default {
  index,
  select
};
