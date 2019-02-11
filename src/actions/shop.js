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
