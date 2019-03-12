import React from "react";

const ProductOrderCard = ({ product }) => {
  const productRemaining = product.stock_status_id - product.quantity;
  const cardStyle = {
    width: `${(productRemaining * 100) / product.stock_status_id}%`
  };
  const containerStyle = {
    // backgroundImage: `url(${product.image})`
    backgroundColor: "#fff"
  };
  return (
    <div className="component-product-order-card" style={containerStyle}>
      <div className="component-product-order-card__content">
        <div className="component-product-order-card__name">{product.name}</div>
        <span className="component-product-order-card__quantity">
          <span className="component-product-order-card__quantity__sold">
            {productRemaining}
          </span>
          /
          <span className="component-product-order-card__quantity__max">
            {product.stock_status_id}
          </span>
        </span>
      </div>
      <div className="component-product-order-card__process-bar">
        <span className="component-product-order-card__bar" style={cardStyle} />
      </div>
    </div>
  );
};

export default ProductOrderCard;
