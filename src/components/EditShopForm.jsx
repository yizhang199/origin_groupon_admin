import React from "react";
import { connect } from "react-redux";

import { fetchSingleShop } from "../actions";
import ShopForm from "./ShopForm";

class EditShopForm extends React.Component {
  componentDidMount() {
    const location_id = this.props.match.params.location_id;

    this.props.fetchSingleShop(location_id);
  }
  onSubmit = formValues => {
    console.log("edit shop form onSubmit: ", formValues);
  };
  render() {
    console.log(this.props.selectedShop);
    return (
      <div>
        edit shop form
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
  return { selectedShop };
};

export default connect(
  mapStateToProps,
  { fetchSingleShop }
)(EditShopForm);
