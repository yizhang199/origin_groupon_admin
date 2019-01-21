import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LeftSideMenu from "./LeftSideMenu";
import ProductManageMainWindow from "./ProductManageMainWindow";

const App = () => {
  return (
    <div className="app">
      <Router>
        <React.Fragment>
          <LeftSideMenu />
          <Switch>
            <Route
              exact
              path="/products"
              render={props => <ProductManageMainWindow {...props} />}
            />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
