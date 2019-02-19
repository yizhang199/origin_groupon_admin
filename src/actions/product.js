import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";
import { history } from "../history";

const index = product_status => {
  return async function(dispatch) {
    const response = await kidsnParty.get("/products", {
      params: { language_id: 2, product_status }
    });

    dispatch({ type: types.getProducts, payload: response.data });
  };
};

const show = id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/products/${id}`);

    dispatch({ type: types.getProduct, payload: response.data });
    history.push(`/products/edit/${id}`);
  };
};

const update = product_id => {
  return async function(dispatch, getState) {
    const product = getState().form.productForm.values;
    const { options, category } = getState().newProduct;
    const response = await kidsnParty.put(`/products/${product_id}`, {
      product,
      category,
      options
    });
    dispatch({ type: types.getProducts, payload: response.data });
  };
};
const switchProductStatus = product => {
  return async function(dispatch) {
    const response = await kidsnParty.patch(`/products/${product.product_id}`, {
      product
    });

    dispatch({ type: types.getProducts, payload: response.data });
  };
};

const create = () => {
  return async function(dispatch, getState) {
    const product = getState().form.productForm.values;
    const { options, category } = getState().newProduct;
    const response = await kidsnParty.post("/products", {
      product,
      category,
      options
    });

    dispatch({ type: types.getProducts, payload: response.data.products });
    history.push("/");
  };
};

const removeOption = option_id => {
  return { type: types.removeOption, payload: parseInt(option_id) };
};

const search = (value, product_status) => {
  return async function(dispatch) {
    const response = await kidsnParty.get("products", {
      params: { language_id: 2, product_status, search_string: value }
    });

    dispatch({ type: types.getProducts, payload: response.data });
  };
};
export default {
  index,
  show,
  update,
  switchProductStatus,
  create,
  removeOption,
  search
};
