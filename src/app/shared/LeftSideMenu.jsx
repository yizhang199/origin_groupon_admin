import React, { useContext, useState } from "react";
import UserContext from "../../_context/user_context";
import ShopContext from "../../_context/shop_context";
import { Link } from "react-router-dom";

import { history } from "../../_helpers";

const LeftSideMenu = () => {
  const userContext = useContext(UserContext);
  const shopContex = useContext(ShopContext);
  console.log({ userContext, shopContex });

  const [showControlPanel, setShowControlPanel] = useState(false);

  const getClass = path => {
    const numberOfRootPath = process.env.PUBLIC_URL.length;
    const historyPath = history.location.pathname.substr(numberOfRootPath);
    const positionOfSecondSlash = historyPath.indexOf("/", 2);
    const compareString =
      positionOfSecondSlash === -1
        ? historyPath
        : historyPath.substring(0, positionOfSecondSlash);
    if (path === compareString) {
      return "component-left-side-menu__item active";
    } else {
      return "component-left-side-menu__item";
    }
  };

  const renderControl = () => {
    if (!showControlPanel) {
      return null;
    }
    return (
      <div className="control-pannel">
        <button
          onClick={() => {
            window.location.href = "http://guoli.com.au";
          }}
        >
          返回手机端
        </button>
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("guoli_groupon_user");
            window.location.reload();
          }}
        >
          登出
        </button>
      </div>
    );
  };

  return (
    <div className="component-left-side-menu">
      <div className="component-left-side-menu__icon">
        <img
          onClick={() => {
            setShowControlPanel(!showControlPanel);
          }}
          src="favicon.ico"
          alt=""
        />
      </div>
      {renderControl()}
      <div className="component-left-side-menu__menu">
        <Link
          to={`${process.env.PUBLIC_URL}/orders`}
          className={getClass("/orders")}
        >
          <i className="material-icons">assignment</i>
          订单管理
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/products`}
          className={getClass("/products")}
        >
          <i className="material-icons">fastfood</i>
          商品管理
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/groupon`}
          className={getClass("/groupon")}
        >
          <i className="material-icons">store_mall_directory</i>
          团购管理
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/charts`}
          className={getClass("/charts")}
        >
          <i className="material-icons">insert_chart_outlined</i>
          经营分析
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/customer`}
          className={getClass("/customer")}
        >
          <i className="material-icons">supervisor_account</i>
          人员管理
        </Link>
      </div>
    </div>
  );
};

export default LeftSideMenu;
