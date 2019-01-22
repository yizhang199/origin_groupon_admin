import React from "react";
import { Field, reduxForm } from "redux-form";

class EditForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-field">
        <label className="form-label">{label}</label>
        <input type="text" {...input} className="form-input" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="form-error-message">{error}</div>;
    }
  };
  onSubmit = formValues => {
    console.log(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="edit-form"
      >
        <Field
          name="chinese_name"
          component={this.renderInput}
          label="中文名"
        />
        <Field
          name="english_name"
          component={this.renderInput}
          label="英文名"
        />
        <Field name="price" component={this.renderInput} label="单价" />
        <Field
          name="quantity"
          component={this.renderInput}
          label="设置MaxNumber"
        />
        {/* Todo::How to add options to a new product (user friendly) */}
        <Field name="option" component={this.renderInput} label="规格" />
        <button>Submit</button>
      </form>
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

export default reduxForm({ form: "eidtProduct", validate })(EditForm);
