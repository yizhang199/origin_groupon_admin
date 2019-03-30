import types from "./actionTypes";
import { kidsnparty } from "../_apis";

const index = () => {
  // const headers = makeHeader;
  return async function(dispatch) {
    // const response = kidsnparty.get("users", {
    //   headers
    // });
    const response = await kidsnparty.get("users", {
      params: {
        user_group: "staff"
      }
    });
    dispatch({ type: types.fetchUsers, payload: response.data.users });
  };
};
const show = user_id => {
  return async function(dispatch) {
    const response = await kidsnparty.get(`user/${user_id}`, {
      params: {
        user_group: "staff"
      }
    });

    dispatch({ type: types.fetchStaff, payload: response.data.user });
  };
};

const create = () => {
  return async function(dispatch, getState) {
    const requestBody = {
      ...getState().form.staffForm.values,
      user_group: "staff"
    };

    const response = await kidsnparty.post("users", requestBody);

    dispatch({ type: types.fetchUsers, payload: response.data.users });
  };
};

const update = () => {
  return async function(dispatch, getState) {
    const { user_id } = getState().selectedStaff;
    const requestBody = {
      ...getState().form.staffForm.values,
      user_group: "staff"
    };

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
export const dynamicSort = (property, sortOrder) => {
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

export default {
  show,
  index,
  create,
  update,
  sortDetails
};
