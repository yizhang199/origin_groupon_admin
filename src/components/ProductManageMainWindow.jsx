import React from "react";

import ProductList from "./ProductsList";
import ControlPanel from "./ControlPanel";

const ProductManageMainWindow = () => {
  return (
    <div className="product-manage-main-window">
      <div className="top-menu">
        <a className="active" href="">
          商品管理
        </a>
        <a href="">分类管理</a>
      </div>
      <div className="sub-menu">
        <div className="button-container">
          <button>新建商品</button>
        </div>
        <div className="link-container">
          <a className="active" href="">
            已上架商品
          </a>
          <a href="">未上架商品</a>
        </div>
        <div className="input-container">
          <input type="text" placeholder="按商品名搜索" />
        </div>
      </div>
      <ProductList />
      <ControlPanel />
    </div>
  );
};

export default ProductManageMainWindow;
