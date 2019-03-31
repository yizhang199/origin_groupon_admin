import { history } from "../../../_helpers";
import { kidsnparty } from "../../../_apis";

export const getProducts = async (params, getProducts) => {
  const response = await kidsnparty.get("/products", {
    params
  });

  getProducts(response.data);
};

export const switchProductStatus = async (product, getProducts) => {
  const response = await kidsnparty.patch(`/products/${product.product_id}`, {
    product
  });

  getProducts(response.data);
};
export const getProduct = async (id, getProduct) => {
  const response = await kidsnparty.get(`/products/${id}`);
  getProduct(response.data);
  history.push(`${process.env.PUBLIC_URL}/products/edit/${id}`);
};

export const updateProduct = async (
  id,
  file,
  formValues,
  isGroupon,
  getProducts
) => {
  const product = formValues;
  const headers = { language_id: 2 };
  const response = await kidsnparty.put(
    `/products/${id}`,
    {
      product,
      // category,
      options: [],
      file,
      isGroupon
    },
    {
      headers
    }
  );
  getProducts(response.data);
};
