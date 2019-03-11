import types from "./actionTypes";
import kidsnparty from "../apis/kidsnParty";
// import { makeHeader } from "../helpers";

const index = () => {
  // const headers = makeHeader;
  return async function(dispatch) {
    // const response = kidsnparty.get("users", {
    //   headers
    // });
    const response = await kidsnparty.get("users");
    dispatch({ type: types.fetchUsers, payload: response.data.users });
  };
};

export default {
  index
};
