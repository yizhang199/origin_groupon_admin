import React from "react";
import { connect } from "react-redux";

import BarOrderCard from "./BarOrderCard";

const BarView = ({ products }) => {
  const renderProducts = () => {
    return products.map(productGroup => {
      return (
        <div
          className="product-group"
          key={`product${productGroup.category_id}`}
        >
          {productGroup.products.map(product => {
            return (
              <BarOrderCard
                key={`productCard${product.product_id}`}
                product={product}
              />
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="component-productorders__Bar-view">{renderProducts()}</div>
  );
};
const mapStateToProps = ({ products }) => {
  return { products };
};
export default connect(mapStateToProps)(BarView);
