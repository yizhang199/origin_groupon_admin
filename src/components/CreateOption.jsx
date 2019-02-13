import React from "react";
import { connect } from "react-redux";

import OptionForm from "./OptionForm";
import { createNewOption } from "../actions";

import "../css/CreateOption.css";

class CreateOption extends React.Component {
  onSubmit = input => {
    this.props.createNewOption(input);
  };
  render() {
    return (
      <div className="component-create-option">
        <div className="component-create-option__title">添加新规格</div>
        <OptionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createNewOption }
)(CreateOption);
