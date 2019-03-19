import React from "react";
import { connect } from "react-redux";

import { createStaff } from "../../actions";

import StaffForm from "./StaffForm";

const CreateStaff = ({ close }) => {
  const onSubmit = () => {
    createStaff();
  };

  return (
    <div className="create-staff" onClick={close}>
      <StaffForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  null,
  { createStaff }
)(CreateStaff);
