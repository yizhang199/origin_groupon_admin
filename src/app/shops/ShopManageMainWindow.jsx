import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import EditShopForm from "./form/EditShopForm";
import CreateShopForm from "./form/CreateShopForm";
import ShopList from "./ShopList";
import ShopTopNav from "./ShopTopNav";
import { history } from "../../_helpers";

class ShopManageMainWindow extends React.Component {
  render() {
    return (
      <div className="shop-manage-main-window">
        <ShopTopNav {...this.props} />
        <div className="shop-manage-main-window__main-content">
          <ShopList />
          <Router history={history}>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/shops/update/:location_id`}
                component={EditShopForm}
              />
              <Route
                exact
                patch={`${process.env.PUBLIC_URL}/shops/create`}
                component={CreateShopForm}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/shops`}
                component={CreateShopForm}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default ShopManageMainWindow;
