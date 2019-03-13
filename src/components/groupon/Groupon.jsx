import React from "react";
import { Router, Route } from "react-router-dom";

import SalesGroup from "./SalesGroup";
import StoreList from "./StoreList";

import { history } from "../../history";

const Groupon = () => {
  return (
    <div className="screen-groupon">
      <SalesGroup />
      <StoreList />
    </div>
  );
};

export default Groupon;
