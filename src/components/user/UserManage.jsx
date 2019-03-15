import React from "react";
import { Route, Router } from "react-router-dom";
import CustomerList from "./CustomerList";
import StaffList from "./StaffList";
import TopNav from "./TopNav";
import { history } from "../../history";

const CustomerManage = props => {
  return (
    <div className="component-customer-manage">
      <Router history={history}>
        <>
          <TopNav {...props} />
          <Route
            path={`${process.env.PUBLIC_URL}/customer`}
            component={CustomerList}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/staff`}
            component={StaffList}
          />
        </>
      </Router>
    </div>
  );
};

export default CustomerManage;
