import React from "react";
import { Link } from "react-router-dom";

import "../css/OrderTopNav.css";
class OrderTopNav extends React.Component {
  render() {
    return (
      <div className="component-order-top-nav">
        <Link to="/orders/products">Product</Link>
        <Link to="/orders/customers">Customer</Link>
      </div>
    );
  }
}

export default OrderTopNav;
