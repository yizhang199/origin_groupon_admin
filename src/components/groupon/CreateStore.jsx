import React from "react";
import { connect } from "react-redux";
import { createShop, handleDateChange } from "../../actions";
import ShopForm from "./ShopForm";

const CreateStore = ({ selectedShop, createShop, handleDateChange }) => {
  const onSubmit = () => {
    createShop();
  };

  return (
    <div className="create-store">
      <h2>创建新取货地点</h2>
      <ShopForm
        onSubmit={onSubmit}
        handleDateChange={handleDateChange}
        button_label={`确认添加`}
        shop={selectedShop}
      />
    </div>
  );
};

const mapStateToProps = ({ selectedShop }) => {
  return { selectedShop };
};

export default connect(
  mapStateToProps,
  { createShop, handleDateChange }
)(CreateStore);
