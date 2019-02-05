import React from "react";
import { connect } from "react-redux";

import { getOrders } from "../actions";
import CustomerOrderCard from "./CustomerOrderCard";

import "../css/CustomerOrderList.css";
class CustomerOrderList extends React.Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    return (
      <div className="component-customer-order-list">
        {this.props.orders.map((order, index) => {
          return (
            <CustomerOrderCard key={`customerOrder${index}`} order={order} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ orders }) => {
  return { orders };
};

export default connect(
  mapStateToProps,
  { getOrders }
)(CustomerOrderList);
