import React from "react";
import { connect } from "react-redux";

import { getProducts } from "../actions";
class ProductOrderList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  renderProducts = () => {
    return this.props.products.map(product => {
      return (
        <div
          key={`product${product.product_id}`}
          className="component-product-order-list__product-name"
        >
          {product.name}
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
