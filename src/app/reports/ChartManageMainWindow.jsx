import React from "react";
import { Route, Router } from "react-router-dom";

import { DetailView } from "./detailView";
import { Summary } from "./summary";
import { SalesGroupSelector } from "../shared";

import { history } from "../../_helpers";

const ChartManageMainWindow = () => {
  return (
    <div className="component-chart-manage-main-window">
      <SalesGroupSelector />
      <Router history={history}>
        <>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/charts`}
            component={Summary}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/charts/:report_category`}
            component={DetailView}
          />
        </>
      </Router>
    </div>
  );
};

export default ChartManageMainWindow;
