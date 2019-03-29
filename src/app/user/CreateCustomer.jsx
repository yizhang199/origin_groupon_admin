import React from "react";
import { connect } from "react-redux";

import { createCustomer } from "../../actions";
import CustomerForm from "./CustomerForm";

const CreateCustomer = ({ createCustomer, close }) => {
  const onSubmit = () => {
    createCustomer();
    close();
  };

  return (
    <div className="create-customer" onClick={close}>
      <CustomerForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  null,
  { createCustomer }
)(CreateCustomer);
