import React from "react";
import { connect } from "react-redux";

const TableView = () => {
  return <div>Table View Component</div>;
};

const mapStateToProps = ({ products }) => {
  return { products };
};

export default connect(mapStateToProps)(TableView);
