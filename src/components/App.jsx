import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LeftSideMenu from "./LeftSideMenu";
import ProductManageMainWindow from "./ProductManageMainWindow";
import OrderManageMainWindow from "./OrderManageMainWindow";
import ChartManageMainWindow from "./ChartManageMainWindow";
import ShopManageMainWindow from "./ShopManageMainWindow";

const App = () => {
  return (
    <div className="app">
      <Router>
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
            exact
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
