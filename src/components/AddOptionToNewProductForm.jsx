import React from "react";
import { connect } from "react-redux";

import { fetchOptions, setNewProductOptions } from "../actions";
import "../css/AddOptionToNewProductForm.css";

class AddOptionToNewProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productOptionId: "",
      optionName: "",
      productOptionValues: [],
      newProductOptionValues: []
    };
  }
  componentDidMount() {
    this.props.fetchOptions();
  }
  renderSelectInputOptions = () => {
    return this.props.options.map(ele => {
      return (
        <option
          value={ele.option_id}
          data-option-name={ele.name}
          key={`eleOption${ele.option_id}`}
        >
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
    this.setState({
      productOptionId: option_id,
      optionName: e.target[e.target.selectedIndex].dataset.optionName
    });
    this.props.options.map(option => {
      if (option.option_id === option_id) {
        this.setState({ productOptionValues: option.values });
      }
      return option;
    });
  };
  handleOptionValuesChange = e => {
    if (e.target.checked) {
      this.setState({
        newProductOptionValues: [
          ...this.state.newProductOptionValues,
          {
            option_value_id: e.target.value,
            option_value_name: e.target.dataset.optionValueName
          }
        ]
      });
    } else {
      this.setState({
        newProductOptionValues: this.state.newProductOptionValues.filter(
          element => element.option_value_id !== e.target.value
        )
      });
    }
  };
  renderOptionsJSX = () => {
    return (
      <div className="component-add-option-to-new-product-form__body__select-panel">
        <select
          className="component-add-option-to-new-product-form__selector"
          value={this.state.productOptionId}
          onChange={this.handleSelectChange}
        >
          {this.renderSelectInputOptions()}
        </select>
        <div className="component-add-option-to-new-product-form__body__option-values">
          {this.renderOptionValues()}
        </div>
      </div>
    );
  };
  renderOptionValues = () => {
    return this.state.productOptionValues.map(value => {
      return (
        <label key={`optionValue${value.option_value_id}`}>
          <input
            type="checkbox"
            value={value.option_value_id}
            data-option-value-name={value.name}
            onChange={this.handleOptionValuesChange}
          />
          <span>{value.name}</span>
        </label>
      );
    });
  };
  closeForm = () => {
    this.props.toggleAddOptionToNewProductForm();
  };
  saveOption = () => {
    const newOption = {
      option_id: this.state.productOptionId,
      option_name: this.state.optionName,
      values: this.state.newProductOptionValues
    };
    this.props.setNewProductOptions(newOption);
    this.props.toggleAddOptionToNewProductForm();
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