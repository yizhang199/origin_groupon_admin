import React from "react";
import { connect } from "react-redux";
import { fetchOptions } from "../../../../_actions";
import OptionListItem from "./OptionListItem";
class OptionList extends React.Component {
  componentDidMount() {
    this.props.fetchOptions();
  }

  renderOptions = () => {
    if (!this.props.options) {
      return null;
    }
    return this.props.options.map(option => {
      return (
        <OptionListItem
          option={option}
          key={`optionListItem${option.option_id}`}
        />
      );
    });
  };

  render() {
    return <div className="component-option-list">{this.renderOptions()}</div>;
  }
}

const mapStateToProps = ({ options }) => {
  return { options };
};

export default connect(
  mapStateToProps,
  { fetchOptions }
)(OptionList);
