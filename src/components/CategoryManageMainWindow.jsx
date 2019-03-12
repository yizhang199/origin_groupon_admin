import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import CategoryGird from "./CategoryGrid";
import CreateCategory from "./CreateCategory";
import UpdateCategory from "./UpdateCategory";
import { history } from "../history";

import "../css/CategoryManageMainWindow.css";

const CategoryManageMainWindow = () => {
  return (
    <div className="component-category-manage-main-window">
      <Router history={history}>
        <React.Fragment>
          <CategoryGird />
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/categories/create`}
              component={CreateCategory}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/categories/update/:category_id`}
              component={UpdateCategory}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/categories`}
              component={CreateCategory}
            />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default CategoryManageMainWindow;
