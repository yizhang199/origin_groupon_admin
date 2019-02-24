import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../history";

import LeftSideMenu from "./LeftSideMenu";
import OrderManageMainWindow from "./OrderManageMainWindow";
import ChartManageMainWindow from "./ChartManageMainWindow";
import ShopManageMainWindow from "./ShopManageMainWindow";
import Example from "./demo/propsFunctionalComponent";
import CatalogManageMainWindow from "./CatalogManageMainWindow";

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <React.Fragment>
          <LeftSideMenu />

          <Switch>
            <Route
              path="/products"
              render={props => <CatalogManageMainWindow {...props} />}
            />
            <Route path="/categories" component={CatalogManageMainWindow} />
            <Route path="/options" component={CatalogManageMainWindow} />
            <Route
              path="/orders"
              render={props => <OrderManageMainWindow {...props} />}
            />
            <Route
              path="/shops"
              render={props => <ShopManageMainWindow {...props} />}
            />
            <Route
              path="/charts"
              render={props => <ChartManageMainWindow {...props} />}
            />
            <Route exact path="/example" name="roben" component={Example} />
            <Route
              exact
              path="/"
              render={props => <CatalogManageMainWindow {...props} />}
            />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
