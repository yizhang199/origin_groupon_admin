import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";
const fetchSummary = () => {
  return async function(dispatch, getState) {
    const { startDate, endDate } = getState();
    const response = await kidsnParty.get(`/reports`, {
      params: {
        startDate,
        endDate
      }
    });
    dispatch({
      type: types.fetchSummary,
      payload: response.data.summary
    });
  };
};

const setStartDate = dt => {
  return {
    type: types.setStartDate,
    payload: dt
  };
};

const setEndDate = dt => {
  return {
    type: types.setEndDate,
    payload: dt
  };
};

export default { fetchSummary, setStartDate, setEndDate };
