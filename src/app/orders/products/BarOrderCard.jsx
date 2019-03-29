import React from "react";

import "./sass/BarOrderCard.css";

const BarOrderCard = ({ product }) => {
  const productRemaining = product.stock_status_id - product.quantity;
  const cardStyle = {
    width: `${(productRemaining * 100) / product.stock_status_id}%`
  };
  const containerStyle = {
    backgroundColor: "#fff"
  };
  return (
    <div className="component-product-order-card" style={containerStyle}>
      <div className="content">
        <div className="name">{product.name}</div>
        <span className="quantity">
          <span className="quantity-sold">{productRemaining}</span>/
          <span className="quantity-max">{product.stock_status_id}</span>
        </span>
      </div>
      <div className="process-bar">
        <span className="bar" style={cardStyle} />
      </div>
    </div>
  );
};

export default BarOrderCard;
