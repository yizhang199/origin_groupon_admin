import React from "react";
import { connect } from "react-redux";

import SalesGroupForm from "./SalesGroupForm";

import { createSalesGroup } from "../../_actions";

const CreateSalesGroup = ({ createSalesGroup }) => {
  const onSubmit = () => {
    createSalesGroup();
  };

  return (
    <div className="sale-group">
      <h2>建团</h2>
      <SalesGroupForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  null,
  { createSalesGroup }
)(CreateSalesGroup);
