import React from "react";
import { Link } from "react-router-dom";

const LeftSideMenu = () => {
  return (
    <div className="left-side-menu">
      <div className="icon">
        <img src="favicon.ico" alt="" />
      </div>
      <div className="menu">
        <a className="item">
          <i className="material-icons">assignment</i>
          订单管理
        </a>
        <Link to={`/products`} className="item">
          <i className="material-icons">fastfood</i>
          商品管理
        </Link>
        <a className="item">
          <i className="material-icons">store_mall_directory</i>
          店面管理
        </a>
        <a className="item">
          <i className="material-icons">insert_chart_outlined</i>
          经营分析
        </a>
      </div>
    </div>
  );
};

export default LeftSideMenu;
