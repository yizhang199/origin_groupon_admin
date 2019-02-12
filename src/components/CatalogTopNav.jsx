import React from "react";
import { Link } from "react-router-dom";
import { history } from "../history";
import "../css/CatalogTopNav.css";

const CatalogTopNav = () => {
  const getClassName = value => {
    const pathName = history.location.pathname;
    if (pathName.includes(value)) {
      return "component-catalog-top-menu__link-active";
    } else {
      return "component-catalog-top-menu__link";
    }
  };
  return (
    <div className="component-catalog-top-menu">
      <Link className={getClassName("/products")} to="/products">
        商品管理
      </Link>
      <Link className={getClassName("/categories")} to="/categories">
        分类管理
      </Link>
    </div>
  );
};

export default CatalogTopNav;
