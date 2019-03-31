import React, { useContext } from "react";

import { userLogin } from "./hooks";
import { UserContext } from "../../_context";

import LoginForm from "./LoginForm";

const Login = () => {
  const context = useContext(UserContext);

  const onSubmit = ({ phone, password }) => {
    userLogin(phone, password, context.login);
  };

  return (
    <div className="login-page">
      <div className="header">果丽的团购控制台</div>
      <div className="body">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
