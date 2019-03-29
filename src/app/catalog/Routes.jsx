import React from "react";
import {
  ProductManageMainWindow,
  CategoryManageMainWindow,
  OptionManageMainWindow
} from "./SubViews/";
import { Router, Route, Switch } from "react-router-dom";

import { history } from "../../history";

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
