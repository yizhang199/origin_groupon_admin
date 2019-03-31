import React, { useEffect, useContext } from "react";
import { Router, Route, Switch } from "react-router-dom";

import ProductList from "./form/ProductsList";
import EditProduct from "./form/EditProduct";
import CreateProduct from "./form/CreateProduct";
import { history } from "../../../../_helpers";
import SubMenu from "./SubMenu";
import { ProductContext } from "./_context";
import { getProducts } from "../../hooks";

const ProductManageMainWindow = () => {
  const context = useContext(ProductContext);

  useEffect(() => {
    getProducts({}, context.getProducts);
  }, []);

  // const handleInputChange = e => {
  //   const value = e.target.value;
  //   this.props.searchByName(value, this.state.product_status);
  // };

  return (
    <div className="product-manage-main-window">
      <Router history={history}>
        <React.Fragment>
          <SubMenu />
          <div style={{ display: `flex` }}>
            <ProductList />
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/edit/:product_id`}
                component={EditProduct}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/products/create`}
                component={CreateProduct}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default ProductManageMainWindow;
