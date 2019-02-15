import React from "react";
import { Link } from "react-router-dom";

import "../css/OrderTopNav.css";
class OrderTopNav extends React.Component {
  getClass = value => {
    const path = this.props.location.pathname;
    if (value === path) {
      return "active";
    }
    return "";
  };
  render() {
    return (
      <div className="component-order-top-nav">
        <Link
          className={this.getClass("/orders/products")}
          to="/orders/products"
        >
          产品团购进度
        </Link>
        <Link
          className={this.getClass("/orders/customers")}
          to="/orders/customers"
        >
          用户团购订单
        </Link>
      </div>
    );
  }
}

export default OrderTopNav;
