import React from "react";
import { connect } from "react-redux";

const Product = ({ reportDetails }) => {
  return <div>{JSON.stringify(reportDetails[0])}</div>;
};

const mapStateToProps = ({ reportDetails }) => {
  return { reportDetails };
};

export default connect(mapStateToProps)(Product);
