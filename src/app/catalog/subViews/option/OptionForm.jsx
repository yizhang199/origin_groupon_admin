import React from "react";
import { Field, reduxForm } from "redux-form";

class OptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { option_type: "radio", option_values: [] };
  }

  onSubmit = () => {
    this.props.onSubmit({
      type: this.state.option_type,
      option_values: this.state.option_values
    });
  };

  renderInput = ({ input, placeholder }) => {
    return (
      <input {...input} placeholder={placeholder} className="form-input" />
    );
  };

  handleSelectChange = e => {
    this.setState({ option_type: e.target.value });
  };

  handleTextInputChange = e => {
    const i = parseInt(e.target.dataset.index);
    const language = e.target.dataset.language;
    if (language === "cn") {
      this.setState({
        option_values: this.state.option_values.map((ele, index) =>
          index === i ? { ...ele, chinese_name: e.target.value } : ele
        )
      });
    } else {
      this.setState({
        option_values: this.state.option_values.map((ele, index) =>
          index === i ? { ...ele, english_name: e.target.value } : ele
        )
      });
    }
  };
  renderOptionValues = () => {
    return this.state.option_values.map((ele, index) => {
      return (
        <div
          className="component-option-form__option-value-group"
          key={`optionValue${index}`}
        >
          <input
            type="text"
            value={ele.chinese_name}
            data-index={index}
            data-language={"cn"}
            placeholder={"请输入中文名"}
            onChange={this.handleTextInputChange}
            className="component-option-form__option-value-group__input"
          />
          <input
            type="text"
            value={ele.english_name}
            data-index={index}
            data-language={"en"}
            placeholder={"请输入英文名"}
            onChange={this.handleTextInputChange}
            className="component-option-form__option-value-group__input"
          />
        </div>
      );
    });
  };

  addNewRow = () => {
    this.setState({
      option_values: [
        ...this.state.option_values,
        { chinese_name: "", english_name: "" }
      ]
    });
  };
  render() {
    return (
      <div className="component-option-form">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="chinese_name"
            placeholder="规格中文名"
            component={this.renderInput}
          />
          <Field
            name="english_name"
            placeholder="规格英文名"
            component={this.renderInput}
          />
          <select
            value={this.state.option_type}
            onChange={this.handleSelectChange}
            className="form-select"
          >
            <option value="radio">单选</option>
            <option value="checkbox">多选</option>
          </select>
          <span
            className="component-option-form__add-new-row"
            onClick={this.addNewRow}
          >
            添加规格的可选值
          </span>
          {this.renderOptionValues()}
          <button className="component-option-form__button">确认保存</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "optionForm" })(OptionForm);
