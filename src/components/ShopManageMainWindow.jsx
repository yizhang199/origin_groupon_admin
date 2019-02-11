import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import EditShopForm from "./EditShopForm";
import CreateShopForm from "./CreateShopForm";
import ShopList from "./ShopList";
import ShopTopNav from "./ShopTopNav";
import { history } from "../history";
import "../css/ShopManageMainWindow.css";

class ShopManageMainWindow extends React.Component {
  render() {
    return (
      <div className="shop-manage-main-window">
        <ShopTopNav />
        <div className="shop-manage-main-window__main-content">
          <ShopList />
          <Router history={history}>
            <Switch>
              <Route path={`/shops/:location_id`} component={EditShopForm} />
              <Route path={`/shops/:location_id`} component={CreateShopForm} />
              <Route path={`/shops`} component={CreateShopForm} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default ShopManageMainWindow;
