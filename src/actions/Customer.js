import types from "./actionTypes";
import kidsnparty from "../apis/kidsnParty";

const index = () => {
  // const headers = makeHeader;
  return async function(dispatch) {
    // const response = kidsnparty.get("users", {
    //   headers
    // });
    const response = await kidsnparty.get("users", {
      params: {
        user_group: "customer"
      }
    });
    dispatch({ type: types.fetchUsers, payload: response.data.users });
  };
};

const show = user_id => {
  return async function(dispatch) {
    const response = await kidsnparty.get(`user/${user_id}`);

    dispatch({ type: types.fetchCustomer, payload: response.data.user });
  };
};

const update = () => {
  return async function(dispatch, getState) {
    const { user_id } = getState().selectedCustomer;
    const requestBody = getState().form.customerForm.values;

    const response = await kidsnparty.put(`user/${user_id}`, requestBody);

    dispatch({ type: types.fetchUsers, payload: response.data.users });
  };
};

const sortDetails = (property, sortOrder, objects) => {
  const sortedList = objects.sort(dynamicSort(property, sortOrder));
  return {
    type: types.fetchUsers,
    payload: sortedList
  };
};
const dynamicSort = (property, sortOrder) => {
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};
const create = () => {
  return async function(dispatch, getState) {
    const requestBody = getState().form.customerForm.values;

    const response = await kidsnparty.post("user", requestBody);

    dispatch({ type: types.fetchUsers, payload: response.data.users });
  };
};
export default {
  index,
  show,
  create,
  update,
  sortDetails
};
