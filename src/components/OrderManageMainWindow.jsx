import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
        <Router>
          <React.Fragment>
            <TopNav />
            <Switch>
              <Route
                exact
                path="/orders/products"
                render={props => <ProductOrderList {...props} />}
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
