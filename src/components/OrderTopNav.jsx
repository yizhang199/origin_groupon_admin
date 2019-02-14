import React from "react";
import { Link } from "react-router-dom";

import "../css/OrderTopNav.css";
class OrderTopNav extends React.Component {
  render() {
    return (
      <div className="component-order-top-nav">
        <Link to="/orders/products">产品团购进度</Link>
        <Link to="/orders/customers">用户团购订单</Link>
      </div>
    );
  }
}

export default OrderTopNav;
