import React from "react";
import { connect } from "react-redux";

import StaffForm from "./StaffForm";

import { updateStaff } from "../../_actions";

const UpdateStaff = ({ updateStaff, selectedStaff, close }) => {
  const onSubmit = () => {
    updateStaff();
    close();
  };

  return (
    <div className="update-staff" onClick={close}>
      <StaffForm initialValues={selectedStaff} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = ({ selectedStaff }) => {
  return { selectedStaff };
};

export default connect(
  mapStateToProps,
  { updateStaff }
)(UpdateStaff);
