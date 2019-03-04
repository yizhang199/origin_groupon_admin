import React from "react";
import { connect } from "react-redux";

import { createShop, handleDateChange } from "../actions";
import ShopForm from "./ShopForm";
class CreateShopForm extends React.Component {
  componentDidMount() {}

  onSubmit = formValues => {
    this.props.createShop(formValues);
  };
  render() {
    return (
      <div>
        创建新店面
        <ShopForm
          onSubmit={this.onSubmit}
          handleDateChange={this.props.handleDateChange}
          button_label={`确认添加`}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createShop, handleDateChange }
)(CreateShopForm);
