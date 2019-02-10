import React from "react";
import { connect } from "react-redux";

import { fetchOptions, setNewProductOptions } from "../actions";
import "../css/AddOptionToNewProductForm.css";

class AddOptionToNewProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productOptionId: "", productOptionValues: [] };
  }
  componentDidMount() {
    this.props.fetchOptions();
  }
  renderSelectInputOptions = () => {
    return this.props.options.map(ele => {
      return (
        <option value={ele.option_id} key={`eleOption${ele.option_id}`}>
          {ele.name}
        </option>
      );
    });
  };

  handleSelectChange = e => {
    if (e.target.value === "new") {
      this.setState({ isShowAddOptionForm: true });
      return;
    }

    const option_id = parseInt(e.target.value);
    this.setState({ productOptionId: option_id });
    this.props.options.map(option => {
      if (option.option_id === option_id) {
        this.setState({ productOptionValues: option.values });
      }
    });
  };
  renderOptionsJSX = () => {
    console.log("state: ", this.state);
    return (
      <div>
        <select
          value={this.state.productOptionId}
          onChange={this.handleSelectChange}
        >
          {this.renderSelectInputOptions()}
        </select>

        {this.renderOptionValues()}
      </div>
    );
  };
  renderOptionValues = () => {
    return this.state.productOptionValues.map(value => {
      return (
        <label key={`optionValue${value.option_value_id}`}>
          <input type="checkbox" />
          <span>{value.name}</span>
        </label>
      );
    });
  };
  closeForm = () => {
    this.props.toggleAddOptionToNewProductForm();
  };
  saveOption = () => {
    const newOption = {};
    this.props.setNewProductOptions(newOption);
  };
  render() {
    return (
      <div
        onClick={this.closeForm}
        className="component-add-option-to-new-product-form"
      >
        <div
          className="component-add-option-to-new-product-form__body"
          onClick={e => e.stopPropagation()}
        >
          {this.renderOptionsJSX()}
          <span
            className="component-add-option-to-new-product-form__save-button"
            onClick={this.saveOption}
          >
            SAVE
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ options }) => {
  return { options };
};

export default connect(
  mapStateToProps,
  { fetchOptions, setNewProductOptions }
)(AddOptionToNewProductForm);
