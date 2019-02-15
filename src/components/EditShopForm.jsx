import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchSingleShop, updateShop, changeSelectedShop } from "../actions";
import ShopForm from "./ShopForm";

class EditShopForm extends React.Component {
  componentDidMount() {
    console.log("component did mount EditShopForm");

    const id = this.props.match.params.location_id;
    this.props.fetchSingleShop(id);
  }
  onSubmit = formValues => {
    this.props.updateShop(formValues);
  };
  changeSelectedShop = shop => {
    this.props.changeSelectedShop(shop);
  };
  render() {
    if (!this.props.selectedShop.name) {
      return <div className="component-edit-shop-form">"loading..."</div>;
    }

    return (
      <div className="component-edit-shop-form">
        编辑店面信息
        <ShopForm
          changeSelectedShop={this.changeSelectedShop}
          shop={this.props.selectedShop}
          initialValues={this.props.selectedShop}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ selectedShop }) => {
  return { selectedShop };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSingleShop, changeSelectedShop, updateShop }
  )(EditShopForm)
);
