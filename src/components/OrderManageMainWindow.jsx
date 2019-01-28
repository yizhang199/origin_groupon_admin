import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../history.js";

import { getProducts } from "../actions";
import ProductOrderList from "./ProductOrderList";
import CustomerOrderList from "./CustomerOrderList";
import TopNav from "./TopNav";
class OrderManageMainWindow extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="component-order-manange-main-window">
        <Router history={history}>
          <React.Fragment>
            <TopNav />
            <Switch>
              <Route
                exact
                path="/orders/products"
                Component={ProductOrderList}
              />
              <Route
                exact
                path="/orders/customers"
                render={props => <CustomerOrderList {...props} />}
              />
              <Route
                exact
                path="/orders/"
                render={props => <ProductOrderList {...props} />}
              />
            </Switch>
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
