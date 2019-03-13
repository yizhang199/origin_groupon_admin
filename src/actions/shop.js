import types from "./actionTypes";

import kidsnParty from "../apis/kidsnParty";

export const index = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/locations`);
    dispatch({ type: types.getShops, payload: response.data.locations });
  };
};
export const fetchShop = location_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/locations/${location_id}`);
    dispatch({
      type: types.fetchSingleShop,
      payload: response.data.shop
    });
    // history.push(`${process.env.PUBLIC_URL}/shops/update/${location_id}`);
  };
};

const create = shop => {
  return async function(dispatch, getState) {
    const requestBody = {
      ...getState().form.shopForm.values,
      open: getState().selectedShop.open
    };
    const response = await kidsnParty.post(`/locations`, requestBody);

    dispatch({
      type: types.getShops,
      payload: response.data.locations
    });
  };
};

const update = formValues => {
  const { location_id, name, address, open } = formValues;
  return async function(dispatch) {
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

const patch = shop => {
  return {
    type: types.fetchSingleShop,
    payload: shop
  };
};

const handleDateChange = newDate => {
  return {
    type: types.shopOpenDateChange,
    payload: newDate
  };
};

export default {
  index,
  fetchShop,
  create,
  update,
  patch,
  handleDateChange
};
