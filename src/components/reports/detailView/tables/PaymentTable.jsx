import React from "react";
import { connect } from "react-redux";

const Payment = ({ reportDetails }) => {
  return (
    <div className="component-detail-view-table">
      {JSON.stringify(reportDetails[0])}
    </div>
  );
};

const mapStateToProps = ({ reportDetails }) => {
  return { reportDetails };
};

export default connect(mapStateToProps)(Payment);
