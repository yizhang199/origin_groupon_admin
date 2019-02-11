import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";
export const fetchSummary = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/reports`);
    dispatch({
      type: types.fetchSummary,
      payload: response.data.summary
    });
  };
};
