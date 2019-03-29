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
    history.push(`${process.env.PUBLIC_URL}/products/edit/${id}`);
  };
};

const update = (product_id, file, isGroupon) => {
  return async function(dispatch, getState) {
    const product = getState().form.productForm.values;
    const { options, category } = getState().newProduct;
    // How To:: add post headers for axios
    const headers = { language_id: 2 };
    const response = await kidsnParty.put(
      `/products/${product_id}`,
      {
        product,
        category,
        options,
        file,
        isGroupon
      },
      {
        headers
      }
    );
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

const create = (file, isGroupon) => {
  return async function(dispatch, getState) {
    const product = getState().form.productForm.values;
    const { options, category } = getState().newProduct;
    const response = await kidsnParty.post("/products", {
      product,
      isGroupon,
      category,
      options,
      file
    });

    dispatch({ type: types.getProducts, payload: response.data.products });
    history.push(`${process.env.PUBLIC_URL}/products`);
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

const setImage = value => {
  return {
    type: types.setProductImage,
    payload: value
  };
};
export default {
  index,
  show,
  update,
  setImage,
  switchProductStatus,
  create,
  removeOption,
  search
};
