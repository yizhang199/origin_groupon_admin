import React, { useContext, useEffect } from "react";
import { getProduct, updateProduct } from "../../../hooks";
import { ProductContext } from "../_context";
import ProductForm from "./ProductForm";

const EditProduct = ({ match }) => {
  const context = useContext(ProductContext);
  const id = parseInt(match.params.product_id);
  const product = context.selectedProduct;
  useEffect(() => {
    if (!product.descriptions) {
      getProduct(id, context.getProduct);
    }
  }, [context.products]);

  const onSubmit = (file, formValues, isGroupon) => {
    const id = parseInt(match.params.product_id);
    updateProduct(id, file, formValues, isGroupon, context.getProducts);
  };

  if (!product.descriptions) {
    return <div>loading...</div>;
  }

  return (
    <div className="component-eidt-product">
      <div className="component-edit-product__title">编辑产品信息</div>
      <ProductForm
        onSubmit={onSubmit}
        // setSelectProductImage={setProductImage}
        image={product.product.image}
      />
    </div>
  );
};

export default EditProduct;
