import React from "react";
import { connect } from "react-redux";

import { fetchSingleShop, updateShop } from "../actions";
import ShopForm from "./ShopForm";

class EditShopForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.location_id;
    this.props.fetchSingleShop(id);
  }
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
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ selectedShop }) => {
  return { selectedShop, updateShop };
};

export default connect(
  mapStateToProps,
  { fetchSingleShop }
)(EditShopForm);
