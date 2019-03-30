import React from "react";
import {
  ProductManageMainWindow,
  CategoryManageMainWindow,
  OptionManageMainWindow
} from "./subViews/";
import { Router, Route, Switch } from "react-router-dom";

import { history } from "../../_helpers";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          component={ProductManageMainWindow}
          path={`${process.env.PUBLIC_URL}/products`}
        />
        <Route
          component={CategoryManageMainWindow}
          path={`${process.env.PUBLIC_URL}/categories`}
        />
        <Route
          component={OptionManageMainWindow}
          path={`${process.env.PUBLIC_URL}/options`}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
