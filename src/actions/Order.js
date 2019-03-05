import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

const show = order_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/orders/${order_id}`);

    dispatch({ type: types.selectOrder, payload: response.data.order });
  };
};

const update = () => {
  return async function(dispatch, getState) {
    const requestBody = getState().selectedOrder;
    const { order_id } = requestBody;
    const response = await kidsnParty.put(`/orders/${order_id}`, requestBody);
    dispatch({ type: types.updateOrder, payload: response.data });
  };
};

const patch = value => {
  return async function(dispatch, getState) {
    const { order_id } = getState().selectedOrder;
    const requestBody = { order_status_id: value };
    const response = await kidsnParty.patch(`/orders/${order_id}`, requestBody);

    dispatch({ type: types.updateOrder, payload: response.data });
  };
};
const marking = (order_id, checked) => {
  return async function(dispatch) {
    const value = checked ? 3 : 2;
    const requestBody = { order_status_id: value };
    const response = await kidsnParty.patch(`/orders/${order_id}`, requestBody);

    dispatch({ type: types.updateOrder, payload: response.data });
  };
};

const index = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`);
    dispatch({ type: types.getOrders, payload: response.data.orders });
  };
};

const onPageChange = pageNumber => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`, {
      params: {
        page: pageNumber
      }
    });
    dispatch({ type: types.getOrders, payload: response.data.orders });
  };
};
const fetchByStore = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`, {
      params: {
        method: "byStore"
      }
    });
    dispatch({ type: types.fetchOrdersByStore, payload: response.data.orders });
  };
};
const search = search_string => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`, {
      params: {
        search_string
      }
    });
    dispatch({ type: types.getOrders, payload: response.data.orders });
  };
};

const fetchbyProducts = () => {
  return async function(dispatch, getState) {
    const { startDate, endDate } = getState();
    const response = await kidsnParty.get(`/report`, {
      params: { startDate, endDate, report_category: "product" }
    });
    dispatch({
      type: types.fetchReportDetails,
      payload: response.data
    });
  };
};
export default {
  index,
  show,
  update,
  patch,
  marking,
  search,
  fetchbyProducts,
  onPageChange,
  fetchByStore
};
