import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const renderInput = ({ label, placeholder, type, name }) => {
    return (
      <div className="form-field" key={`loginForm${name}`}>
        <label>
          <span>{label}</span>
          <input
            type={type}
            placeholder={placeholder}
            onChange={e => {
              setFormValue({ ...formValue, [name]: e.target.value });
            }}
            value={formValue[name]}
          />
        </label>
      </div>
    );
  };
  const [formValue, setFormValue] = useState({ phone: "", password: "" });

  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit(formValue);
  };

  const formFields = [
    {
      name: "phone",
      type: "text",
      label: `电话号码`,
      placeholder: `请输入电话号码或邮箱地址`
    },
    {
      name: "password",
      type: "password",
      label: `密码`,
      placeholder: `请输入密码`
    }
  ];

  return (
    <form onSubmit={handleOnSubmit}>
      {formFields.map(field => {
        return renderInput(field);
      })}
      <button>登录</button>
    </form>
  );
};

export default LoginForm;
