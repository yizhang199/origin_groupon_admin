import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

export const index = product_status => {
  return async function(dispatch) {
    const response = await kidsnParty.get("/products", {
      params: { language_id: 2, product_status }
    });

    dispatch({ type: types.getProducts, payload: response });
  };
};

export const show = () => {
  return async function(dispatch, id) {
    const response = await kidsnParty.get(`/product/${id}`);

    dispatch({ type: types.getProduct, payload: response.data });
  };
};

export default {
  index,
  show
};
