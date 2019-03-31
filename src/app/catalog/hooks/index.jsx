import { history } from "../../../_helpers";
import { kidsnparty } from "../../../_apis";

export const getProducts = async (params, getProducts) => {
  const response = await kidsnparty.get("/products", {
    params
  });

  getProducts(response.data);
};
