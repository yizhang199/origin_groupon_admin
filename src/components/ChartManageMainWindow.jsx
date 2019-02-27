import React from "react";
import { Route, Router } from "react-router-dom";

import { Summary, DetailView } from "../components/reports/";
import { DateRanger } from "./shared/";

import { history } from "../history";

const ChartManageMainWindow = () => {
  return (
    <div className="component-chart-manage-main-window">
      <DateRanger />
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
