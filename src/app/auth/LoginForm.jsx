import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = ({ handleSubmit, onSubmit }) => {
  const renderInput = ({ input, label, placeholder, type }) => {
    return (
      <div className="form-field">
        <label>
          <span>{label}</span>
          <input type={type} {...input} placeholder={placeholder} />
        </label>
      </div>
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="phone"
        type="text"
        component={renderInput}
        label={`电话号码`}
        placeholder={`请输入电话号码或邮箱地址`}
      />
      <Field
        name="password"
        type="password"
        component={renderInput}
        label={`密码`}
        placeholder={`请输入密码`}
      />
      <button>登录</button>
    </form>
  );
};

export default reduxForm({ form: "loginForm" })(LoginForm);
