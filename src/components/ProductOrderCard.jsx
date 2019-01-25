import React from "react";

import "../css/ProductOrderCard.css";

const ProductOrderCard = ({ product }) => {
  return (
    <div className="component-product-order-card">
      <div className="component-product-order-card__image-container">
        <img src={product.image} alt="" />
      </div>
      <div className="component-product-order-card__name">{product.name}</div>
      <div className="component-product-order-card__quantity">
        <span className="component-product-order-card__quantity__text">
          {product.quantity}/{product.stock_status_id}
        </span>
      </div>
    </div>
  );
};

export default ProductOrderCard;
