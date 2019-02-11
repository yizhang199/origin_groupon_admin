import types from "./actionTypes";

import kidsnParty from "../apis/kidsnParty";
export const fetchShop = location_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/locations/${location_id}`);
    dispatch({
      type: types.fetchSingleShop,
      payload: response.data.shop
    });
  };
};

export const createNewShop = shop => {
  return async function(dispatch) {
    const response = await kidsnParty.post(`/locations`, shop);
    console.log("location: ", response.data.location);

    dispatch({
      type: "abc"
    });
  };
};
