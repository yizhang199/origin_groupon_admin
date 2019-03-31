import React, { useState, useContext } from "react";
import { ProductContext } from "../../../../_context";
import { history } from "../../../../_helpers";
import { getProducts } from "../../hooks";

const SubMenu = () => {
  const [className, setClassName] = useState({
    activeProduct: "active",
    inactiveProduct: ""
  });

  const context = useContext(ProductContext);

  const changeProductStatus = productStatus => {
    switch (productStatus) {
      case 0:
        getProducts({ product_status: 0 }, context.getProducts);
        setClassName({ activeProduct: "active", inactiveProduct: "" });
        break;
      case 1:
        getProducts({ product_status: 1 }, context.getProducts);
        setClassName({ activeProduct: "", inactiveProduct: "active" });
        break;
      default:
        break;
    }
  };

  const handleInputChange = () => {};

  return (
    <div className="sub-menu">
      <div className="input-container">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="按商品名搜索"
        />
      </div>
      <div className="link-container">
        <span
          onClick={() => {
            changeProductStatus(0);
          }}
          className={className.activeProduct}
        >
          已上架商品
        </span>
        <span
          onClick={() => {
            changeProductStatus(1);
          }}
          className={className.inactiveProduct}
        >
          未上架商品
        </span>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            history.push(`${process.env.PUBLIC_URL}/products/create`);
          }}
        >
          新建商品
        </button>
      </div>
    </div>
  );
};

export default SubMenu;
