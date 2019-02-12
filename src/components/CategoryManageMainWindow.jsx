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
            <Route path="/categories/create" component={CreateCategory} />
            <Route path="/categories/update" component={UpdateCategory} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default CategoryManageMainWindow;
