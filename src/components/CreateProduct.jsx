import React from "react";
import { connect } from "react-redux";

import { getProduct } from "../actions";
import ProductForm from "./ProductForm";

class CreateProduct extends React.Component {
  render() {
    return (
      <div className="component-eidt-product">
        <h1>Create Product</h1>
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
