import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" data-test="component-product-card">
      <div className="product-card-header">
        <div className="product-image-container">
          <img src={`images/products/default.jpeg`} alt="" />
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
        <button>下架</button>
        <button className="active">编辑</button>
      </div>
    </div>
  );
};

export default ProductCard;
