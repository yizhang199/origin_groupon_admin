import React from "react";
import { connect } from "react-redux";

import { getProduct } from "../actions";
import ProductForm from "./ProductForm";
import "../css/CreateProduct.css";

class CreateProduct extends React.Component {
  render() {
    return (
      <div className="component-create-product">
        <div className="component-create-product__title">Create Product</div>
        <ProductForm />
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => {
  return { product };
};

export default connect(
  mapStateToProps,
  { getProduct }
)(CreateProduct);
