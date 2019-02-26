import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../history.js";

import { getProducts } from "../actions";

import ProductOrderList from "./ProductOrderList";
import CustomerOrderList from "./CustomerOrderList";
import StoreOrderList from "./StoreOrderList";
import OrderTopNav from "./OrderTopNav";

import "../css/OrderManageMainWindow.css";

class OrderManageMainWindow extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="component-order-manange-main-window">
        <Router history={history}>
          <React.Fragment>
            <OrderTopNav {...this.props} />
            <div className="main-window">
              <Switch>
                <Route path="/orders/products" component={ProductOrderList} />
                <Route path="/orders/customers" component={CustomerOrderList} />
                <Route path="/orders/stores" component={StoreOrderList} />
                <Route exact path="/orders/" component={ProductOrderList} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return { products };
};
export default connect(
  mapStateToProps,
  { getProducts }
)(OrderManageMainWindow);
