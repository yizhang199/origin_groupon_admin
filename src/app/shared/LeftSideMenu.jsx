import React from "react";
import { Link } from "react-router-dom";

import { history } from "../../_helpers";

class LeftSideMenu extends React.Component {
  state = { showControl: false };
  getClass = path => {
    const numberOfRootPath = process.env.PUBLIC_URL.length;
    const historyPath = history.location.pathname.substr(numberOfRootPath);
    const positionOfSecondSlash = historyPath.indexOf("/", 2);
    const compareString =
      positionOfSecondSlash === -1
        ? historyPath
        : historyPath.substring(0, positionOfSecondSlash);
    if (path === compareString) {
      return "component-left-side-menu__item active";
    } else {
      return "component-left-side-menu__item";
    }
  };

  renderControl = () => {
    if (!this.state.showControl) {
      return null;
    }
    return (
      <div className="control-pannel">
        <button
          onClick={() => {
            window.location.href = "http://guoli.com.au";
          }}
        >
          返回手机端
        </button>
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("guoli_groupon_user");
            window.location.reload();
          }}
        >
          登出
        </button>
      </div>
    );
  };
  render() {
    return (
      <div className="component-left-side-menu">
        <div className="component-left-side-menu__icon">
          <img
            onClick={() => {
              this.setState({ showControl: !this.state.showControl });
            }}
            src="favicon.ico"
            alt=""
          />
        </div>
        {this.renderControl()}
        <div className="component-left-side-menu__menu">
          <Link
            to={`${process.env.PUBLIC_URL}/orders`}
            className={this.getClass("/orders")}
          >
            <i className="material-icons">assignment</i>
            订单管理
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/products`}
            className={this.getClass("/products")}
          >
            <i className="material-icons">fastfood</i>
            商品管理
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/groupon`}
            className={this.getClass("/groupon")}
          >
            <i className="material-icons">store_mall_directory</i>
            团购管理
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/charts`}
            className={this.getClass("/charts")}
          >
            <i className="material-icons">insert_chart_outlined</i>
            经营分析
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/customer`}
            className={this.getClass("/customer")}
          >
            <i className="material-icons">supervisor_account</i>
            人员管理
          </Link>
        </div>
      </div>
    );
  }
}

export default LeftSideMenu;
