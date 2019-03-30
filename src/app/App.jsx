import React from "react";
import { connect } from "react-redux";
import { checkLogin } from "../_actions";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../_helpers";

import { LeftSideMenu } from "./shared";
import { OrderManageMainWindow } from "./orders";
import { ChartManageMainWindow } from "./reports";
import { ShopManageMainWindow } from "./shops";
import { CatalogMainWindow } from "./catalog";
import { Groupon } from "./groupon";
import { UserManage } from "./user";
import { PrivateRoute, Reject } from "./shared";
import { Login } from "./auth";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.checkLogin();
  }
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <React.Fragment>
            <LeftSideMenu />
            <Switch>
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/products`}
                role={`accessProducts`}
                component={CatalogMainWindow}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/categories`}
                role={`accessProducts`}
                component={CatalogMainWindow}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/options`}
                role={`accessProducts`}
                component={CatalogMainWindow}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/orders`}
                role={`accessOrders`}
                component={OrderManageMainWindow}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/shops`}
                component={ShopManageMainWindow}
                role={`accessSalesGroups`}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/charts`}
                role={`accessReports`}
                component={ChartManageMainWindow}
              />

              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/customer`}
                role={`accessAccounts`}
                component={UserManage}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/staff`}
                role={`accessAccounts`}
                component={UserManage}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/groupon`}
                component={Groupon}
                role={`accessSalesGroups`}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reject`}
                component={Reject}
              />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { checkLogin }
)(App);
