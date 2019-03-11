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
        user_group: "staff"
      }
    });
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
  index,
  sortDetails
};
