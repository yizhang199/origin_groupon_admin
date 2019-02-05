import React from "react";

import ShopForm from "./ShopForm";
import ShopList from "./ShopList";
import ShopTopNav from "./ShopTopNav";
import "../css/ShopManageMainWindow.css";

class ShopManageMainWindow extends React.Component {
  render() {
    return (
      <div className="shop-manage-main-window">
        <ShopTopNav />
        <div className="shop-manage-main-window__main-content">
          <ShopList />
          <ShopForm />
        </div>
      </div>
    );
  }
}

export default ShopManageMainWindow;
