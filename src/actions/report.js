import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

import { history } from "../history";
import actionTypes from "./actionTypes";

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
    const {
      endDate,
      report_category,
      reportDetails,
      reportSummary
    } = getState();
    const { pathname } = history.location;

    if (pathname === "/charts") {
      const response = await kidsnParty.get(`/reports`, {
        params: { startDate, endDate }
      });

      dispatch({
        type: types.setStartDate,
        payload: {
          date: startDate,
          reports: response.data.summary,
          report: reportDetails
        }
      });
    } else {
      const response = await kidsnParty.get(`/report`, {
        params: { startDate, endDate, report_category }
      });
      dispatch({
        type: types.setStartDate,
        payload: {
          date: startDate,
          reports: reportSummary,
          report: response.data
        }
      });
    }
  };
};

const setEndDate = endDate => {
  return async function(dispatch, getState) {
    const {
      startDate,
      report_category,
      reportDetails,
      reportSummary
    } = getState();
    const { pathname } = history.location;
    if (pathname === "/charts") {
      const response = await kidsnParty.get(`/reports`, {
        params: { startDate, endDate }
      });

      dispatch({
        type: types.setEndDate,
        payload: {
          date: endDate,
          reports: response.data.summary,
          report: reportDetails
        }
      });
    } else {
      const response = await kidsnParty.get(`/report`, {
        params: { startDate, endDate, report_category }
      });
      dispatch({
        type: types.setEndDate,
        payload: {
          date: endDate,
          reports: reportSummary,
          report: response.data
        }
      });
    }
  };
};

const show = report_category => {
  return async function(dispatch, getState) {
    const { startDate, endDate } = getState();
    const response = await kidsnParty.get(`/report`, {
      params: { startDate, endDate, report_category }
    });
    dispatch({
      type: types.fetchReportDetails,
      payload: response.data
    });
    history.push(`${process.env.PUBLIC_URL}/charts/${report_category}`);
  };
};
const setCategory = payload => {
  return {
    type: actionTypes.setReportCategory,
    payload
  };
};
const sortDetails = (property, sortOrder, objects) => {
  const sortedReportDetails = objects.sort(dynamicSort(property, sortOrder));
  return {
    type: actionTypes.fetchReportDetails,
    payload: sortedReportDetails
  };
};
export const dynamicSort = (property, sortOrder) => {
  //   var sortOrder = 1;
  //   if (property[0] === "-") {
  //     sortOrder = -1;
  //     property = property.substr(1);
  //   }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};
export default {
  fetchSummary,
  setStartDate,
  setEndDate,
  show,
  setCategory,
  sortDetails
};
