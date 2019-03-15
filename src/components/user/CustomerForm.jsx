import React from "react";
import { Field, reduxForm } from "redux-form";

const CustomerForm = ({ onSubmit, handleSubmit }) => {
  const renderInput = ({ label, input, type, placeholder }) => {
    if (type === "select") {
      return (
        <div className="form-field">
          <label>
            <span>{label}</span>
            <select {...input}>
              <option value={0}>active</option>
              <option value={1}>inactive</option>
            </select>
          </label>
        </div>
      );
    }
    return (
      <div className="form-field">
        <label>
          <span>{label}</span>
          <input {...input} type={type} placeholder={placeholder} />
        </label>
      </div>
    );
  };

  return (
    <form
      onClick={e => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        name="username"
        component={renderInput}
        type="text"
        label={`用户名`}
        placeholder={`请输入用户名`}
      />

      <Field
        name="phone"
        type="text"
        label={`电话`}
        component={renderInput}
        placeholder="请输入用户电话"
      />

      <Field
        name="email"
        type="text"
        label={`电子邮箱`}
        component={renderInput}
        placeholder="请输入用户电子邮箱"
      />
      <Field
        name="status"
        type="select"
        label={`用户状态`}
        component={renderInput}
        placeholder=""
      />

      <button>确认保存</button>
    </form>
  );
};

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
  form: "customerForm",
  validate,
  enableReinitialize: true
})(CustomerForm);

export default reduxFormWrapper;
