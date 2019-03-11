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

export default {
  index
};
