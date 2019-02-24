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

const setStartDate = startDate => {
  return async function(dispatch, getState) {
    const { endDate } = getState();
    const response = await kidsnParty.get(`/reports`, {
      params: { startDate, endDate }
    });

    dispatch({
      type: types.setStartDate,
      payload: { date: startDate, reports: response.data.summary }
    });
  };
};

const setEndDate = endDate => {
  return async function(dispatch, getState) {
    const { startDate } = getState();
    const response = await kidsnParty.get(`/reports`, {
      params: { startDate, endDate }
    });

    dispatch({
      type: types.setEndDate,
      payload: { date: endDate, reports: response.data.summary }
    });
  };
};

export default { fetchSummary, setStartDate, setEndDate };
