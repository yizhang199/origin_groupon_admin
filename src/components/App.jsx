import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../history";

import LeftSideMenu from "./LeftSideMenu";
import OrderManageMainWindow from "./OrderManageMainWindow";
import ChartManageMainWindow from "./ChartManageMainWindow";
import ShopManageMainWindow from "./ShopManageMainWindow";
import Example from "./demo/propsFunctionalComponent";
import CatalogManageMainWindow from "./CatalogManageMainWindow";
import { Groupon } from "./groupon";
import { UserManage } from "./user";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <React.Fragment>
          <LeftSideMenu />

          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/products`}
              render={props => <CatalogManageMainWindow {...props} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/categories`}
              component={CatalogManageMainWindow}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/options`}
              component={CatalogManageMainWindow}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/orders`}
              render={props => <OrderManageMainWindow {...props} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/shops`}
              render={props => <ShopManageMainWindow {...props} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/charts`}
              render={props => <ChartManageMainWindow {...props} />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/example`}
              name="roben"
              component={Example}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/customer`}
              component={UserManage}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/staff`}
              component={UserManage}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/groupon`}
              component={Groupon}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              render={props => <CatalogManageMainWindow {...props} />}
            />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
