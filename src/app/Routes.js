import React from "react";
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

const Routes = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <LeftSideMenu />
        <Switch>
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/products`}
            userRole={`accessProducts`}
            component={CatalogMainWindow}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/categories`}
            userRole={`accessProducts`}
            component={CatalogMainWindow}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/options`}
            userRole={`accessProducts`}
            component={CatalogMainWindow}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/orders`}
            userRole={`accessOrders`}
            component={OrderManageMainWindow}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/shops`}
            component={ShopManageMainWindow}
            userRole={`accessSalesGroups`}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/charts`}
            userRole={`accessReports`}
            component={ChartManageMainWindow}
          />

          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/customer`}
            userRole={`accessAccounts`}
            component={UserManage}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/staff`}
            userRole={`accessAccounts`}
            component={UserManage}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/groupon`}
            component={Groupon}
            userRole={`accessSalesGroups`}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route path={`${process.env.PUBLIC_URL}/reject`} component={Reject} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default Routes;
