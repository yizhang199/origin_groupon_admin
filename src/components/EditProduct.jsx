import React from "react";
import { connect } from "react-redux";

import { getProduct } from "../actions";
import ProductForm from "./ProductForm";

import { history } from "../history";
class EditProduct extends React.Component {
  componentDidMount() {
    // const id = history.match.param.id;
    // this.props.getProduct(id);
  }

  render() {
    return (
      <div className="component-eidt-product">
        <h1>Eidt Product</h1>
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
)(EditProduct);
