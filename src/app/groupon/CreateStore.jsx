import React from "react";
import { connect } from "react-redux";
import { createShop, handleDateChange } from "../../_actions";
import ShopForm from "./ShopForm";

const CreateStore = ({
  setMode,
  selectedShop,
  createShop,
  handleDateChange
}) => {
  const onSubmit = () => {
    createShop();
  };

  return (
    <div className="create-store">
      <div className="sub-title">
        <span>创建新取货点</span>
        <i
          className="material-icons"
          onClick={() => {
            setMode("none");
          }}
        >
          clear
        </i>
      </div>
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
