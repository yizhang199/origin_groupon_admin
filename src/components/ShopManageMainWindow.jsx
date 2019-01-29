import React from "react";

import ShopForm from "./ShopForm";
import ShopList from "./ShopList";
import TopNav from "./TopNav";
import "../css/ShopManageMainWindow.css";

class ShopManageMainWindow extends React.Component {
  render() {
    return (
      <div className="shop-manage-main-window">
        <TopNav />
        <div className="shop-manage-main-window__main-content">
          <ShopList />
          <ShopForm />
        </div>
      </div>
    );
  }
}

export default ShopManageMainWindow;
