import React from "react";
import { connect } from "react-redux";

import { getProduct, updateProduct } from "../actions";
import ProductForm from "./ProductForm";

import "../css/UpdateProduct.css";

class EditProduct extends React.Component {
  componentDidMount() {
    if (!this.props.product.product_id) {
      const id = parseInt(this.props.match.params.product_id);
      this.props.getProduct(id);
    }
  }

  onSubmit = () => {
    const id = parseInt(this.props.match.params.product_id);
    this.props.updateProduct(id);
  };

  render() {
    if (!this.props.product.descriptions) {
      return <div>loading</div>;
    }
    return (
      <div className="component-eidt-product">
        <div className="component-edit-product__title">编辑产品信息</div>
        <ProductForm
          initialValues={{
            chinese_name: this.props.product.descriptions[1].name,
            english_name: this.props.product.descriptions[0].name,
            price: this.props.product.product.price,
            stock_status_id: this.props.product.product.stock_status_id,
            quantity: this.props.product.product.quantity
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => {
  return { product };
};

export default connect(
  mapStateToProps,
  { getProduct, updateProduct }
)(EditProduct);
