import types from "./actionTypes";
import { kidsnparty } from "../apis";
import { history } from "../history";

const setPeriod = sales_group_id => {
  return async function(dispatch, getState) {
    const salesGroupResponse = await kidsnparty.get(
      `/salesgroup/${sales_group_id}`
    );

    const { start_date, end_date } = salesGroupResponse.data.salesGroup;

    const endDate = end_date;
    const startDate = start_date;

    const { report_category, reportDetails, reportSummary } = getState();

    const { pathname } = history.location;

    if (pathname === "/charts") {
      const response = await kidsnparty.get(`/reports`, {
        params: { startDate, endDate }
      });

      dispatch({
        type: types.setPeriod,
        payload: {
          startDate: startDate,
          endDate: endDate,
          reports: response.data.summary,
          report: reportDetails
        }
      });
    } else {
      const response = await kidsnparty.get(`/report`, {
        params: { startDate, endDate, report_category }
      });
      dispatch({
        type: types.setPeriod,
        payload: {
          startDate: startDate,
          endDate: endDate,
          reports: reportSummary,
          report: response.data
        }
      });
    }
  };
};

export default {
  setPeriod
};
