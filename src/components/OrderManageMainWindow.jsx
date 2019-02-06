import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../history.js";

import { getProducts } from "../actions";

import ProductOrderList from "./ProductOrderList";
import CustomerOrderList from "./CustomerOrderList";
import OrderTopNav from "./OrderTopNav";

import "../css/OrderManageMainWindow.css";
import OrderDetail from "./OrderDetail.jsx";
class OrderManageMainWindow extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="component-order-manange-main-window">
        <Router history={history}>
          <React.Fragment>
            <OrderTopNav />
            <div className="main-window">
              <Switch>
                <Route
                  exact
                  path="/orders/products"
                  component={ProductOrderList}
                />
                <Route
                  exact
                  path="/orders/customers"
                  render={props => <CustomerOrderList {...props} />}
                />
                <Route
                  exact
                  path="/orders/customers/:order_id"
                  render={props => <OrderDetail {...props} />}
                />
                <Route
                  exact
                  path="/orders/"
                  render={props => <ProductOrderList {...props} />}
                />
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
