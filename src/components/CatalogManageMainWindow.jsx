import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import CatalogTopNav from "./CatalogTopNav";
import { history } from "../history";
import ProductManageMainWindow from "./ProductManageMainWindow";
import CategoryManageMainWindow from "./CategoryManageMainWindow";
import OptionManageMainWindow from "./OptionManageMainWindow";

import "../css/CatalogManageMainWindow.css";
class CatalogManageMainWindow extends React.Component {
  render() {
    return (
      <div className="component-catalog-manage-main-window">
        <CatalogTopNav />
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
            <Route
              exact
              component={ProductManageMainWindow}
              path={`${process.env.PUBLIC_URL}/`}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default CatalogManageMainWindow;
