import React from "react";
import { Link } from "react-router-dom";
class TopNav extends React.Component {
  render() {
    return (
      <div className="component-top-nav">
        <Link to="/orders/products">Product</Link>
        <Link to="/orders/customers">Customer</Link>
      </div>
    );
  }
}

export default TopNav;
