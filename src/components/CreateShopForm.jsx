import React from "react";
import { connect } from "react-redux";

import { createShop } from "../actions";
import ShopForm from "./ShopForm";
class CreateShopForm extends React.Component {
  componentDidMount() {}

  onSubmit = formValues => {
    this.props.createShop(formValues);
  };
  render() {
    return (
      <div>
        Create Shop Form
        <ShopForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createShop }
)(CreateShopForm);
