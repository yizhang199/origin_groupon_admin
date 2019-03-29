import React from "react";
import { connect } from "react-redux";
import { checkLogin } from "../actions";
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
                component={CatalogManageMainWindow}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/categories`}
                role={`accessProducts`}
                component={CatalogManageMainWindow}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/options`}
                role={`accessProducts`}
                component={CatalogManageMainWindow}
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
              <Route
                path={`${process.env.PUBLIC_URL}/example`}
                name="roben"
                component={Example}
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
