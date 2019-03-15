import React from "react";
import { Link } from "react-router-dom";

const TopNav = ({ location }) => {
  const path = location.pathname;
  const getClass = value => {
    if (value === path) {
      return `active`;
    }
    return ``;
  };
  return (
    <div className="top-nav">
      <Link
        to={`${process.env.PUBLIC_URL}/customer`}
        className={getClass("/customer")}
      >
        客户列表
      </Link>
      <Link
        to={`${process.env.PUBLIC_URL}/staff`}
        className={getClass("/staff")}
      >
        职员列表
      </Link>
    </div>
  );
};

export default TopNav;
