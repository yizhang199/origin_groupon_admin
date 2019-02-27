import React from "react";
import { Link } from "react-router-dom";

import "../css/ShopTopNav.css";
class ShopTopNav extends React.Component {
  getClassName = pathName => {
    const path = this.props.location.pathname;

    return path.includes(pathName)
      ? "component-shop-top-nav__anchor active"
      : "component-shop-top-nav__anchor";
  };

  render() {
    return (
      <div className="component-shop-top-nav">
        <Link
          to={`${process.env.PUBLIC_URL}/shops/create`}
          className={this.getClassName("/shops/create")}
        >
          创建新店面
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/shops/update`}
          className={this.getClassName("/shops/update")}
        >
          编辑店面信息
        </Link>
      </div>
    );
  }
}

export default ShopTopNav;
