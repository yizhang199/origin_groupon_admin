import React from "react";
import { connect } from "react-redux";

import { switchProductStatus, getProduct } from "../actions";
import { baseUrl } from "../apis/kidsnParty";

const ProductCard = ({ product, switchProductStatus, getProduct }) => {
  const renderChangeStatusButton = ({ status }) => {
    if (status === 1) {
      return <button onClick={activeProduct}>上架</button>;
    } else {
      return <button onClick={inactiveProduct}>下架</button>;
    }
  };

  const activeProduct = () => {
    switchProductStatus({ ...product, status: 0 });
  };

  const editProduct = () => {
    getProduct(product.product_id);
  };

  const inactiveProduct = () => {
    switchProductStatus({ ...product, status: 1 });
  };
  return (
    <div className="product-card" data-test="component-product-card">
      <div className="product-card-header">
        <div className="product-image-container">
          <img src={`${product.image}`} alt="" />
        </div>
        <div className="product-info">
          <div className="product-name" data-test="product-name">
            {product.name}
          </div>
          <div className="product-quantity">{product.quantity}</div>
          <div className="product-price">{product.price}</div>
        </div>
      </div>
      <div className="product-card-footer">
        {renderChangeStatusButton(product)}
        <button onClick={editProduct} className="active">
          编辑
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { switchProductStatus, getProduct }
)(ProductCard);
