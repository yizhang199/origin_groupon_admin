import React from "react";
import { connect } from "react-redux";

import {
  updateShop,
  changeSelectedShop,
  handleDateChange
} from "../../actions";
import ShopForm from "./ShopForm";

class UpdateStore extends React.Component {
  onSubmit = formValues => {
    this.props.updateShop(formValues);
  };
  render() {
    if (!this.props.selectedShop.name) {
      return <div className="component-edit-shop-form">"loading..."</div>;
    }

    return (
      <div className="component-edit-shop-form">
        编辑店面信息
        <ShopForm
          shop={this.props.selectedShop}
          initialValues={this.props.selectedShop}
          handleDateChange={this.props.handleDateChange}
          onSubmit={this.onSubmit}
          button_label={`确认保存`}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ selectedShop }) => {
  return { selectedShop };
};

export default connect(
  mapStateToProps,
  { changeSelectedShop, updateShop, handleDateChange }
)(UpdateStore);
