import React from "react";

import "../css/ProductOrderCard.css";

const ProductOrderCard = ({ product }) => {
  const cardStyle = {
    width: `${(product.quantity * 100) / product.stock_status_id}%`
  };
  return (
    <div className="component-product-order-card">
      <div className="component-product-order-card__info">
        <div className="component-product-order-card__image-container">
          <img src={product.image} alt="" />
        </div>
        <div className="component-product-order-card__name">{product.name}</div>
      </div>
      <div className="component-product-order-card__process-bar">
        <span className="component-product-order-card__bar" style={cardStyle} />
        <span className="component-product-order-card__quantity">
          {product.quantity}/{product.stock_status_id}
        </span>
      </div>
    </div>
  );
};

export default ProductOrderCard;
