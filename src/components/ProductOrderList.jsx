import React from "react";
import { connect } from "react-redux";

import { getProducts } from "../actions";
import ProductOrderCard from "./ProductOrderCard";
class ProductOrderList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  renderProducts = () => {
    return this.props.products.map(productGroup => {
      return (
        <div key={`product${productGroup.category_id}`}>
          {productGroup.products.map(product => {
            return (
              <ProductOrderCard
                key={`productCard${product.product_id}`}
                product={product}
              />
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="component-product-order-list">
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductOrderList);
