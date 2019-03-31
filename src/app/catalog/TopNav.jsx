import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../_helpers";

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
      <Link
        className={getClassName("/products")}
        to={`${process.env.PUBLIC_URL}/products`}
      >
        商品管理
      </Link>
      <Link
        className={getClassName("/categories")}
        to={`${process.env.PUBLIC_URL}/categories`}
      >
        分类管理
      </Link>
    </div>
  );
};

export default CatalogTopNav;
