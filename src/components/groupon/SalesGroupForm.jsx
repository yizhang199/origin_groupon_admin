import React from "react";
import { Field, reduxForm } from "redux-form";

class SalesGroupForm extends React.Component {
  onSubmit = () => {
    this.props.onSubmit();
  };
  renderInput = ({ label, input, type, placeholder }) => {
    return (
      <label>
        <span>{label}</span>
        <input {...input} type={type} placeholder={placeholder} />
      </label>
    );
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-field">
          <Field
            name="name"
            component={this.renderInput}
            type="text"
            label={`团名`}
            placeholder={`请填写本次打折团的名称`}
          />
        </div>
        <div className="form-field">
          <Field
            name="start_date"
            type="date"
            label={`起始日期`}
            component={this.renderInput}
            placeholder="请输入起始日期"
          />
        </div>
        <div className="form-field">
          <Field
            name="end_date"
            type="date"
            label={`截止日期`}
            component={this.renderInput}
            placeholder="请输入截止日期"
          />
        </div>

        <button>确认保存</button>
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

const reduxFormWrapper = reduxForm({
  form: "salesGroupForm",
  validate,
  enableReinitialize: true
})(SalesGroupForm);

export default reduxFormWrapper;
