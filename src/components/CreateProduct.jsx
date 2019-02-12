import React from "react";
import { connect } from "react-redux";

import { getProduct, createNewProduct } from "../actions";
import ProductForm from "./ProductForm";
import "../css/CreateProduct.css";

class CreateProduct extends React.Component {
  onSubmit = () => {
    this.props.createNewProduct();
  };
  render() {
    return (
      <div className="component-create-product">
        <div className="component-create-product__title">添加新产品</div>
        <ProductForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => {
  return { product };
};

export default connect(
  mapStateToProps,
  { getProduct, createNewProduct }
)(CreateProduct);
