import React from "react";
import { connect } from "react-redux";

import OptionForm from "./OptionForm";
import { updateOption } from "../../../../_actions";

class CreateOption extends React.Component {
  onSubmit = () => {
    this.props.updateOption();
  };
  render() {
    return (
      <div className="component-update-option">
        <div className="component-update-option__title">编辑规格</div>
        <OptionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { updateOption }
)(CreateOption);
