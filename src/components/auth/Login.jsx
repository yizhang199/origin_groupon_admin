import React from "react";
import { connect } from "react-redux";
import { userLogin, checkLogin } from "../../actions";
import LoginForm from "./LoginForm";
class Login extends React.Component {
  componentDidMount() {
    this.props.checkLogin();
  }
  onSubmit = () => {
    this.props.userLogin();
  };
  render() {
    return (
      <div className="login-page">
        <div className="header">果丽的团购控制台</div>
        <div className="body">
          <LoginForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { userLogin, checkLogin }
)(Login);
