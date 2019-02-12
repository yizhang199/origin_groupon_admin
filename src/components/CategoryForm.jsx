import React from "react";
import { Field, reduxForm } from "redux-form";

import "../css/CategoryForm.css";
class CategoryForm extends React.Component {
  onSubmit = () => {
    this.props.onSubmit();
  };
  renderInput = ({ input, placeholder }) => {
    return (
      <input
        {...input}
        placeholder={placeholder}
        className="component-category-form__input"
      />
    );
  };
  render() {
    return (
      <div className="component-category-form">
        <form
          className="component-category-form__form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="chinese_name"
            component={this.renderInput}
            placeholder="请输入中文名"
          />
          <Field
            name="english_name"
            component={this.renderInput}
            placeholder="请输入英文名"
          />
          <button className="component-category-form__button">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.chinese_name) {
    errors.chinese_name = "您需要提供一个有效的中文名";
  }
  if (!formValues.english_name) {
    errors.english_name = "你需要提供一个有效的英文名";
  }
  return errors;
};

const reduxFormWrapper = reduxForm({ form: "categoryForm", validate })(
  CategoryForm
);

export default reduxFormWrapper;
