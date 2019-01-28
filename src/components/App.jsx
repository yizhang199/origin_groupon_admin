import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../history";

import LeftSideMenu from "./LeftSideMenu";
import ProductManageMainWindow from "./ProductManageMainWindow";
import OrderManageMainWindow from "./OrderManageMainWindow";
import ChartManageMainWindow from "./ChartManageMainWindow";
import ShopManageMainWindow from "./ShopManageMainWindow";

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <React.Fragment>
          <LeftSideMenu />
          <Switch>
            <Route
              exact
              path="/products"
              render={props => <ProductManageMainWindow {...props} />}
            />
          </Switch>
          <Route
            path="/orders"
            render={props => <OrderManageMainWindow {...props} />}
          />
          <Route
            exact
            path="/shops"
            render={props => <ShopManageMainWindow {...props} />}
          />
          <Route
            exact
            path="/charts"
            render={props => <ChartManageMainWindow {...props} />}
          />
          <Route
            exact
            path="/"
            render={props => <ProductManageMainWindow {...props} />}
          />
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
