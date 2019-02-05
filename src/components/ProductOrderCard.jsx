import React from "react";

import "../css/ProductOrderCard.css";

const ProductOrderCard = ({ product }) => {
  const productRemaining = product.stock_status_id - product.quantity;
  const cardStyle = {
    width: `${(productRemaining * 100) / product.stock_status_id}%`
  };
  const containerStyle = {
    backgroundImage: `url(${product.image})`
  };
  return (
    <div className="component-product-order-card" style={containerStyle}>
      <div className="component-product-order-card__name">{product.name}</div>

      <div className="component-product-order-card__process-bar">
        <span className="component-product-order-card__bar" style={cardStyle} />
        <span className="component-product-order-card__quantity-container">
          <span className="component-product-order-card__quantity">
            {productRemaining}/{product.stock_status_id}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductOrderCard;
