import types from "./actionTypes";

import kidsnParty from "../apis/kidsnParty";
import { history } from "../history";
export const fetchShop = location_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/locations/${location_id}`);
    dispatch({
      type: types.fetchSingleShop,
      payload: response.data.shop
    });
    history.push(`/shops/update/${location_id}`);
  };
};

const create = shop => {
  return async function(dispatch) {
    const response = await kidsnParty.post(`/locations`, shop);

    dispatch({
      type: "abc"
    });
  };
};

const update = formValues => {
  const { location_id, name, address, open } = formValues;
  console.log("ok");
  return async function(dispatch) {
    console.log("worked");
    const response = await kidsnParty.put(
      `/locations/${formValues.location_id}`,
      {
        location_id,
        name,
        address,
        open
      }
    );

    dispatch({ type: types.getShops, payload: response.data.locations });
  };
};

export default {
  fetchShop,
  create,
  update
};
