import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import CatalogTopNav from "./CatalogTopNav";
import { history } from "../history";
import ProductManageMainWindow from "./ProductManageMainWindow";
import CategoryManageMainWindow from "./CategoryManageMainWindow";
class CatalogManageMainWindow extends React.Component {
  render() {
    return (
      <div className="component-catalog-manage-main-window">
        <CatalogTopNav />
        <Router history={history}>
          <Switch>
            <Route component={ProductManageMainWindow} path="/products" />
            <Route component={CategoryManageMainWindow} path="/categories" />
            <Route exact component={ProductManageMainWindow} path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default CatalogManageMainWindow;
