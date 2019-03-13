import React from "react";
import { Router, Route } from "react-router-dom";

import SalesGroup from "./SalesGroup";
import Store from "./Store";

import { history } from "../../history";

const Groupon = () => {
  return (
    <div className="screen-groupon">
      <SalesGroup />
      <Store />
    </div>
  );
};

export default Groupon;
