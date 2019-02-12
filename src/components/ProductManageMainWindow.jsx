import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import ProductList from "./ProductsList";
import EditProduct from "./EditProduct";
import CreateProduct from "./CreateProduct";
import { history } from "../history";
import { connect } from "react-redux";
import { getProducts } from "../actions";

import "../css/ProductManageMainWindow.css";

class ProductManageMainWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { product_status: 0 };
  }
  componentDidMount() {
    this.props.getProducts(this.state.product_status);
  }
  changeProductStatus = e => {
    const content = e.target.innerText;
    if (content === "已上架商品") {
      this.props.getProducts(0);
    } else {
      this.props.getProducts(1);
    }
  };

  render() {
    return (
      <div className="product-manage-main-window">
        <Router history={history}>
          <React.Fragment>
            <div className="top-menu">
              <a className="active" href="#">
                商品管理
              </a>
              <a href="#">分类管理</a>
            </div>
            <div className="sub-menu">
              <div className="input-container">
                <input type="text" placeholder="按商品名搜索" />
              </div>

              <div className="link-container">
                <span onClick={this.changeProductStatus} className="active">
                  已上架商品
                </span>
                <span onClick={this.changeProductStatus}>未上架商品</span>
              </div>
              <div className="button-container">
                <button
                  onClick={() => {
                    history.push("/products/create");
                  }}
                >
                  新建商品
                </button>
              </div>
            </div>

            <div style={{ display: `flex` }}>
              <ProductList />
              <Switch>
                <Route exact path="/products/edit" component={EditProduct} />
                <Route
                  exact
                  path="/products/create"
                  component={CreateProduct}
                />
                <Route exact path="/products/" component={CreateProduct} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { getProducts }
)(ProductManageMainWindow);
